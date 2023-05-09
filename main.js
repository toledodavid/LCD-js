import { Digit } from './Digit.js';




class LCDDisplay {
  // number;

  arrayOfDigists;
  displayRows;

  constructor(num) {
    this.arrayOfDigists = [];
    this.displayRows = 3;

    this.convert(num);
  }


  convert(number) {
    // this.number = number;
    const numArr = this.convertIntNumberToArrOfNumbers(number);
    this.arrayOfDigists = this.createDigits(numArr);
    // console.log(this.arrayOfDigists);
    // this.show();
    // return {show: () => this.show()}
  }

  convertIntNumberToArrOfNumbers(number) {
    return Array.from(String(number), (n) => Number(n));
    // [1,2]
  }

  createDigits(numArr) {
    return numArr.map(number => new Digit(number).getDigit());
  }

  show() {
    let line = '';

    for (let i = 0; i < this.displayRows; i++) {
      this.arrayOfDigists.forEach((digit) => {
        line += digit[i].join('');
      });

      console.log(line);
      line = '';
    }
  }


  // withCustomWidthAndHeight(w, h) {
  // }

}

// const LCD = new LCDDisplay().convert(12345);
const LCD = new LCDDisplay(12345);
LCD.show();

