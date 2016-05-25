'use strict';

export default class SessionStorageService {
    constructor($sessionStorage) {
        this.session = $sessionStorage;
    }
    get(key){
        return this.session[key];
    }
    set(key,value){
        this.session[key] = value;
    }
    remove(key){
        delete this.session[key];
    }
    isExist(key){
        return !!this.session[key];
    }
}