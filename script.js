let docentesFiltrados = [...docentesData]; 

const docentesGrid = document.getElementById('docentes-grid');
const noResults = document.getElementById('no-results');

// Elementos de detalle y navegación
const docenteDetalleSection = document.getElementById('docente-detalle');
const closeDetailBtn = document.getElementById('close-detail'); 

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    mostrarDocentes();
    // Usa delegación de eventos para manejar clics en las tarjetas dentro del grid
    docentesGrid.addEventListener('click', manejarDetalle); 
    closeDetailBtn.addEventListener('click', cerrarDetalle);
});

// --- FUNCIONES PRINCIPALES ---

function mostrarDocentes() {
    docentesFiltrados = docentesData; 
    
    if (docentesFiltrados.length === 0) {
        docentesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    docentesGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    docentesGrid.innerHTML = docentesFiltrados.map(docente => `
        <a href="#docente-${docente.id}" 
            class="docente-card" 
            aria-label="Ver perfil completo de ${docente.nombre}"
            data-docente-id="${docente.id}"> 
            
            <div class="docente-header">
                <img src="${docente.imagen}" alt="Fotografía de ${docente.nombre}" class="docente-avatar" loading="lazy">
                <div class="docente-info">
                    <h3>${docente.nombre}</h3>
                    <div class="docente-profesion">${docente.profesion}</div>
                    </div>
            </div>
            <div class="docente-body">
                <div class="docente-estudios">
                    <h4><i class="fas fa-graduation-cap"></i> Estudios</h4>
                    <ul class="estudios-list">
                        ${docente.estudios.map(estudio => `<li>${estudio}</li>`).join('')}
                    </ul>
                </div>
                
                </div>
        </a>
    `).join('');
}

function manejarDetalle(e) {
    const card = e.target.closest('.docente-card');
    if (card) {
        e.preventDefault(); 
        
        const docenteId = parseInt(card.dataset.docenteId);
        // Usa .find() para obtener el docente de los datos originales
        const docente = docentesData.find(d => d.id === docenteId); 
        
        if (docente) {
            renderizarDetalle(docente);
            document.querySelector('.main').style.display = 'none';
            docenteDetalleSection.style.display = 'block';
            window.scrollTo(0, 0);
        }
    }
}

// --- FUNCIÓN CLAVE: RENDERIZA EL DETALLE ---
function renderizarDetalle(docente) {
    const detalleContent = document.getElementById('detalle-content');
    
    // Generar lista de publicaciones relevantes
    const publicacionesRelevantesHTML = docente.publicacionesRelevantes && docente.publicacionesRelevantes.length > 0 ? 
        `<ul class="publicaciones-relevantes-list">
            ${docente.publicacionesRelevantes.map(pub => `
                <li>
                    <strong>[${pub.anio}]</strong> ${pub.titulo} 
                </li>
            `).join('')}
        </ul>` : '<p>Sin publicaciones relevantes listadas.</p>';

    const profesionPrincipalHTML = `<p class="detalle-profesion">${docente.profesion}</p>`;
    
    // 1. Sección de Datos Adicionales (Full Width)
    const datosAdicionalesHTML = docente.datosAdicionales ? `
        <section class="detalle-seccion detalle-seccion-full-width">
            <h3><i class="fas fa-info-circle"></i> Datos Relevantes</h3>
            <p class="docente-datos-adicionales">${docente.datosAdicionales}</p>
        </section>
    ` : '';

    const estudiosHTML = docente.estudios.map(estudio => `<li>${estudio}</li>`).join('');

    detalleContent.innerHTML = `
        <div class="detalle-header-wrapper">
            <img src="${docente.imagen}" alt="Fotografía de ${docente.nombre}" class="detalle-avatar">
            <div class="detalle-info-principal">
                <h2>${docente.nombre}</h2>
                ${profesionPrincipalHTML}
                </div>
        </div>

        <div class="detalle-cuerpo">
            
            <div class="detalle-columna detalle-columna-unica">
                <section class="detalle-seccion">
                    <h3><i class="fas fa-user-circle"></i> Semblanza</h3>
                    <p class="docente-biografia">${docente.biografia || 'Información biográfica no disponible.'}</p>
                </section>
            </div>
            
            <div class="detalle-columna">
                <section class="detalle-seccion">
                    <h3><i class="fas fa-graduation-cap"></i> Formación Académica</h3>
                    <ul class="estudios-list">
                        ${estudiosHTML}
                    </ul>
                </section>
            </div>
        </div>
        ${datosAdicionalesHTML} 

        <section class="detalle-seccion detalle-seccion-full-width">
            <h3><i class="fas fa-book-reader"></i> Publicaciones Más Relevantes</h3>
            ${publicacionesRelevantesHTML}
        </section>
    `;
}

function cerrarDetalle() {
    document.querySelector('.main').style.display = 'block';
    docenteDetalleSection.style.display = 'none';
    window.location.hash = ''; 
    window.scrollTo(0, 0); 
}