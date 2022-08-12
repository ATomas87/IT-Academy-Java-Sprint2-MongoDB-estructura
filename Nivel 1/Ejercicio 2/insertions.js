//let MongoClient = require('../Dependencias/node_modules/mongodb').MongoClient;
//let ObjectID = require('../Dependencias/node_modules/mongodb').ObjectId;
let MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectId;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    db = client.db('pizzeria');

    const bebidas = db.collection('bebidas');
    const categorias_pizza = db.collection('categorias_pizza');
    const clientes = db.collection('clientes');
    const empleados = db.collection('empleados');
    const hamburguesas = db.collection('hamburguesas');
    const localidades = db.collection('localidades');
    const pedidos = db.collection('pedidos');
    const pizzas = db.collection('pizzas');
    const provincias = db.collection('provincias');
    const tiendas = db.collection('tiendas');

    let provincia1Id = new ObjectID();
    let provincia2Id = new ObjectID();

    provincias.insertMany([
        {
            _id: provincia1Id,
            nombre: "Madrid"
        }, {
            _id: provincia2Id,
            nombre: "Barcelona"
        }])

    let localidad1Id = new ObjectID();
    let localidad2Id = new ObjectID();

    localidades.insertMany([
        {
            _id: localidad1Id,
            nombre: "Badalona",
            provincia: provincia2Id
        }, {
            _id: localidad2Id,
            nombre: "San Sebastián de los Reyes",
            provincia: provincia1Id
        }]);

    let tienda1Id = new ObjectID();
    let tienda2Id = new ObjectID();

    tiendas.insertMany([
        {
            _id: tienda1Id,
            direccion: {
                calle: "Francesc Layret",
                numero: 34
            },
            codigo_postal: "08934",
            localidad: localidad1Id,
            provincia: provincia2Id
        }, {
            _id: tienda2Id,
            direccion: {
                calle: "Avenida Carlos III",
                numero: 157
            },
            codigo_postal: "15478",
            localidad: localidad2Id,
            provincia: provincia1Id
        }])

    let empleado1Id = new ObjectID();
    let empleado2Id = new ObjectID();
    let empleado3Id = new ObjectID();
    let empleado4Id = new ObjectID();

    empleados.insertMany([
        {
            _id: empleado1Id,
            nombre: "Antonio",
            apellidos: "Jiménez",
            nif: "98881231Q",
            telefono: "+34658587514",
            tipo: "cocinero",
            tienda: tienda1Id
        }, {
            _id: empleado2Id,
            nombre: "Julia",
            apellidos: "Martínez",
            nif: "523412131S",
            telefono: "+34986457441",
            tipo: "repartidor",
            tienda: tienda1Id
        }, {
            _id: empleado3Id,
            nombre: "Teresa",
            apellidos: "Gutierrez",
            nif: "83543623G",
            telefono: "+349654871263",
            tipo: "cocinero",
            tienda: tienda2Id
        }, {
            _id: empleado4Id,
            nombre: "Francisco",
            apellidos: "García",
            nif: "78961234F",
            telefono: "+34935647891",
            tipo: "repartidor",
            tienda: tienda2Id
        }]);

    let cliente1Id = new ObjectID();
    let cliente2Id = new ObjectID();
    let cliente3Id = new ObjectID();

    clientes.insertMany([
        {
            _id: cliente1Id,
            nombre: "Julián",
            apellidos: "López",
            direccion: {
                calle: "America",
                numero: 68,
                piso: 1,
                puerta: "3",
            },
            codigo_postal: "01561",
            localidad: localidad2Id,
            telefono: "+3468974513"
        }, {
            _id: cliente2Id,
            nombre: "Marina",
            apellidos: "Pérez",
            direccion: {
                calle: "Aguilera",
                numero: 198,
                piso: 4,
                puerta: "2"
            },
            codigo_postal: "30587",
            localidad: localidad1Id,
            telefono: "+3493647893"
        }, {
            _id: cliente3Id,
            nombre: "Guillermo",
            apellidos: "García",
            direccion: {
                calle: "Caralt",
                numero: 12,
                piso: 7,
                puerta: "3",
            },
            codigo_postal: "36487",
            localidad: localidad2Id,
            telefono: "+34659658745"
        }]);

    let categoria1Id = new ObjectID();
    let categoria2Id = new ObjectID();
    let categoria3Id = new ObjectID();

    categorias_pizza.insertMany([{
        _id: categoria1Id,
        nombre: "Vegetariana"
    },
    {
        _id: categoria2Id,
        nombre: "Sin gluten"
    },
    {
        _id: categoria3Id,
        nombre: "normal"
    }]);

    let pizza1Id = new ObjectID();
    let pizza2Id = new ObjectID();
    let pizza3Id = new ObjectID();
    let pizza4Id = new ObjectID();

    pizzas.insertMany([{
        _id: pizza1Id,
        nombre: "Margarita",
        descripcion: "Pizza con tomate, mozzarella y rúcula",
        imagen: "https://images.pizzeria.com/pizzas/margarita.jpg",
        categoria: categoria1Id,
        precio: 12.99
    }, {
        _id: pizza2Id,
        nombre: "Margarita sin gluten",
        descripcion: "Pizza con tomate, mozzarella, rúcula y masa sin gluten",
        imagen: "https://images.pizzeria.com/pizzas/margarita-sin-gluten.jpg",
        categoria: categoria2Id,
        precio: 12.99
    }, {
        _id: pizza3Id,
        nombre: "Carnívora",
        descripcion: "Pizza con tomate, mozzarella, salami picante, bacon, pollo y carne de ternera",
        imagen: "https://images.pizzeria.com/pizzas/carnivora.jpg",
        categoria: categoria3Id,
        precio: 14.99
    }, {
        _id: pizza4Id,
        nombre: "Alfredo",
        descripcion: "Pizza con tomate, mozzarella, olivas negras, champiñones y pimiento verde",
        imagen: "https://images.pizzeria.com/pizzas/alfredo.jpg",
        categoria: categoria3Id,
        precio: 13.99
    }]);

    let hamburguesa1Id = new ObjectID();
    let hamburguesa2Id = new ObjectID();
    let hamburguesa3Id = new ObjectID();
    let hamburguesa4Id = new ObjectID();

    hamburguesas.insertMany([{
        _id: hamburguesa1Id,
        nombre: "Diablo",
        descripcion: "Hamburguesa de ternera con salsa picante, lechuga, tomate y bacon",
        imagen: "https://images.pizzeria.com/hamburguesas/diablo.jpg",
        precio: 10.99
    }, {
        _id: hamburguesa2Id,
        nombre: "Mexicana",
        descripcion: "Hamburguesa de ternera con guacamole",
        imagen: "https://images.pizzeria.com/hamburguesas/mexicana.jpg",
        precio: 12.99
    }, {
        _id: hamburguesa3Id,
        nombre: "Smashed",
        descripcion: "Hamburguesa de ternera con salsa de queso, lechuga, tomate y bacon",
        imagen: "https://images.pizzeria.com/hamburguesas/smashed.jpg",
        precio: 11.99
    }, {
        _id: hamburguesa4Id,
        nombre: "Corral",
        descripcion: "Hamburguesa de pollo con lechuga, tomate y bacon",
        imagen: "https://images.pizzeria.com/hamburguesas/corral.jpg",
        precio: 10.99
    }]);

    let bebida1Id = new ObjectID();
    let bebida2Id = new ObjectID();
    let bebida3Id = new ObjectID();

    bebidas.insertMany([{
        _id: bebida1Id,
        nombre: "Coca Cola 33CL",
        descripcion: "Bebida carbonatada con sabor a cola",
        imagen: "https://images.pizzeria.com/bebidas/coca-cola.jpg",
        precio: 1.99
    }, {
        _id: bebida2Id,
        nombre: "Fanta Limón 33CL",
        descripcion: "Bebida carbonatada con sabor a limón",
        imagen: "https://images.pizzeria.com/bebidas/fanta-limon.jpg",
        precio: 1.99
    }, {
        _id: bebida3Id,
        nombre: "Agua 50CL",
        descripcion: "Botella de agua pequeña",
        imagen: "https://images.pizzeria.com/bebidas/botella-agua.jpg",
        precio: 1.49
    }]);

    let pedido1Id = new ObjectID();
    let pedido2Id = new ObjectID();

    pedidos.insertMany([
        {
            _id: pedido1Id,
            cliente: cliente1Id,
            tienda: tienda1Id,
            fecha_pedido: new Date(1660305793902),
            tipo: "domicilio",
            repartidor: empleado2Id,
            fecha_entrega: new Date(1660306793902),
            pizzas: [
                { pizza: pizza1Id, cantidad: 1 },
                { pizza: pizza2Id, cantidad: 1 }
            ],
            bebidas: [{ bebida: bebida2Id, cantidad: 2 }],
            precio_total: 25.49
        }, {
            _id: pedido2Id,
            cliente: cliente3Id,
            tienda: tienda2Id,
            fecha_pedido: new Date(1660304793902),
            tipo: "recoger",
            hamburguesas: [
                { hamburguesa: hamburguesa2Id, cantidad: 1 },
                { hamburguesa: hamburguesa1Id, cantidad: 2 }],
            bebidas: [
                { bebida: bebida1Id, cantidad: 1 },
                { bebida: bebida3Id, cantidad: 3 }
            ],
            precio_total: 35.99
        }]);

});