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

cd - change directory 

touch - creates a new file

mkdir - created a new dir
```

## First Exercise, getting familiar with bash

First we will go to the online terminal Alice and Bob provided yesterday: <a href="http://157.230.203.138/term" target="_blank">TERMINAL</a>

1. Use `pwd` and note what dir you are in 
2. Use `whoami` to see what user you are 
3. Use `ls` to see what is in that dir. 
4. NOTE: You should see a combination of dir and files if not don't worry we can take care of that shortly 
5. Use `mkdir bash` to created a new dir named bash
6. Now we want to change our current working dir to bash try `cd bash` Note you can replace `bash` with any dir if you want to go somewhere else 
7. User `pwd` again to see if you are in the bash dir 
8. Notice how there is a more dir attached to bash. Something like `User/bash` this is known as you absolute path. `/User` is the parent dir of `/bash`. You might not see 'User', but in other bash terminals you will.
9. lets go back to our parent dir. Try `cd ..` to change dir to the parent
10. Again use `pwd` (last time i promise) to verify you are back to the parent. 
11. Now that you know how to move around lets go back into the bash dir 
12. Lets try making a new file type `touch newFile` to make a file called newFile
13. Use `ls` to see if the new files was created

Amazing! You have now learned how to create directories and files within a bash terminal!

## Navigate the terminal to finding flags!

Begin by entering the following commands in the terminal...

1. `git clone https://github.com/alexarnell/Bash_Tutorial.git`
2. Next go into the 'Bash_Tutorial' directory to start hunting for flags

Below is a little more indepth cheat sheet with commands to help
you find your flags. Good Luck!

---

**exit** - exits the bash shell!

**cd <path>** - change to the directory given; with no 
arguments, chdir to the home directory; with a '-' 
as the only argument, chdirs to directory
previously in, the same as what tcsh does. Also, 
using cd with a '../' as the only argument will
bring you to the previous directory you were in.


**pwd** - print the current working directory. 


**ls** - with no arguments, lists the files
in the current working directory one per
line. With arguments, lists the files in each
directory given as an argument, with a blank
line then the name of the directory followed
by a : before the list of files in that directory.


**ls -la**: list all the files including hidden files in the
current working directory :)


**kill <pid>**- When given just a pid, sends
a SIGTERM to the process with that
pid using kill(2). When given a signal
number (with a - in front of it), sends
that signal to the pid. (e.g., kill 5678,
kill -9 5678).


**cat** <filename> - allows us to create single or multiple
files, view contain of file, concatenate files
and redirect output in terminal or files


**pid** - prints the pid of the shell


**grep <filename>**- a command-line utility for searching
plain-text data sets for lines that match a regular
expression.
  
---

**Now try and find all the flags**

Once you find a flag, input it in the answer box on <a href="https://learnification.fun/" target="_blank">Learnification.fun</a> under the module Week of Cyber Day 2! Good Luck!

**Total Number of Flags: 5**
