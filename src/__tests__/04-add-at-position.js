const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const addAtPosition = require('../04-add-at-position.js');


describe('addAtPosition', () => {

    test('addAtPosition(1 -> 2 -> 3 -> 4 -> 5 -> null, 0, 0) => 0 -> 1 -> 3 -> 4 -> 5 -> null', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const newHead = addAtPosition(head, 0, 0);
        expect(newHead.data).toBe(9);
        expect(newHead.next.data).toBe(1);
        expect(newHead.next.next.data).toBe(2);
        expect(newHead.next.next.next.data).toBe(3);
        expect(newHead.next.next.next.next.data).toBe(4);
        expect(newHead.next.next.next.next.next.data).toBe(5);
        expect(newHead.next.next.next.next.next.next).toBe(null);
    });

    test('addAtPosition(1 -> 2 -> 3 -> 4 -> 5 -> null, 9, 2) => 1 -> 2 -> 9 -> 3 -> 4 -> 5 -> null', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const newHead = addAtPosition(head, 9, 2);
        expect(newHead.data).toBe(1);
        expect(newHead.next.data).toBe(2);
        expect(newHead.next.next.data).toBe(9);
        expect(newHead.next.next.next.data).toBe(3);
        expect(newHead.next.next.next.next.data).toBe(4);
        expect(newHead.next.next.next.next.next.data).toBe(5);
        expect(newHead.next.next.next.next.next.next).toBe(null);
    });

    test('addAtPosition(1 -> null, 0, 0) => 0 -> 1 -> null', () => {
        const head = createLinkedListFromArray([1]);
        const newHead = addAtPosition(head, 0, 0);
        expect(newHead.data).toBe(0);
        expect(newHead.next.data).toBe(1);
        expect(newHead.next.next).toBe(null);
    });
});
