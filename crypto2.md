# W3lc0m3 t0 Crypt0 W33k - Encryption!!

Today we will be switching from pen and paper ciphers to digital ciphers.  
Specifically, we will be focusing on converting letters and messages into numbers, randomness, and pseudo-randomness.  You need to complete today's training in order to help the STARS learn about encrypting data before the CRABS erase encryption from history!

<div style="margin:auto; display:flex; flex-direction:column; height:740px; max-width:500px">
    <iframe border="0" src="https://crosswordlabs.com/embed/encryption-crossword-3?clue_height=40" style="flex:1; width:100%; padding:5px 0px 0 5px; border:3px solid black; "></iframe>
    <a target="_blank" style="align-self:center; font-size:12px; color:black; padding-top:10px; text-decoration:none;text-align:center" href="https://crosswordlabs.com">Crossword Puzzle Maker</a>
</div>

## Wacky Encryption

The STARS have uncovered this [Wacky Encryption](https://codepen.io/AndyNovo/full/jOWqrYQ) that they believe the CRABS are using to send messages back and forth to each other.  
Click on the link above so we can try to understand how the CRABS are encrypting their data and practice using it.  
We believe the CRABS are encorporating 2 concepts: randomness and mixing letters with numbers.

 - Try to write a secret message using the Wacky Encryption. See what happens to the message as you change the seed.
 - Now write a secret message and send it in the chat. Don't forget to include the seed or we won't be able to decode your message!
 - Now try writing a secret message with a seed of 1 and then with a seed of 1025.
  What do you notice? What could this observation mean?

 > Think back to the first week of camp, Learn to Code, when we learned about for loops. 
 > How could you use a for loop to help you crack this code if you didn't know the seed?

We will come back to analyze this Wacky Encryption some more later on. For now, let's send some more coded messages.

## CyberChef, a Crypto Super Toolbox

<center><img src="https://images.unsplash.com/photo-1585569695919-db237e7cc455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60" alt="Toolbox" width="75%"/></center>

The STARS are very serious about keeping information safe, 
so they want you to practicing sending coded messages.  
Let's visit the [CyberChef](https://gchq.github.io/CyberChef/) website, which the STARS use all the time.  
If you are following along with this lesson on your own, it may be helpful to check out [this reference](https://udel.codes/cyberchef) for how to use Cyberchef.  
CyberChef is so useful in cryptography! If we're spies, then CyberChef is our spy kit.  
It can encode and decode messages crazy fast, and all we have to do is tell it 
which kind of cipher to use.  
CyberChef is so smart, sometimes it can even guess the cipher being used without you telling it!

## Converting Letters to Numbers

Yesterday, we looked at ways to code messages by converting the plaintext alphabet 
to a different alphabet that still used letters.  
Today, we are going to look at ways to represent the plaintext alphabet using numbers.  
Let's start by looking up the **A1Z26 Cipher Encode** in CyberChef.  
Type in some messages in the Input Section and see if you can figure out how this cipher works.  
This is the driving cipher behind the Wacky Encryption web app from earlier!

## More Examples and Practice

Here are several messages, copy and paste them into CyberChef to try and decode them.

**A1Z26 Cipher Encoding**  
23 5 12 3 15 13 5 20 15 3 18 25 16 20 15 23 5 5 11 4 1 25 20 23 15

**Binary Encoding**  
01000011 01101111 01101101 01110000 01110101 01110100 01100101 01110010 01110011 00100000 
01100001 01110010 01100101 00100000 01101010 01110101 01110011 01110100 00100000 01100001 
00100000 01100011 01101111 01101100 01101100 01100101 01100011 01110100 01101001 01101111 
01101110 00100000 01101111 01100110 00100000 00110000 01110011 00100000 01100001 01101110 
01100100 00100000 00110001 01110011 00001010

 > *Side Note about Binary*  
 > Binary is the language of computers. Every character you’ve ever typed into a keyboard was 
 > saved as 0s and 1s. The physical representation of this is a light switching on and off in 
 > the CPU to represent 0s and 1s.

**Base64 Encoding**  
Q3liZXJzZWN1cml0eSBpcyBhbGwgYXJvdW5kIHVz

**ASCII Decimal / To Decimal**  
10 84 104 101 32 65 83 67 73 73 32 100 101 99 105 109 97 108 32 115 121 115 116 101 109 32 105 
115 32 115 111 109 101 116 105 109 101 115 32 106 117 115 116 32 99 97 108 108 101 100 32 100 
101 99 105 109 97 108 32 115 121 115 116 101 109

**Hex Encoding**  
72 61 6e 64 6f 6d 6e 65 73 73 20 69 73 20 74 68 65 20 68 65 61 72 74 20 6f 66 20 63 72 79 
70 74 6f 67 72 61 70 68 79

Now, as part of your STARS training, you can encode your own secret message in CyberChef using any method that we just learned. 
Try changing a few characters here and there and use different methods.  
Once you’ve encoded your message, send it in the chat so we can all try to decode it.  
Try to recognize which ciphers other people are using by comparing them to the examples 
we did together and then try to decode the other messages.

Now, you can write another secret message in CyberChef. 
This time, you can use any method of encoding under the “Data Format” tab as long as it 
has a “To” and a “From” tool. 
Try changing a few characters here and there and use different methods.  
Once again, send your encoded message in the chat so we can all try to decode it. 
We may have to use more trial and error this time since you could have used a 
cipher we haven't seen before.

 > Note that everyone can read every message in this stage.  
 > No encryption has happened, only coding, because everyone knows how to decode your messages.  
 > This is good, but the STARS want more secrecy when sending messages so that the CRABS can't decode them.  
 > The STARS really want to *encrypt* their messages, which happens when the way to decode your message is a secret.

## Intro to Encryption

Now that we’ve seen a bunch of ways to convert letters and messages into numbers, 
let’s take it a step further and look at how we can *encrypt* those numbers.  
In order to do that, we would need some way to "mix" secret stuff and plaintext.  

## Intro to Steganography: Hiding In Plain Sight

The STARS have been learning about steganography: the practice of concealing messages within other nonsecret data.  
For your STARS training, you will need to learn about steganography.  
A STARS agent sent you the image below, but there is hidden information in the image that can tell us what time period the CRABS are currently travelling to.  
The agent is "mixing" secret stuff within nonsecret stuff, aka they are using staganography.

<center><img src="https://raw.githubusercontent.com/zelinsky/CTF-Course/master/Forensics/Steganography/stego.png" alt="Leonardo Da Vinci... or is it?"/></center>

Click on [this link](https://raw.githubusercontent.com/zelinsky/CTF-Course/master/Forensics/Steganography/stego.png) to download this seemingly normal image (right click the image and press “Save Image As…”, then save to your computer.)

Then upload the image to [this website](https://georgeom.net/StegOnline/image) and play around until you find the hidden image inside this image!

## Least Significant Bit Method

The secret image was hidden using the ***Least-Significant Bit*** method.

<center><img src="https://i0.wp.com/codeexercise.com/wp-content/uploads/2017/12/HTMLcolors.png?fit=857%2C396&ssl=1" alt="html color chart"/></center>

You may remember from the Learn to Code week of summer camp how 
colors are defined on computers.  
Each color has a set of 3 numbers (that’s numbers, not digits! 
Could be more than 1 digit per number) that make up the color.  
The first number corresponds to the red value, the second number corresponds to the 
green value, and the third number corresponds to the blue value.  
These numbers are called RGB values, (red, green, blue).

The ***Least-Significant Bit*** method works by converting the RGB values into binary (*remember binary was the one with 0s and 1s*) and then changing the last digit of each value (either changing a 1 to a 0 or changing a 0 to a 1).  
This difference is imperceptible to the human eye, and is perfect for hiding an image in another image.

This method of hiding an image within an image is called *Steganography*.

If you’re interested in learning more about Steganography, check out 
[this lesson](https://zelinsky.github.io/CTF-Course/Classes/13.html) which was 
written by other UD Cybersecurity Scholars!
