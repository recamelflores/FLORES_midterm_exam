const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

// Define the User model
const User = sequelize.define('User', {
id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
},
name: {
type: DataTypes.STRING,
allowNull: false,
},
email: {
type: DataTypes.STRING,
allowNull: false,
unique: true,
},
status: {
type: DataTypes.STRING,
defaultValue: 'active', // default value for status is 'active'
},
}, {
// Options
tableName: 'users',
timestamps: false, // Assuming no timestamps (createdAt, updatedAt) are required
});

module.exports = User;