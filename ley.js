// Módulo para manejar los datos de la ley
const LawDataModule = (function() {
    let leyData = null;
    let loaded = false;

    // Cargar los datos del JSON
    async function loadLawData() {
        try {
            const response = await fetch('ley.json');
            if (!response.ok) throw new Error('Error al cargar ley.json');
            
            leyData = await response.json();
            loaded = true;
            console.log("Datos de la ley cargados correctamente");
            return leyData;
        } catch (error) {
            console.error("Error al cargar los datos:", error);
            throw error;
        }
    }

    // Normalizar números de artículo
    function normalizeArticleNumber(number) {
        return number.toString()
            .replace(/Artículo\s*/i, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    // Buscar contenido de artículo
    function getArticleContent(articleNumber) {
        if (!loaded) return "<p>Los datos de la ley aún se están cargando...</p>";
        
        const normalizedNumber = normalizeArticleNumber(articleNumber);
        
        // Buscar en la estructura de datos
        for (const titulo of leyData.titulos) {
            for (const capitulo of titulo.capitulos) {
                if (!capitulo.articulos || !Array.isArray(capitulo.articulos)) continue;
                
                for (const articulo of capitulo.articulos) {
                    // Manejar tanto objetos como strings en los artículos
                    if (typeof articulo === 'object' && articulo.numero) {
                        const articuloNormalized = normalizeArticleNumber(articulo.numero);
                        if (articuloNormalized === normalizedNumber) {
                            return articulo.contenido || 
                                   `<div class="article-content">
                                        <h3>Artículo ${articulo.numero}</h3>
                                        <p>Contenido no disponible para este artículo.</p>
                                    </div>`;
                        }
                    } else if (typeof articulo === 'string') {
                        const articuloNormalized = normalizeArticleNumber(articulo);
                        if (articuloNormalized === normalizedNumber) {
                            return `<div class="article-content">
                                    <h3>${articulo}</h3>
                                    <p>Contenido detallado no disponible en el JSON.</p>
                                    </div>`;
                        }
                    }
                }
            }
        }
        
        return `<div class="article-not-found">
                    <p>No se encontró el Artículo ${articleNumber}</p>
                    <p>Por favor verifica el número e intenta nuevamente.</p>
                </div>`;
    }

    // Obtener todos los artículos de un capítulo
    function getArticlesByChapter(chapterName) {
        if (!loaded) return [];
        
        for (const titulo of leyData.titulos) {
            for (const capitulo of titulo.capitulos) {
                if (capitulo.nombre.includes(chapterName)) {
                    return capitulo.articulos || [];
                }
            }
        }
        return [];
    }

    // Verificar si un capítulo está derogado
    function isChapterDerogated(chapterName) {
        if (!loaded) return false;
        
        for (const titulo of leyData.titulos) {
            for (const capitulo of titulo.capitulos) {
                if (capitulo.nombre.includes(chapterName)) {
                    return capitulo.derogado || false;
                }
            }
        }
        return false;
    }

    return {
        loadLawData,
        getArticleContent,
        getArticlesByChapter,
        isChapterDerogated,
        get isLoaded() { return loaded; },
        get data() { return leyData; }
    };
})();

// Cargar los datos al iniciar
LawDataModule.loadLawData().catch(console.error);

// Exponer al ámbito global
window.LawData = LawDataModule;