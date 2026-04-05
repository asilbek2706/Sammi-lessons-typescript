"use strict";
// null - hech qanday qiymat yo'q, qolda ozimiz beramiz
//undefined - ozgaruvchiga qiymat berilmagan
Object.defineProperty(exports, "__esModule", { value: true });
let username = null;
//Nullish coalescing operator
let showUsername = username ?? 'Guest';
console.log(showUsername);
function logger(msg) {
    if (msg !== null) {
        console.log(msg.toUpperCase());
    }
    else {
        console.log('No message provider');
    }
}
logger('Hello World!');
logger(null);
let x = null;
console.log(x);
//# sourceMappingURL=app.js.map