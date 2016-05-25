import Schema1Ctrl from './schema1-controller';
import schemaTmpl from './schema1-tmpl.jade';

export default class Schema1Directive {
    constructor() {
        this.template = schemaTmpl;
        this.restrict = 'E';
        this.scope = {};

        this.controller = Schema1Ctrl;
        this.controllerAs = 'ctrl';
    }

    // Directive compile function
    compile() {

    }

    // Directive link function
    link() {

    }
}