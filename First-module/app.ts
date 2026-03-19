enum StatusCode {
    OK = 200,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

function handleRequest(url: string): StatusCode {
    if (url === '/') {
        return StatusCode.OK;
    }
    if (url === '/server-error') {
        return StatusCode.INTERNAL_SERVER_ERROR
    }
    return StatusCode.NOT_FOUND;
}


const homepage = handleRequest('/serve-error')
if (homepage === StatusCode.NOT_FOUND) {
    console.log("404 Not Found");
}

console.log(homepage);

/*
enum Direction {
    Up,
    Down,
    Left,
    Right,
} // -> Oddiy enum yaratish*/


/*
enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}*/

/*enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

function getDirection(direction: Direction) {
    if(direction === Direction.Up) {
        return "Moving Up..."
    } else if (direction === Direction.Down) {
        return "Down";
    } else if (direction === Direction.Left) {
        return "Left";
    } else if (direction === Direction.Right) {
        return "Right";
    }
}

const moveUp = getDirection(Direction.Up);
console.log(moveUp);
const moveDown = getDirection(Direction.Down);
console.log(moveDown);
const moveLeft = getDirection(Direction.Left);
console.log(moveLeft);
const moveRight = getDirection(Direction.Right);
console.log(moveRight);

// let move: Direction = Direction.Up;
// move = Direction.Down;*/
