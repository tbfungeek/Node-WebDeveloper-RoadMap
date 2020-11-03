const requireDirectory = require('require-directory');
const Router = require('koa-router');

class ModuleLauncher {
    static init(app) {
        ModuleLauncher.app = app;
        ModuleLauncher.launchRouters();
    }

    static launchRouters() {
        const apiDir = `${process.cwd()}/api`;
        requireDirectory(module,apiDir,{
            visit:(obj) => {
                if (obj instanceof Router) {
                    ModuleLauncher.app.use(obj.routes());
                }
            }
        })
    }
}

module.exports = ModuleLauncher;