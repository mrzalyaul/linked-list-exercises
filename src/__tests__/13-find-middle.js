const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const findMiddle = require('../13-find-middle.js');

describe('findMiddle', () => {

    test('findMiddle(1 -> 2 -> 3 -> 4 -> 5 -> null) => 3', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const middle = findMiddle(head);
        expect(middle).toBe(3);
    });

    test('findMiddle(1 -> 2 -> 3 -> 4 -> null) => 3', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4]);
        const middle = findMiddle(head);
        expect(middle).toBe(3);
    });

    test('findMiddle(1 -> 2 -> 3 -> null) => 2', () => {
        const head = createLinkedListFromArray([1, 2, 3]);
        const middle = findMiddle(head);
        expect(middle).toBe(2);
    });

    test('findMiddle(1 -> null) => 1', () => {
        const head = createLinkedListFromArray([1]);
        const middle = findMiddle(head);
        expect(middle).toBe(1);
    });

    test('findMiddle(null) => null', () => {
        const head = createLinkedListFromArray([]);
        const middle = findMiddle(head);
        expect(middle).toBe(null);
    });

});