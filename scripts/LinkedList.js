import Node from './Node';

export default class LinkedList {
  constructor () {
    this.length = 0,
    this.head = null
  }

  unshift(val) {
    let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return newNode;
  }

  shift() {
    if(this.length === 0) {
      return null;
    } else {
      let removedNode = this.head;
      this.head = this.head.next;
      this.length--;
      return removedNode;
    }
  }

  push(val) {
    let newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head
      while(currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode;
    }
    this.length++;
    return newNode;
  }

  pop() {
    let currentNode = this.head;
    let previousNode = null;

    if(this.length === 0) {
      return null;
    }

    if(this.length === 1) {
      let node = this.head;
      this.head = null;
      this.length--;
      return node;
    }

    while(currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
      previousNode.next = null;
      this.length--;
      return currentNode;
  }

  find(data) {
    let foundNode;
    let currNode = this.head;

    while (currNode) {
      if (currNode.data === data) {
        foundNode = currNode;
      } else {
        currNode = currNode.next;
      }
    }
  }

}
