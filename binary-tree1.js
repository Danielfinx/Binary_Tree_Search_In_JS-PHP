// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
}

// Constructor to create a new BST 
function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.findLargestSmallerKey = function (num) {
    // your code goes here
    let current = this.root;

    if (!current) {
        return -1;
    }

    while (current) {
        if (current.key < num) {
            if (!current.right || current.right.key > num) {
                return current.key;
            } else {
                current = current.right;
            }
        } else if (current.key >= num) {
            if (!current.left) {
                return -1;
            } else {
                current = current.left;
            }
        }
    }
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function (key) {
    let root = this.root;

    // 1. If the tree is empty, create the root
    if (!root) {
        this.root = new Node(key);
        return;
    }

    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert the new node
    let currentNode = root;
    let newNode = new Node(key);

    while (currentNode !== null) {
        if (key < currentNode.key) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

let result = bst.findLargestSmallerKey(17);

console.log("Largest smaller number is " + result);  