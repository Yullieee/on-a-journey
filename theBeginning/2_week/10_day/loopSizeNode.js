/*

You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

For example in the following picture the size of the dangling piece is 3 and the loop size is 12:

Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next

*/


function loop_size(node) {

  let slow = node;
  let fast = node;

  while (fast !== null && fast.next !== null) {
    
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = node;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      fast = fast.next;
      let length = 1;
      while (slow !== fast) {
          length++;
          fast = fast.next;
      }
      return length;
    }
  }
}





