---
path: src/techblog/JavaScript/
title: Time Delayed Loop
date: 2018-11-03T13:27:17.885Z
author: Andrew Rogala
category: JavaScript
subCategory: Loops and Iteration
---
Delaying the execution between iterations of a loop in JavaScript works a little bit differently than that which you may be familiar with. There is no built in sleep() function like Python. In JavaScript this is easiest to achieve with functions and there will be no for loop in the code. So without delay here is the code. 

<code>
<pre>
//this function calls yourLoop() and sets the delay
function timeYourLoop() {
  setTimeout(yourLoop, 2000);
}
//set the count
let i = 0;
</pre>

/*
  in this function execute the code you need to run 
  then increment the count
  check condition and call the timeout again 
  this will run 10 times with a 2 second delay between alerts
*/
<pre>
function yourLoop() {
  alert('Hi this is the code i want to execute');
  console.log(i);
  i++;
  if(i<10) {
    timeYourLoop();
  }
}
//call the timeYourLoop() function to start the loop process
timeYourLoop();
</pre>
</code>
