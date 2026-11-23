const NUMERO_WHATSAPP = "526641234567";

const BD_CATEGORIAS = [
    { id: 1, nombre: "Collares" },
    { id: 2, nombre: "Pulseras" },
    { id: 3, nombre: "Anillos" },
    { id: 4, nombre: "Relojes" }
];

const BD_PRODUCTOS_INICIAL = [
    // ================= COLLARES (10) =================
    {
        id: 1,
        nombre: "Collar Minimalista Dorado",
        categoria_id: 1,
        precio: 350,
        stock: 12,
        destacado: true,
        imagen: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80"
    },
    {
        id: 2,
        nombre: "Collar Perla Cultivada Natural",
        categoria_id: 1,
        precio: 490,
        stock: 10,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80"
    },
    {
        id: 3,
        nombre: "Gargantilla Eslabones Oro 14k",
        categoria_id: 1,
        precio: 620,
        stock: 8,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500&q=80"
    },
    {
        id: 4,
        nombre: "Collar Dije Luna de Plata",
        categoria_id: 1,
        precio: 380,
        stock: 15,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&q=80"
    },
    {
        id: 5,
        nombre: "Collar Doble Cadena Champagne",
        categoria_id: 1,
        precio: 440,
        stock: 9,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1601121141799-c70a1832b9bf?w=500&q=80"
    },
    {
        id: 6,
        nombre: "Collar Corazón Cristal Zircón",
        categoria_id: 1,
        precio: 510,
        stock: 11,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80"
    },
    {
        id: 7,
        nombre: "Collar Medallón Vintage",
        categoria_id: 1,
        precio: 560,
        stock: 7,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&q=80"
    },
    {
        id: 8,
        nombre: "Gargantilla Rígida Dorada",
        categoria_id: 1,
        precio: 470,
        stock: 14,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&q=80"
    },
    {
        id: 9,
        nombre: "Collar Sol Radiante Baño de Oro",
        categoria_id: 1,
        precio: 410,
        stock: 10,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=500&q=80"
    },
    {
        id: 10,
        nombre: "Collar Estrella Polar Plata 925",
        categoria_id: 1,
        precio: 530,
        stock: 6,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&q=80"
    },

    // ================= PULSERAS (10) =================
    {
        id: 11,
        nombre: "Pulsera Eslabones Plata Fina",
        categoria_id: 2,
        precio: 420,
        stock: 20,
        destacado: true,
        imagen: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80"
    },
    {
        id: 12,
        nombre: "Brazalete Rígido Dorado Clásico",
        categoria_id: 2,
        precio: 480,
        stock: 12,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80"
    },
    {
        id: 13,
        nombre: "Pulsera Tenis Circonias Blancas",
        categoria_id: 2,
        precio: 690,
        stock: 8,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=80"
    },
    {
        id: 14,
        nombre: "Pulsera Perlas de Río Elegante",
        categoria_id: 2,
        precio: 390,
        stock: 15,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=500&q=80"
    },
    {
        id: 15,
        nombre: "Pulsera Cuero Trenzado y Acero",
        categoria_id: 2,
        precio: 340,
        stock: 18,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=500&q=80"
    },
    {
        id: 16,
        nombre: "Esclava Minimalista Oro Rosa",
        categoria_id: 2,
        precio: 450,
        stock: 11,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80"
    },
    {
        id: 17,
        nombre: "Pulsera Cadena Cubana Delgada",
        categoria_id: 2,
        precio: 520,
        stock: 9,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&q=80"
    },
    {
        id: 18,
        nombre: "Brazalete Abierto Nudo Dorado",
        categoria_id: 2,
        precio: 410,
        stock: 14,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80"
    },
    {
        id: 19,
        nombre: "Pulsera Dije Infinito Plata",
        categoria_id: 2,
        precio: 360,
        stock: 16,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=80"
    },
    {
        id: 20,
        nombre: "Set 3 Pulseras Combinadas Oro",
        categoria_id: 2,
        precio: 580,
        stock: 10,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=500&q=80"
    },

    // ================= ANILLOS (10) =================
    {
        id: 21,
        nombre: "Anillo Acero Inoxidable Pulido",
        categoria_id: 3,
        precio: 280,
        stock: 14,
        destacado: true,
        imagen: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80"
    },
    {
        id: 22,
        nombre: "Anillo Solitario Diamante Zircón",
        categoria_id: 3,
        precio: 540,
        stock: 9,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=500&q=80"
    },
    {
        id: 23,
        nombre: "Argolla Clásica Baño de Oro 18k",
        categoria_id: 3,
        precio: 390,
        stock: 15,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80"
    },
    {
        id: 24,
        nombre: "Anillo Sello Cuadrado Dorado",
        categoria_id: 3,
        precio: 460,
        stock: 8,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&q=80"
    },
    {
        id: 25,
        nombre: "Anillo Trenzado Plata 925",
        categoria_id: 3,
        precio: 320,
        stock: 12,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=500&q=80"
    },
    {
        id: 26,
        nombre: "Anillo Media Alianza Cristales",
        categoria_id: 3,
        precio: 490,
        stock: 10,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=500&q=80"
    },
    {
        id: 27,
        nombre: "Anillo Ajustable Hoja de Laurel",
        categoria_id: 3,
        precio: 290,
        stock: 18,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&q=80"
    },
    {
        id: 28,
        nombre: "Anillo Negro Mate Carbón",
        categoria_id: 3,
        precio: 350,
        stock: 11,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=500&q=80"
    },
    {
        id: 29,
        nombre: "Set 4 Anillos Apilables Dorados",
        categoria_id: 3,
        precio: 430,
        stock: 13,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80"
    },
    {
        id: 30,
        nombre: "Anillo Piedra Ónix Natural",
        categoria_id: 3,
        precio: 520,
        stock: 7,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&q=80"
    },

    // ================= RELOJES (10) =================
    {
        id: 31,
        nombre: "Reloj Clásico Cuero Negro",
        categoria_id: 4,
        precio: 1250,
        stock: 8,
        destacado: true,
        imagen: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80"
    },
    {
        id: 32,
        nombre: "Reloj Cronógrafo Plateado Ejecutivo",
        categoria_id: 4,
        precio: 1590,
        stock: 6,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&q=80"
    },
    {
        id: 33,
        nombre: "Reloj Malla Milanesa Dorado",
        categoria_id: 4,
        precio: 1420,
        stock: 9,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    },
    {
        id: 34,
        nombre: "Reloj Minimalista Carátula Blanca",
        categoria_id: 4,
        precio: 1180,
        stock: 11,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80"
    },
    {
        id: 35,
        nombre: "Reloj Acero Negro Total Black",
        categoria_id: 4,
        precio: 1650,
        stock: 5,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&q=80"
    },
    {
        id: 36,
        nombre: "Reloj Correa Piel Café Vintage",
        categoria_id: 4,
        precio: 1320,
        stock: 10,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80"
    },
    {
        id: 37,
        nombre: "Reloj Bicolor Oro y Plata",
        categoria_id: 4,
        precio: 1750,
        stock: 6,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&q=80"
    },
    {
        id: 38,
        nombre: "Reloj Esfera Azul Marino Acero",
        categoria_id: 4,
        precio: 1490,
        stock: 7,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&q=80"
    },
    {
        id: 39,
        nombre: "Reloj Ultradelgado Champagne",
        categoria_id: 4,
        precio: 1290,
        stock: 12,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    },
    {
        id: 40,
        nombre: "Reloj Automático Esqueleto Oro",
        categoria_id: 4,
        precio: 1980,
        stock: 4,
        destacado: false,
        imagen: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&q=80"
    }
];

function inicializarBD() {
    const productosGuardados = JSON.parse(localStorage.getItem("tabla_productos")) || [];
    
    if (productosGuardados.length < 40) {
        localStorage.setItem("tabla_categorias", JSON.stringify(BD_CATEGORIAS));
        localStorage.setItem("tabla_productos", JSON.stringify(BD_PRODUCTOS_INICIAL));
    }
    if (!localStorage.getItem("tabla_pedidos")) {
        localStorage.setItem("tabla_pedidos", JSON.stringify([]));
    }
}

inicializarBD();

function obtenerCategorias() {
    return JSON.parse(localStorage.getItem("tabla_categorias")) || [];
}

function obtenerProductos() {
    const productos = JSON.parse(localStorage.getItem("tabla_productos")) || [];
    const categorias = obtenerCategorias();
    return productos.map(prod => {
        const cat = categorias.find(c => c.id === prod.categoria_id);
        return {
            ...prod,
            categoria_nombre: cat ? cat.nombre : "General"
        };
    });
}

function obtenerPedidos() {
    return JSON.parse(localStorage.getItem("tabla_pedidos")) || [];
}