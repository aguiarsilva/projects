function convertToRoman(num) {
    //create an array with roman letters
    let rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    //create array with the matching decimals
    let decForm = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    //create the romanized numbers variable
    let romanized = "";
    //loop through decimals array and return the index of the numbers, add the index of the romanized numbers and decrese the number used from the given number
    for(let i = 0; i < decForm.length; i++){
        while(decForm[i] <= num){
            romanized += rom[i];
            num -= decForm[i];
        }
    }
    return romanized;
}