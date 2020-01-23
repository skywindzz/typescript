import { Sorter } from './Sorter';

class Node {
  //next is not in the constructor because it needs to be created first and associate it with other nodes later on
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    //since at the tail node cant be null you need to annotate or else typescript will show error
    let node: Node | null = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  //at is to recive a index and return the node
  at(index: number): Node {
    if (!this.head) {
      throw new Error('index out of bounds');
    }
    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
