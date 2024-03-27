const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const deleteAtPosition = require('../09-delete-at-position.js');

test('deleteAtPosition(1 -> 2 -> 3 -> 4 -> 5 -> null, 2) => 1 -> 2 -> 4 -> 5 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const newHead = deleteAtPosition(head, 2);
    expect(newHead.value).toBe(1);
    expect(newHead.next.value).toBe(2);
    expect(newHead.next.next.value).toBe(4);
    expect(newHead.next.next.next.value).toBe(5);
    expect(newHead.next.next.next.next).toBe(null);
});

test('deleteAtPosition(1 -> 2 -> 3 -> 4 -> 5 -> null, 0) => 2 -> 3 -> 4 -> 5 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const newHead = deleteAtPosition(head, 0);
    expect(newHead.value).toBe(2);
    expect(newHead.next.value).toBe(3);
    expect(newHead.next.next.value).toBe(4);
    expect(newHead.next.next.next.value).toBe(5);
    expect(newHead.next.next.next.next).toBe(null);
});

test('deleteAtPosition(1 -> 2 -> 3 -> 4 -> 5 -> null, 4) => 1 -> 2 -> 3 -> 4 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const newHead = deleteAtPosition(head, 4);
    expect(newHead.value).toBe(1);
    expect(newHead.next.value).toBe(2);
    expect(newHead.next.next.value).toBe(3);
    expect(newHead.next.next.next.value).toBe(4);
    expect(newHead.next.next.next.next).toBe(null);
});

test('deleteAtPosition(1 -> null, 0) => null', () => {
    const head = createLinkedListFromArray([1]);
    const newHead = deleteAtPosition(head, 0);
    expect(newHead).toBe(null);
});