export const mockProducts = [
    // Celulares
    {
        title: "Celular Motorola G23",
        description: "Un smartphone poderoso con pantalla HD, cámara de 48MP y 128GB de almacenamiento.",
        stock: 50,
        price: 329999,
        slug: "motorola-g23",
        image: "motorola_g23.webp",
        type: "celulares",
        brand: "Motorola",
        discount:{
            status: true,
            amount: 0.1
        },
        installments:{
            status: false,
            amount: 6
        }
    },
    {
        title: "Celular Motorola E22",
        description: "Un smartphone elegante con pantalla vibrante, cámara de 48MP y 128GB de almacenamiento.",
        stock: 30,
        price: 229999,
        slug: "motorola-e22",
        image: "motorola_e22.webp",
        type: "celulares",
        brand: "Motorola",
        discount:{
            status: false,
            amount: 0.1
        },
        installments:{
            status: false,
            amount: 6
        }
    },
    {
        title: "Celular Quantum Q03",
        description: "Un dispositivo innovador con pantalla HD, cámara de 48MP y 128GB de almacenamiento.",
        stock: 20,
        price: 199000,
        slug: "quantum-q03",
        image: "quantum_q03.webp",
        type: "celulares",
        brand: "Quantum",
        discount:{
            status: false,
            amount: 0.1
        },
        installments:{
            status: false,
            amount: 6
        }
    },

    // Notebooks
    {
        title: "Notebook Asus Zenbook 14",
        description: "Portátil ligero con procesador AMD Ryzen 5 7530U, pantalla de 14 pulgadas 8GB de RAM y 512GB de capacidad.",
        stock: 15,
        price: 1549999,
        slug: "asus-zenbook14",
        image: "asus_zenbook14.webp",
        type: "notebooks",
        brand: "Asus",
        discount:{
            status: false,
            amount: 0.1
        },
        installments:{
            status: true,
            amount: 6
        }
    },
    {
        title: "Notebook Asus Vivobook 15",
        description: "Portátil potente procesador Intel Core i7-1260P, pantalla de 15,6 pulgadas, 16GB de RAM y SSD de 512GB.",
        stock: 10,
        price: 1599999,
        slug: "asus-vivobook15",
        image: "asus_vivobook15.webp",
        type: "notebooks",
        brand: "Asus",
        discount:{
            status: true,
            amount: 0.2
        },
        installments:{
            status: false,
            amount: 6
        }
    },
    {
        title: "Notebook Asus Tuf Gaming F15",
        description: "Notebook gamer con pantalla Full HD de 15.6 pulgadas, procesador Intel Core i7 de 12° generación y 1TB SSD.",
        stock: 5,
        price: 2149999,
        slug: "asus-tufgamingf15",
        image: "asus_tufgamingf15.webp",
        type: "notebooks",
        brand: "Asus",
        discount:{
            status: false,
            amount: 0.1
        },
        installments:{
            status: false,
            amount: 6
        }
    },

    // Accesorios
    {
        title: "Auriculares Bluetooth Lenovo XG02",
        description: "Auriculares inalámbricos con cancelación de ruido y hasta 3 horas de reproducción.",
        stock: 10,
        price: 19999,
        slug: "lenovo-xg02",
        image: "lenovo_xg02.webp",
        type: "accesorios",
        brand: "Lenovo",
        discount:{
            status: false,
            amount: 0.1
        },
        installments:{
            status: false,
            amount: 6
        }
    },
    {
        title: "Cable USB-C Belkin",
        description: "Cable de carga rápida USB-C de 2 metros de longitud.",
        stock: 20,
        price: 19999,
        slug: "belkin-usb-c",
        image: "belkin_usbc.webp",
        type: "accesorios",
        brand: "Belkin",
        discount:{
            status: false,
            amount: 0.1
        },
        installments:{
            status: false,
            amount: 6
        }
    },
    {
        title: "Funda para Laptop IBRS215",
        description: "Funda acolchada para laptops de hasta 15,6 pulgadas, resistente al agua.",
        stock: 5,
        price: 29999,
        slug: "case-ibrs215",
        image: "case_ibrs215.webp",
        type: "accesorios",
        brand: "Case Logic",
        discount:{
            status: true,
            amount: 0.15
        },
        installments:{
            status: false,
            amount: 6
        }
    }
];