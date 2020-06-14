# Get ready to learn the basics
-----------
Now that we've explored a bit of logic by using truth tables & and/or/not, we can apply these ideas to some actual code! For our purposes today, we'll be using a language called **JavaScript**. According to BusinessInsider, <a href="https://www.businessinsider.com/most-popular-programming-languages-github-2019-11" target="_blank">JavaScript was *the* most popular programming language in 2019</a>, due to its versatility and usefulness when coding websites.

Although we'll be coding in JavaScript, the principles we'll be learning today can be applied to practically any programming language you can think of. Tomorrow, we'll look at some more JavaScript and add it to our website.

![Computer pic](https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)

## Boolean Logic

Earlier today, we learned about **Boolean logic/ Boolean algebra**, where we had two inputs and used the operators **not, and, & or** to generate outputs. 

Here's how you represent the concepts we learned about in JavaScript:

- And is &&
- Or is \|\|
- Not is !

So, if you wanted to write "A or B" in JavaScript, you would do **A\|\|B**. Or, if you wanted to say "Not A, and B", you would do **!A&&B**. 

> NOT is !, AND is &&, OR is \|\|

In JavaScript, the order of operations goes !, &&, then \|\|. This means that first the **not** will be applied, then the **and**, and lastly the **or** - kind of like PEMDAS! Also like PEMDAS, you can use parenthesis, which will also be applied first. So maybe the order techincally goes () , ! , && , \|\|

> How would you write "A and Not B"?


<h3 onClick="(function(){document.getElementById("answer1").style.visibility = visible;})();return false;">Click here for the answer</h3>


<h4 id="answer1" style="visibility:hidden;"> A&&!B</h4>

All of these concepts are shown in the CodePen below. (You can click the "JS" tab above the code to *only* see the result, or click the "Result" button and then the "JS" button to *only* see the code. You can also switch between the HTML, CSS, and JavaScript by clicking their respective tabs, right above the code).

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="dianevinson" data-slug-hash="wvMMoqJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Boolean">
  <span>See the Pen <a href="https://codepen.io/dianevinson/pen/wvMMoqJ">
  Boolean</a> by dianevinson (<a href="https://codepen.io/dianevinson">@dianevinson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


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

> *Can you think of another example where you could use a For Loop?*

In JavaScript, a **for loop** is normally written as follows:

    for (let i = 0; i < 10; i++) {
       //perform an action
    }
    
### Let's break down the above code

In the code, you can see that it starts out with "for", and then has a pair of parentheses, and in those parentheses are three statements, separated by semi-colons (;). Every **for** loop has three parts:

- The initialization of our variable: This is always the first statement, where some baseline condition will be set for the for loop. This is where we start counting how many times we do something. In this case (and in many cases), this is **let i = 0**. 

This says that we will have a variable called **i**, and that we will start out our loop with **i** being equal to 0. We will use **i** to keep track of the number of times we've gone through our loop. Each time we perform the action(s) inside of the loop, we will increment our counting variable.

Many people name their counting variable **i** in their for loops (maybe because it stands for index? or integer?). While normally you want to be more descriptive when naming variables, we use this variable for such a short amount of time that it's okay! If you wanted to make multiple **for loops**, or a **for loop** *inside* of a **for loop** (we'll see that in a minute), you could use the variables j, k, and so on to go through those for loops.  

- The ending condition: This is always the second statement, which tells us how long we should repeat our action for. In this example, we have that we will keep repeating our action as long as **i < 10** (10 could be replaced with any number, depending on how many times YOU want to repeat the action). 

Since this specifically says that **i** must be *less* than 10, we will STOP performing this action once i=10 (we will perform it when i = 9, though). 

In computer science, people normally start counting at 0 instead of 1, which is why we go *until* i = 10 if we want to repeat the action 10 times. Rather than repeating it from i=1 to i=10 (which would still be 10 repeats and you could absolutely do!), people normally repeat the action from i=0 to i=9 (which is also 10 repeats!)

- The incrementing statement: Finally, our third statement tells us a way to increment our counting variable, i. In this example (and normally), this is written as **i++**. This is a short way to write **i = i + 1**, which just means that you're **adding 1 to i**. 

This is how we move through the loop - without this statement, we'd be stuck in the loop forever! You don't always have to increment by 1; for instance, you could add 2 each time (i+=2) or you could multiply i by 3 each time (i = i\*3).

Let's look at a for loop in action!

In the code below, find the line where it says "function makeDots(numberOfDots)". In the line right below that, you should see a for loop! This for loop says **we have a variable named i, which we'll set equal to 0. We want to repeat whatever is inbetween the two curly brackets (which look like { and } ) that follow this line as long as i is less than numberOfDots. Also, after each time we perform our action, we will add 1 to i**. In this example, **numberOfDots** is whatever number you enter in the box! The code in the curly brackets is a little confusing, but all you need to know is that it *calls* another function which will make a dot, and then it waits 1 second to go through the loop again. 

**Normally, we'd be able to go through this for loop *almost* instantly, but in order to show how the computer *actually* goes through the for loop 1 dot at a time, I set it so that it will wait 1 second in between making the dots.** 


<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="dianevinson" data-slug-hash="WNrrdXv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="for loops">
  <span>See the Pen <a href="https://codepen.io/dianevinson/pen/WNrrdXv">
  for loops</a> by dianevinson (<a href="https://codepen.io/dianevinson">@dianevinson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

There's another **for loop** in the code above - see if you can find it!

The code inside the second **for loop** is used to create a random color for the dot. As you might've learned in the CSS lesson yesterday, colors can be represented by numbers, which in certain number bases can be represented by numbers and letters! The line inside the **for loop** that says 

      color += letters[Math.floor(Math.random() * 16)];
      
says "choose a random number or letter from '0123456789ABCDEF', and then add it to the end of our list of numbers/letters that represent the color. Since the hexcode (a.k.a. the list of numbers and letters) for a color is always 6 characters long, we will repeat this process of choosing a random number/letter from 0-F and adding it to our list **six** times. 

Let's look at a second type of loop.

#### The While Loop

The **while loop** is normally used when you want to repeat an item for as long as it takes to do something else, or *while* one statement is true.

Imagine that you have a program where a user can keep entering numbers until the sum of all the numbers they enter is 50. In this scenario, your program would continue to prompt them to enter a new number *while* their total is less than 50. 

> *Can you think of another example where you could use a While Loop?*

In JavaScript, a **while loop** is normally written like this:

    var i = 0;
    while ( i < 50) {
        //perform action
        i++
    }

Notice how in a **while loop**, you only have <u>one</u> statement inside of the parentheses! Just like a **for loop** though, you still have to initialize your counting variable at some point, and you have to increment it too. The only differences between a **for loop** and a **while loop** are *where* you initialize your variable and *where* you increment it.
  
Since the two loops are quite similar, they can be used interchangeably a lot of times! It's up to your personal preference to decide which one is easier for you to use in your code. 

The example below is the same as the one that we used before, **EXCEPT** that this one uses a while loop instead of a for loop!

Try to find where it says 

- var i = 0 
- i < numberOfDots
- i++ 

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="dianevinson" data-slug-hash="xxZZjoJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="while loops">
  <span>See the Pen <a href="https://codepen.io/dianevinson/pen/xxZZjoJ">
  while loops</a> by dianevinson (<a href="https://codepen.io/dianevinson">@dianevinson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## If Statements

The next topic we'll be talking about today is the **if statement**. You use if statements when you want to perform an action *only if* a certain condition is true. **If statements** are oftentimes used along with **boolean logic**!

You use **if statements** all the time in your normal life! Imagine that you're playing softball and you're up to bat. *If* the pitch is in the strike zone, you'll swing at it. *If* it looks like it'll be a ball, you won't swing. 

> Think of an example where you could use an **if statement** to determine what action you'll perform

Let's look at how someone would write an **if statement** in JavaScript.

    if (condition A is true) {
       // Perform action 1
    } else if (condition B is true) {
       // Perform action 2
    } else {
       // Perform default action
    }
    
### Let's break down the above code!

<dl>
  <dt>if (condtion A is true)</dt>
  <dd>The first line in an if block will always start with a simple <b>if</b> statement. This says that if condition A is true, then action 1 will be performed. If condition A is true, then once action 1 is performed, the program will <u>NOT</u> check to see if condition B is true.</dd>
  <dt> else if (condition B is true)</dt>
  <dd> This program will only check if condition B is true <em>IF</em> condition A was not true. If condition B is true, then action 2 will be performed, and the program will not check to see any of the following conditions listed are true. <b>You can have multiple "else if" statements!</b> They will be checked in whatever order you type them in. Similarly, it's not required that you have <em>any</em> "else if" statements</dd>
  <dt> else</dt>
  <dd> The else statement is performed <b>if and only if</b> none of the other conditions were true. In this example, that means that conditions A and B were both false. <b>You do not need to include an else statement</b>, but if you do, it always goes after all of the other statements.</dd>
</dl>

> Can you think of why you would want to put your **else** statement after all of your **else if** statements?

The conditions that you check in your **if/ else if statements** need to be either **true** or **false** - just like in our Boolean truth tables! 

Look at the example below. In this example, the background image will change depending on what time the user enters. 

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="dianevinson" data-slug-hash="VweedRv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="If statements">
  <span>See the Pen <a href="https://codepen.io/dianevinson/pen/VweedRv">
  If statements</a> by dianevinson (<a href="https://codepen.io/dianevinson">@dianevinson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Look in the JavaScript code and try to find the if statements! (Hint: they're in the function called *changeBackground(time)*). If you look in the comments next to each statement, you can see what time range that block of code will be executed for. The code in between the statements (document.body.style.backgroundImage = "url(...)") is more JavaScript that changes the background. We'll learn about it tomorrow).

> Find the comment that says "the time is greater than 4 pm and less than 9pm". Notice how we never had to say **hours > 16 && hours < 21** in our code. How did the program know that that was our third condition?


Now that we've learned a bit about **boolean logic, loops,** and **if statements** in JavaScript, we're going to learn about another JavaScript concept: **JSON Objects**!

-----------

# JSON Objects

### What is a JSON Object?

**JSON** stands for **J**ava**S**cript **O**bject **N**otation, and it is used to create objects using **key-value** pairs in JavaScript. To begin with our understanding of **JSON Objects**, we're going to start by looking at **key-value pairs** and **maps**

### What is a key-value pair?

A **key-value** pair is a set of two objects, a key and a value, that are linked together and are stored in something called a **map**. Users are able to retrieve the **values** from the **map** by using the **key**. Let's look at a visual representation of a **map**:

|Key        | Value         |
| ----------|:-------------:|
| breakfast | Oatmeal |
| lunch     | Chicken Pot Pie      |
| snack     | Chips and Salsa      | 
| dinner    | Chicken Pot Pie      |

In the table above, the **keys** are the names of meals, and their corresponding **values** are what you ate at that meal. So, one key value pair is `"breakfast":"Oatmeal"`.  

One important feature of a **map** is that **you cannot repeat the same key in a map, but you can have multiple keys share a value**. To put this in terms of our meal example above, you would not be able to create two enteries with the `key="dinner"`. If you look at the **values** for Lunch and Dinner, though, you can see that they both have the same value, which is "Chicken Pot Pie". *Beause you access values by using their keys, you cannot have the same key repeat with different values.*

> But what if you have multiple values that you want to associate with a key? What if I had chicken pot pie *and* a salad for dinner?

Every key can be associated with *ONE* object, but luckily, this object can be a collection of other objects (it could be a list of other objects, or another map!). This is done very often, and you'll see an example of it in our activity later today.

> So, what's the difference between a JSON Object and a Map?

JSON Objects and Maps are very similar, as they both consist of key-value pairs. Maps, by definition, will not allow a user to use the same key multiple times when entering data, but *technically* JSON objects will (although it is confusing and bad practice and can lead to problems). 

> What does a JSON Object look like?

Great question! Below is what our meal example would look like (including the side salad we had for dinner).

      "Meals": {
        "breakfast" : "Oatmeal",
        "lunch" : "Chicken Pot Pie",
        "snack" : "Chips and Salsa",
        "dinner" : {
           "main course" : "Chicken Pot Pie",
           "side dish" : "Salad"
         }
      }
      
The first **key** in this JSON object is "Meals", its value is the JSON object storing all of the meals that you had today. Looking inside that second JSON object, we have the following keys: "breakfast", "lunch", "snack", and "dinner". The value for "dinner" is another JSON object! That JSON object has keys "main course" and "side dish". 

Finally, notice that the key-value pairs are separated by commas. I know that JSON objects might look complicated right now, but we're going to do an activity in a minute that will make things a lot clearer!

![JSON meme to spice things up](https://i.chzbgr.com/full/8759438080/hC74C9921/i-heard-you-like-json-so-im-going-to-put-json-inside-json-so-you-can-parse-what-is-parsed)


Head over to [this website](http://www.udel.codes/LTC/alchemy) to begin our fun JSON activity!







