# MEAN Clothing WEB Proyect
## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Testing](#testing)
4. [Collaboration](#collaboration)
### General Info
***
Este es un proyecto final para el Taller de Desarrollo Web en la carrera Ingeniería en Sistemas de la UNICEN donde se busca asentar las bases de aprender como funcióna la MEAN Stack detallando en cada uno de sus componentes, (MongoDB, Express,Angular y NodeJS). Formado por los integrantes Lautaro Lopez, Eduardo Vibart y Felipe Gonzalez
## Technologies
***
Lista de tecnologías utilizadas en el proyecto
* [NPM](https://nodejs.org/es): Version 9.5.1 
* [MongoDB](https://www.mongodb.com/es): Version 2.34
* [express](https://expressjs.com/es/): Version 4.18.2
* [Angular](https://angular.io/): Version ?
## Testing
*** Se utilizo postman como herramienta de testeo. A continuacion se presentan ejemplos:

POST
localhost:80/api/crearPrenda
{
    "codigoArticulo": "BUZZ01",
    "stock": 5,
    "lanzamiento": "2023-05-05",
    "precio": 16.99,
    "caracteristicas": {
        "tipo": "buzo",
        "talle": "3XL",
        "marca": "NIKE",
        "modelo": "fit",
        "color": "rojo"
    }
}

GET
localhost:80/api/getProducto/BUZ01

PUT (en el put basta con solo introducir el atributo que se quiere modificar y su nuevo valor)
localhost:80/api/productos/BUZ001
{"stock":8}

DELETE
localhost:80/api/deleteProducto/BUZ001
{"codigoArticulo": "BUZZ01"}


## Collaboration
***
No esta abierta la colaboración del proyecto.
