function loop_size(node) {
    let slow = node;
    let fast = node;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        slow = node;
        let length = 1;
        fast = fast.next;
        while (slow !== fast) {
          length++;
          fast = fast.next;
        }
        return length;
      }
    }
    return 0;
  }

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // creates a loop

const loopLength = loop_size(node1);
console.log(loopLength);
  
  
  
  