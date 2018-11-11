---
path: src/techblog/JavaScript/
title: First Class Functions
date: 2018-11-11T18:02:34.926Z
author: Andrew Rogala
category: JavaScript
subCategory: Functions
---
In JavaScript all functions are First Class Functions. Ok great but what does that mean?
Basically it means several things.

1. Functions can be assigned to variables.
2. Functions can be passed as arguments into other functions.
3. Functions can be returned from other functions. 
4. Functions can be stored in data structures. 

## Assigned to Variables
```js{numberLines: true}
// assign this function to a variable to be invoked later in
// program execution
const message = function() {
    console.log('Hi this function was stored in a variable');
};

message();
```
## Pass a function to another function
```js{numberLines: true}

function passMe() {
    console.log('functions can be passed as arguments and run from other functions');
}

function runAnotherFunction(args) {
    args();
}

runAnotherFunction(passMe);

```

## Return a function from another function

```js{numberLines: true}

function returnsFunction() {
    return function() {
        console.log('I get returned from a function');
    }
}

const returnedFunction = returnsFunction();

returnedFunction();
```

## Store a function in a data structure 
```js{numberLines: true}

storeInArray = function() {
	console.log('store me in an array');
}

let functionInArray = [storeInArray];

functionInArray[0]();
```
[read more here](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
