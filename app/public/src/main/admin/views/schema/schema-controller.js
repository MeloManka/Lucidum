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
            {name: 'Создать статичную', value: 'manually'}
        ];
        this.numberDemoSchema = 0;
        this.sendSchema = false;
    }
    saveSchema(){
        this.api.save(this.schema)
            .then()
            .catch()
    }
    send(){
        let programm = '10 ';
        for(let i = 0; i < this.schema.length; ++i){
            let state = +this.schema[i].state + ' ';
            programm = programm + state;
        }
        this.api.send(programm)
            .then(() => {
                this.sendSchema = true;
            })
            .catch()
    }
    sendDemo(){
        let programm = '1 ' + this.numberDemoSchema + ' ';
        this.api.send(programm)
            .then(() => {
                this.sendSchema = true;
            })
            .catch()
    }
    sendStop(){
        let programm = '1 0 ';
        this.api.send(programm)
            .then(() => {
                this.sendSchema = false;
            })
            .catch()
    }
}
