const { db } = require('./db');
const { Sequelize, Model } = require('sequelize');

class User extends Model {}

User.init({
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	nickname: Sequelize.STRING
},{sequelize:db});

module.exports = User;
