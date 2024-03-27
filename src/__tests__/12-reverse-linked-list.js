const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const reverseLinkedList = require('../12-reverse-linked-list.js');

test('reverseLinkedList(1 -> 2 -> 3 -> 4 -> 5 -> null) => 5 -> 4 -> 3 -> 2 -> 1 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const newHead = reverseLinkedList(head);
    expect(newHead.value).toBe(5);
    expect(newHead.next.value).toBe(4);
    expect(newHead.next.next.value).toBe(3);
    expect(newHead.next.next.next.value).toBe(2);
    expect(newHead.next.next.next.next.value).toBe(1);
    expect(newHead.next.next.next.next.next).toBe(null);
});

test('reverseLinkedList(1 -> null) => 1 -> null', () => {
    const head = createLinkedListFromArray([1]);
    const newHead = reverseLinkedList(head);
    expect(newHead.value).toBe(1);
    expect(newHead.next).toBe(null);
});

test('reverseLinkedList(null) => null', () => {
    const head = createLinkedListFromArray([]);
    const newHead = reverseLinkedList(head);
    expect(newHead).toBe(null);
});