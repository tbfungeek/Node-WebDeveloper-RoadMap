'use strict';

const Service = require('egg').Service;

class HomeService extends Service {

    async index() {

    }

    async add(params) {
        try {
            const {
                app
            } = this;
            const res = await app.model.User.create(params);
            //const res = await app.mysql.insert('user', params);
            return res;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async del(id) {
        try {
            const {
                app
            } = this;
            const user = await app.model.User.findByPk(id);
            if (!user) {
                return null;
            }
            const res = user.destroy(id);
            //const res = await app.mysql.delete('user', {
            //    id
            //});
            return res;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async update(params) {
        try {
            const {
                app
            } = this;

            const user = await app.model.User.findByPk(id);
            if (!user) {
                return null;
            }
            const res = user.update(id);
            //const res = await app.mysql.update('user', params);
            return res;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async detail() {

        try {
            const {
                app
            } = this;
            //const res = await app.mysql.select('user');
            const res = await app.model.User.findAll();
            return res;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findById(id) {
        try {
            const {
                app
            } = this;
            const res = await app.model.User.findByPk(id);
            /*
            const res = await app.mysql.get('user', {
                id
            });*/
            return res;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

module.exports = HomeService;