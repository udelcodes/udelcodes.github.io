# W3lc0m3 t0 the Last Day of Crypt0 W33k!!

<iframe width="680" height="480" src="https://www.youtube.com/embed/-AkuKKJ8dN0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The CRABS Won the Lottery!!

<center>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPFW2kAZ-NMJ-aeEVkJumZ5D3trjCdpww9TQ&usqp=CAU" alt="crab lotto" width="250" />
</center>

The CRABS used their time-cycles to go back in time and buy a winning lottery ticket. 
They earned $51M last night in the New Jersey Powerball! 
To make matters worse, they are *determined* to spend all of it on cracking our encryption schemes.  

## XOR Fun

With the CRABS spending $51M to crack our encryptions, the stakes are high. 
We have to get really good at encrypting our data. 
If we want to keep our data safe, we're going to have to use XOR. 
Head to this [XOR learnification.fun module](https://learnification.fun/module/xorrox) to learn all about XOR so we can keep our data safe from the CRABS!

## Diffie-Hellman

Real crypto is based on being able to communicate seret data across a public area. 
XOR allows us to randomize data and make it secret so that you can only decrypt it with a specific key. 
If two people are communicating with each other, then we want them both to know the secret key, but we don't want anyone else to know the secret key. 
We do this by using XOR and something called the Diffie-Hellman Secret Key Exchange.

<center>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Diffie-Hellman_Key_Exchange.svg/1200px-Diffie-Hellman_Key_Exchange.svg.png" alt="Diffie Hellman Visual" width="300"/>
</center>

The Diffie-Hellman method takes advantage of XOR in order to create a shared secret key between two people. 
Each person has their own private, secret key that only they know and they never tell anyone what that key is. 
There is also one public key that everybody knows. 

Looking at the picture above, Alice and Bob each mix their secret code with the pubic code and then swap mixtures. 
Then, Alice has a mixture of Bob's key mixed with the public key and Bob has a mixture of Alice's key mixed with the public key. 
If Alice and Bob both add their own secret key to the mixtures they recieved, then they will both have the same mixture made up of Alice's secret key, Bob's secret key, and the public key.

In Diffie-Hellman, when we "mix" two keys, we mean XOR the two keys. 
Also, remember that Alice and Bob can mix each of their private keys with the public key and then send it into the public area. 
This is still secure because only Bob can add his private key to Alice's mixture and only Alice can add her private key to Bob's mixture. 
No one else can use XOR to find out the secret message because no one else has Alice and Bob's secret keys.

## XOR and AES to Make Real Crypto

Like we said earlier, real crypto is based on being able to communicate seret data across a public area. Diffie-Hellman and XOR allow us have a shared secret key between two people, even in a public area. If we combine that with AES (Advanced Encryption Standard), then we can actually send and receive secure messages in a public area.

Head to this [AES learnification.fun module](https://learnification.fun/module/aes) to practice this concept.

## What Crypto Are We Using Right Now?

We can check to see what kind of crypto is being used right now on whatever browser you are on.  
Right click anywhere on the page, then click *Inspect*. Then click the *Security* tab at the top of the page.

![page security](https://udel.codes/images/page_security.PNG)

## Scale of the Universe

Remember that the CRABS won $51M in the lottery and are planning to spend it all on cracking our encryption schemes. How much will they actually need? Let's do a little bit of math to figure it out.

A computer can do 10^9 operations per second and it costs about 20 cents per day.  
How many operations per minute?  10^9 * 60  
How many per hour? 10^9 * 60 * 60  
How many per day? 10^9 * 60 * 60 * 24  
How many operations can $1 dollar buy? Roughly 5 * 10^14  
How many operations can $51 Million Dollars buy?  Roughly 2.5 * 10^22  
There are about 10^38 AES keys to try in a brute force attack, so they have to win the lottery
10^16 times to crack our AES encryption.

These numbers are huge, so to gain a little perspective let's check out this 
[Scale of the Universe](https://htwins.net/scale2/).

That's with only using AES128 encryption. 
AES also comes in AES192 and AES256, which include even more keys and are even harder to crack.  

## Send Secret Messages Using DHE!

To finish off the week, let's use the same python script from our AES learnification.fun module. 
Head to the [CyberSecLabs Terminal](http://157.230.203.138/term) and 
follow the instructions on the left sidebar to send secret messages to each other.

## Resources

We hope that you learned a lot about crypto this week, and maybe you're interested in learning more.  
Here is a list of resources that you can use to learn even more about crypto.  
 - [Crypto Roadmap](https://gist.github.com/AndyNovo/f002ad0e9eef2b7912818bdd9d26f3d6)  
 - [Crypto Video Resources](https://gist.github.com/AndyNovo/b9f11430bf645ba8b870ac851985f8e3)
 - [Crypto Training Platform](http://cryptohack.org/)
 - [XOR Playground](https://codepen.io/AndyNovo/full/dyGzGwa).  
 - [CyberSecLabs Terminal](http://157.230.203.138/term). 
 
And of course, you have earned this badge for your hard work this week:

![crypto badge](https://udel.codes/images/crypto_badge.png)
