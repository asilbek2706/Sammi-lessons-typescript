"use strict";
// void
Object.defineProperty(exports, "__esModule", { value: true });
function logger(text, callback) {
    console.log(text);
    callback('Logged ' + text);
}
logger('Hello', message => console.log(message));
/*
let unusable: void
unusable = undefined*/
/*
function logger(text: string): void {
    console.log(text);
}

logger("Hello World!");*/
//# sourceMappingURL=app.js.map