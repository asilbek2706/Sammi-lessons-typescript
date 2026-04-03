"use strict";
// Literal type
Object.defineProperty(exports, "__esModule", { value: true });
function getStatus(status) {
    if (status === 'success') {
        return 'success';
    }
    else {
        return 'error';
    }
}
console.log(getStatus('success'));
/*let isMarried: true

isMarried = true*/
/*let code: 200 | 400| 500 = 200

code = 400*/
/*
let statusMessage: 'success' | 'error' | 'loading'

statusMessage = 'loading';*/
//# sourceMappingURL=app.js.map