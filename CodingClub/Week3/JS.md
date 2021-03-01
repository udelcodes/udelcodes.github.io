<h1> Welcome back!</h1>

![techwomen](https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60)

<h1> Logic Introduction </h1>


<h2>Example 1: Umbrella Uncertainty</h2>

Let's say you're getting ready to leave for the day, and you're deciding what to take with you for the day.

![umb](https://images.unsplash.com/photo-1538459173903-780083407053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80)


If it's raining, and you plan on walking, you would bring an umbrella, but if you don't have to walk (or it's not raining), then you would not bring an umbrella. This can be represented with a truth table!

| I have to walk | It's raining | Bring an umbrella |
|----------------|--------------|-------------------|
| No             | No           | No                |
| No             | Yes          | No                |
| Yes            | No           | No                |
| Yes            | Yes          | Yes               |

The table above can also be represented using 0's and 1's (0 is no/false, and 1 is yes/true). In the scenario, imagine A is having to walk, B is if it's raining, an O (output) is whether or not you need to bring an umbrella.

| A | B | O |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

This scenario is an example of <b>Logical AND</b>, because both A <b>AND</b> B must be true for the output to be true.

<i> <b>Exercise:</b> Can you think of another example of Logical And? </i>

<h2>Example 2: Nurse or Not?</h2>

Now let's look at another example of everyday logic: going to the nurse

![nurse](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.childrenscolorado.org%2Fglobalassets%2Fcommunity%2Fschool-nurse.png%3Fwidth%3D1300%26height%3D975%26mode%3Dcrop%26anchor%3Dmiddlecenter&f=1&nofb=1)

If you have a headache or a stomach ache, your teacher sends you to the nurse. If you have both a headache AND a stomachache, your teacher will also send you to the nurse. Let's say <b>A</b> is having a headache, <b>B</b> is having a stomach ache, and <b>O</b> is going to the nurse. Then we can represent the scenario with the following table:

| A | B | O |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

This is an example of <b>Logical Or</b>, because either A <b>or</b> B (or both) need to be true for the output to be true.

<i> <b>Exercise:</b> Can you think of another example of Logical Or? </i>

<h2>Example 3: Logical Lateness</h2>

Let's try another example: Being Late for School
![alarm](https://images.unsplash.com/photo-1550534791-2677533605ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)


Let A be your alarm going off, and let O be being late to school. If your alarm goes off, you will arrive at school on time (not late), but if your alarm doesn't go off, you will be late for school. We can represent this scenario with the following table:

| A | O |
|---|---|
| 0 | 1 |
| 1 | 0 |


This is an example of <b>Logical Not</b>, because A must <b>not</b> be true for O to be true. 

<i> <b>Exercise:</b> Can you think of another example of Logical Not? </i>

<h2>Identification Exploration</h2>

Now try to identify the following scenarios as <b>AND</b>, <b>OR</b>, or <b>NOT</b>

<b>Scenario 1:</b> <br>

  A is if you took notes in class <br>
  
  B is if you studied for the test
  
  O is if you pass the class or not 
  
  You will pass the test if you either study or took notes, or both
  
<b>Scenario 2:</b>

  A is a plant gets watered
  
  B is the plant gets sunshine
  
  O is whether or not the plant grows
  
  A plant needs to both be watered and get sunshine in order to grow.
  
<b>Scenario 3:</b>

  A is Eating a sandwich
  
  O is you are hungry
  
  If you <b>do</b> eat a sandwich, you <b>won't</b> be hungry, and if you do <b>not</b> eat the sandwich, you <b>will</b> be hungry
  
  
### Logic Gates

A really cool way that engineers represent these concepts are through diagrams called **"logic gates"**. A really cool logic gate simulator can be found [here](https://logic.ly/demo). There are a lot of circuit parts in the side bar, but the only ones that we learned about today are the and, or & not. 

<img src="./images/orgate.png" width="500px">

An example of an "OR" gate on [Logic.ly](https://logic.ly/demo)

Now, let's learn about [JavaScript](./fundamentals.md)
