/**
 * Print the linked list
 * The linked list is printed in the following format: 1 -> 2 -> 3 -> 4 -> 5 -> null
 *
 * @param {LinkedListNode} head - The head of the linked list.
 */
function printLinkedList(head) {
    let current = head;
    let result = '';

    while (current !== null) {
        result += (current.data + ' -> ');
        current = current.next;

        if (current === null) {
            result += 'null';
        }
    }

    console.log(result.trim());
}

module.exports = printLinkedList;