import { Character } from './Character.js';


export class Digit {
  constructor(num, customWH = null) {
    this.num = num;
    this.hori = new Character().getLineHorizontal();
    this.verti = new Character().getLineVertical();
    this.space = new Character().getSpace();

    this.customWH = customWH;
  }

  getDigit() {
    if (this.customWH) {
      return this.getCustomDigit();
    }
    return this.getDefaultDigit();
  }


  getDefaultDigit() {
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

  getCustomDigit() {
    const {w, h} = this.customWH;
    const {leftLine, middleLine, rightLine, leftSectionRows, rightSectionRows, completeRectionRows} = this.withCustomWidthAndHeight({w, h});

    switch(this.num) {
      case 0:
        return [
          middleLine,
          ...completeRectionRows,
          [this.space, this.space, this.space, this.space, this.space],
          ...completeRectionRows,
          middleLine
        ];
      case 1:
        return [
          [this.space, this.space, this.space, this.space, this.space],
          ...rightSectionRows,
          [this.space, this.space, this.space, this.space, this.space],
          ...rightSectionRows,
          [this.space, this.space, this.space, this.space, this.space],
        ];
      case 2:
        return [
          leftLine,
          ...rightSectionRows,
          middleLine,
          ...leftSectionRows,
          middleLine,
        ];
      case 3:
        return [
          middleLine,
          ...rightSectionRows,
          middleLine,
          ...rightSectionRows,
          middleLine,
        ];
      case 4:
        return [
          [this.space, this.space, this.space, this.space, this.space],
          ...completeRectionRows,
          middleLine,
          ...rightSectionRows,
          [this.space, this.space, this.space, this.space, this.space],
        ];
      case 5:
        return [
          rightLine,
          ...leftSectionRows,
          middleLine,
          ...rightSectionRows,
          middleLine,
        ];
      case 6:
        return [
          middleLine,
          ...leftSectionRows,
          middleLine,
          ...completeRectionRows,
          middleLine,
        ];
      case 7:
        return [
          middleLine,
          ...rightSectionRows,
          [this.space, this.space, this.space, this.space, this.space],
          ...rightSectionRows,
          [this.space, this.space, this.space, this.space, this.space],
        ];
      case 8:
        return [
          middleLine,
          ...completeRectionRows,
          middleLine,
          ...completeRectionRows,
          middleLine
        ];
      case 9:
        return [
          middleLine,
          ...completeRectionRows,
          middleLine,
          ...rightSectionRows,
          middleLine,
        ];
      default:
        return [];
    }
  }




  withCustomWidthAndHeight = ({w, h}) => {
    const lineWidth = this.createRowWidth(w);
    const leftLine = this.createLeftLine(lineWidth);
    const rightLine = [...leftLine].reverse();
    const middleLine = this.createMiddleLine(lineWidth);

    const rowsHeight = this.createRowsHeight(h);
    const rightSectionRows = this.createRightSectionRows(rowsHeight, w);
    const leftSectionRows = this.createLeftSectionRows(rightSectionRows);
    const completeRectionRows = this.createCompleteSectionRows(rowsHeight, w);

    return {rightLine, leftLine, middleLine, rightSectionRows, leftSectionRows, completeRectionRows};
  }

  createRowWidth(w) {
    let row = [];
    for (let index = 0; index < w; index++) {
      row.push(this.hori);
    }
    return row;
  }

  createLeftLine(lineWidth) {
    return [...lineWidth, this.space, this.space];
  }

  createMiddleLine(lineWidth) {
    return [this.space, ...lineWidth, this.space];
  }

  createRowsHeight(h) {
    let rows = [];
    for (let index = 0; index < h; index++) {
      rows.push([this.verti]);
    }
    return rows;
  }

  createRightSectionRows(rowsHeight, w) {
    let blankSpaces = [];
    for (let index = 0; index < w+1; index++) {
      blankSpaces.push(this.space);
    }
    return rowsHeight.map(row => [...blankSpaces, ...row]);
  }

  createLeftSectionRows(rightSectionRows) {
    const rows = rightSectionRows.map(row => [...row]);
    return rows.map(row => row.reverse());
  }

  createCompleteSectionRows(rowsHeight, w) {
    let blankSpaces = [];
    for (let index = 0; index < w; index++) {
      blankSpaces.push(this.space);
    }
    return rowsHeight.map(row => [...row, ...blankSpaces, ...row]);
  }
}