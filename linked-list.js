/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) return null;

    let current = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail;

      while (current.next) {
        newTail = current;
        current = current.next;
      }
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return null;

    let elementToBeRemoved = this.head;

    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      elementToBeRemoved.next = null;
    }

    this.length--;
    return elementToBeRemoved.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter !== idx) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    //that would be even more easier if we update the getAt function's return value as node itself

    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter !== idx) {
      currentNode = currentNode.next;
      counter++;
    }
    currentNode.val = val;
    return currentNode.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      return null;
    }

    if (idx === 0) {
      this.unshift(val);
      return;
    } else if (idx === this.length) {
      this.push(val);
      return;
    } else {
      let counter = 0;
      let searchedIdx = idx - 1; //We are going to check the previous node of the insertion
      let currentNode = this.head;
      while (counter !== searchedIdx) {
        currentNode = currentNode.next;
        counter++;
      }
      let newNode = new Node(val);

      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;

      return;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let counter = 0;
      let searchedIdx = idx - 1; //We are going to check the previous node of the insertion
      let currentNode = this.head;
      while (counter !== searchedIdx) {
        currentNode = currentNode.next;
        counter++;
      }
      let elementToBeRemoved = currentNode.next;
      currentNode.next = elementToBeRemoved.next;
      elementToBeRemoved.next = null;

      this.length--;

      return elementToBeRemoved.val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.head) return 0;

    else{
      let sum=0;
      let current=this.head

      while(current){
        sum+=current.val
        current=current.next
      }

      return sum/this.length

    }
  }
}

module.exports = LinkedList;
