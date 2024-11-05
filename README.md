# Proyecto de Servidor Express para Gestión de Productos

Este proyecto es un servidor web construido con **Express.js** que utiliza **Handlebars** como motor de plantillas. Está diseñado para manejar la gestión de productos en un panel de administración, permitiendo a los usuarios crear, actualizar, eliminar y listar productos de manera eficiente. El servidor se conecta a una base de datos MongoDB para almacenamiento persistente.

## Tabla de Contenidos

- [Resumen del Proyecto](#resumen-del-proyecto)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Rutas](#rutas)
- [Middleware](#middleware)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Pruebas](#pruebas)
- [Despliegue](#despliegue)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Notas](#notas)

## Resumen del Proyecto

Este servidor proporciona una API RESTful para la gestión de productos, permitiendo a los administradores realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) a través de una interfaz web. Utiliza Handlebars para renderizar las vistas y MongoDB para almacenar los datos de los productos.

## Características

- **Gestión de Productos**: Crear, actualizar, eliminar y listar productos.
- **Interfaz de Usuario**: Utiliza Handlebars para una experiencia de usuario dinámica y amigable.
- **Persistencia de Datos**: Conexión a MongoDB para almacenamiento de datos.
- **Middleware Personalizado**: Manejo de errores y autenticación (si se implementa).
- **Archivos Estáticos**: Soporte para archivos CSS, JS e imágenes.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework web para Node.js.
- **Handlebars**: Motor de plantillas para generar HTML dinámico.
- **MongoDB**: Base de datos NoSQL para almacenamiento de datos.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js.
- **dotenv**: Para manejar variables de entorno.

## Estructura del Proyecto
/project-root
│
├── /public # Archivos estáticos (CSS, JS, imágenes)
├── /src # Código fuente
│ ├── /middlewares # Middleware personalizados
│ ├── /routers # Rutas de la aplicación
│ └── /utils # Utilidades y funciones auxiliares
├── /views # Plantillas de Handlebars
├── .env # Variables de entorno
├── server.js # Archivo principal del servidor
└── package.json # Dependencias y scripts del proyecto

El servidor se ejecutará en el puerto especificado en las variables de entorno (por defecto, 8080).

## Rutas

El servidor utiliza un enrutador para manejar las diferentes rutas de la aplicación. A continuación se presentan las rutas principales:

- **Crear Producto**
  - **Método**: `POST`
  - **Ruta**: `/products`
  - **Descripción**: Crea un nuevo producto.
  - **Cuerpo**: `{ "title": "Nombre del Producto", "price": 100, "stock": 50 }`

- **Actualizar Producto**
  - **Método**: `PUT`
  - **Ruta**: `/products/update`
  - **Descripción**: Actualiza un producto existente.
  - **Cuerpo**: `{ "pid": "ID del Producto", "title": "Nuevo Nombre", "price": 150 }`

- **Borrar Producto**
  - **Método**: `DELETE`
  - **Ruta**: `/products/delete`
  - **Descripción**: Elimina un producto.
  - **Cuerpo**: `{ "pid": "ID del Producto" }`

- **Lista de Productos**
  - **Método**: `GET`
  - **Ruta**: `/products`
  - **Descripción**: Muestra la lista de productos.
 
  - ## Despliegue

Para desplegar el proyecto en un entorno de producción, considera usar servicios como **Heroku**, **AWS**, o **DigitalOcean**. Asegúrate de configurar correctamente las variables de entorno y la base de datos en el entorno de producción.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request. Asegúrate de seguir las mejores prácticas de codificación y de documentar tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Notas

- Asegúrate de tener MongoDB en funcionamiento si el proyecto depende de una base de datos.
- Puedes personalizar el motor de plantillas y las configuraciones según tus necesidades.
- Revisa la documentación de Express y Handlebars para más detalles sobre su uso.

- ## Capturas de Pantalla

- ### Created Product
![Captura de pantalla (84)](https://github.com/user-attachments/assets/714a5155-6cf1-4c63-80c5-d64b63e745d4)


### Read All Products
![Captura de pantalla (83)](https://github.com/user-attachments/assets/51aee98a-a98a-4742-98b9-21630c44ce74)


### Read Product
![Captura de pantalla (85)](https://github.com/user-attachments/assets/eb18ba29-5786-430c-bef1-13f65d9769ce)


### Update Product
![Captura de pantalla (86)](https://github.com/user-attachments/assets/a3f8c7c1-13d6-4783-bd6f-b3b8bff0f7e1)



### Delete Product
![Captura de pantalla (87)](https://github.com/user-attachments/assets/d18e0bf4-48c5-48e0-8b56-9ff2802333f5)




### Read User
![Captura de pantalla (72)](https://github.com/user-attachments/assets/77ca1b5c-e9b8-48a5-bb99-780fb99e3777)

### Created User
![Captura de pantalla (73)](https://github.com/user-attachments/assets/bbe12298-e8d4-42d1-bf63-d65961612c9b)


### Read All User
![Captura de pantalla (74)](https://github.com/user-attachments/assets/7bd26f5a-1cc4-486e-9255-9d8b23233e0a)


### Update User
![Captura de pantalla (75)](https://github.com/user-attachments/assets/9d93a6d2-f17b-4f66-8f4d-a2d7a8d639d6)


### Delete User
![Captura de pantalla (77)](https://github.com/user-attachments/assets/c4d18b25-e001-4844-9547-441cce134dea)


### Created Cart
![Captura de pantalla (78)](https://github.com/user-attachments/assets/f05aeb51-e3a4-4499-a4c5-44dbc13ff99b)


### Read All Carts
![Captura de pantalla (79)](https://github.com/user-attachments/assets/97323adf-e864-4197-84c4-61b805f859b5)


### Read Cart
![Captura de pantalla (80)](https://github.com/user-attachments/assets/25b82987-4f4a-4c5b-a932-b94a6945018e)


### Update Carts
![Captura de pantalla (81)](https://github.com/user-attachments/assets/9b0d230f-0cef-444e-bd61-80086ab122e8)


### Delete Cart
![Captura de pantalla (82)](https://github.com/user-attachments/assets/0d5c2a0a-15c4-4cae-a55b-e0cedd3d83c6)


