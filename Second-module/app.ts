let data: (string | number)[] = ['BMW', 2, "Audi", 3]


function logError(error: { message: string } | { error: string }) {
    if ('message' in error) {
        console.log('Message', error.message);
    } else {
        console.log('Error', error.error);
    }
}

logError({message: 'Error'});
logError({error: 'world'});

/*function logError(error: string | string[]) {
    if (Array.isArray(error)) {
        error.forEach(e => console.error(e));
    } else {
        console.error(error);
    }
}

logError('This is a test');*/


/*//Type narrowing = turni tekshirish
function getValue(value: string | number): string | number {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else {
        return value.toFixed(2)
    }
}

getValue('hello')
getValue(123)*/

/*function printId(id: string | number): void {
    console.log(`The ID is ${id}`)
}

printId("1")
printId(2)*/
