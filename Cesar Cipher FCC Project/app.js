function rot13(str) {
    //create a variable with alphabet
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //split the string and map to return the array
    return str.split('').map(char => {
      const index = letters.indexOf(char);
    //calculate the 13th letter using modulo for the Z;
    return index >= 0 ? letters[(index + 13) % 26] : char;
    }).join('');
  }
  