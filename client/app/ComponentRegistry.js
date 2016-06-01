import '../config/systemjs.config';

export default class ComponentRegistry {

    constructor() {

    }

    load(packageName, moduleName, callback) {
        // uses SystemJS to load package by name, see config/systemjs.config.js for settings
        SystemJS.import(packageName).then(m => {
            callback(m[moduleName]);
        });
    }
}