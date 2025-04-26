// Ley 19587 - Ley de Higiene y Seguridad en el Trabajo
const ley = {
    descripcion: "Decreto Reglamentario 351/79 sobre condiciones de higiene y seguridad en el trabajo.",
    titulos: [
        {
            nombre: "TÍTULO I: Disposiciones Generales",
            capitulos: [
                { nombre: "Capítulo 1: Establecimientos", articulos: Array.from({length: 7}, (_, i) => `Artículo ${i + 1}`) }
            ]
        },
        {
            nombre: "TÍTULO II: Prestaciones de Medicina y de Higiene y de Seguridad en el Trabajo",
            capitulos: [
                { nombre: "Capítulo 2: Servicios", derogado: true },
                { nombre: "Capítulo 3: Servicio de Medicina del Trabajo", derogado: true },
                { nombre: "Capítulo 4: Servicio de Higiene y Seguridad en el Trabajo", derogado: true }
            ]
        },
        {
            nombre: "TÍTULO III: Características Constructivas de los Establecimientos",
            capitulos: [
                { nombre: "Capítulo 5: Proyecto, instalación, ampliación...", articulos: Array.from({length: 15}, (_, i) => `Artículo ${42 + i}`) },
                { nombre: "Capítulo 6: Provisión de agua potable", articulos: ["Artículo 57", "Artículo 58"] },
                { nombre: "Capítulo 7: Desagües industriales", articulos: ["Artículo 59"] }
            ]
        },
        {
            nombre: "TÍTULO IV: Condiciones de Higiene en los Ambientes Laborales",
            capitulos: [
                { nombre: "Capítulo 8: Carga térmica", articulos: ["Artículo 60"] },
                { nombre: "Capítulo 9: Contaminación ambiental", articulos: ["Artículo 61"] },
                { nombre: "Capítulo 10: Radiaciones", articulos: ["Artículo 62", "Artículo 63"] },
                { nombre: "Capítulo 11: Ventilación", articulos: Array.from({length: 7}, (_, i) => `Artículo ${64 + i}`) },
                { nombre: "Capítulo 12: Iluminación y color", articulos: Array.from({length: 14}, (_, i) => `Artículo ${71 + i}`) },
                { nombre: "Capítulo 13: Ruidos y vibraciones", articulos: Array.from({length: 10}, (_, i) => `Artículo ${85 + i}`) }
            ]
        },
        {
            nombre: "TÍTULO V: De la Seguridad en los Establecimientos",
            capitulos: [
                { nombre: "Capítulo 14: Instalaciones eléctricas", articulos: Array.from({length: 8}, (_, i) => `Artículo ${95 + i}`) },
                { 
                    nombre: "Capítulo 15: Máquinas y herramientas", 
                    articulos: [
                        ...Array.from({length: 7}, (_, i) => `Artículo ${103 + i}`), // Artículos 103-109
                        { subtitulo: "Herramientas" }, // Subtítulo antes del 110
                        ...Array.from({length: 4}, (_, i) => `Artículo ${110 + i}`), // Artículos 110-113
                        { subtitulo: "Aparatos para izar" }, // Subtítulo antes del 114
                        ...Array.from({length: 8}, (_, i) => `Artículo ${114 + i}`), // Artículos 114-121
                        { subtitulo: "Aparejos para izar" }, // Subtítulo antes del 122
                        ...Array.from({length: 15}, (_, i) => `Artículo ${122 + i}`), // Artículos 122-136
                        { subtitulo: "Ascensores y Monto" }, // Subtítulo antes del 137
                        "Artículo 137"
                    ] 
                },
                { nombre: "Capítulo 16: Aparatos que puedan desarrollar presión interna", articulos: Array.from({length: 7}, (_, i) => `Artículo ${138 + i}`) },
                { nombre: "Capítulo 17: Trabajos con riesgos especiales", articulos: Array.from({length: 15}, (_, i) => `Artículo ${145 + i}`) },
                { nombre: "Capítulo 18: Protección contra incendios", articulos: Array.from({length: 28}, (_, i) => `Artículo ${160 + i}`) }
            ]
        },
        {
            nombre: "TÍTULO VI: Protección Personal del Trabajador",
            capitulos: [
                { nombre: "Capítulo 19: Protección personal del trabajador", articulos: Array.from({length: 16}, (_, i) => `Artículo ${188 + i}`) }
            ]
        },
        {
            nombre: "TÍTULO VII: Selección y Capacitación del Personal",
            capitulos: [
                { nombre: "Capítulo 20: Selección de personal", articulos: Array.from({length: 4}, (_, i) => `Artículo ${204 + i}`) },
                { nombre: "Capítulo 21: Capacitación", articulos: Array.from({length: 7}, (_, i) => `Artículo ${208 + i}`) }
            ]
        },
        {
            nombre: "TÍTULO VIII: Estadísticas de Accidentes y Enfermedades del Trabajo",
            capitulos: [
                { nombre: "Capítulo 22: Registros e información", derogado: true }
            ]
        },
        {
            nombre: "TÍTULO IX: Plazos, Modificaciones y Sanciones",
            capitulos: [
                { nombre: "Capítulo 23: Plazos, modificaciones y sanciones", articulos: ["Artículo 227", "Artículo 228", "Artículo 229"] },
                { nombre: "Capítulo 24: Sanciones", articulos: ["Artículo 230", "Artículo 231", "Artículo 232"] }
            ]
        }
    ],
    anexos: [
        { nombre: "ANEXO II: Carga Térmica", complementa: "Capítulo 8 del Título IV" },
        { nombre: "ANEXO III: Contaminación Ambiental", complementa: "Capítulo 9 del Título IV" },
        { nombre: "ANEXO IV: Iluminación y Color", complementa: "Capítulo 12 del Título IV" },
        { nombre: "ANEXO V: Ruidos y Vibraciones", complementa: "Capítulo 13 del Título IV" },
        { nombre: "ANEXO VI: Instalaciones Eléctricas", complementa: "Capítulo 14 del Título V" },
        { nombre: "ANEXO VII: Protección contra Incendios", complementa: "Capítulo 18 del Título V" },
        { nombre: "ANEXO VIII (Derogado)", complementa: "Capítulo 22 del Título VIII", derogado: true }
    ]
};

document.addEventListener('DOMContentLoaded', async function() {
    // Esperar a que se carguen los datos de la ley
    if (!window.LawData.isLoaded) {
        await window.LawData.loadLawData();
    }

    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <div class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Funciones para manejar el modal
    function openModal(content) {
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evitar scroll
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }

    // Eventos para cerrar el modal
    modal.querySelector('.close-btn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Cargar la estructura de la ley
    const contenedorLey = document.getElementById('contenedor-ley');
    const contenedorAnexos = document.getElementById('contenedor-anexos');
    const leyData = window.LawData.data;

    // Función para crear elementos de artículo o subtítulo
    function createArticleElement(item) {
        if (item.subtitulo) {
            // Crear elemento para subtítulo
            const h4 = document.createElement('h4');
            h4.className = 'subtitulo';
            h4.textContent = item.subtitulo;
            return h4;
        }

        // Crear elemento para artículo normal
        const p = document.createElement('p');
        p.className = 'articulo';
        
        const articleText = typeof item === 'string' ? item : `Artículo ${item.numero}`;
        const articleNumber = typeof item === 'string' ? 
            item.replace('Artículo ', '').trim() : 
            item.numero.toString();
        
        p.textContent = articleText;
        
        p.addEventListener('click', () => {
            const content = window.LawData.getArticleContent(articleNumber);
            openModal(content);
        });
        
        return p;
    }

    // Cargar títulos y capítulos
    leyData.titulos.forEach(titulo => {
        const divTitulo = document.createElement('div');
        divTitulo.className = 'titulo';
        divTitulo.innerHTML = `<strong>${titulo.nombre}</strong>`;

        titulo.capitulos.forEach(cap => {
            const divCap = document.createElement('div');
            divCap.className = 'capitulo';

            const flecha = document.createElement('span');
            flecha.className = 'flecha';
            flecha.textContent = '▶';

            const textoCap = document.createElement('span');
            textoCap.textContent = cap.nombre;

            if (cap.derogado) {
                const spanDerogado = document.createElement('span');
                spanDerogado.className = 'derogado';
                spanDerogado.textContent = ' (Derogado)';
                textoCap.appendChild(spanDerogado);
            }

            divCap.appendChild(flecha);
            divCap.appendChild(textoCap);

            const divArticulos = document.createElement('div');
            divArticulos.className = 'articulos';

            if (cap.articulos) {
                cap.articulos.forEach(art => {
                    divArticulos.appendChild(createArticleElement(art));
                });
            }

            divCap.addEventListener('click', () => {
                const visible = divArticulos.style.display === 'block';
                divArticulos.style.display = visible ? 'none' : 'block';
                divCap.classList.toggle('abierto', !visible);
            });

            divTitulo.appendChild(divCap);
            divTitulo.appendChild(divArticulos);
        });

        contenedorLey.appendChild(divTitulo);
    });

    // Cargar anexos
    leyData.anexos.forEach(anexo => {
        const divAnexo = document.createElement('div');
        divAnexo.className = 'anexo';
        divAnexo.innerHTML = `<strong>${anexo.nombre}</strong> - Complementa: ${anexo.complementa}`;
        if (anexo.derogado) {
            divAnexo.innerHTML += ` <span class='derogado'>(Derogado)</span>`;
        }
        contenedorAnexos.appendChild(divAnexo);
    });
});