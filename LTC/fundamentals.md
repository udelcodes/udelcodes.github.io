# Get ready to learn the basics
-----------
Now that we've explored a bit of logic by using truth tables & and/or/not, we can apply these ideas to some actual code! For our purposes today, we'll be using a language called **JavaScript**. According to BusinessInsider, <a href="https://www.businessinsider.com/most-popular-programming-languages-github-2019-11" target="_blank">JavaScript was *the* most popular programming language in 2019</a>, due to its versatility and usefulness when coding websites.

Although we'll be coding in JavaScript, the principles we'll be learning today can be applied to practically any programming language you can think of. Tomorrow, we'll look at some more JavaScript and add it to our website.

## Boolean Logic

Earlier today, we learned about **Boolean logic/ Boolean algebra**, where we had two inputs and used the operators **not, and, & or** to generate outputs. 

Here's how you represent the concepts we learned about in JavaScript:

- And is &&
- Or is \|\|
- Not is !

So, if you wanted to write "A or B" in JavaScript, you would do **A\|\|B**. Or, if you wanted to say "Not A, and B", you would do **!A&&B**. In JavaScript, the order of operations goes !, &&, then \|\|. This means that first the **not** will be applied, then the **and**, and lastly the **or** - kind of like PEMDAS! Also like PEMDAS, you can use parenthesis, which will also be applied first. So maybe the order techincally goes () , ! , && , \|\|

All of these concepts are shown in the CodePen below. (You can click the "HTML" tab again to *only* see the result, or click the "Result" button and then the "HTML" button to *only* see the code. You can also switch between the HTML, CSS, and JavaScript by clicking their respective tabs, right above the code).

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="dianevinson" data-slug-hash="wvMMoqJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Boolean">
  <span>See the Pen <a href="https://codepen.io/dianevinson/pen/wvMMoqJ">
  Boolean</a> by dianevinson (<a href="https://codepen.io/dianevinson">@dianevinson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script><br>


If you go to the **JavaScript** tab on the CodePen above (it says "JS" and is to the right of the tab that says "CSS"), in the function called **updateBooleans()**, you can see where we perform that **boolean logic** to get our outputs! Try to find the following in the JavaScript file (hint: first find where it says **function updateBooleans()**, then look in the code in between the two parenthesis. There's some other stuff in there that we'll learn later, so it's okay if you don't understand everything that you see yet!):

- (A && B)
- (A \|\| B)
- !(A && B)
- !(A \|\| B)

The last two examples in the CodePen are a bit more complicated, but it just goes to show how you can use very simple tools to build more complex ideas!

## Loops

The next *very* important concept that we'll be talking about is **loops**! Loops are used to **repeat** an action. For instance, maybe you want to print something out a bunch of times, or maybe you have a list of numbers and you want to add them all together - remember, you can do practically anything when you're coding if you break it into small enough parts. 

Today, we'll be looking at two different types of loops: the **for loop** and the **while loop**. Both are used to repeat an action, but they come in handy in different scenarios.

#### The For Loop

The **for loop** is normally used when you know how many times you want to repeat the action. For instance, maybe you're writing a program to print out a document, and you want the user to be able to enter how many copies of the document they want to print out. In this example, you could create a **print()** function that would print the document one time, and then repeat that one function as many times as the user wanted. In this scenario, a **for loop** would be very helpful!

In JavaScript, a **for loop** is normally written as follows:

    for (let i = 0; i < x; i++) {
       //perform an action
    }



