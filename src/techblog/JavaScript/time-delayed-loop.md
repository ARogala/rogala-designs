---
path: src/techblog/JavaScript/
title: Time Delayed Loop
date: 2018-11-03T13:27:17.885Z
author: Andrew Rogala
category: JavaScript
subCategory: Loops and Iteration
---

Delaying the execution between iterations of a loop in JavaScript works a little bit differently than other languages you may be familiar with. JavaScript has no built in sleep() function like Python does. In JavaScript the easiest way to achieve this is with functions. In fact there will be NO for loop in this solution!! So without delay here is the code. You can copy and past this into Chrome console to see the magic.<br/><br/>

```js{3-5}{numberLines: true}
//This function calls yourLoop() and sets the delay to 2 seconds
//setTimeout will call a function after the specified delay
function timeYourLoop() {
    setTimeout(yourLoop, 2000);
}
//set the count
let i = 0;

/*
In this function execute the code you need to run
increment the count
check the condition
and call the timeout again.
This will run 5 times with a 2 second delay between alerts
*/

function yourLoop() {
    alert('Hi this is the code I want to execute');
    console.log(i);
    i++;
    if(i < 5) {
        timeYourLoop();
    }
}

//call the timeYourLoop() function to start the loop process
timeYourLoop();
```

`css>.some-class { background-color: red }`
<br/>
<p>Ok so what is going on here? The short and sweet answer is that
timeYourLoop() calls yourLoop() on a 2 second delay. yourLoop() runs the needed code and calls timeYourLoop() again if the condition is met.
In other words, repeatedly calling timeYourLoop() from yourLoop() if the condition is true will achieve the desired results.</p><br/>

There are other and better ways to do this.
However, this verbose solution was written to help any beginners bring some clarity
to what is happening in the code. Please check out the other solutions on
[stackoverflow](https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop)
and pick the best one for your needs.




