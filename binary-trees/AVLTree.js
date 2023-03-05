class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
        // a node has data, left, and right pointers
        // a node also has a height property that starts at 1
        // left and right are intialized as null
    }
}
class AVLTree {
    constructor() {
        this.root = null;
        // when a new Tree is made, it has a root property
    }
    insert(data) {
        const tree = this;

        if (this.root) {
            helperInsert(this.root, data, this, 'root');
        } else {
            this.root = new Node(data);
        }

        function helperInsert(node, data, parent, property) {
            if (data < node.data) {
                if (node.left) {
                    helperInsert(node.left, data, node, 'left');
                } else {
                    node.left = new Node(data);
                }
            } else if (data > node.data) {
                if (node.right) {
                    helperInsert(node.right, data, node, 'right');
                } else {
                    node.right = new Node(data);
                }
            }

            const heightDifference = tree.checkHeightDifference(node);
            console.log(node, 'heightdif', heightDifference);

            if (heightDifference > 1) {
                tree.rotateRight(node, parent, property);
            } else if (heightDifference < -1) {
                tree.rotateLeft(node, parent, property);
            }
            tree.setHeight(node);
        }
        // add a new Node to the tree, with data as the Node's data
        // insertion starts the same way as in a regular Binary Tree
        // once the node is inserted, however, check the heights for imbalance
        // if the new node causes imbalance, perform rotations to rebalance
    }
    setHeight(node) {
        // calculate and set the height property of the given node
        // the height is the maximum between the left and right children heights plus 1
        // the height of a node without any further nodes is 1
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    }
    rotateRight(node, parent, property) {
        // rotate the given node to the right
        let baseNode;
        if (!node.left.left) {
            baseNode = node.left.right;
            baseNode.left = node.left;
            baseNode.right = node;

            baseNode.right.left = null;
            baseNode.left.right = null;
            parent[property] = baseNode;

        } else if (!node.left.right) {
            baseNode = node.left;
            parent[property] = baseNode;
            baseNode.right = node;
            node.left = null;


        } else {
            throw Error('Shouldnt occur');
        }

        for (const n of [baseNode, baseNode.left, baseNode.right]) {
            this.setHeight(n);
        }

    }
    rotateLeft(node, parent, property) {
        // rotate the given node to the left
        let baseNode;
        if (!node.right.right) {
            baseNode = node.right.left;
            baseNode.right = node.right;
            baseNode.left = node;

            baseNode.left.right = null;
            baseNode.right.left = null;
            parent[property] = baseNode;

        } else if (!node.right.left) {
            baseNode = node.right;
            parent[property] = baseNode;
            baseNode.left = node;
            node.right = null;
        } else {
            throw Error('Shouldnt occur');
        }

        for (const n of [baseNode, baseNode.left, baseNode.right]) {
            this.setHeight(n);
        }
    }
    height(node = this.root) {
        // calculate the maximum amount of nodes in any one path from the given node
        // if not given a specific node, default to using the root node

        if (!node) return 0;

        return 1 + helperCheckDepth(node);

        function helperCheckDepth(node) {
            let left = 0;
            let right = 0;

            if (node.left) left = 1 + helperCheckDepth(node.left);

            if (node.right) right = 1 + helperCheckDepth(node.right);

            return Math.max(left, right);
        }
    }
    checkHeightDifference(node) {
        const leftHeight = node.left ? node.left.height : 0;
        const rightHeight = node.right ? node.right.height : 0;

        return leftHeight - rightHeight;
    }
}

module.exports = {
    Node,
    AVLTree
}