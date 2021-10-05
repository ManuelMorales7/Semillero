const impactos = [
    {
        codigo: 31,
        descripcion: "Bajo",
        valor: 2,
    },

    {
        codigo: 29,
        descripcion: "Medio",
        valor: 4,
    },

    {
        codigo: 26,
        descripcion: "Alto",
        valor: 6,
    },

    {
        codigo: 30,
        descripcion: "Catastrófico",
        valor: 8,
    },
];

const probabilidad = [
    {
        codigo: 24,
        descripcion: "Alta",
        valor: 5,
    },

    {
        codigo: 17,
        descripcion: "Media",
        valor: 3,
    },

    {
        codigo: 25,
        descripcion: "Medio Bajo",
        valor: 2,
    },

    {
        codigo: 23,
        descripcion: "Baja",
        valor: 1,
    },  
];

const tiposDeRiesgos = [
    {
        codigo: 23,
        descripcion: "Ambiental",
        interno: false,
    },

    {
        codigo: 17,
        descripcion: "Financiero",
        interno: false,
    },

    {
        codigo: 18,
        descripcion: "Mercadeo",
        interno: false,
    },

    {
        codigo: 19,
        descripcion: "Seguridad Industrial",
        interno: false,
    },

    {
        codigo: 20,
        descripcion: "Laboral",
        interno: false,
    },

    {
        codigo: 21,
        descripcion: "Operativo",
        interno: true,
    },

    {
        codigo: 22,
        descripcion: "Humano",
        interno: false,
    },
]



const evaulacionDeRiesgos = [
    {
        codigo: 5,
        descripcion: "Impacto bajo",
        valorMinimo: 0,
        valorMaximo: 10,
    },

    {
        codigo: 6,
        descripcion: "Impacto Medio",
        valorMinimo: 11,
        valorMaximo: 20,
    },
    
    {
        codigo: 3,
        descripcion: "Impacto Alto",
        valorMinimo: 21,
        valorMaximo: 30,
    },

    {
        codigo: 7,
        descripcion: "Catastrófico",
        valorMinimo: 31,
        valorMaximo: 40,
    },    
];

export {impactos};
export {probabilidad};
export {tiposDeRiesgos};
export {evaulacionDeRiesgos};