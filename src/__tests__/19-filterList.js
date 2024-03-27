const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const filterList = require('../18-filterList.js');

test('filterList(1 -> 2 -> 3 -> 4 -> 5 -> null, 3) => 4 -> 5 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const result = filterList(head, (x) => x > 3);
    expect(result.data).toBe(4);
    expect(result.next.data).toBe(5);
    expect(result.next.next).toBe(null);
});

test('filterList(1 -> 2 -> 3 -> 4 -> 5 -> null, 1) => 2 -> 4 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const result = filterList(head, (x) => x % 2 === 0);
    expect(result.data).toBe(2);
    expect(result.next.data).toBe(4);
    expect(result.next.next.data).toBe(null);
});

test('filterList(1 -> 2 -> 3 -> 4 -> 5 -> null, 5) => 1 -> 3 -> 4 -> null', () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const result = filterList(head, (x) => x !== 2);
    expect(result.data).toBe(1);
    expect(result.next.data).toBe(3);
    expect(result.next.next.data).toBe(4);
    expect(result.next.next.next.data).toBe(5);
    expect(result.next.next.next.next).toBe(null);
});
