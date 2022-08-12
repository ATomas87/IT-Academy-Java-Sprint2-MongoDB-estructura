db = db.getSiblingDB('optica');

db.createCollection('proveedores', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "direccion", "telefono", "fax", "nif"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre del proveedor. Cadena de texto y campo requerido."
                },
                direccion: {
                    bsonType: "object",
                    description: "Dirección del proveedor. Objeto con la dirección completa y campo requerido",
                    required: ["calle", "numero", "piso", "puerta", "ciudad", "codigo_postal", "pais"],
                    properties: {
                        calle: {
                            bsonType: "string",
                            description: "Nombre de la calle. Campo requerido de tipo string."
                        },
                        numero: {
                            bsonType: "int",
                            description: "Número de la calle. Campo requerido de tipo int."
                        },
                        piso: {
                            bsonType: "int",
                            description: "Número de piso. Campo requerido de tipo int."
                        },
                        puerta: {
                            bsonType: "string",
                            description: "Puerta del piso, admite números y letras. Campo requerido de tipo string."
                        },
                        ciudad: {
                            bsonType: "string",
                            description: "Ciudad de la dirección. Campo requerido de tipo string."
                        },
                        codigo_postal: {
                            bsonType: "string",
                            description: "Código postal de la dirección. Campo requerido de tipo string."
                        },
                        pais: {
                            bsonType: "string",
                            description: "País de la dirección. Campo requerido de tipo string."
                        }
                    }
                },
                telefono: {
                    bsonType: "string",
                    description: "Teléfono del proveedor. Campo requerido de tipo string."
                },
                fax: {
                    bsonType: "string",
                    description: "Fax del proveedor. Campo requerido de tipo string."
                },
                nif: {
                    bsonType: "string",
                    description: "NIF del proveedor. Campo requerido de tipo int."
                }
            }
        }
    }
});

db.createCollection('gafas', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["marca", "graduacion", "montura", "color_montura", "color_vidrio", "precio", "proveedor", "cliente", "vendedor"],
            properties: {
                marca: {
                    bsonType: "string",
                    description: "Marca de las gafas. Campo requerido de tipo string."
                },
                graduacion: {
                    bsonType: "object",
                    description: "Graduación de los vídrios. Campo requerido de tipo object.",
                    required: ["izquierda", "derecha"],
                    properties: {
                        izquierda: {
                            bsonType: "double",
                            description: "Graduación del vídrio izquierdo. Campo requerido de tipo double."
                        },
                        derecha: {
                            bsonType: "double",
                            description: "Graduación del vídrio derecho. Campo requerido de tipo double."
                        }
                    }
                },
                montura: {
                    enum: ["flotante", "pasta", "metalica"],
                    description: "Tipo de montura de las gafas (flotante, pasta o metálica). Sólo puede tomar uno de los valores enumerados."
                },
                color_montura: {
                    bsonType: "string",
                    description: "Color de la montura. Campo requerido de tipo string."
                },
                color_vidrio: {
                    bsonType: "object",
                    description: "Color de los vídrios. Campo requerido de tipo object.",
                    required: ["izquierdo", "derecho"],
                    properties: {
                        izquierdo: {
                            bsonType: "string",
                            description: "Color del vídrio izquierdo. Campo requerido de tipo string."
                        },
                        derecho: {
                            bsonType: "string",
                            description: "Color del vídrio derecho. Campo requerido de tipo string."
                        }
                    }
                },
                precio: {
                    bsonType: "double",
                    description: "Precio de las gafas. Campo requerido de tipo double."
                },
                proveedor: {
                    bsonType: "objectId",
                    description: "Proveedor de las gafas. Campo requerido de tipo ObjectID."
                },
                cliente: {
                    bsonType: "objectId",
                    description: "Cliente que ha comprado las gafas. Campo requerido de tipo ObjectID."
                },
                vendedor: {
                    bsonType: "objectId",
                    description: "Vendedor que ha vendido las gafas. Campo requerido de tipo ObjectID."
                }
            }
        }
    }
});

db.createCollection('clientes', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "direccion", "telefono", "email", "fecha_registro"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre del cliente. Cadena de texto y campo requerido."
                },
                direccion: {
                    bsonType: "object",
                    description: "Dirección del cliente. Objeto con la dirección completa y campo requerido",
                    required: ["calle", "numero", "piso", "puerta", "ciudad", "codigo_postal", "pais"],
                    properties: {
                        calle: {
                            bsonType: "string",
                            description: "Nombre de la calle. Campo requerido de tipo string."
                        },
                        numero: {
                            bsonType: "int",
                            description: "Número de la calle. Campo requerido de tipo int."
                        },
                        piso: {
                            bsonType: "int",
                            description: "Número de piso. Campo requerido de tipo int."
                        },
                        puerta: {
                            bsonType: "string",
                            description: "Puerta del piso, admite números y letras. Campo requerido de tipo string."
                        },
                        ciudad: {
                            bsonType: "string",
                            description: "Ciudad de la dirección. Campo requerido de tipo string."
                        },
                        codigo_postal: {
                            bsonType: "string",
                            description: "Código postal de la dirección. Campo requerido de tipo string."
                        },
                        pais: {
                            bsonType: "string",
                            description: "País de la dirección. Campo requerido de tipo string."
                        }
                    }
                },
                telefono: {
                    bsonType: "string",
                    description: "Teléfono del cliente. Campo requerido de tipo string."
                },
                email: {
                    bsonType: "string",
                    description: "Email del cliente. Campo requerido de tipo string."
                },
                fecha_registro: {
                    bsonType: "date",
                    description: "Fecha de registro del cliente. Campo requerido de tipo date."
                },
                cliente_recomendador: {
                    bsonType: "objectId",
                    description: "Cliente que ha recomendado la óptica. Campo opcional de tipo ObjectID."
                }
            }
        }
    }
});

db.createCollection('empleados', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "direccion", "telefono"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre del empleado. Cadena de texto y campo requerido."
                },
                direccion: {
                    bsonType: "object",
                    description: "Dirección del empleado. Objeto con la dirección completa y campo requerido",
                    required: ["calle", "numero", "piso", "puerta", "ciudad", "codigo_postal", "pais"],
                    properties: {
                        calle: {
                            bsonType: "string",
                            description: "Nombre de la calle. Campo requerido de tipo string."
                        },
                        numero: {
                            bsonType: "int",
                            description: "Número de la calle. Campo requerido de tipo int."
                        },
                        piso: {
                            bsonType: "int",
                            description: "Número de piso. Campo requerido de tipo int."
                        },
                        puerta: {
                            bsonType: "string",
                            description: "Puerta del piso, admite números y letras. Campo requerido de tipo string."
                        },
                        ciudad: {
                            bsonType: "string",
                            description: "Ciudad de la dirección. Campo requerido de tipo string."
                        },
                        codigo_postal: {
                            bsonType: "string",
                            description: "Código postal de la dirección. Campo requerido de tipo string."
                        },
                        pais: {
                            bsonType: "string",
                            description: "País de la dirección. Campo requerido de tipo string."
                        }
                    }
                },
                telefono: {
                    bsonType: "string",
                    description: "Teléfono del empleado. Campo requerido de tipo string."
                }
            }
        }
    }
});