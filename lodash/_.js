const _ = {
    clamp(num, lower, upper){
     const lowerClampedValue = Math.max(num, lower);
     const clampedValue = Math.min(lowerClampedValue, upper);
     return clampedValue;
    },
   
    inRange(num, start, end){
      if(end === undefined) {
        end = start;
        start = 0;
      }
     
      if(start > end){
       let temp = end;
        end = start;
        start = temp;
      }
   
      const isInRange = start <= num && num < end ? true : false;
      return isInRange;
    },
   
    words(str){
     const words = str.split(' ');
     return words;
    },
    
    pad(string, length){
      if(length <= string.length){
        return string;
      };
      const startPaddingLength = Math.floor((length - string.length) / 2);
      const endPaddingLength = length -string.length -startPaddingLength;
      const paddedString =' '.repeat(startPaddingLength)+ string + ' '.repeat(endPaddingLength);
      return paddedString;
    },
   
    has(object, key){
      let hasValue = object[key] !== undefined ? true : false;
      return hasValue;
    },
   
   invert(object){
     let invertedObject = {};
     let originalValue;
     for (let key in object) {
       originalValue = object[key];
       invertedObject[originalValue] = key;
     }
     return invertedObject;
     },
   
   findKey(object, predicate){
     for(let key in object){
        let value = object[key];
       let predicateReturnValue = predicate(value);
       if(predicateReturnValue === true){
       return key;
     }
     }
     
   },
   
   drop(arr,num){
     if(num === undefined){
       num = 1;
     }
     const dropArr = arr.slice(num, arr.length);
     return dropArr;
   },
   
   dropWhile(arr, predicate){
     const cback = (element, index) => {
       return !predicate(element, index, arr);
     };
     const dropNum = arr.findIndex(cback);
     const dropArr = this.drop(arr, dropNum);
     return dropArr;
   },
   
   chunk(arr, size){
     if(size === undefined){
       size = 1;
     }
     const newArr = [];
     for(let i = 0; i < arr.length; i+=size){
       let arrChunk = arr.slice(i, i+size);
       newArr.push(arrChunk);
     };
     return newArr;
   }
   
   };
   



// Do not write or modify code below this line.
module.exports = _;