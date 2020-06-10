# Get ready to learn the basics
-----------
Now that we've explored a bit of logic by using truth tables & and/or/not, we can apply these ideas to some actual code! For our purposes today, we'll be using a language called **JavaScript**. According to BusinessInsider, <a href="https://www.businessinsider.com/most-popular-programming-languages-github-2019-11" target="_blank">JavaScript was *the* most popular programming language in 2019</a>, due to its versatility and usefulness when coding websites.

Although we'll be coding in JavaScript, the principles we'll be learning today can be applied to practically any programming language you can think of. Tomorrow, we'll look at some more JavaScript and add it to our website.

## Boolean Logic

Earlier today, we learned about **Boolean logic/ Boolean algebra**, where we had two inputs and used the operators **not, and, & or** to generate outputs. 

Here's how you represent the concepts we learned about in JavaScript:

- And is &&
- Or is ||
- Not is !

So, if you wanted to write "A or B" in JavaScript, you would do **A||B**. Or, if you wanted to say "Not A, and B", you would do **!A&&B**. In JavaScript, the order of operations goes !, &&, then ||. This means that first the **not** will be applied, then the **and**, and lastly the **or** - kind of like PEMDAS! Also like PEMDAS, you can use parenthesis, which will also be applied first. So maybe the order techincally goes () , ! , && , ||

All of these concepts are shown in the CodePen below. (You can click the "HTML" tab again to *only* see the result, or click the "Result" button to *only* see the code. You can also switch between the HTML, CSS, and JavaScript by clicking their respective tabs, right above the code).

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="dianevinson" data-slug-hash="wvMMoqJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Boolean">
  <span>See the Pen <a href="https://codepen.io/dianevinson/pen/wvMMoqJ">
  Boolean</a> by dianevinson (<a href="https://codepen.io/dianevinson">@dianevinson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script><br>


If you go to the **JavaScript** tab on the CodePen above (it says "JS" and is to the right of the tab that says "CSS"), in the function called **updateBooleans()**, you can see where we perform that **boolean logic** to get our outputs! Try to find the following in the JavaScript file (hint: first find where it says **function updateBooleans()**, then look in the code in between the two parenthesis. There's some other stuff in there that we'll learn later, so it's okay if you don't understand everything that you see yet!):

- (A && B)
- (A || B)
- !(A && B)
- !(A || B)

The last two examples in the CodePen are a bit more complicated, but it just goes to show how you can use very simple tools to build more complex ideas!
