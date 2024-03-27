/**
 * Create a function that creates a linked list from an array of values.
 * This function takes an array of values and converts it into a linked list,
 * where each node contains one value from the array.
 * Example: createLinkedListFromArray([1, 2, 3, 4, 5]) => 1 -> 2 -> 3 -> 4 -> 5 -> null  (head is 1)
 * Example: createLinkedListFromArray([1]) => 1 -> null  (head is 1)
 * Example: createLinkedListFromArray([]) => null  (head is null)
 * Creates a linked list from an array of values.
 *
 * @param {Array} arr - The array of values to convert into a linked list.
 * @returns {Node} The head node of the created linked list.
 */
function createLinkedListFromArray(arr) {
    if (arr.length === 0) {
        return null;
    }

    let head = { value: arr[0], next: null };
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = { value: arr[i], next: null };
        current = current.next;
    }

    return head;
}

module.exports = createLinkedListFromArray;