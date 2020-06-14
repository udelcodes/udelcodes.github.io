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

First things first, head over to ![glitch.com](https://glitch.com).

### Step 1. Create a new project

Click the button that says "New Project" thats located towards the upper right corner of the screen, then click on "hello-express".

### Step 2. Copy and paste some things

Before we begin, we're going to copy and paste some code that will work as our back-end for this project.

From the files listed on the left hand side, click the one called "server.js".

Delete everything that's in that file and replace it with the following code:

`var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
  console.log("hi");
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

var listener = http.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});`

Next, from the files listed on the left, click on the one that's called "package.json". Where it says "Add package" at the top of the document, search "socketio", and select the option called "2.3.0 socket.io".

(This is what it should look like)[https://prof.ninja/cyber/glitch2.png]

Now, from the files listed on the left, click on "views/", and then click on the file that says "index.html". Delete everything that's in that file and replace it with the following code:

`<!doctype html>
<html>
  <head>
    <title>Socket.IO chat</title>
    <style>
          /*Add your CSS in here*/
    </style>
  </head>
  <body>
    <!--Start typing the HTML right under here-->
    
    <script src="/socket.io/socket.io.js"></script>
    <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
    <script>
      $(function () {
        var socket = io();
        $('#clickme').click(function(){
          //begin typing our JavaScript right under here
          
         
          socket.emit('chat message',input);
          return false;
        });
        socket.on('chat message', function(msg){
          //paste the "append" line under here
          
        });
      });
    </script>
  </body>
</html>`

### Step 3. Open up Codepen

Leave the Glitch tab open, as we're going to come back to it in a minute. We're going to move to codepen, since it'll be a little bit easier to see what we're doing in there. 

Go to ![Codepen](https://codepen.io) and create a new pen by clicking the tab that says "Pen" on the left side. 

### Step 1. Log to the console

In the HTML tab on Codepen, add a button element by typing `<button id="clickme">Click Here</button>`

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

In the HTML, right above where we made the button, add a line that says `<h2 id="messages"></h2>`

In the JavaScript, change `alert(1)` to say `document.getElemenetById("messages").innerHTML = "You clicked"`

Try clicking the button to see what happens

- In the code above, we used the same method of `document.getElemenetId("messages")` to get the header2 element that we just added. 

- `.innerHTML =` sets what's between the two h2 tags. Once this line has run, the h2 element looks like `<h2 id="messages">You clicked</h2>`      


### Step 4. Showing the time

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
  
### Step 5. Show the time in a clearer way

Change the JavaScript code that says `date.getTime()` to say `(date.getMonth() + 1) +"/" + date.getDate() + " " +date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();`

Click the button. Doesn't that time look nicer? 

### Step 6. Show all of the times that you've clicked

In the HTML, change the part that says `<h2 id="messages"></h2>` to says `<ul id="messages"></ul>`

Below that, add a line that says `let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();`

Then, change the part where it says `document.getElementById("messages").innerHTML = (date.getMonth() + 1) +"/" + date.getDate() + " " +date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();` to say ``document.getElementById("messages").append(`<li>${time}</li>`);``. Your JavaScript should now look like this:

    document.getElementById("clickme").addEventListener("click", function(){
      var date = new Date();
      let time = (date.getMonth() + 1) +"/" + date.getDate() + " " +date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      document.getElementById("messages").append(`<li>${time}</li>`);
    });
    
Now, it'll log whenever you click the button!

### Step 7. Add a message

In the HTML, add a line *before* the button but *after* the list that says `<input type="text" id="message">`

In the JavaScript, add a line *after* the line that says `var date = new Date();` that says `var message = document.getElementById("message").value;`

Change the JavaScript so that instead of just appending `${time}` to our list of messages, it appends `${message}` too.

Your JavaScript should now look something like this (although you might print the message and time in a slightly different way):

    document.getElementById("clickme").addEventListener("click", function(){
      var date = new Date();      
      var message = document.getElementById("message").value;
      let time = (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      document.getElementById("messages").append(`<li>${message} ${time}</li>`);
    });
    
When you click the button now, it might still show the "li" tags and look a little funny. But don't worry about that - we're going to move back to our glitch.com app now, anyway.

### Step 8. Move our code to Glitch

Copy all of the code from the HTML section on our Codepen and paste it into the Glitch right below line 10 in `index.html`, where it says "\<!--Start typing the HTML right under here-->".


Next, copy lines 2 through 4 of our JavaScript on Codepen (from `var date = ` to `` + date.getSeconds();`` and paste that into our Glitch on line 25 of `index.html`, right below the line that says "//begin typing our JavaScript right under here". 

Copy line 5 of our JavaScript from Codepen (which should say ``document.getElementById("messages").append(`<li>${message} ${time}</li>`);``) and paste that under the line that says "//paste the "append" line under here" (this should be around line 33).

Your `index.html` file should now look something like this:

`<!doctype html>
<html>
  <head>
    <title>Socket.IO chat</title>
    <style>
          /*Add your CSS in here*/
    </style>
  </head>
  <body>
    <!--Start typing the HTML right under here-->
    <ul id="messages">
</ul>
<div id="input">
<input type="text" id="message">
<button id="clickme">Click me</button>
</div>
    
    <script src="/socket.io/socket.io.js"></script>
    <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
    <script>
      $(function () {
        var socket = io();
        $('#clickme').click(function(){
          //begin typing our JavaScript right under here
          var date = new Date();      
          var message = document.getElementById("message").value;
          let time = (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
         
          socket.emit('chat message',input);
          return false;
        });
        socket.on('chat message', function(msg){
          //paste the "append" line under here
          document.getElementById("messages").append(`<li>${message} ${time}</li>`);
        });
      });
    </script>
  </body>
</html>`

If you click the button that says "Show" and then click where it says "Next to the code", you can see the code that we just added! Look how good it looks so far! We're almost done!

!(almost there)[https://media0.giphy.com/media/VEzlrMWk3F7uuFuRSq/giphy.gif]




    

    







 





