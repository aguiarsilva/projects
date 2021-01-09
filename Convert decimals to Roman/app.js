function convertToRoman(num) {
    let rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let decForm = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 
    let romanized = "";
    for(let i = 0; i < decForm.length; i++){
        while(decForm[i] <= num){
            romanized += rom[i];
            num -= decForm[i];
        }
    }
    return romanized;
}