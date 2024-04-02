const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const searchValue = require('../07-search-value.js');

describe('searchValue', () => {

    test('searchValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 3) => 2', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const result = searchValue(head, 3);
        expect(result).toBe(2);
    });

    test('searchValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 1) => 0', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const result = searchValue(head, 1);
        expect(result).toBe(0);
    });

    test('searchValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 5) => 4', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const result = searchValue(head, 5);
        expect(result).toBe(4);
    });

    test('searchValue(1 -> null, 1) => 0', () => {
        const head = createLinkedListFromArray([1]);
        const result = searchValue(head, 1);
        expect(result).toBe(0);
    });

    test('searchValue(1 -> 2 -> 3 -> 4 -> 5 -> null, 6) => -1', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const result = searchValue(head, 6);
        expect(result).toBe(-1);
    });


    test('searchValue(null, 0) => -1', () => {
        const head = createLinkedListFromArray([]);
        const result = searchValue(head, 0);
        expect(result).toBe(-1);
    });
    
});