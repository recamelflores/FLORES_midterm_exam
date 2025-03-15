const express = require('express');
const app = express();
const { Sequelize, DataTypes } = require('sequelize');
const mysql = require('mysql2/promise');

const db = {};

// GET request
app.get('/users', (req, res) => {
    db.User.findAll()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ message: err.message }));
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



//User model
function model(sequelize) {
    //define the attributes for the User model
    const attributes = {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        name: { type: DataTypes.STRING, allowNull: false},
        email: { type: DataTypes.STRING, allowNull: false},
        status: {type: DataTypes.STRING, allowNull: false},
    };

    return sequelize.define('User', attributes);
}


//initialize the database
async function initialize() {

    //define the database credentials
    const host = 'localhost';
    const port = 3306;
    const user = 'root';
    const password = '';
    const database = 'user';

    //create the database if it doesn't exist
    const connection = await mysql.createConnection ({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    //create a new Sequelize instance
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    //define the User model
    db.User = model(sequelize);

    //sync the model with the database
    await sequelize.sync({ alter: true });
}

//run the initialize function
initialize();
