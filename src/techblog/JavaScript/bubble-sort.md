---
path: src/techblog/JavaScript/
title: Bubble Sort
date: 2018-12-08T20:27:49.148Z
author: Andrew Rogala
category: JavaScript
subCategory: Algorithms
---
I just joined [codewars](https://www.codewars.com/) and the first challenge I solved involved the use of the classic bubble sort algorithm. I haven't implemented bubble sort since my Java days in college. There are definitely other ways I could have solved the challenge and I know bubble sort is not the most efficient but it was the first thing that came to my mind as a solution. If you are curious about what the challenge is I guess you will just have to join codewars and start hacking. I only want to discuss the bubble sort here. 
<br/>
<br/>
Bubble sort works by repeatedly passing through the array, checking the adjacent elements, and placing the larger number after of the smaller one. The array will be sorted in ascending order and the algorithm finished when it makes one complete pass without swapping any adjacent elements. 

## Bubble Sort
```js{numberLines: true}
let numbers = [23, 71, 33, 82, 1];
function bubbleSort(numbers) {
	let length = numbers.length;
	let temp;
	let swap;
	let sum;
	let sortNumbers = [...numbers];

	do {
		swap = false;
		for(let i = 0; i < length - 1; i++) {
			if(sortNumbers[i] > sortNumbers[i+1]) {
				temp = sortNumbers[i];
				sortNumbers[i] = sortNumbers[i+1];
				sortNumbers[i+1] = temp;
				swap = true;
			}
		}
	} while(swap === true);
	return sortNumbers;
}

console.log('Numbers',numbers);
console.log('Sorted Numbers', bubbleSort(numbers));
console.log('Unmutated Numbers',numbers);

```
## This could be done with JavaScripts sort() function
```js{numberLines: true}
let numbers = [23, 71, 33, 82, 1];
function sortNumbers(numbers){
	let sortNumbers;
	sortNumbers = numbers.concat().sort(function(a, b){return a - b; });
	return sortNumbers;
};

console.log('Numbers', numbers);
console.log('Sorted Numbers', sortNumbers(numbers));
console.log('Unmutated Numbers', numbers);
```
