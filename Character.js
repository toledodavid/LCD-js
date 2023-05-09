
export class Character {
  horizontal;
  vertical;
  space;

  constructor() {
    this.horizontal = '_';
    this.vertical = '|';
    this.space = ' ';
  }

  getLineHorizontal() {
    return this.horizontal;
  }

  getLineVertical() {
    return this.vertical;
  }

  getSpace() {
    return this.space;
  }
}