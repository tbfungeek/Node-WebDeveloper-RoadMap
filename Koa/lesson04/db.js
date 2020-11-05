const Sequelize = require('sequelize');

const sequelize = new Sequelize('test'/*注意这里不是connection的名字*/, 'root', 'Aa123456', {
	dialect: 'mysql',
	host: 'localhost',
	port: '3306',
	logging: true,
	timeout: '+08:00',
	define: {}
});

sequelize.sync()

module.exports = {
	db: sequelize
};
