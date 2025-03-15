const { Sequelize } = require('sequelize');

// Create a Sequelize instance and connect to the MySQL database
const sequelize = new Sequelize('exam', 'root', 'Rg121003serolf*', {
host: 'localhost',
dialect: 'mysql',
});

async function authenticate() {
try {
await sequelize.authenticate();
console.log('Connection has been established successfully.');
} catch (error) {
console.error('Unable to connect to the database:', error);
}
}

authenticate();

module.exports = sequelize;