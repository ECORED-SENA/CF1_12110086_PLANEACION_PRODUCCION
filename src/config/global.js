export default {
  global: {
    componenteFormativo: 'Planeación y Plan Maestro de la producción',
    descripcionCurso:
      'En la planeación de la capacidad productiva y las cargas de trabajo, la estrategia es determinar qué tan preciso puede ser el equilibrio de los tres principales recursos de un proceso logístico: las personas, la infraestructura tecnológica y digital y las materias primas. <br> Este componente hace referencia a las plantas de producción: el Plan maestro de producción, que permite comprender, lo qué se va a hacer en un período determinado y el nivel de trazabilidad porcentual, servicios o unidades que se pueden procesar de manera eficiente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planeación de la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos generales, Estrategias, y Aplicación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistemas de Producción',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Secuencias operacionales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Capacidad productiva y cargas de trabajo',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Producción por lotes u órdenes de producción',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Control de inventario en proceso',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plan maestro de la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición y conceptos generales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Requerimientos para un Plan Maestro de Producción',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Resultados del Plan Maestro de Producción PMP',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Cómo elaborar un Plan Maestro de Producción PMP',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Producción por lotes u órdenes de producción.	Sistema de inventarios',
      referencia:
        'Martinez Rebeca. (2001, Noviembre 27). El inventario. Gestiopolis',
      tipo: 'Sitio Web',
      link: 'https://www.gestiopolis.com/el-inventario',
    },
    {
      tema: 'Cómo elaborar un Plan Maestro de Producción PMP',
      referencia:
        'EBC Escuela Bancaria Comercial.  [EBC Academia]. (2019, 22 de noviembre) ¿Cómo elaborar un plan maestro de producción?',
      tipo: 'Video',
      link: 'https://youtu.be/jSD2gNaVd3Q ',
    },
    {
      tema: 'Cómo elaborar un Plan Maestro de Producción PMP',
      referencia:
        'Edwin Manuel Mieses Hernández.[Edwin Manuel Mieses Hernandez].  (2017, 16 de febrero). Plan Maestro de Producción Ejemplo en Excel.  ',
      tipo: 'Video',
      link: 'https://youtu.be/X2T8d9rZq6Y',
    },
  ],
  glosario: [
    {
      termino: 'Cargas de trabajo',
      significado:
        'Conjunto de requerimientos que debe realizar un trabajador en su jornada laboral.',
    },
    {
      termino: 'Código sustantivo del trabajo',
      significado:
        'Documento constitucional donde se especifican todas las normas que regulan el contexto laboral en el país.',
    },
    {
      termino: 'Cuadro de control',
      significado:
        'Documento donde se monitorizan procesos relacionados con la producción.',
    },
    {
      termino: 'Días hábiles',
      significado: 'Se refiere a los días del año que son laborables.',
    },
    {
      termino: 'Estatus',
      significado: 'Posición que se ocupa dentro de un grupo social.',
    },
    {
      termino: 'Estudio de métodos',
      significado:
        'Hace referencia al registro y el análisis de los procesos establecidos del trabajo.',
    },
    {
      termino: 'Índice de productividad',
      significado:
        'Permite comparar el nivel de eficiencia de una empresa con relación a sus procesos.',
    },
    {
      termino: 'Listado operacional',
      significado:
        'Se refiere al orden en que se realizan las actividades de un proceso.',
    },
    {
      termino: 'Orden de producción',
      significado:
        'Documento de instrucción que permite establecer la dirección de un proceso.',
    },
    {
      termino: 'Polifuncionalidad',
      significado:
        'Capacidad de llevar a cabo distintas actividades en un mismo tiempo determinado.',
    },
    {
      termino: 'Proceso productivo',
      significado:
        'Conjunto de actividades que lleva a cabo una organización para generar productos o servicios.',
    },
    {
      termino: 'Referencia',
      significado: 'Código con el que se identifica una prenda.',
    },
    {
      termino: 'Variables',
      significado: 'Elementos característicos que pueden cambiar.',
    },
    {
      termino: 'Ventaja competitiva',
      significado:
        'Característica que distingue a una empresa sobre el mercado en general y se entiende como un valor agregado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ararat, Alejandra. (2010). Estudio de Métodos y Tiempos en el Proceso Productivo de la Línea de Camisas Interior de MAKILA CTA., para mejorar la productividad de la empresa. Santiago de Cali: Universidad Autónoma de Occidente.',
      link: 'https://red.uao.edu.co/handle/10614/1175',
    },
    {
      referencia:
        'Empresa: Investigación y pensamiento crítico, Edición Especial, 50-56.',
      link: 'http://dx.doi.org/10.17993/3cemp.2017.especial.50-56',
    },
    {
      referencia:
        'García Criollo, Roberto. (2005). Estudio del trabajo: Ingeniería de métodos y medición del trabajo. Segunda edición. México: Mac Graw Hill.',
    },
    {
      referencia:
        'Hanke, John E. y Wichern, Dean W. (2006). Pronósticos en los negocios novena edición. Pearson Educación, pp. 1-13.',
    },
    {
      referencia:
        'Hernández, Juan Carlos, Vizán Idoipe, Antonio (2013) Lean Manufacturing editorial p. 6.',
      link:
        'https://www.eoi.es/es/savia/publicaciones/20730/lean-manufacturing-concepto-tecnicas-e-implantacion',
    },
    {
      referencia:
        'Keat, Paul G. y Young, Philip K. Y. (2004). Economía de empresa. Pearson Educación, pp. 221-269',
    },
    {
      referencia:
        'Monks, Joseph G. (1991). Administración de operaciones. Serie Schaum. México: MacGraw Hill.',
    },
    {
      referencia:
        'OIT (1996). Introducción al estudio del trabajo. Ginebra: Oficina Internacional del Trabajo. Cuarta edición (revisada).',
    },
    {
      referencia:
        'Proaño Villavicencio, D.X. (2017). Metodología para elaborar un plan de mejora continua 3CProaño Villavicencio, D.X. (2017). Metodología para elaborar un plan de mejora continua. 3C Empresa: investigación y pensamiento crítico, Edición Especial, 50-56',
      link: 'http://dx.doi.org/10.17993/3cemp.2017.especial.50-56',
    },
    {
      referencia:
        'Ramos, D (2018) Las siete herramientas estadísticas de calidad. Artículo de Qualiex- Blog de Calidad. ',
      link: 'https://blogdelacalidad.com/las-siete-herramientas-de-la-calidad/',
    },
    {
      referencia: 'Ruiz, Muñoz, D. (2014) Manual de estadística.',
      link: 'https://www.eumed.net/cursecon/libreria/drm/24.pdf ',
    },
    {
      referencia:
        'Salazar, P, C; Del Castillo, G. S. (2018) Fundamentos básicos de estadística. Primera Edición.',
      link:
        'https://www.academia.edu/40595228/Fundamentos_B%C3%A1sicos_de_Estad%C3%ADstica_Libro',
    },
    {
      referencia:
        'Sipper, Daniel y Bulfín, Robert L. Jr. Planeación y control de la producción Pg. 26.',
      link:
        'https://www.academia.edu/10997351/Daniel_Sipper_Planeaci%C3%B3n_y_Control_de_La_Producci%C3%B3n',
    },
    {
      referencia:
        'Westwood. John (1990). Planeación de mercados. Análisis evaluación y estrategias de Serie Empresarial, LEGIS.: Bogotá Colombia, Publicado Kogan Page Londres.',
    },
    {
      referencia:
        'William K, Hodson. Editor en jefe (1996). Maynard Manual Del Ingeniero Industrial enciclopedia tomo 1 a 4. Serie México: MacGraw Hill.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo de desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Manuel Isaza Córdoba',
        cargo: 'Experto temático',
        centro: 'Centro del Diseño y la Metrología - Regional Distrito capital',
      },
      {
        nombre: 'Luz Aída Quintero Velásquez',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro del Diseño y la Metrología - Regional Distrito capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro del Diseño y la Metrología - Regional Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anllelo Andrés Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios  - Regional Tolima',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mary Jeans Palacio Camacho',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
