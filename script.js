// Variables globales
let docentesFiltrados = [...docentesData];
let filtroActual = {
    busqueda: '',
    publicaciones: '',
    nivel: '',
    especialidad: ''
};

// Elementos del DOM
const searchInput = document.getElementById('search-input');
const filterPublicaciones = document.getElementById('filter-publicaciones');
const filterNivel = document.getElementById('filter-nivel');
const filterEspecialidad = document.getElementById('filter-especialidad');
const clearFiltersBtn = document.getElementById('clear-filters');
const docentesGrid = document.getElementById('docentes-grid');
const noResults = document.getElementById('no-results');

// Elementos de detalle y navegación
const docenteDetalleSection = document.getElementById('docente-detalle');
const closeDetailBtn = document.getElementById('close-detail');

// Elementos de estadísticas
const totalDocentesEl = document.getElementById('total-docentes');
const conLibrosEl = document.getElementById('con-libros');
const conRevistasEl = document.getElementById('con-revistas');
// NUEVO ELEMENTO DE ESTADÍSTICAS
const conDoctoradoEl = document.getElementById('con-doctorado'); 
const soloMaestriaEl = document.getElementById('solo-maestria');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    inicializarFiltros();
    mostrarDocentes();
    actualizarEstadisticas();
    
    // Event listeners
    // Conecta aquí el searchInput si lo tienes en el HTML (no estaba en tu última versión)
    // searchInput.addEventListener('input', manejarBusqueda);
    filterPublicaciones.addEventListener('change', aplicarFiltros);
    filterNivel.addEventListener('change', aplicarFiltros);
    filterEspecialidad.addEventListener('change', aplicarFiltros);
    clearFiltersBtn.addEventListener('click', limpiarFiltros);
    
    // Event listeners para la funcionalidad de detalle
    docentesGrid.addEventListener('click', manejarDetalle);
    closeDetailBtn.addEventListener('click', cerrarDetalle);
});

// Inicializar opciones de filtros
function inicializarFiltros() {
    // Obtener especialidades únicas
    const especialidades = [...new Set(docentesData.map(d => d.especialidad))].sort();
    
    especialidades.forEach(especialidad => {
        const option = document.createElement('option');
        option.value = especialidad;
        option.textContent = especialidad;
        filterEspecialidad.appendChild(option);
    });
}

// Manejar búsqueda por texto (si se añade el input de búsqueda)
function manejarBusqueda(e) {
    filtroActual.busqueda = e.target.value.toLowerCase();
    aplicarFiltros();
}

// Aplicar todos los filtros (Lógica de Doctorado añadida)
function aplicarFiltros() {
    // Actualizar filtros actuales
    // Si searchInput está en el HTML, descomentar: filtroActual.busqueda = searchInput.value.toLowerCase();
    filtroActual.publicaciones = filterPublicaciones.value;
    filtroActual.nivel = filterNivel.value;
    filtroActual.especialidad = filterEspecialidad.value;
    
    // Filtrar docentes
    docentesFiltrados = docentesData.filter(docente => {
        // Filtro de búsqueda por texto (si se implementa)
        const cumpleBusqueda = !filtroActual.busqueda || 
            docente.nombre.toLowerCase().includes(filtroActual.busqueda) ||
            docente.especialidad.toLowerCase().includes(filtroActual.busqueda) ||
            docente.profesion.toLowerCase().includes(filtroActual.busqueda);
        
        // Filtro de publicaciones (sin cambios)
        let cumplePublicaciones = true;
        if (filtroActual.publicaciones) {
            switch (filtroActual.publicaciones) {
                case 'libros':
                    cumplePublicaciones = docente.publicaciones.libros > 0;
                    break;
                case 'revistas':
                    cumplePublicaciones = docente.publicaciones.revistas > 0;
                    break;
                case 'ambos':
                    cumplePublicaciones = docente.publicaciones.libros > 0 && docente.publicaciones.revistas > 0;
                    break;
            }
        }
        
        // Filtro de nivel de enseñanza (Lógica ajustada para Doctorado)
        let cumpleNivel = true;
        if (filtroActual.nivel) {
            // Función auxiliar para verificar si el docente tiene Doctorado en sus estudios
            const tieneDoctorado = docente.estudios.some(estudio => 
                estudio.toLowerCase().includes('phd') || estudio.toLowerCase().includes('doctorado')
            );

            switch (filtroActual.nivel) {
                case 'doctorado':
                    cumpleNivel = tieneDoctorado;
                    break;
                case 'solo-maestria':
                    cumpleNivel = docente.nivelesEnsenanza.length === 1 && docente.nivelesEnsenanza.includes('Maestría');
                    break;
                case 'maestria-licenciatura':
                    cumpleNivel = docente.nivelesEnsenanza.includes('Maestría') && docente.nivelesEnsenanza.includes('Licenciatura') && !docente.nivelesEnsenanza.includes('Ingeniería');
                    break;
                case 'maestria-ingenieria':
                    cumpleNivel = docente.nivelesEnsenanza.includes('Maestría') && docente.nivelesEnsenanza.includes('Ingeniería') && !docente.nivelesEnsenanza.includes('Licenciatura');
                    break;
                case 'todos-niveles':
                    cumpleNivel = docente.nivelesEnsenanza.length >= 3; 
                    break;
            }
        }
        
        // Filtro de especialidad (sin cambios)
        const cumpleEspecialidad = !filtroActual.especialidad || docente.especialidad === filtroActual.especialidad;
        
        return cumpleBusqueda && cumplePublicaciones && cumpleNivel && cumpleEspecialidad;
    });
    
    mostrarDocentes();
    actualizarEstadisticas();
}

// Mostrar docentes en el grid (sin cambios importantes en la estructura de la tarjeta)
function mostrarDocentes() {
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

// Manejar clic en tarjeta y mostrar detalle (sin cambios)
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

// Generar y mostrar el HTML detallado (sin cambios)
function renderizarDetalle(docente) {
    const detalleContent = document.getElementById('detalle-content');
    
    const publicacionesHTML = `
        <div class="publicaciones-detalle-grid">
            <div class="publicacion-item">
                <i class="fas fa-book"></i>
                <div class="publicacion-count">${docente.publicaciones.libros}</div>
                <div class="publicacion-label">Libros Publicados</div>
            </div>
            <div class="publicacion-item">
                <i class="fas fa-newspaper"></i>
                <div class="publicacion-count">${docente.publicaciones.revistas}</div>
                <div class="publicacion-label">Artículos en Revistas</div>
            </div>
        </div>
    `;

    detalleContent.innerHTML = `
        <div class="detalle-header-wrapper">
            <img src="${docente.imagen}" alt="Fotografía de ${docente.nombre}" class="detalle-avatar">
            <div class="detalle-info-principal">
                <h2>${docente.nombre}</h2>
                <p class="detalle-profesion">${docente.profesion}</p>
                <span class="docente-especialidad">${docente.especialidad}</span>
            </div>
        </div>

        <div class="detalle-cuerpo">
            <section class="detalle-seccion">
                <h3><i class="fas fa-graduation-cap"></i> Formación Académica</h3>
                <ul class="estudios-list">
                    ${docente.estudios.map(estudio => `<li>${estudio}</li>`).join('')}
                </ul>
            </section>

            <section class="detalle-seccion">
                <h3><i class="fas fa-chalkboard-teacher"></i> Niveles de Enseñanza</h3>
                <div class="niveles-tags">
                    ${docente.nivelesEnsenanza.map(nivel => `<span class="nivel-tag">${nivel}</span>`).join('')}
                </div>
            </section>
            
            <section class="detalle-seccion">
                <h3><i class="fas fa-feather-alt"></i> Publicaciones y Research</h3>
                ${publicacionesHTML}
            </section>
        </div>
    `;
}

// Ocultar detalle y volver al listado (sin cambios)
function cerrarDetalle() {
    document.querySelector('.main').style.display = 'block';
    docenteDetalleSection.style.display = 'none';
    window.location.hash = ''; 
    window.scrollTo(0, 0); 
}

// Actualizar estadísticas (Cálculo de Doctorado añadido)
function actualizarEstadisticas() {
    const total = docentesFiltrados.length;
    const conLibros = docentesFiltrados.filter(d => d.publicaciones.libros > 0).length;
    const conRevistas = docentesFiltrados.filter(d => d.publicaciones.revistas > 0).length;
    
    // CÁLCULO DE DOCTORADO: Busca 'PhD' o 'Doctorado' en el array de estudios
    const conDoctorado = docentesFiltrados.filter(d => 
        d.estudios.some(estudio => 
            estudio.toLowerCase().includes('phd') || estudio.toLowerCase().includes('doctorado')
        )
    ).length;

    const soloMaestria = docentesFiltrados.filter(d => 
        d.nivelesEnsenanza.length === 1 && d.nivelesEnsenanza.includes('Maestría')
    ).length;
    
    // Animación de contadores
    animarContador(totalDocentesEl, total);
    animarContador(conLibrosEl, conLibros);
    animarContador(conRevistasEl, conRevistas);
    animarContador(conDoctoradoEl, conDoctorado); 
    animarContador(soloMaestriaEl, soloMaestria);
}

// Animar contadores (sin cambios)
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

// Limpiar todos los filtros (sin cambios)
function limpiarFiltros() {
    filterPublicaciones.value = '';
    filterNivel.value = '';
    filterEspecialidad.value = '';
    
    filtroActual = {
        busqueda: '',
        publicaciones: '',
        nivel: '',
        especialidad: ''
    };
    
    docentesFiltrados = [...docentesData];
    mostrarDocentes();
    actualizarEstadisticas();
}