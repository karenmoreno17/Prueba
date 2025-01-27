const sequelize = require('./src/config/database');

sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos exitosa');
    })
    .catch((error) => {
        console.error('Error de conexión a la base de datos:', error);
    });