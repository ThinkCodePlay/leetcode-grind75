// https://leetcode.com/problems/merge-two-sorted-lists/
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let index1 = list1;
  let index2 = list2;
  let newListPointer = new ListNode();
  const newLinkedListHead = newListPointer;

  while (index1 && index2) {
    if (index1.val < index2.val) {
      newListPointer.next = index1;
      index1 = index1.next;
    } else {
      newListPointer.next = index2;
      index2 = index2.next;
    }
    newListPointer = newListPointer.next;
  }
  while (index1) {
    newListPointer.next = index1;
    index1 = index1.next;
    newListPointer = newListPointer.next;
  }
  while (index2) {
    newListPointer.next = index2;
    index2 = index2.next;
    newListPointer = newListPointer.next;
  }

  return newLinkedListHead.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
