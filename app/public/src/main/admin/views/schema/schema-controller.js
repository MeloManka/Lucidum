'use strict';

export default class SchemaCtrl {
    constructor($state, schemaAPIService, cookiesService) {
        this.state = $state;
        this.api = schemaAPIService;
        this.cookies = cookiesService;
        this.loader = false;
        this.schema = [
            {name: '1', state: false},
            {name: '2', state: false},
            {name: '3', state: false},
            {name: '4', state: false},
            {name: '5', state: false},
            {name: '6', state: false},
            {name: '7', state: false},
            {name: '8', state: false},
            {name: '9', state: false},
            {name: '10', state: false}
        ];
        this.type = '';
        this.typeSchema = [
            {name: 'Существующие', value: 'exist'},
            {name: 'Создать статичную', value: 'manually'},
            {name: 'Создать динамическую', value: 'animation'}
        ];
        this.numberProgramm = 0;
    }
    saveSchema(){
        this.api.save(this.schema)
            .then()
            .catch()
    }
    send(){
        this.api.send(this.numberProgramm)
            .then()
            .catch()
    }
}
