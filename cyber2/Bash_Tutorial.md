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
    : An enviorment variable ( We will talk about envorimenal var later) that represents a user base dir

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

pid - prints the process ID of the shell

kill <pid> - kills a running process

grep <string> <filename>- searches file for string and prints lines 
containing that string.
```

## First Exercise, getting familiar with bash

First we will go to the online terminal Alice and Bob provided yesterday: <a href="http://157.230.203.138/term" target="_blank">TERMINAL</a>

1. Use `pwd` and note what dir you are in 
2. Use `whoami` to see what user you are 
3. Use `ls` to see what is in that dir. 
4. NOTE: You should see a combination of dir and files if not don't worry we can take care of that shortly 
5. Use `mkdir bash` to created a new dir named bash
6. Type `ls` so you know see you have created a new dir named bash
7. Now we want to change our current working dir to bash try `cd bash` Note you can replace `bash` with any dir if you want to go somewhere else 
8. User `pwd` again to see if you are in the bash dir 
9. Notice how there is a more dir attached to bash. Something like `User/bash` this is known as you absolute path. `/User` is the parent dir of `/bash`. You might not see 'User', but in other bash terminals you will.
10. lets go back to our parent dir. Try `cd ..` to change dir to the parent
11. Again use `pwd` (last time i promise) to verify you are back to the parent. 
12. Now that you know how to move around lets go back into the bash dir 
13. Lets try making a new file type `touch newFile` to make a file called newFile
14. Use `ls` to see if the new files was created

Amazing! You have now learned how to create directories and files within a bash terminal!

## Navigate the terminal to find flags!

Begin by entering the following commands in the home directory of the terminal...

1. `git clone https://github.com/alexarnell/Bash_Tutorial.git`
2. Next go into the 'Bash_Tutorial' directory to start hunting for flags

Once you find a flag, input it in the answer box on <a href="https://learnification.fun/" target="_blank">Learnification.fun</a> under the module Week of Cyber Day 2! Good Luck!

**Total Number of Flags: 5**
