const { db } = require('./db');
const { Sequelize, Model } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {}

User.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nickname: Sequelize.STRING,
		password: {
			type: Sequelize.STRING,
			set(val) {
				const salt = bcrypt.genSaltSync(10);
                const pwd = bcrypt.hashSync(val, salt);
                console.log(pwd)
				this.setDataValue('password', pwd);
			}
		}
	},
	{ sequelize: db, tableName: 'usersss' }
);

module.exports = User;
