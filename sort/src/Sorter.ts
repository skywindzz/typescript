//refractoring idea: seperating out the compare and the swap logic into it's own class and make Sorter class a generic class where no matter what type of data you have it will still work

// interface Sortable {
//   swap(leftIndex: number, rightIndex: number): void;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   length: number;
// }

//the class sorter will never be instantiate, it will only be used to send the sort method to share it with it's subclass

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;

  abstract swap(leftIndex: number, rightIndex: number): void;

  abstract length: number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
