const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const findLength = require('../15-findLength.js');

test('findLength(1 -> 2 -> 3 -> 4 -> 5 -> null) => 5', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const result = findLength(head);
    expect(result).toBe(5);
});
test('findLength(1 -> 1) => 2', () => {
    const head = createLinkedListFromArray([1]);
    head.next = head;
    const result = findLength(head);
    expect(result).toBe(2);
});

test('findLength(null) => 0', () => {
    const result = findLength(null);
    expect(result).toBe(0);
})