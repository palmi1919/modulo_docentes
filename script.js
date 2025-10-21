// script.js

// Variables globales
let docentesFiltrados = [...docentesData]; 
let filtroActual = {
    busqueda: '' 
};

// Elementos del DOM 
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
    mostrarDocentes();
    actualizarEstadisticas();
    
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

// Generar y mostrar el HTML detallado (AÑADIENDO DATOS ADICIONALES)
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

    // NUEVA SECCIÓN: Datos Adicionales (Trayectoria, Logros, etc.)
    const datosAdicionalesHTML = docente.datosAdicionales ? 
        `<section class="detalle-seccion detalle-seccion-full-width">
            <h3><i class="fas fa-trophy"></i> ${docente.datosAdicionales.titulo}</h3>
            <ul class="datos-adicionales-list">
                ${docente.datosAdicionales.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </section>` : '';


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
        
        ${datosAdicionalesHTML}

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

// Actualizar estadísticas 
function actualizarEstadisticas() {
    const total = docentesData.length;
    const conLibros = docentesData.filter(d => d.publicaciones.libros > 0).length;
    const conRevistas = docentesData.filter(d => d.publicaciones.revistas > 0).length;
    
    // Función auxiliar: Cuenta si el docente TIENE Doctorado/PhD/Posdoc en su FORMACIÓN (estudios)
    const tieneDoctorado = (d) => d.estudios.some(estudio => 
        estudio.toLowerCase().includes('phd') || 
        estudio.toLowerCase().includes('doctorado') ||
        estudio.toLowerCase().includes('posdoctorado') 
    );
    const conDoctorado = docentesData.filter(tieneDoctorado).length;

    // Función auxiliar: Cuenta si el docente TIENE Maestría/Master en su FORMACIÓN (estudios)
    const tieneMaestria = (d) => d.estudios.some(estudio => 
        estudio.toLowerCase().includes('maestría') || 
        estudio.toLowerCase().includes('master') || 
        estudio.toLowerCase().includes('ciencias aplicadas') 
    );

    // CÁLCULO DE SOLO MAESTRÍA (tienen Maestría/Master en su formación y NO tienen Doctorado/PhD/Posdoc)
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