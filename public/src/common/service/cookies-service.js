'use strict';

export default class CookiesService {
    constructor($cookies) {
        this.cookies = $cookies;
    }
    get(key){
        return this.cookies.get(key);
    }
    set(key,value){
        this.cookies.put(key,value);
    }
    remove(key){
        this.cookies.remove(key);
    }
    isExist(key){
        return !!this.cookies.get(key);
    }
}