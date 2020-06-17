# You've made it to the end of camp!
---------
Congratulations on making it *all* the way to day 4 of Learn To Code camp! We hope you guys all learned a lot about web development and JavaScript during your time here, but the fun isn't over yet! 

![excited](https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif)

Today, we're going to finish that super cool *surprise* that we started yesterday, we're going to make our own online "Mad-Libs" game, and we're going to put everything together on the webpage that we built on Monday.

# Surpise App 

Since we received requests for this project to be on Codepen *and* Glitch, we're going to show you how to do it on both! It's *essentially* the same app on platforms, with the only difference being that all of the messages you send will be saved forever if you use **Codepen** (they'll be deleted once you exit the app if you're using Glitch).


## Instructions to Build The Surprise on Codepen

### Step 1. Fork the Codepen below

Open up <a href="https://codepen.io/dianevinson/pen/mdVOxVZ" target="_blank">this codepen</a> and click "fork" in the bottom right. That will create a new database for you to use which will store all of the messages you send.

### Step 2. Add the following code to the HTML tab

Paste the following HTML code into the HTML tab on the Codepen that you just forked.

<script src="https://gist.github.com/dianevinson/73bc69c5e7ffa3db053b0f85b6643068.js"></script>


### Step 3. Add the following CSS code

Copy and paste the following CSS code into the CSS tab on the Codepen that you just forked.

<script src="https://gist.github.com/dianevinson/a3c1e3b2ebc06a9c8ffd2e4d3aef3e5d.js"></script>


### Step 4. Add JavaScript 

Add the following JavaScript to line 36 in the JavaScript tab on your codepen. (Place this code below everything that's already in the JS tab).


<script src="https://gist.github.com/dianevinson/e06d866d7422262625c94d4b73687197.js"></script>

And there you have it! A beautiful chat app that stores all of your messages!

If you click "Change View" and then "Full Page View" on Codepen your chat app will take up the whole screen. 

You can share the link to your chat app with your friends and family and you guys can all communicate with each other!


## Instructions to Build the Surprise on Glitch

### Step 1. Create a new project on Glitch

Go to <a href="https://www.glitch.com" target="_blank">Glitch.com</a> and click on the button that says "New Project", and then click on "hello-express"

### Step 2. Add Socketio to Package.json

Click on the file on the left that says "package.json". Then, where it says "Add Package", search "socketio". A package should come up that's called "2.3.0 socketio". Click on that to add it. 

![socketio](https://prof.ninja/cyber/glitch2.png)


### Step 3. Replace Server.js

Click on the file on the left that says "server.js" and delete whatever's in it now. Then, copy and paste the following code and put it in "server.js":

<script src="https://gist.github.com/dianevinson/d10ce8f8b68b783ec3f62dd702580958.js"></script>


### Step 4. Replace the code in index.html

Now, find where it says "views/" on the left and click on that. You should then see a file that's called "index.html". Go into "index.html". Delete whatever code is in there now, and paste in the code below:

<script src="https://gist.github.com/dianevinson/46e4d754d55bf4e1518255c54b308d85.js"></script>

### Step 5. View your new chat app! 

Click on the sunglasses that say "Show", and then choose if you want to see your awesome new app in a new window or the same one. 

If you share the link of your app (the link for it when you view it in a new window) with your friends and family, then you can all talk to each other at the same time! 

Unlike the Codepen app, since this one does *not* use a database, once you exit out of the app you will no longer be able to see the messages. 

# MAD LIBS with friends!

Now we'll have you make your own MAD LIBS stories that you can play with friends even across the internet.

Take a look at these example MAD LIBS stories:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="dianevinson" data-slug-hash="PoZGpoJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Mad Libs Engine">
  <span>See the Pen <a href="https://codepen.io/dianevinson/pen/PoZGpoJ">
  Mad Libs Engine</a> by dianevinson (<a href="https://codepen.io/dianevinson">@dianevinson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

OR:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="mariavanv" data-slug-hash="gOPwmOx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Mad Libs Engine">
  <span>See the Pen <a href="https://codepen.io/mariavanv/pen/gOPwmOx">
  Mad Libs Engine</a> by mariavanv (<a href="https://codepen.io/mariavanv">@mariavanv</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

OR: 

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="AndyNovo" data-slug-hash="eYJdvYo" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Mad Libs Engine">
  <span>See the Pen <a href="https://codepen.io/AndyNovo/pen/eYJdvYo">
  Mad Libs Engine</a> by Andy Novocin (<a href="https://codepen.io/AndyNovo">@AndyNovo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

OK:

## Step 1: FORK the pen

## Step 2: Edit yourMadLibStory

When you're editing your story use the words you see in the `wordFinder` (VERB, NOUN, ING-VERB, PRONOUN, ADJECTIVE, etc.) whenever you want to ask people to make-up their own words in your story.

## Step 3: Edit yourMadLibTitle

Make any title you want!

## Step 4: Share your URL

Now as people fill out your story it will show on your screen and vice-versa.  Once every answer has been filled out you can click "All Done" to show the answer then "Play Again?" to undo those answers.

# Sharing your creations on your website

You all have made a creative alchemy game, a choose your own adventure game, a chat app, a MAD LIBs story, and a website.  What a week!  Now we encourage you to make a site to share with your friends and family that let's them find all of your cool creations in one easy place.

## Pick your main page location

Make a new pen, new glitch.com project, OR take the one you made on Monday.  

## Gather up your links

Copy the URLs for each of your creations (and feel free to keep adding things) and add links to those URLs like this:

`<a href="GAME_URL_HERE">Friendly Description of your Game/Creation here</a>`

## Add a badge of accomplishment!

We made you some badges to show-off your **Summer of Cyber** week 1 experience!

![Creative Coder Badge](https://udel.codes/images/creativecoder.svg)

Just add this badge to your site with an `<img src="https://udel.codes/images/creativecoder.svg"/>` tag.

![Future Cyberscholar Badge](https://udel.codes/images/cyberscholar.svg)

Just add this badge to your site with an `<img src="https://udel.codes/images/cyberscholar.svg"/>` tag.
