const constructFromPrePost = require('./solution');

describe('constructFromPrePost', () => {
    test('should construct a binary tree from preorder and postorder traversal', () => {
        const preorder1 = [1, 2, 4, 5, 3, 6, 7];
        const postorder1 = [4, 5, 2, 6, 7, 3, 1];
        const result1 = constructFromPrePost(preorder1, postorder1);
        expect(result1.val).toBe(1);
        expect(result1.left.val).toBe(2);
        expect(result1.right.val).toBe(3);
        expect(result1.left.left.val).toBe(4);
        expect(result1.left.right.val).toBe(5);
        expect(result1.right.left.val).toBe(6);
        expect(result1.right.right.val).toBe(7);

        const preorder2 = [1, 2, 4, 5, 3, 6, 7];
        const postorder2 = [4, 5, 2, 6, 7, 3, 1];
        const result2 = constructFromPrePost(preorder2, postorder2);
        expect(result2.val).toBe(1);
        expect(result2.left.val).toBe(2);
        expect(result2.right.val).toBe(3);
        expect(result2.left.left.val).toBe(4);
        expect(result2.left.right.val).toBe(5);
        expect(result2.right.left.val).toBe(6);
        expect(result2.right.right.val).toBe(7);
    });
});