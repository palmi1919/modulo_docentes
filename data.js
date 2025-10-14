// data.js

const docentesData = [
    // OBJETO 1: Dr. Héctor Augusto Parra Zurita
    {
        id: 1,
        nombre: "Dr. Héctor Augusto Parra Zurita",
        profesion: "Doctor en Ciencias Sociales",
        especialidad: "Antropología Social y Seguridad Pública",
        imagen: "img/Dr-Hector-Augusto-Parra.png", 
        
        estudios: [
            "Doctorado: Ciencias Sociales - Universidad Autónoma de Sinaloa (UAS)",
            "Maestría: Historia - Universidad Autónoma de Sinaloa (UAS)",
            "Licenciatura: Antropología Social - Escuela Nacional de Antropología e Historia (ENAH)"
        ],
        
        nivelesEnsenanza: ["Doctorado", "Maestría", "Licenciatura", "Etnografía"],
        
        publicaciones: {
            libros: 2, 
            revistas: 3, 
            total: 5 
        },
        
        snii: "Candidato", 
        ssit: "No aplica", 
        
        biografia: "Licenciado en Antropología Social por la Escuela Nacional de Antropología e Historia, maestro en historia y doctor en ciencias sociales por parte de la Universidad Autónoma de Sinaloa. Su investigación se centra en la identidad, cultura material, y la relación entre seguridad objetiva y subjetiva. Es miembro del SNII en nivel candidato y desde 2009 trabaja en proyectos de investigación etnográfica. Es profesor de asignatura del IAPSIN y de la Universidad Autónoma de Occidente, y actualmente es docente de posgrado en la Univesidad Tecnológica de Escuinapa desde 2024.",
        
        publicacionesRelevantes: [
            { anio: 2024, titulo: "La crítica social ilustrada y posmoderna en torno a la reflexividad de la violencia y la dominación", fuente: "Andamios, Revista de Investigación Social", tipo: "Artículo Indexado" },
            { anio: 2024, titulo: "Etnografía del noroccidente de México. El danzante pascola yoreme de Tehueco; un rito de paso en estudio de caso extendido", fuente: "Antropología del desierto, UNAM.", tipo: "Capítulo de Libro" },
            { anio: 2023, titulo: "Alerta de seguridad, turismo y sociedad del riesgo en Mazatlán, Sinaloa, 2017-2021", fuente: "Violencia, Criminalidad y Delito en Sinaloa.", tipo: "Capítulo de Libro" },
            { anio: 2023, titulo: "Especialización delictiva municipal en Sinaloa. Análisis de incidencia delictiva, 2017 y 2021.", fuente: "Ciencia y Universidad, Revista de la Facultad de Ciencias Económicas y Sociales", tipo: "Artículo" },
            { anio: 2023, titulo: "Los Judíos contra las cruces. Un sistema segmentario de grupos rituales entre los mayos de Tehueco", fuente: "Arqueología Mexicana, Núm. 181", tipo: "Artículo" },
        ]
    },
    
    // OBJETO 2: Dr. Juan Manuel Mendoza Guerrero (Rector)
    {
        id: 2,
        nombre: "Dr. Juan Manuel Mendoza Guerrero",
        profesion: "Rector de la Universidad / Doctor", 
        especialidad: "Migración y Estudios Regionales",
        imagen: "img/rector.jpg", 
        
        estudios: [
            "Doctorado: Historia de la Frontera - Universidad de Texas (EE. UU.)",
            "Maestría: Estudios de América del Norte - Universidad Autónoma de Sinaloa (UAS)",
            "Licenciatura: Economía"
        ],
        
        nivelesEnsenanza: ["Doctorado", "Maestría", "Licenciatura"], 
        
        publicaciones: {
            libros: 0, 
            revistas: 0, 
            total: 0 
        },
        
        snii: "No aplica", 
        ssit: "No aplica", 
        
        biografia: "Actual Rector de la Universidad. Es profesor de tiempo completo, Líder del Cuerpo Académico “Movimiento Migratorio y Desarrollo Regional” y Doctor en Historia de la Frontera. Sus áreas de interés incluyen migración, negocios étnicos, estudios de los alimentos y pobreza. Fue ganador del Premio Nacional de Investigación de Comercio Exterior 2003 y de la Beca Mexico-North Research Network.",
        
        publicacionesRelevantes: [
            { anio: "Info", titulo: "No se listan publicaciones recientes en este perfil.", fuente: "Consultar CV completo para historial.", tipo: "Sin publicaciones destacadas" }
        ],
        
        esRector: true
    },
    
    // OBJETO 3: Dr. Omar Jiménez Pérez
    {
        id: 3,
        nombre: "Dr. Omar Jiménez Pérez",
        profesion: "Ingeniero Agrónomo / Profesor Investigador",
        especialidad: "Parasitología Agrícola (Fitopatología)",
        imagen: "img/Dr-Omar-Jimenez.png", 
        
        estudios: [
            "Doctorado: Ciencias en Parasitología Agrícola (Universidad Autónoma Agraria Antonio Narro)",
            "Maestría: Ciencias en Parasitología Agrícola (Universidad Autónoma Agraria Antonio Narro)",
            "Licenciatura: Ingeniería Agronómica con Acentuación en Protección Vegetal (Universidad Autónoma de Sinaloa)"
        ],
        
        nivelesEnsenanza: ["Licenciatura", "Maestría", "Doctorado"],
        
        publicaciones: { 
            libros: 0, 
            revistas: 6, // 5 artículos + 1 review
            total: 6 
        },
        
        snii: "Reciente aplicación validada", 
        ssit: "Investigador", 
        
        biografia: "Profesor e investigador, especialista en parasitología agrícola (fitopatología y entomología), microbiología y biotecnología en polímeros y formulación de bioproductos agrícolas. Así como productor de cultivos como chiles picos, tomate, tomatillos y maíz. Autor principal de cinco artículos científicos, dos capítulos de libros y un 'review' publicados en revistas nacionales e internacionales. Además, coasesor principal de más de ocho tesis de licenciatura.",
        
        publicacionesRelevantes: [
            { anio: 2024, titulo: "Potential of Chitosan for the Control of Powdery Mildew...", fuente: "Plants", tipo: "Revista" },
            { anio: 2023, titulo: "Actividad Antagónica de Pseudomonas donghuensis y Bacillus subtilis...", fuente: "Revista Bio Ciencias", tipo: "Revista" },
            { anio: 2023, titulo: "Actividad inhibitoria de quitosano como alternativa orgánica...", fuente: "Acta Agrícola y Pecuaria", tipo: "Revista" },
            { anio: 2022, titulo: "Characterization and pathogenicity of a Pythium aphanidermatum isolate...", fuente: "Revista mexicana de fitopatología", tipo: "Revista" },
            { anio: 2025, titulo: "Fungicidal Activity of Chitosan in Synergy With Trichoderma harzianum...", fuente: "Agrociencia", tipo: "Revista" }
        ],
        
        esRector: false
    }
];