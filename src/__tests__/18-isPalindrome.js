const createLinkedListFromArray = require('../01-create-linked-list-from-array.js');
const isPalindrome = require('../17-isPalindrome.js');

test('isPalindrome(1 -> 2 -> 2 -> 1) => true', () => {
    const head = createLinkedListFromArray([1, 2, 2, 1]);
    const result = isPalindrome(head);
    expect(result).toBe(true);
});

test('isPalindrome(1 -> 2) => false', () => {
    const head = createLinkedListFromArray([1, 2]);
    const result = isPalindrome(head);
    expect(result).toBe(false);
});

test('isPalindrome(1 -> 2 -> 1) => true', () => {
    const head = createLinkedListFromArray([1, 2, 1]);
    const result = isPalindrome(head);
    expect(result).toBe(true);
});
