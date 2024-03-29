# W3lc0m3 t0 Day 1 of Crypt0 W33k!!

<center><img src="https://news.mit.edu/sites/mit.edu.newsoffice/files/styles/news_article_image_top_slideshow/public/images/2019/Simpler-Cryptography_0.jpg?itok=HH5QoVrb" alt="Cryptography"/></center>

Today we will be learning about the first ciphers that were used in the old days.  
Specifically, we will be learning about the Caesar Cipher, the Substitution Cipher, the Baconian Cipher, and the Pig Pen Cipher.  

## Warm Up!

While we're waiting to start, solve this crossword puzzle with words that you will understand by the end of the day. There is a word bank below the crossword puzzle.

<div style="margin:10; display:flex; flex-direction:column; height:1000px; max-width:1000px">
    <iframe border="0" src="https://crosswordlabs.com/embed/cryptography-crossword-puzzle?clue_height=30" style="flex:1; width:100%; padding:5px 0px 0 5px; border:3px solid black; "></iframe>
    <a target="_blank" style="align-self:center; font-size:12px; color:black; padding-top:10px; text-decoration:none;text-align:center" href="https://crosswordlabs.com">This puzzle was made using https://crosswordlabs.com.</a>
</div>

### Word Bank

ENCODE  |  DECODE  |  SUBSTITUTION  |  CAESAR  |  BACONIAN  |  CYBERCHEF

DATA PROTECTION  |  PLAINTEXT  |  CIPHER  |  CRYPTOGRAPHY  |  CYBERSECURITY  |  PIGPEN

## Who are the C.R.A.B.S.?

<center><img src="https://cdn.drawception.com/images/panels/2016/3-14/5B77s4SRPO-8.png" alt="C.R.A.B.S."/></center>

**C**rustaceans **R**allying **A**round **B**ad **S**ecurity, CRABS for short, 
is a force to be reckoned with. 
They are a group of time-travelling crustaceans that are travelling 
throughout history on time-cycles in order to erase cryptography! 
Thier hatred for crypto stems from a fundamental frustration with texting. 

<center><img src="https://iruntheinternet.com/lulzdump/images/hermit-crab-texting-phone-I-have-no-idea-what-I-am-doing-13613836231.jpg?id" alt="Crab Texting"/></center>


The issue is, they can't text with their claws so they are jealous of the world of people who can test easily with their fingers. Their solution? To eliminate crypto so that everyone’s texts are insecure and no one will want to text anymore.

## Who are the S.T.A.R.S.?

![STARS](https://udel.codes/images/starfish.jpg)

**S**tarfish **T**ogether **A**dvancing **R**eliable **S**ecurity, STARS for short, is an 
interoceanic group of starfish that fight to protect security for all, especially cybersecurity. 
They believe crypto is key to a secure world where everyon's data is safe, and it's their job to stop the CRABS and save crypto! Plus, they really enjoy texting.

## How Can We Help?

The CRABS are travelling through time and erasing crypto from history before it has even been invented. Our job is to help the STARS to learn as much as we can about crypto before the CRABS erase it, so we can teach others and keep our data secure. And somewhere along the way we may use crypt to our advantage and tamper with some CRAB messages. Now, let's get cracking!

The CRABS have driven their time-cycles to the beginning of crypt in history, so today we will be learning some of the first ciphers ever used (cipher is another word for a secret code). We will learn how to solve the Caesar Cipher, the Substitution Cipher, the Baconian Cipher, and the Pig Pen Cipher.

## The Caesar Cipher

The **Caesar Cipher** was invented by Julius Caesar to protect military secrets of the Roman Empire. 
It was one of the first ciphers ever invented!  

<center><img src="https://cdn.britannica.com/s:700x500/11/196711-050-FA58D50D/Julius-Caesar-marble-sculpture-Andrea-di-Pietro.jpg" alt="Julius Caesar" width="250"/></center>

### What is the Caesar Cipher?

- Essentially a shift
- Plaintext(Regular) alphabet and Cipher(Code) alphabet in alphabetical order
- We'll try an example with a 19 letter shift
- Pull out your wheels! We're ging to try an example.

![caesar example 1](images/caesar1.PNG)

- Line up the letter "A" on the inside circle (this represents your plain text alphabet) with the letter "T" on the outside circle (this represents your cipher alphabet.

STARS at headquarters have intercepted a few messages between CRAB agents, including the following, and they need you to decrypt it!
Now, we have to figure out how to use this key. Let's try and decode this Caesar Cipher. The answer will tell us what the CRABs have been sending to eachother.

**VKTUL YHK EBYX**

<iframe id="if1" width="120%" height="500" style="visibility:visible" src="https://inventwithpython.com/cipherwheel/"></iframe>

Start by finding the first letter of the code, "V", on your big circle. Then, write down the letter on the small circle that is lined up with the "V" on your outside circle. To give you a hint, the first letter should be a "C". Now, all you have to do is keep repeating this for each letter of the message and then you will know what the crabs have been saying. 

Now, you can try to crack this code on your own. The answer should tell you what type of cryptography the CRABs are trying to get rid of first.

**WHPG PBMA MAX VTXLTK VBIAXK**

Feel free to take a break here and practice writing your own codes using your wheel. You can practice writing your name, your school, your favorite ice cream flavor, or anything you want. If you're eager, try to teach a sibling, parent, or friend how to use your wheel to crack Caesar Ciphers and practice writing secret messages to each other!

### How Do You Solve a Caesar Cipher?

In order to use your Caesar wheel to crack codes, you need to know the size of the shift. Most of the time, you don't know the size of the shift. No worries, we can still solve these codes it just takes a little more thinking. Here are some helpful hints on how to crack Caesar Ciphers.  
- Look for a hint, like...
  - Single letter words (I & A)
  - Likely words you have most of the letters for
  - 2 letter words (in, on, no, of, so, to, etc.)
  - Name or place that you know is in the cipher
- Utilize letter frequency

![letter frequency chart](images/letter_frequency.PNG)

Remember, once you have 1 letter figured out, you can line it up on your wheel and you now have a key to decipher the whole code.

### Practice!

Now that you've learned about Caesar Ciphers and how to decode them, head to [this link](https://learnification.fun/) for more practice.
Log in using any eamil account you or your parents have to save your progress. 
Then click on the menu button in the top left corner, and click on bathroom ciphers. 
This will take you through a few examples of Caesar Ciphers, but once you get to a problem that asks about a different type of cipher, come back here to learn how to solve it.

## The Substitution Cipher

The Substitution Cipher is very similar to the Caesar Cipher, there are just a few slight differences.  
In a Substitution Cipher, each letter in the plaintext alphabet is substituted for a different letter in the cipher alphabet. 
Caesar Ciphers substitute letters in a very specific way, via a shift. 
However, the Substitution Ciphers utilize more complicated methods for substituting letters, based on the type of alphabet.
We are going to focus on the Aristocrat cipher here.

### What is an Aristocrat Cipher?

- Is the most basic type of substitution cipher
- Looks like the Caesar Cipher
- Depends on the alphabet used

There are 5 different types of alphabets used with Aristocrats

- K1
- K2
- K3
- K4
- Random

We will focus here on the K1, K2, and random.

### What is the K1 Alphabet?

- All about the plaintext (regular) alphabet
- Plaintext alphabet begins with a keyword, followed by the rest of the letters in alphabetical order
- Repeated letters are skipped
- Example – *POULTRY* and *APPLE* as keyword

![K1 example alphabet 1](images/Substitution1.PNG)

![K1 example alphabet 2](images/Substitution2.PNG)

### What is the K2 Alphabet?

- All about the cipher alphabet
- Cipher alphabet contains a keyword, followed by the remaining letters in alphabetical order
- Sometimes includes a shift
- Repeated letters are skipped
- Example – *KEYBOARD* as keyword

![K2 example alphabet](images/Substitution3.PNG)

### What is the Random Alphabet?

- Exactly what it sounds like.
- The letters are all scrambled randomly, with no sort of order.
- Here's an example

![random alphabet example](images/Substitution4.PNG)

### How Do You Solve an Aristocrat Cipher?

Solving an Aristocrat Cipher is very similar to solving a Caesar Cipher, here are some tips:  
- Look for a hint 
- Likely word
- Name or place
- Single letter words (I & A)
- Fill in letters and words as they come
- If possible, try and figure out what the keyword is so that you can figure out the alphabet
- When in doubt -- letter frequency!

![letter frequency chart](images/letter_frequency.PNG)

### Practice!

Now that you've learned about the Aristocrat Cipher and how to decode it, head to [this Aristocrat generator](https://codepen.io/nikki-pilla/full/RwrZRwp) to practice an unlimited amount of Aristocrat Ciphers!

### If you're interested in learning more about the Ceasar and Substitution Ciphers...

 - You can research the last 2 alphabets that we didn't cover (K3 and K4).  
 - You can practice at [learnification.fun](https://learnification.fun/module/crypto/USETHISBATHROOMANYWAYANDTEXTYOURFRIENDFORHELP). This site has examples of Aristocrats using all 5 alphabets, so pay attention to the question.
 - If your school has a Science Olympiad team, consider joining it and competing in the CodeBusters event. This event is all about cracking ciphers!

## Switching Gears: Baconian Cipher

Now that we've learned about the Ceasar and Substitution Ciphers, lets check out a new cipher called the Baconian Cipher. This cipher is quite different from the Caesar Cipher, but it is another one of the original ciphers. Baconian may sound like one of your favorite breakfast foods, but it's actually named after it's founder, Sir Francis Bacon, who created the Baconian Cipher is 1605.

<center><img src="https://www.biography.com/.image/t_share/MTIwNjA4NjMzNzMxNzc4MDYw/francis-bacon-9194632-1-402.jpg" alt="Sir Francis Bacon" width="381"/></center>

### What is the Baconian Cipher and How Does it Work?

![baconian](https://proto57.files.wordpress.com/2009/11/iamhere_vms.jpg)

- It is based on 5 bit binary encoding (this means 5 digit strings made up of 2 symbols represent each letter)
- Traditionally, the 5 bit encoding is strings of "A"'s and "B"'s
- There are 2 versions of the Baconian alphabet
  - We will use the version where I/J have the same encoding and U/V have the same encoding
 - Here is the Baconian alphabet
 
 ![baconian alphabet](images/baconian_alphabet.PNG)
 
- In the encoded message, there are two typefaces or different symbols that each represent an “A” or a “B”
- Replace the typeface with the respective letter it represents (A or B)
- Use the alphabet of the Baconian cipher to determine the plaintext letter

### Let's Try an Example

Here is a message sent between the CRABS. Decode it so we can tell the STARS what it says.

**Let uS StART WitH AN EAsY PRoblEM fIRsT. FUN!**

Look closely at this message and see if you can identify the 2 typefaces.  
You will see that some letters are capitalized, while some letters are lowercase.  
Now you have a choice to make. You can either choose to have lowercase letters represent A and capital letters represent B, or you can choose the opposite where capital letters represent A and lowercase letters represent B.  
Only one of these options is correct, and the other option will give you a random string of letters.  
The only way to find out which method is correct is to test it!  
Rewrite the message in "A"'s and "B"'s based on whichever choice you made.  
Then, split the message into groups of 5 letters. Each group of 5 "A"'s and "B"'s represents 1 plaintext letter.  
Now use the Baconian alphabet to decode the message! If the decoded message doesn't make sense, try switching which kind of letter represents an "A" and which kind of letter represents a "B".

 ![baconian alphabet](images/baconian_alphabet.PNG)
 
### Another Example, With a Twist
 
Here's a message sent to us from the STARS about what we will be doing tomorrow. The true meaning of the message is hidden using a Baconian Cipher.  
This cipher seems easy enough when the typefaces are clear. However, sometimes you have more than 2 options to choose from that could represent your "A"'s and "B"'s. To show this, try this example:

**We** N**EEd** yO**uR hEl**p **T**O **LEar**N **a**bO**UT** tHi**s** T**oP**I**c**

Remember in this example, you can choose between lowercase/capital letters or bolded/unbolded letters.

### Practice!

Now that you've learned about the Baconian Cipher and how to decode it, head to [this link](https://learnification.fun/module/crypto/TRYTOFINDANOTHERBATHROOMTHATHASTOILETPAPER) for more practice.
If it asks you to log in, you can use any email account you or your parents have. 
Then you will be presented with some example Baconian Ciphers.  
If you really love the Baconian Cipher, you can try to solve this one. It's very tough to solve since there are so many possibilities for A and B.

![Baconian hard example](images/Baconian1.PNG)

## Last Cipher of the Day: Pig Pen Cipher!

The Pig Pen Cipher is less formal than the previous ciphers, but it is a lot of fun! 

### What is the Pig Pen Cipher?

For the Pig Pen Cipher, each letter of the alphabet is assigned to a symbol based on this chart...

![Pig Pen Alphabet](https://crypto.interactive-maths.com/uploads/1/1/3/4/11345755/8550539_orig.gif)

...which can be interpreted in this way

![pig pen alphabet 2](https://lobestir.files.wordpress.com/2014/05/cypher-pig-pen-lower.png?w=840)

All you have to do is match the symbols with the corresponding letters!

### Example Time!

Try to solve this Pig Pen cipher using the Pig Pen alphabet.

![Pig Pen Example 1](images/pig_pen1.PNG)

## End of Day Wrap Up

<center><img src="https://media.giphy.com/media/3o6ZtlGkjeschymLNm/giphy.gif" alt="We did it! gif"/></center>

Congratulations! You made it through day 1!!  
We hope you had fun learning about the different ciphers today.  
If you really liked today's lesson, be sure to check out the extra resources mentioned with each type of cipher.  
Take what you learned today and go teach a friend or a family member, and you can start sending secret messages to each other!  
See you tomorrow for a new lesson on the different number systems in cryptography.  
The next lesson will use [this link](https://udel.codes/crypto2).  
Or you can head back to our [home page for Crypto Week](https://udel.codes/crypto2).

Here is a badge for your efforts!

![cipher badge](https://udel.codes/images/cipher_badge.png)
