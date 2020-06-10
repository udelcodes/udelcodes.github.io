# How to add your own secret messages to an image
First, go to the web terminal [here](http://157.230.203.138/term) 

To keep your work organized, make a new directory and then change into it. 

```
mkdir example
cd example
```

written instructions on how to get the link to an image
gif here on how to get the link to an image

Get your image using wget
```
wget https://upload.wikimedia.org/wikipedia/en/7/72/Tom_Nook.png
```

In this example, I will be using a picture of Tom Nook 
![Original Tom Nook](https://github.com/udelcodes/udelcodes.github.io/blob/master/cyber1/example/Tom_Nook.png)
 
Make the directory for your secret message
```
mkdir secret_message
```

Cd into the directory
```
cd secret_message
```

Make a file to hold your secret message
```
touch secret.txt
```

nNw write to the file, you can also use cat and the > symbol to tell cat to save to the file. When you are done writing to your message you can hit CTRL-d on your keyboard
```
cat > secret.txt
this is my secret message
(now hit CTRL-d on your keyboard)
```

Now go back one directory up using cd and ..
```
cd .. 
```

Now we need to pick a password for our zip file.

To make it so that other people can use the wordlist and try to crack the zipfile, we need to take a look at the wordlist. 

So get the wordlist using wget 
```
wget https://raw.githubusercontent.com/udelcodes/udelcodes.github.io/master/cyber1/chat_log/wordlist.txt
```

And then to take a look at the wordlist in the terminal so that you can scroll up and down use the following command
```
cat wordlist.txt | more
```

Take a look at the wordlist, and pick a password for your zipfile from that list 
To keep scrolling down the wordlist (it is quite long) you can keep pressing or holding the ENTER key on your keyboard
If you have picked a password before you get to the end of the wordlist, hit ctrl-c on the keyboard to exit 

Now we will make our zip file using the zip command. when you run this command, it will ask you for your chosen password twice, and then create your zip file. 
```
zip --encrypt -r secret.zip secret_message/
Enter password: 
Verify password: 
  adding: secret_message/ (stored 0%)
  adding: secret_message/secret.txt (stored 0%)
```

Now we need to add the zip file into our image. use the following command, we will be using cat and the > symbol again 
Put the new filename that contains both the image and the zipfile after the > symbol, and match the file extension of the name of the file. Make sure to include that file extension.
```
cat Tom_Nook.png secret.zip > tom.png
```

Now in this example, I have made a new file called tom.png, it has the secret zip file and the secret message, but the two look totally the same 

Here is a comparison between the original Tom_Nook.png and tom.png. Do you see any visible difference?
![Original Tom Nook](https://github.com/udelcodes/udelcodes.github.io/blob/master/cyber1/example/Tom_Nook.png)
![New Tom Nook](https://github.com/udelcodes/udelcodes.github.io/blob/master/cyber1/example/tom.png)

TODO: 
- find a way to upload the files from the terminal so they can share the image with others
- encourage them to add the file to their website if they want? 

try to crack the password using the directions [here - link to the steps to bruteforce markdown file]
questions and stuff / assumptions we are making:
Do the students know what a directory is? Should we have an explanation for this?
How much do we want the instructor to be a guide vs letting the students work on their own? (Some older students may prefer written instructions - I know - I was always one of them even as a kid) 
do the students know what a zip file is? 
extra note: 
uploading a file to a server
https://bashupload.com/how_to_upload_file_to_server
