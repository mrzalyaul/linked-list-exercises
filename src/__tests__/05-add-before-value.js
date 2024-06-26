const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const addBeforeValue = require('../05-add-before-value.js');

describe('addBeforeValue', () => {

    test('addBeforeValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 0, 3) => 1 -> 2 -> 9 -> 3 -> 4 -> 5 -> null', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const newHead = addBeforeValue(head, 9, 3);
        expect(newHead.data).toBe(1);
        expect(newHead.next.data).toBe(2);
        expect(newHead.next.next.data).toBe(9);
        expect(newHead.next.next.next.data).toBe(3);
        expect(newHead.next.next.next.next.data).toBe(4);
        expect(newHead.next.next.next.next.next.data).toBe(5);
        expect(newHead.next.next.next.next.next.next).toBe(null);
    });

    test('addBeforeValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 1, 0) => 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> null', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const newHead = addBeforeValue(head, 0, 1);
        expect(newHead.data).toBe(0);
        expect(newHead.next.data).toBe(1);
        expect(newHead.next.next.data).toBe(2);
        expect(newHead.next.next.next.data).toBe(3);
        expect(newHead.next.next.next.next.data).toBe(4);
        expect(newHead.next.next.next.next.next.data).toBe(5);
        expect(newHead.next.next.next.next.next.next).toBe(null);
    });

    test('addBeforeValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 5, 0) => 1 -> 2 -> 3 -> 4 -> 9 -> 5 -> null', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const newHead = addBeforeValue(head, 9, 5);
        expect(newHead.data).toBe(1);
        expect(newHead.next.data).toBe(2);
        expect(newHead.next.next.data).toBe(3);
        expect(newHead.next.next.next.data).toBe(4);
        expect(newHead.next.next.next.next.data).toBe(9);
        expect(newHead.next.next.next.next.next.data).toBe(5);
        expect(newHead.next.next.next.next.next.next).toBe(null);
    });

    test('addBeforeValue(1 -> null, 1, 0) => 0 -> 1 -> null', () => {
        const head = createLinkedListFromArray([1]);
        const newHead = addBeforeValue(head, 0, 1);
        expect(newHead.data).toBe(0);
        expect(newHead.next.data).toBe(1);
        expect(newHead.next.next).toBe(null);
    });

});