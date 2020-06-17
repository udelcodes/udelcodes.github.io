# Intro to CyberChef

![CyberChef logo](https://securityaffairs.co/wordpress/wp-content/uploads/2016/11/CyberChef-GCHQ.jpg)

This page will walk you through all of the key features of CyberChef and how to use them. 
Then, you will have this awesome tool in your back pocket to solve all kinds of ciphers!

Head to the [CyberChef](https://gchq.github.io/CyberChef/) website by clicking on that link.  
CyberChef is so useful in cryptography! If we're spies, then CyberChef is our spy kit.  
It can encode and decode messages crazy fast, and all we have to do is tell it which kind of cipher to use.  
CyberChef is so smart, sometimes it can even guess which cipher it needs to decode a message without you telling it!

First, let's get our bearings. Here are the key features of cyberchef:
 - The **Operations** section on the left 
   - This section contains all of the different ways of encoding and decoding messages that CyberChef can help you with
   - You can look through the tabs (Data Format is the one we will use a lot today) or you can search for a specific cipher by name
   - For example, you can find the Caesar Cipher we used yesterday
   - In CyberChef, the Caesar cipher is called ROT13. Searching "Caesar" or "ROT13" will bring this up.
 - The **Recipe** section in the middle of the page
   - You can create "recipes" by dragging operations from the **Operations** section into the **Recipe** section
   - Drag the ROT13 operation into the **Recipe** section
   - Notice how you can have multiple operations in the **Recipe** section at a time
   - This means that all of the operations in the **Recipe** section will be performed on your input in order
   - You can get rid of operations from your recipe by clicking the trash can (deletes all operations) or by dragging a specific operation into the trash (deletes that one operation)
   - You can also temporarily disable an operation without deleting it forever by clicking the disable button ![no symbol](https://i.stack.imgur.com/mJpJns.jpg)
 - The **Input** section in the top right
   - You can input a message here
   - You can input a plaintext message or a coded message
   - The operations in the **Recipe** section will be performed on your input
 - The **Output** section in the bottom right
   - After the operations are performed on your input, the new output will appear here
   - Sometimes a little magic wand appears in the **Output** section when CyberChef thinks it can guess how to decode your input
   - Try entering this input into CyberChef "AAABA BAAAB BBAAA ABBBB BAABB ABBBA AABBA BAAAB AAAAA ABBBB AABBB BBAAA" (Maybe you recognize what kind of cipher this is?)
   - Now use the magic wand to decode the message without telling CyberChef which operation to use!

Congratulations, you are now officially a pro at using CyberChef! 
Keep playing around with the site in order to understand it better. 
You can know crack more ciphers without having to solve them by hand. 
It is still useful to understand the basic principle of how each type of cipher works, but you don't have to memorize exactly how to solve all of them. 
Thank you, powerful computers and code!!

Head back to [the main page for day 2 of crypto week](https://udel.codes/crypto2) to continue the lesson.
