---
title: 随机快排
date: 2021-04-05
tags: 
	- 数据结构
categories: 
	- JavaScript
publish: false
---

```java
public class netherlandsFlag {
	public static void quickSort(int [] arr ,int L ,int R) {
		if (L<R) {
			swap(arr,L + (int) ( Math.random()*(R-L+1) ),R);
			int[] p = partition(arr,L,R);
			quickSort(arr,L,p[0] - 1 );
			quickSort(arr,p[1] + 1,R);
		}
	}
	public static int [] partition(int [] arr,int L,int R) {
		int less = L-1;
		int more = R;
		int cur = L;
		while ( cur < more ) {
			if (arr[cur]<arr[R]) {
				swap(arr,++less,cur++);
			}else if (arr[cur]>arr[R]){
				swap(arr,--more,cur);
			}else {
				cur++;
			}
		}
		swap(arr,more,R);
		return new int [] { less + 1, more};
	}
	public static void swap(int arr [],int i,int j) {
		int temp = arr [i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}

```