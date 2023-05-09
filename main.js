import { Digit } from './Digit.js';




class LCDDisplay {

  arrayOfDigists;
  displayRows;

  constructor(num, customWH = null) {
    this.arrayOfDigists = [];
    this.customWH = customWH;

    if (this.customWH) {
      this.customWH = this.validateCustomParams();
    }

    this.displayRows = this.customWH ? (this.customWH.h * 2) + 3 : 3;

    this.convert(num);
  }


  convert(number) {
    const numArr = this.convertIntNumberToArrOfNumbers(number);
    this.arrayOfDigists = this.createDigits(numArr);
  }

  convertIntNumberToArrOfNumbers(number) {
    return Array.from(String(number), (n) => Number(n));
  }

  createDigits(numArr) {
    return numArr.map(number => new Digit(number, this.customWH).getDigit());
  }

  validateCustomParams() {
    const {w, h} = this.customWH;
    if (typeof w !== 'number' || typeof h !== 'number') {
      console.log('Width(w) and Height(h) must be numbers');
      return null;
    }

    if (w < 3 || h < 2) {
      console.log('The minimum values are w = 3 and h = 2');
      return null;
    }

    return this.customWH;
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

}

// const LCD = new LCDDisplay(123456789);
const LCD = new LCDDisplay(123456789, {w: 3, h: 2});
LCD.show();

