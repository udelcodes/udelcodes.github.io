<h1> Learn to Code Day 3</h1>
<h2> Welcome back!</h2>
<h3>Getting Interactive</h3>

![techwomen](https://images.unsplash.com/photo-1452457750107-cd084dce177d?ixlib=rb-1.2.1&auto=format&fit=crop&w=991&q=80)

Let's play this for a second.

<p class="codepen" data-height="765" data-theme-id="light" data-default-tab="result" data-user="AndyNovo" data-slug-hash="zYrYPpR" style="height: 765px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Build Your Own &amp;quot;Choose Your Own&amp;quot; Adventure Game">
  <span>See the Pen <a href="https://codepen.io/AndyNovo/pen/zYrYPpR">
  Build Your Own &quot;Choose Your Own&quot; Adventure Game</a> by Andy Novocin (<a href="https://codepen.io/AndyNovo">@AndyNovo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Now let's look at the source.

## Task 1:  Copy Paste

Click FORK to make start your own game.

Let's add a new major to our University choose your own adventure game by copying line 54 (starts with COPY FROM HERE) to line 77 (ends with END COPY HERE)

Change "startLocation" to "education" 

and ADD one option at line 70, `{buttonText:"Click here to major in Education", 
           takesYouToLocation:"education"}`
           
If it worked you'll see three buttons when you begin and if you click "Click here to major in Education" you'll see the old start image.

When we're done today you'll understand how this game is designed, build your own creative story, and learn how to make websites truly interactive.


## Task 2: Let's make a button

Head to [Codepen](https://codepen.io/pen/) to make a new "pen".

In the HTML side add `<button id="clickme">Click Here</button>`

On the Javascript side add `document.getElementById("clickme").addEventListener("click",function(){alert(1)});`

Congrats you have made a click listener.  Let's talk about that

---------------------------

# Activity 2

Next, we're going to use what we've learned to build a super cool surprise!

First, open up ![a new pen on codepen](https://www.codepen.io).

### Step 1. Log to the console

In the HTML tab, add a button element by typing `<button id="clickme">Click Here</button>`

In the JavaScript tab, add `document.getElementById("clickme").addEventListener("click",function(){alert(1)});`

In the bottom left of your screen, click the button that says "Console". What does the button do when you click it?

Let's break down the code we just added!

    `document.getElementById("clickme").addEventListener("click",function(){console.log(1)});`
    
- `document` refers to the HTML document (where we put our button element)

- `.getElementById("clickme")` does exactly what it says it does - it gets the element from the document with the id "clickme"

-`addEventListener("click",function(){console.log(1)});`. The `addEventListener()` function takes in an event and a function to perform when the event happens. In this example, the event is a "click" from the user, and we define the function the function to print "1" to the console. 

Putting this all together, this means that the element with the id "click me" will listen for clicks, and when it hears one, it'll print "1" to the console.

Printing things to the console is a useful tool for developers to see what's going on in their code without having to change the HTML. 

### Step 2. Alerts

In the code we just wrote, change the part that says `function(){console.log(1)}` to say `function(){alert(1)}`

Click the button. What happens?

### Step 3. Print on the screen

In the HTML, right below where we made the button, add a line that says `<h2 id="printhere"></h2>`

In the JavaScript, change `alert(1)` to say `document.getElemenetById("printhere").innerHTML = "You clicked"`

Try clicking the button to see what happens

- In the code above, we used the same method of `document.getElemenetId("printhere")` to get the header2 element that we just added. 

- `.innerHTML =` sets what's between the two h2 tags. Once this line has run, the h2 element looks like `<h2 id="printhere">You clicked</h2>`      


### Step 4. Showing the time

In the JavaScript, add the line `var date = new Date();` right before where it says `document.getElementById("printhere")`

Also, change the code that says `"you clicked"` to say `date.getTime()`

Your JavaScript code should know look something like this:

    document.getElementById("clickme").addEventListener("click", function(){
      var date = new Date();
      document.getElementById("printhere").innerHTML = date.getTime()
    });
    
 Click on the button and see what's changed.
    
Let's break down the code we just added:
  
  - `var date = new Date()` creates a variable called "date" that is equal to a new Date object (there are JavaScript libraries that keep track of time - here, we're just accessing that time).
  
  - `date.getTime()` gets the time from the "date" variable we just created. This number might not look like the time, but it is - it's the number of milliseconds that have passed since midnight on January 1st, 1970. 
  
### Step 5. Show the time in a clearer way

Change the JavaScript code that says `date.getTime()` to say `date.getHours() + ":" + date.getMinutes()`

Click the button. Doesn't that time look nicer? 

### Step 6. Show all of the times that you've clicked

In the HTML, change the part that says `<h2 id="printhere"></h2>` to says `<div id="printhere"></div>`

Next, in the JavaScript, after it says `var date = new Date();`, add a line that says `var time = document.createElement("p");`.

Below that, add a line that says `time.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();`

Then, change the part where it says `document.getElementById("printhere").innerHTML = date.getHours() + ":" + date.getMinutes()` to say `document.getElementById("printhere").appendChild(time);`. Your JavaScript should now look like this:

    document.getElementById("clickme").addEventListener("click", function(){
      var date = new Date();
      var time = document.createElement("p");
      time.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      document.getElementById("printhere").appendChild(time);
    });
    
Now, it'll log whenever you click the button!





 





