# Test-BackEnd-EDT

#### [Link del Repositorio de Github](https://github.com/maxife36/Test-BackEnd-EDT)

## Restaurants API

### Instalación

Para instalar y ejecutar el proyecto localmente:
1. Clona el repositorio:
   ```bash
   git clone https://github.com/maxife36/Test-BackEnd-EDT.git

2. Navega a la carpeta del proyecto:
    ```bash
    cd Test-BackEnd-EDT

3. Instala las dependencias:
    ```bash
    npm install

4. Configura las variables de entorno: 

    Configura las siguientes variables de entorno para conectar con la base de datos y otras configuraciones:

    + **DB_HOST**: Dirección del servidor de la base de datos.
    + **DB_USERNAME**: Usuario para conectar a la base de datos.
    + **DB_PASSWORD**: Contraseña para la base de datos.
    + **DB_NAME**: Nombre de la base de datos.
    + **PORT**: Puerto en el que se ejecuta la API.

    Puedes usar un archivo .env para configurar estas variables. (Guíate del archivo .env_example)

5. Inicia el servidor:
    ```bash
    npm start

### Endpoints Disponibles

Aquí están los endpoints principales disponibles en la API:

#### `/api/restaurants`
- **GET**: Obtiene la lista de todos los Restaurantes.
- **POST**: Crea un nuevo Restaurante.
- **PUT**: Modifica un Restaurante.

#### `/api/restaurants/:id`
- **GET**: Obtiene un Restaurante por ID.
- **DELETE**: Elimina un Restaurante por ID.

#### `/api/restaurants/statistics`
- **GET**: Obtiene información sobre los Restaurantes dentro de un punto geoespacial y radio de referencia.

### Endpoints Disponibles - Detalles

#### `/api/restaurants` - GET

Este endpoint devuelve todos los Restaurantes con su informacion. Si se desea buscar por un parametro de búsqueda específico _(query param)_ se puede pasar :

#### Parámetros de Consulta

- **param**: Campo por el cual se desea realizar la busqueda (tipo `string`). _Obligatorio_.
- **value**: Valor correspondiente al campo buscado (tipo `string` o `number` según corresponda). _Obligatorio_.

#### `/api/restaurants` - POST

Este endpoint crea un nuevo Restaurante. Acepta una solicitud `POST` con un cuerpo en formato JSON.

#### Campos Obligatorios
- **name**: El nombre del Restaurante (tipo `string`).

#### Campos Opcionales
- **rating**: El Rating del Restaurante (tipo `integer`).
- **site**: Sitio web del Restaurante, debe contener "http://" o "https://" (tipo `string`).
- **email**: Correo electronico del Restaurante (tipo `string`).
- **phone**: Telefono del Restaurante (tipo `string`).
- **street**: Direccion del Restaurante (tipo `string`).
- **city**: Ciudad del Restaurante (tipo `string`).
- **state**: Estado del Restaurante (tipo `string`).
- **lat**: Latitud del Restaurante (tipo `float`).
- **lng**: Longitud del Restaurante (tipo `float`).

#### Ejemplo de Cuerpo de Solicitud
Aquí hay un ejemplo del cuerpo para crear un nuevo Restuarante:

```json
{ 
    "name": "New Restaurant", 
    "rating": 3, 
    "site": "http://newrestaurant.com", 
    "email": "newrestaurant@gmail.com", 
    "phone": 321516216, 
    "street": "fake street 123", 
    "city": "Springfield", 
    "state": "Fake State", 
    "lat": 68.235632165, 
    "lng": -89.235413215 
}
```


#### `/api/restaurants` - PUT

Este endpoint modifica los campos que se le indiquen a un Restaurante existente. Acepta una solicitud `PUT` con un cuerpo en formato JSON.

#### Campos Obligatorios
- **id**: El id del Restaurante que desea modificar (tipo `string`).

#### Campos Opcionales
- **name**: El nombre del Restaurante (tipo `string`).
- **rating**: El Rating del Restaurante (tipo `integer`).
- **site**: Sitio web del Restaurante, debe contener "http://" o "https://" (tipo `string`).
- **email**: Correo electronico del Restaurante (tipo `string`).
- **phone**: Telefono del Restaurante (tipo `string`).
- **street**: Direccion del Restaurante (tipo `string`).
- **city**: Ciudad del Restaurante (tipo `string`).
- **state**: Estado del Restaurante (tipo `string`).
- **lat**: Latitud del Restaurante (tipo `float`).
- **lng**: Longitud del Restaurante (tipo `float`).

```json
{
    "id": "15c7fea0-89e8-4539-8632-46a619ef4ce9",
    "rating": 4,
    "name": "UPDATED RESTAURANT",
    "site": "http://updatedrestaurant.com",
    "email": "updatedrestaurant@gmail.com",
    "phone": 321516216,
    "street": "fake street 123",
    "city": "Springfield",
    "state": "Fake State",
    "lat": 99.5169213,
    "lng": -18.251542
}
```

#### `/api/restaurants/statistics` - GET

A este endpoint se le debe pasar 3 parametros de búsqueda específico: **latitude** , **longitude**, **radius**. _(query param)_. Devuleve: 
+ El recuento de restaurantes que caen dentro del círculo con centro [**latitude**, **longitude**] y radio **radius**.
+ El Rating promedio de los restaurantes dentro del círculo.
+ La desviación estándar del rating de los restaurantes dentro del círculo.

#### Parámetros de Consulta

- **latitude**: Latitud del Restaurante (tipo `float`). _Obligatorio_.
- **longitude**: Longitud del Restaurante (tipo `float`). _Obligatorio_.
- **radius**: Radio de consideración para la busqueda (en metros). _Obligatorio_.
