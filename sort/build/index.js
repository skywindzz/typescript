"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var NumberCollection_1 = require("./NumberCollection");
var LinkList_1 = require("./LinkList");
//running tsc index.ts will compile it to js and create a index.js file
//the problem with the sorter is that with different data entered in the array, we will need different ways to sort them. number you can compare directly, however, alphabets are compared with character code 'a'.charCodeAt()
//with the union operator |  typescript will check for common functionality and property behind the scenes and show you error if you are writing property or function for one type and show you errors
/* class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {

        //all of this only works if collection is a number[]
        //if collection is an array of numbers
        //below the if statement below is a type guard
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            let x = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = x;
          }
        }

        //the typeof type guard only works with primitive value string, number, boolean, symbol
        if (typeof this.collection === 'string') {

        }

      }
    }
  }
}
*/
// let numSorter = new Sorter(numberCollection);
// numSorter.sort();
// console.log(numberCollection.data);
var numberCollection = new NumberCollection_1.NumberCollection([1, 2, -5, 7, 3]);
numberCollection.sort();
console.log(numberCollection.data);
// const charactersCollection = new CharactersCollection('Xyacb');
// const charSorter = new Sorter(charactersCollection);
// charSorter.sort();
// console.log(charactersCollection.data);
var charSorter = new CharactersCollection_1.CharactersCollection('aviliable');
charSorter.sort();
console.log(charSorter.data);
var linkedList = new LinkList_1.LinkList();
linkedList.add(500);
linkedList.add(4);
linkedList.add(48);
linkedList.add(-6);
// let linkListSorter = new Sorter(linkedList);
// linkListSorter.sort();
// linkedList.print();
linkedList.sort();
linkedList.print();
