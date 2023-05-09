import { Character } from './Character.js';


export class Digit {
  constructor(num) {
    this.num = num;
    this.hori = new Character().getLineHorizontal();
    this.verti = new Character().getLineVertical();
    this.space = new Character().getSpace();
  }

  getDigit() {
    switch(this.num) {
      case 0:
        return [
          [this.space,this.hori,this.space],
          [this.verti,this.space,this.verti],
          [this.verti,this.hori,this.verti]
        ];
      case 1:
        return [
          [this.space,this.space,this.space],
          [this.space,this.space,this.verti],
          [this.space,this.space,this.verti]
        ];
      case 2:
        return [
          [this.space,this.hori,this.space],
          [this.space,this.hori,this.verti],
          [this.verti,this.hori,this.space]
        ];
      case 3:
        return [
          [this.space,this.hori,this.space],
          [this.space,this.hori,this.verti],
          [this.space,this.hori,this.verti]
        ];
      case 4:
        return [
          [this.space,this.space,this.space],
          [this.verti,this.hori,this.verti],
          [this.space,this.space,this.verti]
        ];
      case 5:
        return [
          [this.space,this.hori,this.space],
          [this.verti,this.hori,this.space],
          [this.space,this.hori,this.verti]
        ];
      case 6:
        return [
          [this.space,this.hori,this.space],
          [this.verti,this.hori,this.space],
          [this.verti,this.hori,this.verti]
        ];
      case 7:
        return [
          [this.space,this.hori,this.space],
          [this.space,this.space,this.verti],
          [this.space,this.space,this.verti]
        ];
      case 8:
        return [
          [this.space,this.hori,this.space],
          [this.verti,this.hori,this.verti],
          [this.verti,this.hori,this.verti]
        ];
      case 9:
        return [
          [this.space,this.hori,this.space],
          [this.verti,this.hori,this.verti],
          [this.space,this.hori,this.verti]
        ];
      default:
        return [];
    }
  }
}