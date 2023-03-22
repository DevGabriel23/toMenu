const platillos = require.context('../assets/platillos/', false, /\.(png|jpe?g|svg)$/);
const secciones = require.context('../assets/secciones/', false, /\.(png|jpe?g|svg)$/);

const platilloNames = platillos.keys();
const seccionesNames = secciones.keys();
const platilloObject = [];
const seccionObject = [];

console.log(platilloNames)
platilloNames.map((platillo, index) => {
    platilloObject[`image${index + 1}`] = platillos(platillo);
    return null;
});

seccionesNames.map((seccion, index) => {
    seccionObject[`image${index + 1}`] = secciones(seccion);
    return null;
});

const products = [
    {
        name: "Comida",
        img:seccionObject.image1,
        platillos: 
        [{
            image:platilloObject.image1,
            name: "Pozole",
            description: "caldo a base de maíz nixtamalizado, carne de cerdo o pollo y chiles. Se sirve con lechuga, rábanos, cebolla y limón para agregar al gusto.",
            price: 90
        },
        {
            image:platilloObject.image2,
            name: "Tamales",
            description: "Los tamales son unos bocados de masa de maíz rellenos de carne, pollo, vegetales o frijoles, envueltos en hojas de maíz y cocidos al vapor. Se sirven con salsa y crema.",
            price: 50
        },
        {
            image:platilloObject.image3,
            name: "Enchiladas",
            description: "Las enchiladas son tortillas de maíz rellenas de pollo o carne, enrolladas y bañadas en una salsa de chile rojo o verde. Se sirven con crema, queso y cebolla.",
            price: 80
        },
        {
            image:platilloObject.image4,
            name: "Mole",
            description: "El mole es un platillo tradicional que se hace con una mezcla de chiles, especias, semillas y chocolate, cocido lentamente con pollo o cerdo.Se sirve con ajonjolí y arroz blanco",
            price: 110
        }]
    },
    {
        name: "Antojitos",
        img:seccionObject.image2,
        platillos: 
        [{
            image:platilloObject.image5,
            name: "Tacos de carnitas",
            description: "Deliciosos tacos de carnitas de cerdo, con cebolla, cilantro y una salsa picante casera.",
            price: 12
        },
        {
            image:platilloObject.image6,
            name: "Quesadillas",
            description: "Quesadillas de tortilla de maiz hechas a mano, quesillo y 1 o 2 ingredientes (Carne asada, Chorizo, Champiñones, Flor de calabaza o Barbacoa)",
            price: 35
        },
        {
            image:platilloObject.image7,
            name: "Tostadas",
            description: "Tortillas fritas crujientes, cubiertas con frijoles refritos, lechuga, tomate, crema, queso y carne deshebrada o pollo.",
            price: 20
        },
        {
            image:platilloObject.image8,
            name: "Chilaquiles",
            description: "Tortillas de maíz fritas, cortadas en triángulos y bañadas en salsa de chile rojo o verde. Se sirven con crema, queso y cebolla, y se pueden acompañar con huevos, frijoles y carne.",
            price: 45
        }]
    },
    {
        name: "Bebidas",
        img:seccionObject.image3,
        platillos: 
        [{
            image:platilloObject.image9,
            name: "Horchata",
            description: "Bebida refrescante y dulce hecha a base de arroz, canela y azúcar. ",
            price: 15
        },
        {
            image:platilloObject.image10,
            name: "Agua fresca de frutas",
            description: "Bebidas naturales hechas con frutas frescas, agua y azúcar. Hay una gran variedad de sabores, como jamaica, tamarindo, sandía y piña.",
            price: 15
        },
        {
            image:platilloObject.image11,
            name: "Cerveza",
            description: "",
            price: 40
        },
        {
            image:platilloObject.image12,
            name: "Tequila",
            description: "",
            price: 50
        }]
    },
    {
        name: "Postres",
        img:seccionObject.image4,
        platillos: 
        [{
            image:platilloObject.image13,
            name: "Cheesecake de fresa",
            description: "Un cremoso y dulce cheesecake con un topping de fresas frescas y un crujiente de galleta.",
            price: 25
        },
        {
            image:platilloObject.image14,
            name: "Helado de vainilla",
            description: "Un clásico helado de vainilla, con una rica salsa de caramelo casera.",
            price: 20
        },
        {
            image:platilloObject.image15,
            name: "Tiramisú",
            description: "Un delicioso postre italiano hecho con capas de bizcocho empapado en café, crema de mascarpone y cacao en polvo.",
            price: 30
        },
        {
            image:platilloObject.image16,
            name: "Brownie de chocolate",
            description: "Un suculento brownie de chocolate con trozos de nueces, servido con una bola de helado de vainilla.",
            price: 20
        }]
    }
]

export {platilloObject as imageObject, products};
