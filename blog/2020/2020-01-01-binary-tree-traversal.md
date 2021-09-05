---
slug: binary-tree-traversal
title: 二叉树的遍历方式
authors: zeffon
tags: [structure]
date: 2020-01-01
---

主要总结一下二叉树的遍历方式及其递归和非递归的实现

<!--truncate-->

## 前言

- 今天是 2020 年的第一天，希望在新的一年有所收获...
- 主要总结一下二叉树的遍历方式及其递归和非递归的实现

## 正文

### 前序遍历

LeetCode-[144.二叉树前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

- 递归实现

```java
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        helper(root, res);
        return res;
    }

    public void helper(TreeNode root, List<Integer> res) {
        if (root != null) {
            res.add(root.val);
            if (root.left != null) {
                helper(root.left, res);
            }
            if (root.right != null) {
                helper(root.right, res);
            }
        }
    }
}
```

- 非递归实现

```java
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        ArrayList<Integer> res = new ArrayList<>();
        if(root == null) {
            return res;
        }
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        while(!stack.isEmpty()){
            TreeNode cur = stack.pop();
            res.add(cur.val);

            if(cur.left != null)
                stack.push(cur.left);
            if(cur.right != null)
                stack.push(cur.right);
        }
        return res;
    }
}
```

### 中序遍历

LeetCode-[94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

- 递归实现

```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        helper(root, res);
        return res;
    }

    public void helper(TreeNode root, List<Integer> res) {
        if (root != null) {
            if (root.left != null) {
                helper(root.left, res);
            }
            res.add(root.val);
            if (root.right != null) {
                helper(root.right, res);
            }
        }
    }
}
```

- 非递归实现

```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        ArrayList<Integer> res = new ArrayList<>();
        if(root == null) {
            return res;
        }

        Stack<TreeNode> stack = new Stack<>();
        TreeNode cur = root;
        while(cur != null || !stack.isEmpty()) {
            if(cur != null) {
                stack.push(cur);
                cur = cur.left;
            } else {
                cur = stack.pop();
                res.add(cur.val);
                cur = cur.right;
            }
        }
        return res;
    }
}
```

### 后序遍历

LeetCode-[145.二叉树后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

- 递归实现

```java
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        helper(root, res);
        return res;
    }

    public void helper(TreeNode root, List<Integer> res) {
        if (root != null) {
            if (root.left != null) {
                helper(root.left, res);
            }
            if (root.right != null) {
                helper(root.right, res);
            }
            res.add(root.val);
        }
    }
}
```

- 非递归实现

```java
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        ArrayList<Integer> res = new ArrayList<>();
        if(root == null) {
            return res;
        }

        Stack<TreeNode> stack = new Stack<>();
        TreeNode pre = null;
        TreeNode cur = root;
        while(cur != null || !stack.isEmpty()) {
            if(cur != null) {
                stack.push(cur);
                cur = cur.left;
            } else {
                cur = stack.pop();
                if(cur.right == null || pre == cur.right){
                    res.add(cur.val);
                    pre = cur;
                    cur = null;
                } else {
                    stack.push(cur);
                    cur = cur.right;
                }
            }
        }
        return res;
    }
}
```

### 层次遍历

LeetCode-[102.二叉树的层次遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

- 递归实现

```java
class Solution {
    List<List<Integer>> levels = new ArrayList<List<Integer>>();

    public List<List<Integer>> levelOrder(TreeNode root) {
        if (root == null) {
            return levels;
        }
        helper(root, 0);
        return levels;
    }

    public void helper(TreeNode node, int level) {
        if (levels.size() == level)
            levels.add(new ArrayList<Integer>());

         levels.get(level).add(node.val);

         if (node.left != null)
            helper(node.left, level + 1);
         if (node.right != null)
            helper(node.right, level + 1);
    }
}
```

- 非递归实现

```java
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {

        ArrayList<List<Integer>> res = new ArrayList<>();
        if(root == null)
            return res;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int levelNum = 1;

        while(!queue.isEmpty()){
            int newLevelNum = 0;
            ArrayList<Integer> level = new ArrayList<>();
            for(int i = 0; i < levelNum; i ++){
                TreeNode node = queue.remove();
                level.add(node.val);

                if(node.left != null){
                    queue.add(node.left);
                    newLevelNum ++;
                }
                if(node.right != null){
                    queue.add(node.right);
                    newLevelNum ++;
                }
            }
            res.add(level);
            levelNum = newLevelNum;
        }
        return res;
    }
}
```
