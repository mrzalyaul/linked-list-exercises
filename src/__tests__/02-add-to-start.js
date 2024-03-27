const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const addToStart = require('../02-add-to-start.js');

test('addToStart(1 -> 2 -> 3 -> 4 -> 5 -> null, 0) => 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const newHead = addToStart(head, 0);
    expect(newHead.value).toBe(0);
    expect(newHead.next.value).toBe(1);
    expect(newHead.next.next.value).toBe(2);
    expect(newHead.next.next.next.value).toBe(3);
    expect(newHead.next.next.next.next.value).toBe(4);
    expect(newHead.next.next.next.next.next.value).toBe(5);
    expect(newHead.next.next.next.next.next.next).toBe(null);
})

test('addToStart(1 -> null, 0) => 0 -> 1 -> null', () => {
    const head = createLinkedListFromArray([1]);
    const newHead = addToStart(head, 0);
    expect(newHead.value).toBe(0);
    expect(newHead.next.value).toBe(1);
    expect(newHead.next.next).toBe(null);
})