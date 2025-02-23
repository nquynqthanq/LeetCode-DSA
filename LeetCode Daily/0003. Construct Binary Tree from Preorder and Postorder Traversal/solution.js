class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function constructFromPrePost(preorder, postorder) {
    if (!preorder.length || !postorder.length) return null;

    let root = new TreeNode(preorder[0]);

    if (preorder.length === 1) return root;

    let leftSubtreeRootVal = preorder[1];
    let leftSubtreeSize = postorder.indexOf(leftSubtreeRootVal) + 1;

    root.left = constructFromPrePost(preorder.slice(1, leftSubtreeSize + 1), postorder.slice(0, leftSubtreeSize));
    root.right = constructFromPrePost(preorder.slice(leftSubtreeSize + 1), postorder.slice(leftSubtreeSize, -1));

    return root;
}

module.exports = constructFromPrePost;