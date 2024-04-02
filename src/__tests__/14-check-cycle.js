const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const checkCycle = require('../14-check-cycle.js');

describe('checkCycle', () => {

    test('checkCycle(1 -> 2 -> 3 -> 4 -> 5 -> null) => false', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const result = checkCycle(head);
        expect(result).toBe(false);
    });

    test('checkCycle(1 -> 2 -> 3 -> 4 -> 5 -> 3) => true', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const result = checkCycle(head);
        expect(result).toBe(true);
    });

    test('checkCycle(1 -> 2 -> 3 -> 4 -> 5 -> 1) => true', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const result = checkCycle(head);
        expect(result).toBe(true);
    });

    test('checkCycle(1 -> 1) => true', () => {
        const head = createLinkedListFromArray([1]);
        const result = checkCycle(head);
        expect(result).toBe(true);
    });

    test('checkCycle(null) => false', () => {
        const head = createLinkedListFromArray([]);
        const result = checkCycle(head);
        expect(result).toBe(false);
    });

});