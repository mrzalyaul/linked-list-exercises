const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const addAfterValue = require('../06-add-after-value.js');

test('addAfterValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 3, 0) => 1 -> 2 -> 3 -> 0 -> 4 -> 5 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const newHead = addAfterValue(head, 3, 0);
    expect(newHead.data).toBe(1);
    expect(newHead.next.data).toBe(2);
    expect(newHead.next.next.data).toBe(3);
    expect(newHead.next.next.next.data).toBe(0);
    expect(newHead.next.next.next.next.data).toBe(4);
    expect(newHead.next.next.next.next.next.data).toBe(5);
    expect(newHead.next.next.next.next.next.next).toBe(null);
});

test('addAfterValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 1, 0) => 1 -> 0 -> 2 -> 3 -> 4 -> 5 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const newHead = addAfterValue(head, 1, 0);
    expect(newHead.data).toBe(1);
    expect(newHead.next.data).toBe(0);
    expect(newHead.next.next.data).toBe(2);
    expect(newHead.next.next.next.data).toBe(3);
    expect(newHead.next.next.next.next.data).toBe(4);
    expect(newHead.next.next.next.next.next.data).toBe(5);
    expect(newHead.next.next.next.next.next.next).toBe(null);
});

test('addAfterValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 5, 0) => 1 -> 2 -> 3 -> 4 -> 5 -> 0 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const newHead = addAfterValue(head, 5, 0);
    expect(newHead.data).toBe(1);
    expect(newHead.next.data).toBe(2);
    expect(newHead.next.next.data).toBe(3);
    expect(newHead.next.next.next.data).toBe(4);
    expect(newHead.next.next.next.next.data).toBe(5);
    expect(newHead.next.next.next.next.next.data).toBe(0);
    expect(newHead.next.next.next.next.next.next).toBe(null);
});

test('addAfterValue(1 -> null, 1, 0) => 1 -> 0 -> null', () => {
    const head = createLinkedListFromArray([1]);
    const newHead = addAfterValue(head, 1, 0);
    expect(newHead.data).toBe(1);
    expect(newHead.next.data).toBe(0);
    expect(newHead.next.next).toBe(null);
});