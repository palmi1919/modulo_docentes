// script.js

// Variables globales
let docentesFiltrados = [...docentesData]; // Siempre serán todos
let filtroActual = {
    busqueda: '' // Solo dejamos la búsqueda por si la implementas después
};

// Elementos del DOM (SOLO los necesarios)
const docentesGrid = document.getElementById('docentes-grid');
const noResults = document.getElementById('no-results');

// Elementos de detalle y navegación
const docenteDetalleSection = document.getElementById('docente-detalle');
const closeDetailBtn = document.getElementById('close-detail');

// Elementos de estadísticas
const totalDocentesEl = document.getElementById('total-docentes');
const conLibrosEl = document.getElementById('con-libros');
const conRevistasEl = document.getElementById('con-revistas');
const conDoctoradoEl = document.getElementById('con-doctorado'); 
const soloMaestriaEl = document.getElementById('solo-maestria'); 

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Ya no es necesario inicializarFiltros ni aplicarFiltros
    mostrarDocentes();
    actualizarEstadisticas();
    
    // Event listeners para la funcionalidad de detalle
    docentesGrid.addEventListener('click', manejarDetalle);
    closeDetailBtn.addEventListener('click', cerrarDetalle);
});

// NOTA: La función aplicarFiltros, inicializarFiltros y limpiarFiltros ha sido eliminada.

// Mostrar docentes en el grid
function mostrarDocentes() {
    // Como no hay filtros, siempre mostramos docentesData
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
           class="docente-card ${docente.esRector ? 'docente-card-rector' : ''}" 
           aria-label="Ver perfil completo de ${docente.nombre}"
           data-docente-id="${docente.id}"> 
            
            ${docente.esRector ? '<div class="rector-badge"><i class="fas fa-crown"></i> Rector</div>' : ''}

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
                
                <div class="docente-niveles">
                    <h4><i class="fas fa-chalkboard-teacher"></i> Niveles de Enseñanza</h4>
                    <div class="niveles-tags">
                        ${docente.nivelesEnsenanza.map(nivel => `<span class="nivel-tag">${nivel}</span>`).join('')}
                    </div>
                </div>
                
                <div class="docente-publicaciones">
                    <div class="publicacion-item">
                        <i class="fas fa-book"></i>
                        <div class="publicacion-count">${docente.publicaciones.libros}</div>
                        <div class="publicacion-label">Libros</div>
                    </div>
                    <div class="publicacion-item">
                        <i class="fas fa-newspaper"></i>
                        <div class="publicacion-count">${docente.publicaciones.revistas}</div>
                        <div class="publicacion-label">Revistas</div>
                    </div>
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

// Generar y mostrar el HTML detallado (SIN SNII/SSIT)
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

    // Elemento Rector llamativo en la vista de detalle
    const rectorBadgeDetalle = docente.esRector ? 
        `<span class="detalle-rector-tag"><i class="fas fa-crown"></i> ${docente.profesion.split('/')[0].trim()}</span>` : 
        `<p class="detalle-profesion">${docente.profesion}</p>`;


    detalleContent.innerHTML = `
        <div class="detalle-header-wrapper">
            <img src="${docente.imagen}" alt="Fotografía de ${docente.nombre}" class="detalle-avatar">
            <div class="detalle-info-principal">
                <h2>${docente.nombre}</h2>
                ${rectorBadgeDetalle}
                <span class="docente-especialidad">${docente.especialidad}</span>
            </div>
        </div>

        <div class="detalle-cuerpo">
            <div class="detalle-columna">
                <section class="detalle-seccion">
                    <h3><i class="fas fa-user-circle"></i> Semblanza</h3>
                    <p class="docente-biografia">${docente.biografia || 'Información biográfica no disponible.'}</p>
                </section>
                
                <section class="detalle-seccion">
                    <h3><i class="fas fa-chalkboard-teacher"></i> Áreas de Docencia</h3>
                    <div class="niveles-tags">
                        ${docente.nivelesEnsenanza.map(nivel => `<span class="nivel-tag">${nivel}</span>`).join('')}
                    </div>
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
}

// Ocultar detalle y volver al listado
function cerrarDetalle() {
    document.querySelector('.main').style.display = 'block';
    docenteDetalleSection.style.display = 'none';
    window.location.hash = ''; 
    window.scrollTo(0, 0); 
}

// Actualizar estadísticas (Cálculo de Doctorado incluido)
function actualizarEstadisticas() {
    const total = docentesData.length;
    const conLibros = docentesData.filter(d => d.publicaciones.libros > 0).length;
    const conRevistas = docentesData.filter(d => d.publicaciones.revistas > 0).length;
    
    // CÁLCULO DE DOCTORADO
    const tieneDoctorado = (d) => d.estudios.some(estudio => 
        estudio.toLowerCase().includes('phd') || estudio.toLowerCase().includes('doctorado')
    );
    const conDoctorado = docentesData.filter(tieneDoctorado).length;

    // CÁLCULO DE SOLO MAESTRÍA (tienen Maestría/Master y NO tienen Doctorado/PhD)
    const tieneMaestria = (d) => d.estudios.some(estudio => 
        estudio.toLowerCase().includes('maestría') || estudio.toLowerCase().includes('master')
    );

    const soloMaestria = docentesData.filter(d => 
        tieneMaestria(d) && !tieneDoctorado(d)
    ).length;
    
    // Animación de contadores
    animarContador(totalDocentesEl, total);
    animarContador(conLibrosEl, conLibros);
    animarContador(conRevistasEl, conRevistas);
    animarContador(conDoctoradoEl, conDoctorado); 
    animarContador(soloMaestriaEl, soloMaestria);
}

// Animar contadores
function animarContador(elemento, valorFinal) {
    const valorInicial = parseInt(elemento.textContent) || 0;
    const duracion = 500;
    const incremento = (valorFinal - valorInicial) / (duracion / 16);
    let valorActual = valorInicial;
    
    const timer = setInterval(() => {
        valorActual += incremento;
        if ((incremento > 0 && valorActual >= valorFinal) || (incremento < 0 && valorActual <= valorFinal)) {
            valorActual = valorFinal;
            clearInterval(timer);
        }
        elemento.textContent = Math.round(valorActual);
    }, 16);
}