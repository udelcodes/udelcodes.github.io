# Welcome to University of Delaware's Virtual Fieldtrips!
We are very excited to be working with you guys at Newark Center for Creative Learning. Even though we wish we could meet with you in person, we have the ability to learn some new skills today over zoom!
![UD](https://marvel-b1-cdn.bc0a.com/f00000000164722/www.udel.edu/content/dam/udelImages/main/photography/events/fina-AW_Mug_Night_Tents-047.jpg/_jcr_content/renditions/original)

# First let's create a codepen account
First thing we will do is create a codepen account. CodePen is an online community for creating programs for the whole world to see.
We will create our own program in codepen today that you will be able to share with your friends and family!
<a href="https://codepen.io">CodePen</a>

# Get ready to learn the basics
Now that we've explored a bit of logic by using truth tables & and/or/not, we can apply these ideas to some actual code! For our purposes today, we'll be using a language called **JavaScript**. According to BusinessInsider, <a href="https://www.businessinsider.com/most-popular-programming-languages-github-2019-11" target="_blank">JavaScript was *the* most popular programming language in 2019</a>, due to its versatility and usefulness when coding websites.

Although we'll be coding in JavaScript, the principles we'll be learning today can be applied to practically any programming language you can think of. Tomorrow, we'll look at some more JavaScript and add it to our website.

![Computer pic](https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60)

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

### What if you have multiple values that you want to associate with a key? What if I had chicken that was feathery *and* scrawny?

Every key can be associated with *ONE* object, but luckily, this object can be a collection of other objects (it could be a list of other objects, or another JSON Object!). This is done very often, and you'll see an example of it in our activity later today.

### When do you use a JSON Object?

JSONs are a great and well-organized way to transfer and store data. It's easy to pass JSON objects around to different functions, and it's very easy to retrieve the values from them if you know the key.

### What does a JSON Object look like in JavaScript?

Great question! Below is what our meal example would look like (including the side salad we had for dinner).

      "Animals": {
        "chicken" : {
          "species" : "Gallus gallus domesticus",
          "numberOfLegs" : 2,
          "appearance" : {
              1 : "feathery",
              2 : "scrawny"
           },
          "maxSpeedInMPH" : 9
         },
         "germanShepherd" : {
           "species" : "Canis lupus familiaris",
           "numberOfLegs" : 4,
           "appearance" : {
                1 : "Furry",
                2 : "Chubby"
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

-----------

<h2> Make your own Universe!</h2>
Play with the following example and try to make everything! <br>
Combine different items to discover new ones! <br>

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="result" data-user="mariavanv" data-slug-hash="pogyyQa" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Little Alchemy Engine Example">
  <span>See the Pen <a href="https://codepen.io/mariavanv/pen/pogyyQa">
  Little Alchemy Engine Example</a> by mariavanv (<a href="https://codepen.io/mariavanv">@mariavanv</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>
Now click the "JS" button to see what the code looks like

click the following link to start editting your own!

<a href="https://codepen.io/mariavanv/pen/jOWqoLy" target="_blank" >Make your own Little Alchemy!</a>


Try doing the following tasks:
<ol>
  <li> Change the names and images of <b>example1</b> and <b>example2</b> in the JS </li>
  <li> Change <b>result example</b> to be a logical combination of example 1 and example 2. <i>Ideas: maybe do 'red' plus 'yellow' equals 'orange' or 'seed' plus 'water' equals 'flower'</i> </li>
  <li> Add some new items, and make sure you edit the <b>combinations</b> section of items it combines with! <i> Note: you'll need to add the result and the thing it mixes with before running your code</i> </li>
 </ol>
