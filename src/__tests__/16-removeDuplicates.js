const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const removeDuplicates = require('../16-removeDuplicates.js');

describe('removeDuplicates', () => {

    test('removeDuplicates(1 -> 2 -> 2 -> 3 -> 3 -> null) => 1 -> 2 -> 3 -> null', () => {
        const head = createLinkedListFromArray([1, 2, 2, 3, 3]);
        const result = removeDuplicates(head);
        expect(result.data).toBe(1);
        expect(result.next.data).toBe(2);
        expect(result.next.next.data).toBe(3);
        expect(result.next.next.next).toBe(null);
    });

    test('removeDuplicates(1 -> 1 -> 1 -> 1 -> 1 -> null) => 1 -> null', () => {
        const head = createLinkedListFromArray([1, 1, 1, 1, 1]);
        const result = removeDuplicates(head);
        expect(result.data).toBe(1);
        expect(result.next).toBe(null);
    });

    test('removeDuplicates(1 -> 2 -> null) => 1 -> 2 -> null', () => {
        const head = createLinkedListFromArray([1, 2]);
        const result = removeDuplicates(head);
        expect(result.data).toBe(1);
        expect(result.next.data).toBe(2);
        expect(result.next.next).toBe(null);
    });

    test('removeDuplicates(null) => null', () => {
        const head = createLinkedListFromArray([]);
        const result = removeDuplicates(head);
        expect(result).toBe(null);
    });

});