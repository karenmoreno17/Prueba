# Proyecto de Vuelo - Prueba Técnica

Este proyecto es una aplicación de administración de vuelos, donde los administradores pueden agregar vuelos, y los usuarios pueden realizar reservas. El sistema utiliza **React** para el frontend, **Node.js** con **Express** para el backend, y **PostgreSQL** como base de datos.

## Requisitos

- **Node.js**: Versión 14 o superior.
- **npm**: Gestor de paquetes de Node.js.
- **PostgreSQL**: Base de datos relacional.
- **Git**: Control de versiones.

## Configuración

### 1. Clonar el repositorio

Clona este repositorio en tu máquina local:

git clone https://github.com/karenmoreno17/Prueba-t-cnica.git
cd Prueba-t-cnica

### 2. Configuración del Backend
El backend está construido con Node.js y usa Sequelize como ORM para interactuar con la base de datos PostgreSQL.

#### 2.1. Instalar dependencias del Backend
Accede al directorio backend y ejecuta el siguiente comando para instalar las dependencias del backend:

cd backend
npm install

#### 2.2. Configuración de la base de datos
Asegúrate de tener PostgreSQL instalado en tu máquina. Crea una base de datos llamada vuela (puedes cambiar el nombre en el archivo config/database.js si lo deseas).
Para crear la base de datos, abre una terminal de PostgreSQL y ejecuta:

CREATE DATABASE vuela;
En el archivo backend/src/config/database.js, asegúrate de que los detalles de la conexión a la base de datos sean correctos. Este archivo debe contener la configuración de tu base de datos PostgreSQL:

module.exports = {
  host: 'localhost',
  username: 'tu_usuario',  // Cambia esto por tu usuario de PostgreSQL
  password: 'tu_contraseña',  // Cambia esto por tu contraseña de PostgreSQL
  database: 'vuela',
  dialect: 'postgres',
};
#### 2.3. Crear tablas
Para crear las tablas necesarias en la base de datos, ejecuta:

sync.js

#### 2.4. Iniciar el Backend
Una vez configurado el backend y la base de datos, ejecuta el siguiente comando para iniciar el servidor de backend:

npm start

Esto debería iniciar el backend en http://localhost:3000.

### 3. Configuración del Frontend
El frontend está construido con React.

#### 3.1. Instalar dependencias del Frontend
Accede al directorio frontend y ejecuta el siguiente comando para instalar las dependencias del frontend:

cd frontend
npm install

#### 3.2. Configuración de la API
Asegúrate de que la URL de la API en el frontend sea la correcta. En el archivo frontend/src/config/api.js, cambia la URL base a la que corresponda con tu servidor backend (por ejemplo, http://localhost:3000/api si tu backend se ejecuta en el puerto 3000).

export const API_BASE_URL = 'http://localhost:3000/api';

#### 3.3. Iniciar el Frontend
En el directorio frontend, ejecuta el siguiente comando para iniciar el servidor de desarrollo de React:

npm start

Esto abrirá la aplicación en el navegador en http://localhost:3001.

### 4. Uso de la Aplicación

Al ejecutar la aplicación, se abre un panel de login, dependiendo del usuario que ingreses y su condición como Admin o Cliente, sigue: 

Panel del admin: Los administradores pueden agregar vuelos y ver las estadísticas de las aerolíneas .

Usuario: Los usuarios pueden buscar vuelos dependiendo del lugar de origen, destino y las fechas en las que desean el viaje. Al desplegarse la lista, puede seleccionar qué vuelo prefiere, después se desplegará la información de reserva, al confirmarla se creará exitosamente una reserva en la base de datos.
