// null - hech qanday qiymat yo'q, qolda ozimiz beramiz
//undefined - ozgaruvchiga qiymat berilmagan

let username: string | null = null;

//Nullish coalescing operator
let showUsername = username ?? 'Guest'
console.log(showUsername)

function logger(msg: string | null) {
    if(msg !== null){
        console.log(msg.toUpperCase());
    } else{
    console.log('No message provider');}
}

logger('Hello World!');
logger(null)

let x: null = null
console.log(x)
