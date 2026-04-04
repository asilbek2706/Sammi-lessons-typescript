// void

function logger(text: string, callback: (message: string) => void) {
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
