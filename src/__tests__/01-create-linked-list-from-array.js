const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');

test('createLinkedList([1, 2, 3, 4, 5]) => 1 -> 2 -> 3 -> 4 -> 5 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    expect(head.value).toBe(1);
    expect(head.next.value).toBe(2);
    expect(head.next.next.value).toBe(3);
    expect(head.next.next.next.value).toBe(4);
    expect(head.next.next.next.next.value).toBe(5);
    expect(head.next.next.next.next.next).toBe(null);
})

test('createLinkedList([1]) => 1 -> null', () => {
    const head = createLinkedListFromArray([1]);
    expect(head.value).toBe(1);
    expect(head.next).toBe(null);
})

test('createLinkedList([]) => null', () => {
    const head = createLinkedListFromArray([]);
    expect(head).toBe(null);
})