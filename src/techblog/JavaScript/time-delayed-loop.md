---
path: src/techblog/JavaScript/
title: Time Delayed Loop
date: 2018-11-03T13:27:17.885Z
author: Andrew Rogala
category: JavaScript
subCategory: Loops and Iteration
---
Delaying the execution between iterations of a loop in JavaScript works a little bit differently than that which you may be familiar with. There is no built in sleep() function like Python. In JavaScript the easiest way to achieve this is with functions. In fact there will be NO for loop in the code. So without delay here is the code. You can copy and past this into Chrome console to see the magic.
<br/>
<code>
<pre>
//This function calls yourLoop() and sets the delay to 2 seconds
function timeYourLoop() {
  setTimeout(yourLoop, 2000);
}
//set the count
let i = 0;
</pre>
<br/>
/*
  In this function execute the code you need to run, 
  increment the count,
  check the condition, and call the timeout again. 
  This will run 10 times with a 2 second delay between alerts
*/
<br/>
<pre>
function yourLoop() {
  alert('Hi this is the code I want to execute');
  console.log(i);
  i++;
  if(i<10) {
    timeYourLoop();
  }
}
<br/>
//call the timeYourLoop() function to start the loop process
timeYourLoop();
</pre>
</code>
<br/>
I am sure there are other ways to do this, and the code could be condensed a bit. However, sometimes I like the most verbose solutions if I feel it add some clarity to what is happening in the code.
