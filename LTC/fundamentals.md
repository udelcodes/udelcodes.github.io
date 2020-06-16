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



<p class="codepen" data-height="459" data-theme-id="light" data-default-tab="result" data-user="dianevinson" data-slug-hash="wvMMoqJ" style="height: 459px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Boolean">
  <span>See the Pen <a href="https://codepen.io/dianevinson/pen/wvMMoqJ">
  Boolean</a> by dianevinson (<a href="https://codepen.io/dianevinson">@dianevinson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


Click on the tab that says "JS" and look for the following in the JavaScript file (hint: first find where it says **function updateBooleans()**, then look in the code in between the two parenthesis):

- (A && B)
- (A \|\| B)
- !(A && B)
- !(A \|\| B)

The last two examples in the CodePen are a bit more complicated, but it just goes to show how you can use very simple tools to build more complex ideas!

## Loops

The next *very* important concept that we'll be talking about is **loops**! Loops are used to **repeat** an action. 

Today, we'll be looking at two different types of loops: the **for loop** and the **while loop**. Both are used to repeat an action, but they come in handy in different scenarios.

#### The For Loop

The **for loop** is normally used when you know how many times you want to repeat the action. For instance, maybe you're writing a program to print out a document, and you want the user to be able to enter how many copies of the document they want to print out. In this example, you could create a **print()** function that would print the document one time, and then repeat that one function as many times as the user wanted. In this scenario, a **for loop** would be very helpful!

> *Can you think of another example where you could use a For Loop?*

![xerox machine](https://www.thedigitalbridges.com/wp-content/uploads/2017/03/photocopier-machine-types.jpg)

In JavaScript, a **for loop** is normally written as follows:

    for (let i = 0; i < 10; i++) {
       //perform an action
    }
    
### Let's break down the above code

In the code, you can see that it starts out with "for", and then has a pair of parentheses, and in those parentheses are three statements, separated by semi-colons (;). Every **for** loop has three parts:

- The initialization of our counting variable: This is always the first statement, where some baseline condition will be set for the for loop. This is where we start counting how many times we do something. In this case (and in many cases), this is **let i = 0**. 

- The ending condition: This is always the second statement, which tells us how long we should repeat our action for. In this example, we have that we will keep repeating our action as long as **i < 10** (10 could be replaced with any number, depending on how many times YOU want to repeat the action). 

- The incrementing statement: Finally, our third statement tells us a way to increment our counting variable, i. In this example (and normally), this is written as **i++**. This is a short way to write **i = i + 1**, which just means that you're **adding 1 to i**. Without an incrementing statement, we'd be stuck in the loop forever! 

### Let's look at a for loop in action!

In the code below, find the line where it says "function makeDots(numberOfDots)". In the line right below that, you should see a for loop! This for loop says **we have a variable named i, which we'll set equal to 0. We want to repeat whatever is inbetween the two curly brackets (which look like { and } ) that follow this line as long as i is less than numberOfDots. Also, after each time we perform our action, we will add 1 to i**. In this example, **numberOfDots** is whatever number you enter in the box! The code in the curly brackets is a little confusing, but all you need to know is that it *calls* another function which will make a dot, and then it waits 1 second to go through the loop again. 



<p class="codepen" data-height="400" data-theme-id="light" data-default-tab="js,result" data-user="dianevinson" data-slug-hash="WNrrdXv" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="for loops">
  <span>See the Pen <a href="https://codepen.io/dianevinson/pen/WNrrdXv">
  for loops</a> by dianevinson (<a href="https://codepen.io/dianevinson">@dianevinson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


**Normally, we'd be able to go through this for loop *almost* instantly, but in order to show how the computer *actually* goes through the for loop 1 dot at a time, I set it so that it will wait 1 second in between making the dots.** 

There's another **for loop** in the code above that generates random colors - see if you can find it!

Let's look at a second type of loop.

#### The While Loop

The **while loop** is normally used when you want to repeat an item for as long as it takes to do something else, or *while* one statement is true.

Imagine you had a box of cookies. *While* you're still hungry, you'll keep eating cookies one by one. Once you're full, you'll stop.

> *Can you think of another example where you could use a While Loop?*

![cookies](https://images.unsplash.com/photo-1548365328-8c6db3220e4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)

In JavaScript, a **while loop** is normally written like this:

    while (i == true) {
        //perform action
    }

Notice how in a **while loop**, you only have <u>one</u> statement inside of the parentheses!

A common way to write **while loops**, which is very similar to our **for loops** is like this:

    var i = 0
    while (i < 10) {
      //perform action
      i++
    }


Since the two loops are quite similar, they can be used interchangeably a lot of times! It's up to your personal preference to decide which one is easier for you to use in your code. 

The example below is the same as the one that we used before, **EXCEPT** that this one uses a while loop instead of a for loop!

Try to find where it says 

- var i = 0 
- i < numberOfDots
- i++ 

<p class="codepen" data-height="400" data-theme-id="light" data-default-tab="js,result" data-user="dianevinson" data-slug-hash="xxZZjoJ" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="while loops">
  <span>See the Pen <a href="https://codepen.io/dianevinson/pen/xxZZjoJ">
  while loops</a> by dianevinson (<a href="https://codepen.io/dianevinson">@dianevinson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## If Statements

The next topic we'll be talking about today is the **if statement**. You use if statements when you want to perform an action *only if* a certain condition is true. **If statements** are oftentimes used along with **boolean logic**!

You use **if statements** all the time in your normal life! Imagine that you're playing softball and you're up to bat. *If* the pitch is in the strike zone, you'll swing at it. *If* it looks like it'll be a ball, you won't swing. 

> Think of an example where you could use an **if statement** to determine what action you'll perform

![baseball](https://images.unsplash.com/photo-1470083748587-df49227c0505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)

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
  <dd>The first line in an if block will always start with a simple <b>if</b> statement. This says that if condition A is true, then action 1 will be performed, and the following conditions will NOT be checked. </dd>
  <dt> else if (condition B is true)</dt>
  <dd> The program will only check if condition B is true <em>IF</em> condition A was not true. If condition B is true, then action 2 will be performed, and the program will not check to see any of the following conditions listed are true. <b>You can have multiple "else if" statements!</b> They will be checked in whatever order you type them in. Similarly, it's not required that you have <em>any</em> "else if" statements</dd>
  <dt> else</dt>
  <dd> The else statement is performed <b>if and only if</b> none of the other conditions were true. In this example, that means that conditions A and B were both false. <b>You do not need to include an else statement</b>, but if you do, it always goes after all of the other statements.</dd>
</dl>

The conditions that you check in your **if/ else if statements** need to be either **true** or **false** - just like in our Boolean truth tables! 

Look at the example below. In this example, the background image will change depending on what time the user enters. 

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="dianevinson" data-slug-hash="VweedRv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="If statements">
  <span>See the Pen <a href="https://codepen.io/dianevinson/pen/VweedRv">
  If statements</a> by dianevinson (<a href="https://codepen.io/dianevinson">@dianevinson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Look in the JavaScript code and try to find the if statements! (Hint: they're in the function called *changeBackground(time)*). If you look in the comments next to each statement, you can see what time range that block of code will be executed for. The code in between the statements (document.body.style.backgroundImage = "url(...)") is more JavaScript that changes the background. We'll learn about it tomorrow).

> Find the comment that says "the time is greater than 4 pm and less than 9pm". Notice how we never had to say **hours > 16 && hours < 21** in our code. How did the program know that that was our third condition? *(Hint: hours must be between 0 and 23)*


Now that we've learned a bit about **boolean logic, loops,** and **if statements** in JavaScript, we're going to learn about another JavaScript concept: **JSON Objects**!

-----------

# JSON Objects

### What is a JSON Object?

**JSON** stands for **J**ava**S**cript **O**bject **N**otation, and a JSON object is just a collection of **key-value pairs** that's specially formatted using curly brackets and commas.

### What is a key-value pair?

A **key-value** pair is a set of two objects, a key and a value, that are linked together so that a user can get the value by using the key. Let's look at a tabular representation of some key-value pairs:

|Key        | Value         |
| ----------|:-------------:|
| Species | Gallus gallus domesticus |
| Number of Legs     | 2     |
| Appearance    | Feathery     | 
| Max Speed (mph)    | 9     |

In the table above, the **keys** are the attributes for an animal (a chicken), and their corresponding **values** describe that attribute. 

One key value pair is `Species: Gallus gallus domesticus `, or `Number of Legs : 2`.  


![chicken run](https://img-aws.ehowcdn.com/750x428p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/8f90ff3795074f1abed46130b079656b)

> What if you have multiple values that you want to associate with a key? What if I had chicken that was feathery *and* scrawny?

Every key can be associated with *ONE* object, but luckily, this object can be a collection of other objects (it could be a list of other objects, or another JSON Object!). This is done very often, and you'll see an example of it in our activity later today.

> What does a JSON Object look like in JavaScript?

Great question! Below is what our meal example would look like (including the side salad we had for dinner).

      "Animals": {
        "chicken" : {
          "species" : "Gallus gallus domesticus",
          "numberOfLegs" : 2,
          "appearance" : {
              "1" : "feathery",
              "2" : "scrawny"
           },
          "maxSpeedInMPH" : 9
         },
         "germanShepherd" : {
           "species" : "Canis lupus familiaris",
           "numberOfLegs" : 4,
           "appearance" : {
                "1" : "Furry",
                "2" : "Chubby"
            },
            "maxSpeedInMPH" : 20
          }
        }
         
      
- The first **key** in this JSON object is "Animals", which represents our entire collection of animals.

- The next key is "chicken", and it's value is a JSON object representing all of the attributes of a chicken.

- Inside of the "chicken" object, we see the keys "species", "numberOfLegs", "appearance", and "maxSpeedInMPH".

- The values for "appearance" for the chicken are "feathery" and "scrawny"

> What is the value of the key "maxSpeedInMPH" for the "germnaShepherd" object?

Things might be a bit confusing right now, but we have an awesome activity planned to help you guys get the hang of it!

![JSON meme to spice things up](https://i.chzbgr.com/full/8759438080/hC74C9921/i-heard-you-like-json-so-im-going-to-put-json-inside-json-so-you-can-parse-what-is-parsed)


Head over to [this website](http://www.udel.codes/LTC/alchemy) to begin our fun JSON activity!







