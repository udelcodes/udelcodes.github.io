## W3lc0m3 t0 Crypt0 W33k, Day 2!!

### First Up, Mini Math Review!

We know, we know. We promised to teach you about cryptography, not math, 
but we *promise* that math is an integral part in cryptography.  

In cryptography, cybersecurity, and generally in coding, it is important to understand exponents.

#### What Are Exponents?

- They tell how many times a number should be multiplied by itself
- For example... 
  - 2<sup>1</sup> = 2
  - 2<sup>2</sup> = 2 x 2 = 4
  - 2<sup>3</sup> = 2 x 2 x 2 = 8
  - 3<sup>3</sup> = 3 x 3 x 3 = 27
  - 5<sup>2</sup> = 5 x 5 = 25
  - **2<sup>0</sup> = 1,  3<sup>0</sup> = 1,  4<sup>0</sup> = 1,  5<sup>0</sup> = 1**
  - **Any number raised to the 0th power is one.**
  - If you want to know why, check out what the multiplicative identity is

#### Pro Tip About Counting

In programming, counting often starts at 0 instead of 1.  
If you're counting left to right, the “**c**” in **computers** is in the 0th position. The “**o**” is in the 1st position, the “**m**” is in the 2nd position, and so on.

### Binary to Base 10, the Basics

What is the Binary Number System?
- The binary number system is made up of only 0s and 1s.
- The prefix in binary is “bi” which means **two**. Binary code is only made up of **two** numbers.
- Another name for the binary system is base 2

What is the Base 10 Number System?
- The base 10 number system is what we use everyday!
- It is also known as the decimal system
- Base **10** uses **10** digits: 0,1,2,3,4,5,6,7,8,9

### How Do You Go From Binary to Base 10?

Let’s say that you have this binary number: 1100001  
How do we get it to base 10?  
First, you have to understand that each binary number is multiplied by 2 to the power of the position of the binary number (2<sup>Position of binary number</sup>)

For example...

![crypto2.1](images/crypto2.1.PNG)

Then, in order to convert base 10, it would look like this:

![crypto2.2](images/crypto2.2.PNG)

So the binary number **1100001** is the number **97** in base 10!

### How Do You Go From Base 10 to Binary?

Now, how do we do the opposite and convert from base 10 to binary?

We have to divide our base 10 number repeatedly by two. 
The remainder tells us whether the binary number should be a 1 or a 0. 

Let’s start with our number we got before: 97.

First, divide 97 by 2.  
When we do that, we get 48 with a remainder of 1. 
The remainder (1) will become a part of our binary number while the quotient (48) will be divided by 2. 
This process repeats itself until the quotient becomes 0.
