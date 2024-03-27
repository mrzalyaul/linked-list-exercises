# Linked List Exercises

This project is a collection of linked list exercises implemented in JavaScript. It provides a set of problems that you can solve to improve your understanding of linked lists. You can run the tests in watch mode and start solving the exercises.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (>=12.0.0)
- npm

### Installing

1. Clone the repository
```bash
git clone https://github.com/mrzalyaul/linked-list-exercises
```

2. Navigate to the project directory
```bash
cd linked-list-exercises
```

3. Install the dependencies
```bash
npm install
```

## Running the tests

This project uses Jest for testing. Run the following command to execute the tests:

```bash
npm run test
```

You can also use the following commands for more specific testing needs:

- To run tests and watch for changes:
```bash
npm run test:watch
```

- To run tests and watch all files for changes:
```bash
npm run test:watchAll
```

## Solving the Exercises

The main goal of this project is to solve the linked list exercises. Each exercise is a function that you need to implement. For example, the `addToStart` function adds a new element to the start of the linked list. This function creates a new node with the given value and inserts it at the beginning of the list.

For example, given `1 -> 2 -> 3` and you add `0`, it becomes `0 -> 1 -> 2 -> 3`. Given `null` and you add `1`, it becomes `1 -> null`.

## License

This project is licensed under the MIT License.