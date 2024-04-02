const printLinkedList = require('../00-printLinkedList.js');
const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');


describe('printLinkedList', () => {
    test('printLinkedList(1 -> 2 -> 3 -> 4 -> 5 -> null) => 1 -> 2 -> 3 -> 4 -> 5 -> null', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        printLinkedList(head);

        expect(consoleSpy).toHaveBeenCalledWith('1 -> 2 -> 3 -> 4 -> 5 -> null');
    });
});