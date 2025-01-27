# Documentación del Proyecto

## Archivos del Frontend

### `frontend/src/pages/admin.js`
Este archivo es un componente de React que representa el panel de administración. Permite a los administradores crear vuelos y ver estadísticas de aerolíneas. Utiliza Axios para realizar solicitudes a la API y manejar el estado del formulario.

### `frontend/src/pages/admin.css`
Este archivo contiene los estilos CSS para el componente del panel de administración. Define el diseño y la apariencia de los elementos en la interfaz de usuario, incluyendo formularios y estadísticas.

## Archivos del Backend

### `backend/src/controllers/flightControllers.js`
Este archivo contiene la lógica para manejar las operaciones relacionadas con los vuelos, incluyendo la obtención de todos los vuelos, la creación de nuevos vuelos y la búsqueda de vuelos según ciertos parámetros.

### `backend/src/controllers/statisticsController.js`
Este archivo maneja la lógica para obtener estadísticas sobre las aerolíneas y las reservas. Proporciona información sobre el total de aerolíneas y las aerolíneas con más reservas.

### `backend/src/controllers/userControllers.js`
Este archivo contiene la lógica para manejar las operaciones relacionadas con los usuarios, específicamente el inicio de sesión. Verifica las credenciales del usuario y devuelve información relevante.

## Modelos

### `backend/src/models/users.js`
Este archivo define el modelo de usuario en la base de datos, incluyendo campos como `email`, `password` e `isAdmin`.

### `backend/src/models/flights.js`
Este archivo define el modelo de vuelo en la base de datos, incluyendo campos como `origin`, `destination`, `departureDate`, `arrivalDate`, `price`, `departureHour`, `arrivalHour` y una referencia a la aerolínea.

### `backend/src/models/airline.js`
Este archivo define el modelo de aerolínea en la base de datos, incluyendo campos como `name`.
