function telephoneCheck(str) {
    // ^ for beginning of string and $ to end string
    //(1\s?)? - allow the use of the country code "1" or "1 ";
    //\d{3} - checks the exact number of digits
    //\d{3}|\d{3} -checks for 3 digits or 3 digits
    //[\s\-]? - checks spaces or dashes and group of digits
    let expControl = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return expControl.test(str);
  };