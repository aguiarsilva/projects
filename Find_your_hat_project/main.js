const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    }

    get field() {
        return this._field;
    }

    print() {
        for (let i of field) {
            console.log(i.join(''));
        }
    }

    play() {
        let run = true;
        let startPosX = 0;
        let startPosY = 0;

        while (run === true) {
            // create and update position
            field[startPosX][startPosY] = pathCharacter;
            this.print();

            const input = prompt('Where do you want to go? (w = up, s = down, a = left, d = right)');
            switch (input) {
                case 's':
                    startPosX++;
                    break;
                case 'd':
                    startPosY++;
                    break;
                case 'w':
                    startPosX--;
                    break;
                case 'a':
                    startPosY--;
                    break;
                default:
                    console.log('Please use w, a, s, d.');
            };
            if (startPosX < 0 || startPosX >= x || startPosY >= y || startPosY < 0) {
                console.log("Game Over. You went out of bounds!");
                run = false;
            } else if (field[startPosX][startPosY] === hole) {
                console.log("Game Over. You fell in a hole!");
                run = false;
            } else if (field[startPosX][startPosY] === hat) {
                console.log("You win! You found the hat!");
                run = false;
            }
        }
    }

    static createField(x, y, percent) {
        let hatNum = 1;
        let holeNum = x * y * (percent / 100);
        //create the field with a for loop
        for (let h = 0; h < x; h++) {
            field[h] = [];
            for (let w = 0; w < y; w++) {
                field[h][w] = fieldCharacter;
            }
        }
        //make the position for the hat
        while (hatNum > 0) {
            const randomX = Math.floor(Math.random() * x);
            const randomY = Math.floor(Math.random() * y);
            if (field[randomX][randomY] === fieldCharacter) {
                field[randomX][randomY] = hat;
                hatNum--;
            }
        }
        //make position for the holes
        while (holeNum > 0) {
            const randomX = Math.floor(Math.random() * x);
            const randomY = Math.floor(Math.random() * y);
            if (field[randomX][randomY] === fieldCharacter) {
                field[randomX][randomY] = hole;
                holeNum--;
            }
        }
    }

};

const field = [];
//ask for user input
let x = prompt('How many columns for the field? => ');
let y = prompt('How many rows for the field? => ');
let percent = prompt('How many holes for the field? Indicate percentage => ');

//check inputs
const checkInput = () => {
    while (isNaN(percent % 2) || percent > 25 || !percent || 0 === percent.length) {
        percent = prompt('Holes number not valid! Input a number less than 25.');
    };
    while (isNaN(x % 2) || !x || 0 === x.lenght) {
        x = prompt('Column number not valid. Input number => ');
    };
    while (isNaN(y % 2) || !y || 0 === y.lenght) {
        y = prompt('Rows number not valid. Input number=> ');
    }
};

checkInput();

const myField = new Field(field);

Field.createField(x, y, percent);
myField.play();