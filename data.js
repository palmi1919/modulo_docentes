const docentesData = [
    // OBJETO 1: Dr. Héctor Augusto Parra Zurita
    {
        id: 1,
        nombre: "Dr. Héctor Augusto Parra Zurita",
        profesion: "Doctor en Ciencias Sociales",
        imagen: "img/Dr-Hector-Augusto-Parra.png", 
        
        estudios: [
            "Licenciatura: Antropología social",
            "Maestría: Historia",
            "Doctorado: Ciencias sociales",
            "Nivel Sistema Nacional de Investigadoras e Investigadores (SNII): Candidato",
            "Nivel Sistema Sinaloense de Investigadores y Tecnólogos (SSIT):"
        ],
        
        biografia: "Licenciado en Antropología Social por la Escuela Nacional de Antropología e Historia, maestro en historia y doctor en ciencias sociales por parte de la Universidad Autónoma de Sinaloa. Su investigación se centra en la identidad, cultura material, y la relación entre seguridad objetiva y subjetiva. Es miembro del SNII en nivel candidato y desde 2009 trabaja en proyectos de investigación etnográfica. Es profesor de asignatura del IAPSIN y de la Universidad Autónoma de Occidente, y actualmente es docente de posgrado en la Univesidad Tecnológica de Escuinapa desde 2024.",

        datosAdicionales:"Licenciado en Antropología Social por la Escuela Nacional de Antropología e Historia, maestro en historia y doctor en ciencias sociales por parte de la Universidad Autónoma de Sinaloa. Estudió la maestría en historia con una investigación sobre la identidad y la cultura material durante el porfiriato en Sinaloa y continuando posteriormente con el doctorado en ciencias sociales investigando la relación entre seguridad objetiva y subjetiva en Culiacán a través de sus representaciones colectivas y las políticas públicas de seguridad estatales. De este trabajo se desprendieron dos publicaciones, la primera un artículo en una revista indexada y la segunda como capítulo de libro. Miembro del SNII en nivel candidato. Desde 2009 trabaja en proyectos de investigación etnográfica iniciando en la subdirección de etnografía del Museo Nacional de Antropología como asistente de investigador en 2006. Es profesor de asignatura del Instituto de Administración Pública de Sinaloa (IAPSIN) donde se enfoca en el seguimiento a los trabajos de titulación mediante tesis de los alumnos de maestría en Administración Pública y Transparencia Gubernamental y Administración Pública y Gobierno Electrónico. Profesor de asignatura de la Universidad Autónoma de Occidente adscrito al Departamento Académico de Ciencias Económico-Administrativas específicamente en la Licenciatura de Turismo y Gastronomía. Actualmente se desempeña como docente de asignatura del programa de posgrado en la Univesidad Tecnológica de Escuinapa desde 2024. Es asesor de proyectos de investigación etnográfica en el noroeste beneficiados por el PACMyC federal.",
        
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
        profesion: "Doctor en Historia de la Frontera ", 
        imagen: "img/rector.jpg", 
        
        estudios: [
            "Licenciado en Economía",
            "Maestro en Estudios de América del Norte por la Universidad Autónoma de Sinaloa (UAS)",
            "Doctor en Historia de la Frontera por la Universidad de Texas.",
            "Nivel Sistema Nacional de Investigadoras e Investigadores (SNII)",
            "Nivel Sistema Sinaloense de Investigadores y Tecnólogos (SSIT)"
        ],
        
        biografia: "Actual Rector de la Universidad. Es profesor de tiempo completo, Líder del Cuerpo Académico “Movimiento Migratorio y Desarrollo Regional” y Doctor en Historia de la Frontera. Sus áreas de interés incluyen migración, negocios étnicos, estudios de los alimentos y pobreza. Fue ganador del Premio Nacional de Investigación de Comercio Exterior 2003 y de la Beca Mexico-North Research Network.",

        datosAdicionales: "Actualmente es profesor de tiempo completo en la Universidad Autónoma de Sinaloa, donde es Líder del Cuerpo Académico “Movimiento Migratorio y Desarrollo Regional”, Miembro del Sistema Estatal de científicos y tecnólogos de Sinaloa y Miembro del Sistema Nacional de Investigadores, Nivel I, logrando patrocinios de diversos fondos de investigación como los Fondos Mixtos CONACYT, PROFAPI, PRODEP, Cotton Scholarship y Wenner-Gren Foundation Es miembro del Núcleo Académico Básico de la Maestría en Ciencias Sociales con énfasis en Estudios Regionales y del Doctorado en Ciencias Sociales, ambos de la Universidad Autónoma de Sinaloa. Asesor de tesis de alumnos de los dos programas antes mencionados y de estudiantes del Doctorado en Economía Política de la Benemérita Universidad de Puebla. Sus áreas de interés son: migración, negocios étnicos, estudios de los alimentos y pobreza. Fue ganador del Premio Nacional de Investigación de Comercio Exterior 2003 y de la Beca Mexico-North Research Network en Estados Unidos de América. Además de pertenecer a diversas redes de Investigación a nivel nacional e internacional posee un vasto número de publicaciones de artículos en revistas arbitradas y libros. Su más reciente publicación es Latinas/os’ Invisible and Visible Presences in the Food Systems: Changing How we Eat and Who We Are. University of Arkansas Press, 2016.",
        
        publicacionesRelevantes: [
            { anio: "Info", titulo: "No se listan publicaciones recientes en este perfil.", tipo: "Sin publicaciones destacadas" }
        ],
        
        esRector: false 
    },
    
    // OBJETO 3: Dr. Omar Jiménez Pérez
    {
        id: 3,
        nombre: "Dr. Omar Jiménez Pérez",
        profesion: "Doctor en Ciencias en Parasitología Agrícola",
        imagen: "img/Dr-Omar-Jimenez.png", 
        
        estudios: [
            "Licenciatura: Licenciatura en Ingeniería Agronómica con Acentuación en Protección Vegetal (Universidad Autónoma de Sinaloa)",
            "Maestría: Maestría en Ciencias en Parasitología Agrícola (Universidad Autónoma Agraria Antonio Narro)",
            "Doctorado: Doctorado en Ciencias en Parasitología Agrícola (Universidad Autónoma Agraria Antonio Narro)",
            "Nivel Sistema Nacional de Investigadoras e Investigadores (SNII): reciente aplicación validada",
            "Nivel Sistema Sinaloense de Investigadores y Tecnólogos (SSIT): Investigador"
        ],
    
        biografia: "Profesor e investigador, especialista en parasitología agrícola (fitopatología y entomología), microbiología y biotecnología en polímeros y formulación de bioproductos agrícolas. Así como productor de cultivos como chiles picos, tomate, tomatillos y maíz. Autor principal de cinco artículos científicos, dos capítulos de libros y un 'review' publicados en revistas nacionales e internacionales. Además, coasesor principal de más de ocho tesis de licenciatura.",

        datosAdicionales: "Profesor e investigador, especialista en parasitología agrícola (fitopatología y entomología), microbiología y biotecnología en polímeros y formulación de bioproductos agrícolas. Así como productor de cultivos como chiles picos, tomate, tomatillos y maíz. Autor principal de cinco artículos científicos, dos capítulos de libros y un reviuw publicados en revistas nacionales e internacionales y la participación en doce congresos nacionales e internacionales. Además, coasesor principal de más ocho tesis de licenciatura. ",
        
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
        profesion: "Posdoctorado en Ciencias Sociales",
        imagen: "img/Dra-Marcela-Rebeca-Contreras.png", 
        esRector: false,
        
        estudios: [
            "Licenciatura: Administración y Finanzas",
            "Maestría: Administración de Negocios",
            "Doctorado: Estudios Organizacionales – Programa del Padrón de Excelencia Conahcy",
            "Posdoctorado: Ciencias Sociales – Programa del Padrón de Excelencia Conahcyt",
            "Nivel Sistema Nacional de Investigadoras e Investigadores (SNII): Nivel 2",
            "Nivel Sistema Sinaloense de Investigadores y Tecnólogos (SSIT): Investigadora Honorífica"
        ],
        
        biografia: "Profesora e investigadora con enfoque en Estudios Organizacionales, Administración y Finanzas. Con amplio conocimiento en gestión de programas de posgrado (PNPC Conahcyt) e internacionalización. Ha liderado Cuerpos Académicos Consolidados y grupos de investigación financiados.",
        
        datosAdicionales: "Con Premio Profesionista lince en categoría de Ciencia e Investigación 2021. En su trayectoria ha sido coordinadora de programas de posgrado como doctorado en turismo-PNPC Conahcyt y maestría en administración, así como licenciatura en turismo. Responsable institucional de investigación y posgrado, de Internacionalización y de dirección académica. Con proyectos de investigación financiados por Conahcyt, SEP-Prodep, Unión Europea, Clacso, EDF-ONG, ALFA-Cinda, Clacso y UTEsc; Ha sido líder de Cuerpo Académico Consolidado y en Grupo de investigación, y líder en redes temáticas Prodep, Conahcyt y Clacso, Evaluadora de Conahcyt, Prodep, CONFIE, Feria de Ciencias e Ingenierías Estado de Sinaloa, DGUTYP, PROFOCIE; en Revistas nacionales e internacionales. Enlace en la firma de convenios con universidades como Universidad de Córdoba (España), Higuer Institute of Tourism and Hotels of Egypt (El Cairo, Egipto), Universidad de Varsovia (Polonia), South Ural State University en Rusia, entre otras. Participación en congresos nacionales e internacionales. Contribuye en la formación de recursos humanos a través de la dirección y codirección de tesis en posgrado y licenciatura, asesora en exámenes de conocimiento, servicio social, verano de la ciencia. Con estancias de investigación en universidades nacionales e internacionales como la Universidad de Córdoba (España), Higuer Institute of Tourism and Hotels of Egypt (El Cairo, Egipto), Universidad de Varsovia, Poznan University of Tecnnology, Academy of Social Sciences en Polonia, Centro de Investigación de Universidad Politécnica en Paris, Francia; South Ural State University en Rusia, Universidad de Buenos Aires, Argentina, Universidad Academia de Humanismo Cristiano en Santiago, Chile; Universidade Estadual Do Oeste Do Parana, Parana, Brasil; Universidad Complutense de Madrid en Madrid, España, Universidad Nacional Experimental Rafael Maria Baralt en Venezuela, entre otras.",

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
        profesion: "Ingeniero en Mantenimiento Industrial / Maestro en Ciencias Aplicadas",
        imagen: "img/MC-Daniel-Alberto-Reyes.png",
        esRector: false,
        
        estudios: [
            "Ingeniería: Ingeniería en Mantenimiento Industrial - Universidad Tecnológica de Escuinapa (UTESC)",
            "Maestría en ciencias aplicadas",
            "Nivel Sistema Sinaloense de Investigadores y Tecnólogos (SSIT): Tecnológico"
        ],
        
        biografia: "Profesor de tiempo completo en la UTESC. Combina la docencia con proyectos de investigación orientados al aprovechamiento de energías renovables en el sector agroindustrial, con un enfoque particular en el cultivo y procesamiento del mango. Su trabajo se centra en el estudio y aplicación de la energía solar para mejorar la eficiencia y sostenibilidad de los procesos.",

        datosAdicionales:"El M.C. Daniel Alberto Reyes Guerrero es ingeniero en mantenimiento industrial por la Universidad Tecnológica de Escuinapa (UTESC) y cuenta con una maestría en ciencias aplicadas por la Universidad Politécnica de Sinaloa (UPSIN). Actualmente se desempeña como profesor de tiempo completo en la UTESC, donde combina la docencia con proyectos de investigación orientados al aprovechamiento de energías renovables en el sector agroindustrial, con un enfoque particular en el cultivo y procesamiento del mango. Su trabajo se centra en el estudio y aplicación de la energía solar para mejorar la eficiencia y sostenibilidad de los procesos asociados a la infraestructura del mango, desde la postcosecha hasta su industrialización. Ha desarrollado investigaciones sobre deshidratadores solares, sistemas térmicos de apoyo para tratamientos hidrotérmicos, y tecnologías limpias para el secado de mango en regiones de alta radiación solar como el sur de Sinaloa. Entre sus principales líneas de interés se encuentran: El diseño y evaluación de sistemas de captación solar adaptados a climas costeros. El análisis energético de procesos agroindustriales vinculados al mango. La integración de soluciones solares en la cadena de valor, particularmente en la etapa de secado, almacenamiento y transporte. El mantenimiento predictivo de equipos agroindustriales alimentados con energía renovable. El M.C. Reyes Guerrero también ha impulsado colaboraciones entre la universidad y empresas productoras de mango de la región, promoviendo la transferencia de tecnología y la capacitación en buenas prácticas de mantenimiento de equipos impulsados por fuentes limpias. Su visión interdisciplinaria le ha permitido vincular áreas como la ingeniería mecánica, eléctrica y ambiental para responder a problemáticas concretas del sector agroalimentario. Asimismo, ha dirigido trabajos de estadía nivel universitario orientados a la automatización de procesos y la incorporación de energías alternativas en sistemas de producción agrícola. Como docente, destaca por su enfoque práctico y su compromiso con el desarrollo sustentable de la región.",
        
        publicacionesRelevantes: [
            { anio: 2023, titulo: "El cultivo del mango y su interaccion en la producción, comercialización y el turismo de negocio en Escuinapa, Sinaloa", fuente: "Revista Sinaloense de Ciencia, Tecnología y Humanidades", tipo: "Artículo" },
            { anio: 2023, titulo: "Mango deshidratado, una alternativa para el desarrollo de negocios para las familias de El Pozole, Rosario, Sinaloa", fuente: "La gestión del mango: Su cultivo, postcosecha e impacto económico y social", tipo: "Capítulo de Libro" },
            { anio: 2023, titulo: "Infraestructura y comercialización del mango en el sur de Sinaloa: Impacto de los intermediarios", fuente: "La gestión del mango: Su cultivo, postcosecha e impacto económico y social", tipo: "Capítulo de Libro" },
            { anio: 2019, titulo: "La experimentación y simulación como estrategia de enseñanza para el estudio del recurso solar...", fuente: "Academia Journal 2019 investigación en la educación superior. Tepic 2019", tipo: "Artículo en Congreso" },
            { anio: 2020, titulo: "Propuesta de elaboración de un piranometro con base de celdas de Cdte.", fuente: "XVII Congreso ibérico y XIII Congreso iberoaméricano de energía solar. CIES 2020", tipo: "Ponencia en Congreso" },
        ]
    },
    
    // OBJETO 6: Dra. Guadalupe Montaño López (NUEVO)
    {
        id: 6,
        nombre: "Dra. Guadalupe Montaño López",
        profesion: "Doctora en Estudios Económicos",
        imagen: "img/Dra-Guadalupe-Montano.png", 
        
        estudios: [
            "Posdoctorado: Agroindustria del Mango y Desafíos Comerciales - UAS (2022-2024)",
            "Doctorado: Estudios Económicos - Universidad de Guadalajara (UDG)",
            "Maestría: Desarrollo Económico Local - Universidad Autónoma de Nayarit (UAN)",
            "Licenciatura: Comercio Internacional - Universidad Autónoma de Sinaloa (UAS)"
        ],
        
        biografia: "Es miembro del Sistema Nacional de Investigadoras e Investigadores, nivel candidato desde el 2024. Obtuvo la distinción como Investigadora Integrante del Sistema Sinaloense de Investigadores y Tecnólogos en el 2022 y logró la permanencia en 2024. Ha trabajado en temas como: la producción y el valor del mango en México; el comercio del mango en la región noroeste de argentina (NOA); la situación y alternativas de coordinación en la cadena productiva del mango; los sectores económicos del municipio de El Rosario, Sinaloa; competitividad de las frutas mexicanas a nivel internacional; factores económicos que determinan la competitividad de las frutas; competencia internacional y mercados potenciales de las frutas en México, COVID-19 como factor de incidencia en el precio del mango en México; cadena comercial de la agroindustria del mango en el sur de Sinaloa 2023 y Evolución del Patrón Siembra de los Cultivos para Consumo Humano en Sinaloa 2023. Fue Profesora en la Facultad de Ciencias Sociales perteneciente a la UAS, también ha impartido clases en la Universidad Tecnológica de Escuinapa (UTEsc) a los Docentes en turno donde actualmente se encuentra activa como Profesora-Investigadora. Participa activamente en el Consejo Editorial de la Revista Divulgación de Ciencia y Educación (Redicye). Es miembro de la Red Internacional de Investigación en Ciencias Agropecuarias, de la Red Pentagobernanza para el Territorio Sostenible y de la Red de Divulgadores de Ciencia y Tecnología. Realizó un posdoctorado en la UAS durante el 2022-2024 y su investigación giraba en torno a la agroindustria del mango y los desafíos comerciales desde sus inicios.",
        
        publicacionesRelevantes: [
            { anio: "Info", titulo: "No se listan publicaciones recientes en este perfil.", tipo: "Sin publicaciones destacadas" }
        ],
        
        esRector: false
    },

        // OBJETO 7: PhD. Fernando E. Villegas Rivera
    {
        id: 7,
        nombre: "PhD. Fernando E. Villegas Rivera",
        profesion: "Ciencias Sociales con especialización en política migratoria y estudios Latinos",
        imagen: "img/Fernando-Villegas-Rivera.png", 
        
        estudios: [
            "Licenciatura: Ciencias Políticas Y Administración Pública (UAS)",
            "Maestría: Ciencias sociales con énfasis en estudios regionales (UAS) ",
            "Maestría: Desarrollo Económico Local - Universidad Autónoma de Nayarit (UAN)",
            "Doctorado: Ciencias Sociales con especialización en política migratoria y estudios Latinos University of California (UCLA)"
        ],
        
        biografia: "Fernando es doctor en ciencias sociales con especialidad en política migratoria y estudios latinos por la UCLA. Es profesor de asignatura de licenciatura y posgrado por la Universidad Tecnológica de Escuinapa y miembro del Sistema Nacional de Investigadoras e Investigadores (SNII) nivel “candidato”. En junio de 2024 terminó una estancia de dos años en Cornell University, donde fungió como research scholar y Visiting Assistant Professor en el Department of Government y en el Latina/o Studies Program. Fernando está escribiendo un manuscrito de libro el cual se centra en los proyectos progresistas de ciudadanía estatal en Estados Unidos y México, donde investiga los procesos históricos y sociopolíticos que influyen en la aprobación e implementación de leyes y políticas pro-migrantes en California y Ciudad de México. Sus contribuciones académicas abarcan diversos temas relacionados con la migración, los movimientos sociales y la participación política de las comunidades marginadas en Norte y Centroamérica. Como becario doctoral UC MEXUS-CONACYT, sus proyectos de investigación han sido financiados por prestigiosas instituciones estadounidenses, como el Latin American Institute (UCLA), el Center for the Study of International Migration (UCLA), el Institute for American Cultures (IAC) y el International Institute (UCLA), entre otras. Sus intereses investigativos abarcan los siguientes: migración internacional y transnacional, acción colectiva migrante y movimientos sociales, políticas públicas migratorias subnacionales, efectos de la violencia criminal, migración en tránsito, remesas y desarrollo regional, organizaciones religiosas, política latina en E.U., entre otros.",
        
        publicacionesRelevantes: [
            { anio: "Info", titulo: "No se listan publicaciones recientes en este perfil.", tipo: "Sin publicaciones destacadas" }
        ],
        
        esRector: false
    },

            // OBJETO 8: Dr. Carlos Bruno Fiscal
    {
        id: 8,
        nombre: "Dr. Carlos Bruno Fiscal",
        profesion: "Doctorado en Ciencias en Economía Agrícola",
        imagen: "img/Dr-Carlos-Bruno-Fiscal.png", 
        
        estudios: [
            "Licenciatura: Economía (UAS)",
            "Maestría: Desarrollo Económico Local (UAN)",
            "Doctorado: Doctorado en Ciencias en Economía Agrícola (UACH)",
        ],
        
        biografia: "Licenciado en economía por la Universidad Autónoma de Sinaloa, Maestro en Desarrollo Económico Local por la Universidad Autónoma de Nayarit. Doctor en Ciencias en Economía Agrícola por la Universidad Autónoma Chapingo. Miembro del Sistema Sinaloense de Investigadores y Tecnólogos y, de la Red Estatal de Divulgadores de la Ciencia y Tecnología en Sinaloa. Colaborador en el Cuerpo Académico “Movimiento Migratorio y Desarrollo Regional” de la Universidad Autónoma de Sinaloa y del Grupo de Innovaciones Socioeconómicas Rurales de la Universidad de Antioquia. Cuenta con publicaciones en revistas nacionales, así como en revistas internacionales de países como España, Colombia y Chile. Ha trabajado para organismos gubernamentales como la Comisión Nacional de Pesca y Acuacultura, el Consejo para el Desarrollo Económico de Sinaloa y la Universidad Autónoma de Sinaloa, así como para asociaciones como Conselva, Costas y Comunidades A.C. Actualmente se desempeña como Director Académico en la Universidad Tecnológica de Escuinapa.",
        
        publicacionesRelevantes: [
            { anio: "Info", titulo: "No se listan publicaciones recientes en este perfil.", tipo: "Sin publicaciones destacadas" }
        ],
        
        esRector: false
    },

                // OBJETO 9: Dr. José Guillermo Galindo Reyes
    {
        id: 9,
        nombre: "Dr. José Guillermo Galindo Reyes",
        profesion: "Doctorado en Ciencias (IPN)",
        imagen: "img/Dr-Jose-Guillermo-Galindo-Reyes.jpg", 
        
        estudios: [
            "Licenciatura: Ingeniero Bioquímico (UAS)",
            "Maestría: Ciencias (UNAM)",
            "Doctorado: Ciencias (IPN)",
        ],
        
        biografia: "Actual soy profesor investigador universidad tecnológica de Escuinapa 2017-03-14 - presente logros: impartición de cursos de química inorgánica, química orgánica. apoyo a las actividades de investigación en las carreras de agricultura sustentable y bioprocesos, impartición de seminarios asesoría estudiantes. elaboración de nuevas prácticas para estudiantes de las carreras indicadas, desarrollo de proyectos de investigación, vinculados a las actividades agrícolas, acuícolas e industriales de la región (sur de Sinaloa) ver documento trayectoria profesional profesor investigador universidad tecnológica de Escuinapa 2017-03-14 - presente logros: impartición de cursos de química inorgánica, química orgánica. apoyo a las actividades de investigación en las carreras de agricultura sustentable y bioprocesos, impartición de seminarios asesoría estudiantes. elaboración de nuevas prácticas para estudiantes de las carreras indicadas, desarrollo de proyectos de investigación, vinculados a las actividades agrícolas, acuícolas e industriales de la región (sur de Sinaloa) ver documento profesor invitado como (profesor investigador de medio tiempo) universidad autónoma de baja california sur 1985-01-08 - 1985-06-29 logros: impartí dos cursos en la licenciatura de biología marina1.- bioquímica marina2.- microbiología marina profesor investigador de tiempo completo tit. c universidad autónoma de Sinaloa (uas) 1974-10-09 - 2016-02-29 página 3 de 50 manejo de software estadísticos, para cromatografía de gases y de líquidos logros: durante más de 40 años, impartí una centena de cursos en la licenciatura en biología pesquera, así como en la maestría y doctorado en recursos acuáticos de la facultad de ciencias del mar. fundé el laboratorio de contaminación y toxicología marina. dirigí unas 60 tesis en la licenciatura, maestría y doctorado. llevé a cabo más de 20 proyectos de investigación y colaboraciones con instituciones nacionales y extranjeras. trayectoria académica doctor en ciencias instituto politécnico nacional doctorado - grado obtenido ver documento maestro en ciencias.(ecología) instituto politécnico nacional maestría - grado obtenido ver documento maestro en ciencias del mar (oceanografía química) instituto politécnico nacional maestría - grado obtenido ver documento ingeniero bioquímico instituto politécnico nacional licenciatura - grado obtenido ver documento idiomas inglés - avanzado · certificado italiano - avanzado · certificado inglés (united states) - avanzado ·",
        
        publicacionesRelevantes: [
            { anio: "Info", titulo: "No se listan publicaciones recientes en este perfil.", tipo: "Sin publicaciones destacadas" }
        ],
        
        esRector: false
    }
];