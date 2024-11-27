"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collection {
    constructor(data) {
        this.data = data;
    }
    addItems(item) {
        this.data.push(item);
    }
}
const one = new Collection(["a", "b"]);
one.addItems(10);
console.log(one);
