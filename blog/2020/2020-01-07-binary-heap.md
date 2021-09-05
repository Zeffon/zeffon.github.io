---
slug: binary-heap
title: 实现二叉堆-最大堆
authors: zeffon
tags: [structure]
date: 2020-01-07
---

二叉堆分为最小堆和最大堆，本文介绍实现一个最大堆。

<!--truncate-->

## 前言

- 二叉堆分为最小堆和最大堆
- 最大堆：堆中某个节点的值总是不大于其父节点的值(即根节点是最大值)，最小堆则反之。

> 堆是平衡二叉树，并且堆是从 1 开始计数的，按层数遍历的方式给节点标上顺序。

**`本文基于数组实现最大堆`**

## 正文

### 添加

向二叉堆添加一个元素，只需把它放在最后一个位置的下一个，然后该节点与父节点进行大小比较。如果大于父节点的值，需要将其进行上浮，直至到合适位置；否则不需要浮动。
往堆中添加一个元素

```
            79
          /   \
        56     49
       /  \   /   \
     22   29 34   40
     /
    10
```

现在添加 61，放在 10 的下一个位置

```
            79
          /   \
        56     49
       /  \   /   \
     22   29 34   40
     /
    10  61
```

与父节点 29 进行比较，大于父节点的值，交换两者的位置，需要进行上浮

```
            79
          /   \
        56     49
       /  \   /   \
      61  29 34   40
     / \
    10  22
```

61 的节点再与父节点 56 比较，大于需要上浮

```
            79
          /   \
        61     49
       /  \   /   \
      56  29 34   40
     / \
    10  22
```

现在满足了

### 删除

删除操作是将堆中最大的元素弹出，根节点(1 位置)与最后一个节点的位置互换。size 大小减一，后将新的根节点下沉到合适位置。
删除堆中最大值

```
            79
          /   \
        56     49
       /  \   /   \
     22   29 34   40
     /
    10
```

79 与 10 交换位置

```
            10
          /   \
        56     49
       /  \   /   \
     22   29 34   40
     /
    79
```

size 大小减去一

```
            10
          /   \
        56     49
       /  \   /   \
     22   29 34   40
```

父节点 10 与左右节点中最大值节点 56 交换位置

```
            56
          /   \
        10     49
       /  \   /   \
     22   29 34   40
```

同理，10 与 29 交换位置

```
            56
          /   \
        29     49
       /  \   /   \
     22   10 34   40
```

### 代码

```java
public class MaxHeap {

    private int data[]; // 存放堆数据的数组
    private int size;       //当前堆的大小
    private int capacity;   //堆的最大容量

    // 初始化时
    public MaxHeap(int capacity){
        data = new int[capacity+1];
        this.size = 0;
        this.capacity = capacity;
    }

    //向堆里面插入元素
    public void insert(int item){
        if(size == capacity){
            System.out.println("The heap is full");
            return;
        }
        data[size+1] = item; // 将元素放在最后一个的下一个
        size++;
        shiftUp(size); // 将元素上浮至合适位置
    }

    //堆插入元素时的元素上浮
    private void shiftUp(int k) {
        while(k > 1 && data[k/2] < data[k]){
            swap(data, k/2, k);
            k /= 2;
        }
    }

    //删除堆的最大元素
    public int extractMax(){
        if(size == 0){
            System.out.println("The heap can not be null");
            return -1;
        }
        int ret = data[1];
        swap(data, 1, size); // 第一个与最后一个元素交换位置
        size--;
        shiftDown(1); // 下沉到合适位置
        return ret;
    }

    //堆删除元素时的元素下沉
    private void shiftDown(int k) {

        while(2*k <= size){
            int j = 2*k; // 在此轮循环中，data[k]和data[j]交换位置
            if(j + 1 <= size && data[j+1] > data[j]){
                j += 1;
            }
            if(data[k] > data[j])
                break;
            //元素下移
            swap(data, k, j);
            k = j;
        }
    }

    //堆排序
    public void heapSort(int arr[], MaxHeap heap){
        for(int i = 0; i < arr.length; i++){
            heap.insert(arr[i]);
        }
        for(int i = arr.length - 1; i >= 0 ; i--){
            arr[i] = heap.extractMax();
        }
    }

    private void swap(int[] nums, int i, int j){
        int t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }

}
```
