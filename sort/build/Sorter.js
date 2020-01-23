"use strict";
//refractoring idea: seperating out the compare and the swap logic into it's own class and make Sorter class a generic class where no matter what type of data you have it will still work
Object.defineProperty(exports, "__esModule", { value: true });
// interface Sortable {
//   swap(leftIndex: number, rightIndex: number): void;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   length: number;
// }
//the class sorter will never be instantiate, it will only be used to send the sort method to share it with it's subclass
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
