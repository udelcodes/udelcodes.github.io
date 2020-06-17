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

## Task 1:  Make your Own Version!

<a href="https://codepen.io/Arnell/pen/KKVgLmp?editors=0010
" target="_blank">Click Here for template</a>

1. Click FORK (bottom right corner of screen) to make your own game.

2. Let's rename the start location by changing the text on line 80

3. Change the start location image by changing the link on line 84

4. You can edit rooms "A" and "B" to be new exciting locations.

5. Let's also add a room to our choose your own adventure game by copying line 73 (starts with COPY FROM HERE) to line 112 (ends with END COPY HERE) and pasting it on line 119

   >Change "startLocation" to the name of the new room 

   >Continue to follow the comments, and edit rooms and paths accordingly. Have fun, and make something special!

6. Try adding some items!

When we're done today you'll understand how this game is designed, build your own creative story, and learn how to make websites truly interactive.

---------------------------

# Activity 2

Next, we're going to use what we've learned to build a super cool surprise!

### Step 1. Open up Codepen

Go to <a href="https://www.codepen.io" target="_blank">Codepen.io</a> and create a new pen by clicking the tab that says "Pen" on the left side. 

### Step 2. Log to the console

In the HTML tab on Codepen, add a button element by typing `<button id="clickme">Click Here</button>`

In the JavaScript tab, add `document.getElementById("clickme").addEventListener("click",function(){console.log(1)});`

In the bottom left of your screen, click the button that says "Console" to open up the console. Now click the button that we added to our HTML page. What does that button do when you click it?

Let's break down the code we just added!
    
- `document` refers to the HTML document (where we put our button element)

- `.getElementById("clickme")` does exactly what it says it does - it gets the element from the document with the id "clickme"

- `addEventListener("click",function(){console.log(1)});`. The `addEventListener()` function takes in an event and a function to perform when the event happens. In this example, the event is a "click" from the user, and we define the function the function to print "1" to the console. 

Putting this all together, this means that the element with the id "click me" will listen for clicks, and when it hears one, it'll print "1" to the console.

Printing things to the console is a useful tool for developers to see what's going on in their code without having to change the HTML. 

### Step 3. Alerts

In the code we just wrote, change the part that says `function(){console.log(1)}` to say `function(){alert(1)}`

Click the button. What happens?

### Step 4. Print on the screen

In the HTML, right above where we made the button, add a line that says `<h2 id="messages"></h2>`

In the JavaScript, change `alert(1)` to say `document.getElemenetById("messages").innerHTML = "You clicked"`

Try clicking the button to see what happens

- In the code above, we used the same method of `document.getElemenetById("messages")` to get the header2 element that we just added. 

- `.innerHTML =` sets what's between the two h2 tags. Once this line has run, the h2 element looks like `<h2 id="messages">You clicked</h2>`      


### Step 5. Showing the time

In the JavaScript, add the line `var date = new Date();` right before where it says `document.getElementById("messages")`

Also, change the code that says `"you clicked"` to say `date.getTime()`

Your JavaScript code should know look something like this:

    document.getElementById("clickme").addEventListener("click", function(){
      var date = new Date();
      document.getElementById("messages").innerHTML = date.getTime()
    });
    
 Click on the button and see what's changed.
    
Let's break down the code we just added:
  
  - `var date = new Date()` creates a variable called "date" that is equal to a new Date object (there are JavaScript libraries that keep track of time - here, we're just accessing that time).
  
  - `date.getTime()` gets the time from the "date" variable we just created. This number might not look like the time, but it is - it's the number of milliseconds that have passed since midnight on January 1st, 1970. 
  
### Step 6. Show the time in a clearer way

Change the JavaScript code that says `date.getTime()` to say `date.getLocaleString()`

Click the button. Doesn't that time look nicer? 

### Step 7. Show all of the times that you've clicked

In the HTML, change the part that says `<h2 id="messages"></h2>` to says `<ul id="messages"></ul>`

Below that, add a line that says `let time = date.getLocaleString()`

Then, change the part where it says `document.getElementById("messages").innerHTML = date.getLocaleString()` to say ``document.getElementById("messages").append(`<li>${time}</li>`);``. Your JavaScript should now look like this:

    document.getElementById("clickme").addEventListener("click", function(){
      var date = new Date();
      let time = date.getLocaleString();
      document.getElementById("messages").append(`<li>${time}</li>`);
    });
    
Now, it'll log whenever you click the button!

### Step 8. Add a message

In the HTML, add a line *before* the button but *after* the list that says `<input type="text" id="message">`

In the JavaScript, add a line *after* the line that says `var date = new Date();` that says `var message = document.getElementById("message").value;`

Change the JavaScript so that instead of just appending `${time}` to our list of messages, it appends `${message}` too.

Your JavaScript should now look something like this (although you might print the message and time in a slightly different way):

    document.getElementById("clickme").addEventListener("click", function(){
      var date = new Date();      
      var message = document.getElementById("message").value;
      let time = date.getLocaleString();
      document.getElementById("messages").append(`<li>${message} ${time}</li>`);
    });
    
When you click the button now, it might still show the "li" tags and look a little funny. But don't worry about that - we're going to move back to our glitch.com app now, anyway.


### Step 9. Add a username and color

Now we're going to allow users to put in usernames and choose the color that they want their names to come up as.

Add the following code right above where we put the list in the HTML code:

       <div id="nameInput">
          <input type="text" id="name" autocomplete="off" placeholder="Name" value="Anonymous"> 
          <input type="color" id="color" value="#aa00ff">
       </div>
       
In the JavaScript, right above the line that says `var date = new Date()`, add the following lines:

          let name = document.getElementById("name").value
          let color = document.getElementById("color").value
          
Finally, change the line that says ``let input = `${message} ${time}` `` to say ``let input = `<span style="color: ${color};">${name}</span>: ${message} <span id="timetext">${time}</span>` ``

This is coming together to look like a really cool chat app!

### Step 10. Add a Database

Now, we're going to add a **database**. This will allow us to save all of the messages that have been sent in our chat app, and will allow users to talk to each other over the internet. 

To create your own database, you'll first need to **fork** the codepen linked below.

<a href="https://codepen.io/dianevinson/pen/vYLyEaJ" target="_blank">Open up this Codepen</a> and click the "fork" button in the lower right corner. This will create a new database for you to use!

### Step 11. Copy our code from our first Codepen

Now, we're going to copy in the code that we just wrote in our earlier Codepen. 

- Copy all everything in the HTML tab from your first Codepen and paste it into the HTML section of the Codepen with the database.




### Step 11. Adding CSS

Finally, add the following CSS code to your `index.html` file, right below the line that says "/*Add your CSS in here*/" (it should be around line 7).

      * { 
        margin: 0; 
        padding: 0; 
        box-sizing: border-box; 
      }
      body {font: 13px Helvetica, Arial;}
      #input {
        background:#000;
        padding: 3px;
        position: fixed;
         bottom:0;
        width:100%;
      }
      #message {
        width: 90%;
        border:0;
        padding: 10px;
        margin-right: .5%;
      }
      #clickme {
        width:9%;
        background: rgb(130, 224, 255);
        padding: 10px;
      }      
      #timetext {
        padding-right: 10px;
        position: fixed;
        right: 0;
      }
      #nameInput {
        background:#000;
        padding: 3px;
        width: 100%;
        justify-content: center; 
      }
      #name { width:50%; border:0;padding:7px;margin-right:.5%;}
      #color {width:20%; border:0px; height:20px; padding:2px;}
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
      #messages { margin-bottom: 40px }
      
Congratulations! You know have quite a professional looking chat app! If you click "Show" and then "In a New Window", it'll look even better!

![you did it!](https://media0.giphy.com/media/QaXcpBEQRfD9pR3zk5/source.gif)

You can share the link for your chat app with your friends and family and then you can all talk to each other at the same time!




    

    







 





