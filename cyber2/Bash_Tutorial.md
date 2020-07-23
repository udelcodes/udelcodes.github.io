# Introduction to Bash!

![bash](https://www.eazylinux.com/wp-content/uploads/2016/09/bashshell.png)

## Learning Bash Terms and Basic Commands

**Terms to learn** 

*Command*
    : A String the user inputs into the shell that runs a program

*Directory (dir)*
    : A file that contains refences to other files. You can pretty much call this a folder

*Current Working dir*
    : The dir that you are currently working in 

*Home Dir*
    : An enviorment variable ( We will talk about enviormental var later) that represents a user base dir

*Root Dir*
    : A dir of the highest level 

**Commands learned in this lesson**

```
pwd - prints the working directory. Tells you where are you at in the shell 

whoami - tells you what user you are

ls - list the contents of the directory 

cd <directory> - change directory 

touch <filename> - creates a new file

mkdir <directoryname> - created a new dir

cat <filename> - displays the contents of a file 

```

## First Exercise, getting familiar with bash

First we will go to the online terminal Alice and Bob provided yesterday: <a href="http://cslabs.app" target="_blank">TERMINAL</a>

1. Use `pwd` and note what dir you are in 
2. Use `whoami` to see what user you are 
3. Use `ls` to see what is in that dir 
4. NOTE: You should see a combination of dir and files if not don't worry we can take care of that shortly 
5. Use `mkdir bash` to created a new dir named bash
6. Type `ls` so you know see you have created a new dir named bash
7. Now we want to change our current working dir to bash try `cd bash` Note you can replace `bash` with any dir if you want to go somewhere else 
8. User `pwd` again to see if you are in the bash dir 
9. Notice how there is a more dir attached to bash. Something like `User/bash` this is known as your absolute path. `/User` is the parent dir of `/bash`. You might not see 'User', but in other bash terminals you will
10. Let's go back to our parent dir. Try `cd ..` to change dir to the parent
11. Again use `pwd` (last time I promise) to verify you are back to the parent 
12. Now that you know how to move around lets go back into the bash dir 
13. Let's try making a new file type `touch newFile` to make a file called newFile
14. Use `ls` to see if the new files were created

Amazing! You have now learned how to create directories and files within a bash terminal!

## Navigate the terminal to find flags!

![CTF](https://www.hackerone.com/sites/default/files/Icons_CTF_1.png)

Begin by entering the following commands in the home directory of the terminal...

1. `git clone https://github.com/alexarnell/Bash_Tutorial.git`
2. Next go into the 'Bash_Tutorial' directory to start hunting for flags

Once you find a flag, input it in the answer box on <a href="https://learnification.fun/" target="_blank">Learnification.fun</a> under the module Week of Cyber Day 2! Good Luck!

**Total Number of Flags: 5**


## One More Flag! 

> Now that you can get around your shell we are going to teach you how to use some tools in your shell. In this lesson we what to create a directory and learn how to search files


**Commands learned in this lesson**

```
echo <string>  - displays a line of text/string that is passed as an argument 

rm <filename>  -  removes files

rm -R <directory name>  -  removes directories

grep <string> <filename> - searches a file for a particular string, 
and displays all lines that contain that string

pid - prints the process ID of the shell

kill <pid> - kills a running process

clear - clears the terminal screen of text
```

Steps <br>
1. Use `pwd` and note what dir you are in
2. Use `echo` with a string as an argument to see how the command works
3. Use `mkdir` to create a directory named "Trash"
4. After creating the Trash directory, since it is infact trash, use `rm -R` to remove the directory
5. NOTE: Once you remove a file or directory, it is near impossible to get it back, so be careful!
6. Find the file named "names.txt" and use the `cat` command to see the contents of the text file
7. Alot of names right? now since the file is taking up a large amount of our screen space, use `clear` so the names are removed from the screen.
8. Now there is a **Flag** hidden within "names.txt" yet instead of going through the 20,000 lines of code that the file contains, use `grep` to try and find the Flag!

Put the Flag in theanswer box on <a href="https://learnification.fun/" target="_blank">Learnification.fun</a> under the module Week of Cyber Day 2

## You Have Completed the Bash Lessons!

You can now consider yourself a bash specialist. Take this badge and put it on your website. If you use your skills, you can inspect the page and find the URL used to generate this image!

![Bash Specialist](https://udel.codes/cyber2/Bash_Specialist_Badge.png)
