const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const addToEnd = require('../03-add-to-end.js');

describe('addToEnd', () => {
    test('addToEnd(1 -> 2 -> 3 -> 4 -> 5 -> null, 6) => 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const newHead = addToEnd(head, 6);
        expect(newHead.data).toBe(1);
        expect(newHead.next.data).toBe(2);
        expect(newHead.next.next.data).toBe(3);
        expect(newHead.next.next.next.data).toBe(4);
        expect(newHead.next.next.next.next.data).toBe(5);
        expect(newHead.next.next.next.next.next.data).toBe(6);
        expect(newHead.next.next.next.next.next.next).toBe(null);
    });

    test('addToEnd(1 -> null, 2) => 1 -> 2 -> null', () => {
        const head = createLinkedListFromArray([1]);
        const newHead = addToEnd(head, 2);
        expect(newHead.data).toBe(1);
        expect(newHead.next.data).toBe(2);
        expect(newHead.next.next).toBe(null);
    });

    test('addToEnd(null, 1) => 1 -> null', () => {
        const head = createLinkedListFromArray([]);
        const newHead = addToEnd(head, 1);
        expect(newHead.data).toBe(1);
        expect(newHead.next).toBe(null);
    });
});