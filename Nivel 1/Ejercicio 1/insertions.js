//let MongoClient = require('../Dependencias/node_modules/mongodb').MongoClient;
//let ObjectID = require('../Dependencias/node_modules/mongodb').ObjectId;
let MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectId;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    db = client.db('optica');

    empleados = db.collection('empleados')
    gafas = db.collection('gafas')
    proveedores = db.collection('proveedores')
    clientes = db.collection('clientes')

    let empleado1Id = new ObjectID();
    let empleado2Id = new ObjectID();
    let empleado3Id = new ObjectID();

    empleados.insertMany([
        {
            _id: empleado1Id,
            nombre: "Antonio",
            direccion: {
                calle: "Falsa",
                numero: 123,
                piso: 2,
                puerta: "B",
                ciudad: "Barcelona",
                codigo_postal: "08123",
                pais: "España"
            },
            telefono: "+34658587514"
        }, {
            _id: empleado2Id,
            nombre: "Julia",
            direccion: {
                calle: "Michoacán",
                numero: 98,
                piso: 6,
                puerta: "1",
                ciudad: "Badalona",
                codigo_postal: "08988",
                pais: "España"
            },
            telefono: "+34986457441"
        }, {
            empleado3Id,
            nombre: "Teresa",
            direccion: {
                calle: "Valle Inclán",
                numero: 35,
                piso: 3,
                puerta: "5",
                ciudad: "Barcelona",
                codigo_postal: "08723",
                pais: "España"
            },
            telefono: "+349654871263"
        }]);

    let cliente1Id = new ObjectID();
    let cliente2Id = new ObjectID();
    let cliente3Id = new ObjectID();

    clientes.insertMany([
        {
            _id: cliente1Id,
            nombre: "Julián López",
            direccion: {
                calle: "America",
                numero: 68,
                piso: 1,
                puerta: "3",
                ciudad: "Madrid",
                codigo_postal: "01561",
                pais: "España"
            },
            telefono: "+3468974513",
            email: "jlopez@gmail.com",
            fecha_registro: new Date(1660009286826)
        }, {
            _id: cliente2Id,
            nombre: "Marina Pérez",
            direccion: {
                calle: "Aguilera",
                numero: 198,
                piso: 4,
                puerta: "2",
                ciudad: "Murcia",
                codigo_postal: "30587",
                pais: "España"
            },
            telefono: "+3493647893",
            email: "mlopez@outlook.com",
            fecha_registro: new Date(1660159286826),
            cliente_recomendador: cliente1Id
        }, {
            _id: cliente3Id,
            nombre: "Guillermo García",
            direccion: {
                calle: "Caralt",
                numero: 12,
                piso: 7,
                puerta: "3",
                ciudad: "Valencia",
                codigo_postal: "36487",
                pais: "España"
            },
            telefono: "+34659658745",
            email: "guillermo.garcia@msn.com",
            fecha_registro: new Date(1660209286826)
        }]);

    let proveedor1Id = new ObjectID();
    let proveedor2Id = new ObjectID();
    let proveedor3Id = new ObjectID();

    proveedores.insertMany([{
        _id: proveedor1Id,
        nombre: "Gafex SL",
        direccion: {
            calle: "Nulles",
            numero: 163,
            piso: 0,
            puerta: "A",
            ciudad: "Barcelona",
            codigo_postal: "08912",
            pais: "España"
        },
        telefono: "931231254",
        fax: "931235412",
        nif: "B1231231Q"
    },
    {
        _id: proveedor2Id,
        nombre: "Visión SA",
        direccion: {
            calle: "Constantí",
            numero: 1,
            piso: 2,
            puerta: "1",
            ciudad: "Tarragona",
            codigo_postal: "06325",
            pais: "España"
        },
        telefono: "925648766",
        fax: "925648767",
        nif: "A15321341F"
    },
    {
        _id: proveedor3Id,
        nombre: "Gafas Paco",
        direccion: {
            calle: "Llano del Arrabal",
            numero: 43,
            piso: 1,
            puerta: "1",
            ciudad: "Albarracín",
            codigo_postal: "62457",
            pais: "España"
        },
        telefono: "978451236",
        fax: "978451237",
        nif: "A64563452T"
    }]);

    let gafa1Id = new ObjectID();
    let gafa2Id = new ObjectID();
    let gafa3Id = new ObjectID();

    gafas.insertMany([{
        _id: gafa1Id,
        marca: "RayBan",
        graduacion: {
            izquierda: 0.98,
            derecha: 1.2
        },
        montura: "flotante",
        color_montura: "Azul",
        color_vidrio: {
            izquierdo: "Transparente",
            derecho: "Transparente"
        },
        precio: 234.59,
        proveedor: proveedor2Id,
        cliente: cliente1Id,
        vendedor: empleado1Id
    }, {
        _id: gafa2Id,
        marca: "Oakley",
        graduacion: {
            izquierda: 1.98,
            derecha: 0.2
        },
        montura: "pasta",
        color_montura: "Negro",
        color_vidrio: {
            izquierdo: "Transparente",
            derecho: "Transparente"
        },
        precio: 199.99,
        proveedor: proveedor1Id,
        cliente: cliente2Id,
        vendedor: empleado3Id
    }, {
        _id: gafa3Id,
        marca: "Calvin Klein",
        graduacion: {
            izquierda: 0.9,
            derecha: 1.2
        },
        montura: "metalica",
        color_montura: "Gris",
        color_vidrio: {
            izquierdo: "Transparente",
            derecho: "Transparente"
        },
        precio: 399.95,
        proveedor: proveedor3Id,
        cliente: cliente3Id,
        vendedor: empleado2Id
    }]);
});