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

// Elementos de estadísticas
const totalDocentesEl = document.getElementById('total-docentes');
const conLibrosEl = document.getElementById('con-libros');
const conRevistasEl = document.getElementById('con-revistas');
const soloMaestriaEl = document.getElementById('solo-maestria');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    inicializarFiltros();
    mostrarDocentes();
    actualizarEstadisticas();
    
    // Event listeners
    searchInput.addEventListener('input', manejarBusqueda);
    filterPublicaciones.addEventListener('change', aplicarFiltros);
    filterNivel.addEventListener('change', aplicarFiltros);
    filterEspecialidad.addEventListener('change', aplicarFiltros);
    clearFiltersBtn.addEventListener('click', limpiarFiltros);
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

// Manejar búsqueda por texto
function manejarBusqueda(e) {
    filtroActual.busqueda = e.target.value.toLowerCase();
    aplicarFiltros();
}

// Aplicar todos los filtros
function aplicarFiltros() {
    // Actualizar filtros actuales
    filtroActual.publicaciones = filterPublicaciones.value;
    filtroActual.nivel = filterNivel.value;
    filtroActual.especialidad = filterEspecialidad.value;
    
    // Filtrar docentes
    docentesFiltrados = docentesData.filter(docente => {
        // Filtro de búsqueda por texto
        const cumpleBusqueda = !filtroActual.busqueda || 
            docente.nombre.toLowerCase().includes(filtroActual.busqueda) ||
            docente.especialidad.toLowerCase().includes(filtroActual.busqueda) ||
            docente.profesion.toLowerCase().includes(filtroActual.busqueda);
        
        // Filtro de publicaciones
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
        
        // Filtro de nivel de enseñanza
        let cumpleNivel = true;
        if (filtroActual.nivel) {
            switch (filtroActual.nivel) {
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
                    cumpleNivel = docente.nivelesEnsenanza.length === 3;
                    break;
            }
        }
        
        // Filtro de especialidad
        const cumpleEspecialidad = !filtroActual.especialidad || docente.especialidad === filtroActual.especialidad;
        
        return cumpleBusqueda && cumplePublicaciones && cumpleNivel && cumpleEspecialidad;
    });
    
    mostrarDocentes();
    actualizarEstadisticas();
}

// Mostrar docentes en el grid
function mostrarDocentes() {
    if (docentesFiltrados.length === 0) {
        docentesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    docentesGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    docentesGrid.innerHTML = docentesFiltrados.map(docente => `
        <div class="docente-card">
            <div class="docente-header">
                <img src="${docente.imagen}" alt="${docente.nombre}" class="docente-avatar">
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
        </div>
    `).join('');
}

// Actualizar estadísticas
function actualizarEstadisticas() {
    const total = docentesFiltrados.length;
    const conLibros = docentesFiltrados.filter(d => d.publicaciones.libros > 0).length;
    const conRevistas = docentesFiltrados.filter(d => d.publicaciones.revistas > 0).length;
    const soloMaestria = docentesFiltrados.filter(d => 
        d.nivelesEnsenanza.length === 1 && d.nivelesEnsenanza.includes('Maestría')
    ).length;
    
    // Animación de contadores
    animarContador(totalDocentesEl, total);
    animarContador(conLibrosEl, conLibros);
    animarContador(conRevistasEl, conRevistas);
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

// Limpiar todos los filtros
function limpiarFiltros() {
    searchInput.value = '';
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