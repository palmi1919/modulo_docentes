// script.js

// Variables globales
// Se mantiene la data, pero las estadísticas y filtros serán ignorados.
let docentesFiltrados = [...docentesData]; 

// Elementos del DOM 
const docentesGrid = document.getElementById('docentes-grid');
const noResults = document.getElementById('no-results');

// Elementos de detalle y navegación
const docenteDetalleSection = document.getElementById('docente-detalle');
const closeDetailBtn = document.getElementById('close-detail');

// Elementos de estadísticas: **(Se mantienen las variables, pero las funciones de actualización se eliminan)**
// const totalDocentesEl = document.getElementById('total-docentes');
// const conLibrosEl = document.getElementById('con-libros');
// const conRevistasEl = document.getElementById('con-revistas');
// const conDoctoradoEl = document.getElementById('con-doctorado'); 
// const soloMaestriaEl = document.getElementById('solo-maestria'); 

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    mostrarDocentes();
    // La llamada a actualizarEstadisticas() se elimina para quitar la funcionalidad.
    
    // Event listeners para la funcionalidad de detalle
    docentesGrid.addEventListener('click', manejarDetalle);
    closeDetailBtn.addEventListener('click', cerrarDetalle);
});

// Mostrar docentes en el grid
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
                    <div class="docente-especialidad">${docente.especialidad}</div>
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

// Manejar clic en tarjeta y mostrar detalle
function manejarDetalle(e) {
    const card = e.target.closest('.docente-card');
    if (card) {
        e.preventDefault(); 
        
        const docenteId = parseInt(card.dataset.docenteId);
        const docente = docentesData.find(d => d.id === docenteId);
        
        if (docente) {
            renderizarDetalle(docente);
            document.querySelector('.main').style.display = 'none';
            docenteDetalleSection.style.display = 'block';
            window.scrollTo(0, 0);
        }
    }
}

// Generar y mostrar el HTML detallado (ELIMINANDO DATOS ADICIONALES, NIVELES Y PUBLICACIONES DE LA SECCIÓN)
function renderizarDetalle(docente) {
    const detalleContent = document.getElementById('detalle-content');
    
    // Generar lista de publicaciones relevantes 
    const publicacionesRelevantesHTML = docente.publicacionesRelevantes && docente.publicacionesRelevantes.length > 0 ? 
        `<ul class="publicaciones-relevantes-list">
            ${docente.publicacionesRelevantes.map(pub => `
                <li>
                    <strong>[${pub.anio}]</strong> ${pub.titulo} 
                    <span class="publicacion-fuente"> (${pub.fuente}, ${pub.tipo})</span>
                </li>
            `).join('')}
        </ul>` : '<p>Sin publicaciones relevantes listadas.</p>';

    const profesionPrincipalHTML = `<p class="detalle-profesion">${docente.profesion}</p>`;
    
    // NOTA: La sección de Datos Adicionales (y la lógica asociada) se elimina.
    // NOTA: La sección de Niveles de Enseñanza se elimina.

    detalleContent.innerHTML = `
        <div class="detalle-header-wrapper">
            <img src="${docente.imagen}" alt="Fotografía de ${docente.nombre}" class="detalle-avatar">
            <div class="detalle-info-principal">
                <h2>${docente.nombre}</h2>
                ${profesionPrincipalHTML}
                <span class="docente-especialidad">${docente.especialidad}</span>
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
                        ${docente.estudios.map(estudio => `<li>${estudio}</li>`).join('')}
                    </ul>
                </section>
            </div>
        </div>
        
        <section class="detalle-seccion detalle-seccion-full-width">
            <h3><i class="fas fa-book-reader"></i> Publicaciones Más Relevantes</h3>
            ${publicacionesRelevantesHTML}
        </section>
    `;
    
    // Ajuste de layout si solo queda una columna (biografía) y la otra (formación)
    const detalleCuerpo = document.querySelector('.detalle-cuerpo');
    if (docente.biografia) {
        // Asegura que la biografía ocupe el espacio adecuado sin la sección de niveles
        document.querySelector('.detalle-columna-unica').style.gridColumn = '1 / 2';
    }
}

// Ocultar detalle y volver al listado
function cerrarDetalle() {
    document.querySelector('.main').style.display = 'block';
    docenteDetalleSection.style.display = 'none';
    window.location.hash = ''; 
    window.scrollTo(0, 0); 
}

// Las funciones de estadísticas (actualizarContador y animarContador) se eliminan, 
// ya que la sección de estadísticas ha sido eliminada del HTML.