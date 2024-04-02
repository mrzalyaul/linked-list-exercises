const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const deleteLastNode = require('../11-delete-last-node.js');

describe('deleteLastNode', () => {

    test('deleteLastNode(1 -> 2 -> 3 -> 4 -> 5 -> null) => 1 -> 2 -> 3 -> 4 -> null', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const newHead = deleteLastNode(head);
        expect(newHead.data).toBe(1);
        expect(newHead.next.data).toBe(2);
        expect(newHead.next.next.data).toBe(3);
        expect(newHead.next.next.next.data).toBe(4);
        expect(newHead.next.next.next.next).toBe(null);
    });

    test('deleteLastNode(1 -> 2 -> 3 -> 4 -> null) => 1 -> 2 -> 3 -> null', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4]);
        const newHead = deleteLastNode(head);
        expect(newHead.data).toBe(1);
        expect(newHead.next.data).toBe(2);
        expect(newHead.next.next.data).toBe(3);
        expect(newHead.next.next.next).toBe(null);
    });

    test('deleteLastNode(1 -> null) => null', () => {
        const head = createLinkedListFromArray([1]);
        const newHead = deleteLastNode(head);
        expect(newHead).toBe(null);
    });

    test('deleteLastNode(null) => null', () => {
        const head = createLinkedListFromArray([]);
        const newHead = deleteLastNode(head);
        expect(newHead).toBe(null);
    });

});