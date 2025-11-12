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
        
        // Se mantiene para su uso futuro, aunque no se mostrará en las tarjetas ni detalle.
        nivelesEnsenanza: ["Maestría", "Licenciatura"], 
        
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
        ],
        
        esRector: false
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
        
        nivelesEnsenanza: ["Maestría"], 
        
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
        
        esRector: false 
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
        
        nivelesEnsenanza: ["Licenciatura", "Maestría"],
        
        publicaciones: { 
            libros: 0, 
            revistas: 6, 
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
    },

    // OBJETO 4: Dra. Marcela Rebeca Contreras Loera
    {
        id: 4,
        nombre: "Dra. Marcela Rebeca Contreras Loera",
        profesion: "Administradora / Investigadora",
        especialidad: "Estudios Organizacionales y Turismo",
        imagen: "img/Dra-Marcela-Rebeca-Contreras.png", 
        esRector: false,
        
        estudios: [
            "Posdoctorado: Ciencias Sociales – Padrón de Excelencia Conahcyt",
            "Doctorado: Estudios Organizacionales – Padrón de Excelencia Conahcyt",
            "Maestría: Administración de Negocios",
            "Licenciatura: Administración y Finanzas"
        ],
        
        nivelesEnsenanza: ["Maestría", "Licenciatura"],
        
        publicaciones: { 
            libros: 2, 
            revistas: 2, 
            total: 4 
        },
        
        snii: "Nivel 2", 
        ssit: "Investigadora Honorífica", 
        
        biografia: "Profesora e investigadora con enfoque en Estudios Organizacionales, Administración y Finanzas. Con amplio conocimiento en gestión de programas de posgrado (PNPC Conahcyt) e internacionalización. Ha liderado Cuerpos Académicos Consolidados y grupos de investigación financiados.",
        
        publicacionesRelevantes: [
            { anio: 2024, titulo: "La gestión del mango. Su cultivo, postcosecha e impacto económico y social", fuente: "Libro (Coordinadora)", tipo: "Libro" },
            { anio: 2024, titulo: "Mares y tierra. Crónicas de desarrollo y cambio en Sinaloa", fuente: "Libro (Coordinadora)", tipo: "Libro" },
            { anio: 2023, titulo: "Service Quality and Worker Training in 5-Star Hotel", fuente: "Zeszyty Naukowe Politechniki Częstochowskiej. Zarządzanie", tipo: "Artículo Indexado" },
            { anio: 2023, titulo: "The entrepreneur woman: challenges and opportunities", fuente: "Research Reviews of Czestochowa University of Technology. Management", tipo: "Artículo Indexado" },
            { anio: 2023, titulo: "Emprendimiento femenino en Sinaloa", fuente: "Libro: Avances y retos de la participación de la mujer...", tipo: "Capítulo de Libro" },
        ]
    },

    // OBJETO 5: M.C. Daniel Alberto Reyes Guerrero
    {
        id: 5,
        nombre: "M.C. Daniel Alberto Reyes Guerrero",
        profesion: "Ingeniero / Maestro en Ciencias Aplicadas",
        especialidad: "Energías Renovables y Agroindustria (Mango)",
        imagen: "img/MC-Daniel-Alberto-Reyes.png",
        esRector: false,
        
        estudios: [
            "Maestría: Ciencias Aplicadas - Universidad Politécnica de Sinaloa (UPSIN)",
            "Licenciatura: Ingeniería en Mantenimiento Industrial - Universidad Tecnológica de Escuinapa (UTESC)"
        ],
        
        nivelesEnsenanza: ["Maestría", "Licenciatura", "Ingeniería", "Mantenimiento"],
        
        publicaciones: { 
            libros: 0, 
            revistas: 5, 
            total: 5 
        },
        
        snii: "No aplica", 
        ssit: "Tecnológico", 
        
        biografia: "Profesor de tiempo completo en la UTESC. Combina la docencia con proyectos de investigación orientados al aprovechamiento de energías renovables en el sector agroindustrial, con un enfoque particular en el cultivo y procesamiento del mango. Su trabajo se centra en el estudio y aplicación de la energía solar para mejorar la eficiencia y sostenibilidad de los procesos.",
        
        publicacionesRelevantes: [
            { anio: 2023, titulo: "El cultivo del mango y su interaccion en la producción, comercialización y el turismo de negocio en Escuinapa, Sinaloa", fuente: "Revista Sinaloense de Ciencia, Tecnología y Humanidades", tipo: "Artículo" },
            { anio: 2023, titulo: "Mango deshidratado, una alternativa para el desarrollo de negocios para las familias de El Pozole, Rosario, Sinaloa", fuente: "La gestión del mango: Su cultivo, postcosecha e impacto económico y social", tipo: "Capítulo de Libro" },
            { anio: 2023, titulo: "Infraestructura y comercialización del mango en el sur de Sinaloa: Impacto de los intermediarios", fuente: "La gestión del mango: Su cultivo, postcosecha e impacto económico y social", tipo: "Capítulo de Libro" },
            { anio: 2019, titulo: "La experimentación y simulación como estrategia de enseñanza para el estudio del recurso solar...", fuente: "Academia Journal 2019 investigación en la educación superior. Tepic 2019", tipo: "Artículo en Congreso" },
            { anio: 2020, titulo: "Propuesta de elaboración de un piranometro con base de celdas de Cdte.", fuente: "XVII Congreso ibérico y XIII Congreso iberoaméricano de energía solar. CIES 2020", tipo: "Ponencia en Congreso" },
        ]
    }
];