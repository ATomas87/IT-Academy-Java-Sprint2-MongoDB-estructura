db = db.getSiblingDB('pizzeria');

db.createCollection('clientes', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "apellidos", "direccion", "codigo_postal", "localidad", "telefono"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre del cliente. Cadena de texto y campo requerido."
                },
                apellidos: {
                    bsonType: "string",
                    description: "Apellidos del cliente. Cadena de texto y campo requerido."
                },
                direccion: {
                    bsonType: "object",
                    description: "Dirección del cliente. Objeto con la dirección completa y campo requerido",
                    required: ["calle", "numero", "piso", "puerta"],
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
                        }
                    }
                },
                codigo_postal: {
                    bsonType: "string",
                    description: "Código postal de la dirección. Campo requerido de tipo string."
                },
                localidad: {
                    bsonType: "objectId",
                    description: "Localidad del cliente. Campo requerido de tipo ObjectID."
                },
                telefono: {
                    bsonType: "string",
                    description: "Teléfono del cliente. Campo requerido de tipo string."
                }
            }
        }
    }
});

db.createCollection('provincias', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre de la provincia. Campo requerido de tipo string."
                }
            }
        }
    }
});

db.createCollection('localidades', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "provincia"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre de la localidad. Campo requerido de tipo string."
                },
                provincia: {
                    bsonType: "objectId",
                    description: "Referencia al id de la provincia a la que pertenece la localidad. Campo requerido de tipo ObjectID."
                }
            }
        }
    }
});

db.createCollection('categorias_pizza', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre de la categoría de pizza. Campo requerido de tipo string."
                }
            }
        }
    }
});

db.createCollection('pizzas', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "descripcion", "imagen", "categoria", "precio"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre de la pizza. Campo requerido de tipo string."
                },
                descripcion: {
                    bsonType: "string",
                    description: "Descripción de la pizza. Campo requerido de tipo string."
                },
                imagen: {
                    bsonType: "string",
                    description: "URL a la imagen de la pizza. Campo requerido de tipo string."
                },
                categoria: {
                    bsonType: "objectId",
                    description: "Referencia al id de la categoría a la que pertenece la pizza. Campo requerido de tipo ObjectID."
                },
                precio: {
                    bsonType: "double",
                    description: "Precio de la pizza. Campo requerido de tipo double."
                }
            }
        }
    }
});

db.createCollection('hamburguesas', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "descripcion", "imagen", "precio"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre de la hamburguesa. Campo requerido de tipo string."
                },
                descripcion: {
                    bsonType: "string",
                    description: "Descripción de la hamburguesa. Campo requerido de tipo string."
                },
                imagen: {
                    bsonType: "string",
                    description: "URL a la imagen de la hamburguesa. Campo requerido de tipo string."
                },
                precio: {
                    bsonType: "double",
                    description: "Precio de la hamburguesa. Campo requerido de tipo double."
                }
            }
        }
    }
});

db.createCollection('bebidas', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "descripcion", "imagen", "precio"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre de la bebida. Campo requerido de tipo string."
                },
                descripcion: {
                    bsonType: "string",
                    description: "Descripción de la bebida. Campo requerido de tipo string."
                },
                imagen: {
                    bsonType: "string",
                    description: "URL a la imagen de la bebida. Campo requerido de tipo string."
                },
                precio: {
                    bsonType: "double",
                    description: "Precio de la bebida. Campo requerido de tipo double."
                }
            }
        }
    }
});

db.createCollection('tiendas', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["direccion", "codigo_postal", "localidad", "provincia"],
            properties: {
                direccion: {
                    bsonType: "object",
                    description: "Dirección de la tienda. Objeto con la dirección y campo requerido",
                    required: ["calle", "numero"],
                    properties: {
                        calle: {
                            bsonType: "string",
                            description: "Nombre de la calle. Campo requerido de tipo string."
                        },
                        numero: {
                            bsonType: "int",
                            description: "Número de la calle. Campo requerido de tipo int."
                        }
                    }
                },
                codigo_postal: {
                    bsonType: "string",
                    description: "Código postal de la dirección. Campo requerido de tipo string."
                },
                localidad: {
                    bsonType: "objectId",
                    description: "Referencia al id de la localidad de la tienda. Campo requerido de tipo ObjectID."
                },
                provincia: {
                    bsonType: "objectId",
                    description: "Referencia al id de la provincia de la tienda. Campo requerido de tipo ObjectID."
                }
            }
        }
    }
});

db.createCollection('pedidos', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["cliente", "tienda", "fecha_pedido", "tipo", "precio_total"],
            properties: {
                cliente: {
                    bsonType: "objectId",
                    description: "Referencia al id del cliente que ha realizado el pedido. Campo requerido de tipo ObjectId."
                },
                tienda: {
                    bsonType: "objectId",
                    description: "Referencia al id de la tienda a la que se ha realizado el pedido. Campo requerido de tipo ObjectId."
                },
                fecha_pedido: {
                    bsonType: "date",
                    description: "Fecha en la que ser realizó el pedido. Campo requerido de tipo date."
                },
                tipo: {
                    enum: ["domicilio", "recoger"],
                    description: "Tipo de pedido (domicilio o recoger). Sólo puede tomar uno de los valores enumerados."
                },
                repartidor: {
                    bsonType: "objectId",
                    description: "Referencia al id del empleado repartidor al que se ha asignado el pedido. Campo opcional de tipo ObjectId."
                },
                fecha_entrega: {
                    bsonType: "date",
                    description: "Fecha en la que se entregó el pedido en el domicilio del cliente. Campo opcional de tipo date."
                },
                pizzas: {
                    bsonType: "array",
                    description: "Array con las pizzas del pedido. Campo opcional de tipo array.",
                    minItems: 0,
                    items: {
                        bsonType: "object",
                        required: ["pizza", "cantidad"],
                        properties: {
                            pizza: {
                                bsonType: "objectId",
                                description: "Referencia a una pizza de la colección de pizzas. Campo requerido de tipo ObjectId."
                            },
                            cantidad: {
                                bsonType: "int",
                                description: "Cantidad de pizzas del mismo tipo. Campo requerido de tipo entero."
                            }
                        }
                    }
                },
                hamburguesas: {
                    bsonType: "array",
                    description: "Array con las hamburguesas del pedido. Campo opcional de tipo array.",
                    minItems: 0,
                    items: {
                        bsonType: "object",
                        required: ["hamburguesa", "cantidad"],
                        properties: {
                            hamburguesa: {
                                bsonType: "objectId",
                                description: "Referencia a una hamburguesa de la colección de hamburguesas. Campo requerido de tipo ObjectId."
                            },
                            cantidad: {
                                bsonType: "int",
                                description: "Cantidad de hamburguesas del mismo tipo. Campo requerido de tipo entero."
                            }
                        }
                    }
                },
                bebidas: {
                    bsonType: "array",
                    description: "Array con las bebidas del pedido. Campo opcional de tipo array.",
                    minItems: 0,
                    items: {
                        bsonType: "object",
                        required: ["bebida", "cantidad"],
                        properties: {
                            bebida: {
                                bsonType: "objectId",
                                description: "Referencia a una bebida de la colección de bebidas. Campo requerido de tipo ObjectId."
                            },
                            cantidad: {
                                bsonType: "int",
                                description: "Cantidad de bebidas del mismo tipo. Campo requerido de tipo entero."
                            }
                        }
                    }
                },
                precio_total: {
                    bsonType: "double",
                    description: "Precio total del pedido. Campo requerido de tipo double."
                }
            }
        }
    }
});

db.createCollection('empleados', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "apellidos", "nif", "telefono", "tipo", "tienda"],
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "Nombre del empleado. Cadena de texto y campo requerido."
                },
                apellidos: {
                    bsonType: "string",
                    description: "Apellidos del empleado. Cadena de texto y campo requerido."
                },
                nif: {
                    bsonType: "string",
                    description: "NIF del empleado. Cadena de texto y campo requerido."
                },
                telefono: {
                    bsonType: "string",
                    description: "Teléfono del empleado. Campo requerido de tipo string."
                },
                tipo: {
                    enum: ["cocinero", "repartidor"],
                    description: "Tipo de empleado (cocinero o repartidor). Sólo puede tomar uno de los valores enumerados."
                },
                tienda: {
                    bsonType: "objectId",
                    description: "Tienda a la que pertenece el empleado. Campo requerido de tipo ObjectID."
                }
            }
        }
    }
});

