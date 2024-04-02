const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const deleteFirstNode = require('../10-delete-first-node.js');

describe('deleteFirstNode', () => {

    test('deleteFirstNode(1 -> 2 -> 3 -> 4 -> 5 -> null) => 2 -> 3 -> 4 -> 5 -> null', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
        const newHead = deleteFirstNode(head);
        expect(newHead.data).toBe(2);
        expect(newHead.next.data).toBe(3);
        expect(newHead.next.next.data).toBe(4);
        expect(newHead.next.next.next.data).toBe(5);
        expect(newHead.next.next.next.next).toBe(null);
    });

    test('deleteFirstNode(1 -> 2 -> 3 -> 4 -> null) => 2 -> 3 -> 4 -> null', () => {
        const head = createLinkedListFromArray([1, 2, 3, 4]);
        const newHead = deleteFirstNode(head);
        expect(newHead.data).toBe(2);
        expect(newHead.next.data).toBe(3);
        expect(newHead.next.next.data).toBe(4);
        expect(newHead.next.next.next).toBe(null);
    });

    test('deleteFirstNode(1 -> null) => null', () => {
        const head = createLinkedListFromArray([1]);
        const newHead = deleteFirstNode(head);
        expect(newHead).toBe(null);
    });

    test('deleteFirstNode(null) => null', () => {
        const head = createLinkedListFromArray([]);
        const newHead = deleteFirstNode(head);
        expect(newHead).toBe(null);
    });

});
