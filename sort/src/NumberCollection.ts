import { Sorter } from './Sorter';

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  //with this getter function
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    let temp = this.data[leftIndex];

    if (this.data[leftIndex] > this.data[rightIndex]) {
      this.data[leftIndex] = this.data[rightIndex];
      this.data[rightIndex] = temp;
    }
  }
}
