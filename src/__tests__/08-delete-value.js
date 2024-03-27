const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const deleteValue = require('../08-delete-value.js');

test('deleteValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 3) => 1 -> 2 -> 4 -> 5 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const newHead = deleteValue(head, 3);
    expect(newHead.data).toBe(1);
    expect(newHead.next.data).toBe(2);
    expect(newHead.next.next.data).toBe(4);
    expect(newHead.next.next.next.data).toBe(5);
    expect(newHead.next.next.next.next).toBe(null);
});

test('deleteValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 1) => 2 -> 3 -> 4 -> 5 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const newHead = deleteValue(head, 1);
    expect(newHead.data).toBe(2);
    expect(newHead.next.data).toBe(3);
    expect(newHead.next.next.data).toBe(4);
    expect(newHead.next.next.next.data).toBe(5);
    expect(newHead.next.next.next.next).toBe(null);
});

test('deleteValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 5) => 1 -> 2 -> 3 -> 4 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const newHead = deleteValue(head, 5);
    expect(newHead.data).toBe(1);
    expect(newHead.next.data).toBe(2);
    expect(newHead.next.next.data).toBe(3);
    expect(newHead.next.next.next.data).toBe(4);
    expect(newHead.next.next.next.next).toBe(null);
});

test('deleteValue(1 -> null, 1) => null', () => {
    const head = createLinkedListFromArray([1]);
    const newHead = deleteValue(head, 1);
    expect(newHead).toBe(null);
});