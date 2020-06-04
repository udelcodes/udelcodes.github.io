# Steps to extract and bruteforce a zip file

Go to the web terminal [here](http://157.230.203.138/term).

After you type a command, remember to press the *enter* key on your keyboard to run it. 

To keep your files neat, make a new directory using the *mkdir* command. 
```
mkdir summer-camp
```

*Change directories* into the directory you just made using *cd.*
```
cd summer-camp
```
 
Grab the image you want to try to extract a zip file from using the *wget* command and the link to your image on the web. 

Example:
```
wget putyourlinktotheimagehere
```

Example with the image from the chat log: 
```
wget https://udel.codes/cyber1/chat_log/leek.png
```

Use *binwalk* on your image. Binwalk takes a look at all of the 0's and 1's that make up your image and it tries to figure out if there are any hidden files inside. 

Be sure to include the *file extension* along with the name of your image. Your image might have a .jpg, .gif, or .png extension. 

The *-e* opton tells binwalk to extract the files it finds into a new folder.

Example:
```
binwalk -e yourimagenamehere
```

Example wth the image from the chat log:
```
binwalk -e leek.png
```

Let binwalk run for a bit. You may get some error messages, but for our purposes this is okay. If the program hangs, press enter. 

Once binwalk is done, use *ls* to see the folder that binwalk has extracted any hidden files into. 

Example:
```
ls
_yourimagenamehere.extracted
```

Example with the image from the chat log: 
```
ls 
_leek.png.extracted  leek.png
```

Now we are going to *change directories* into the folder that binwalk has extracted any hidden files into. 

The folder is going to start with an underscore.  

You can type *cd* followed by the first character that the folder starts with, and then press the *tab* key on your keyboard. The terminal will try to complete the name of the folder for you so that you don't have to type the entire name yourself. 

Example: 
```
cd _yourimagenamehere.extracted
```

Example with the image from the chat log: 
```
cd _leek.png.extracted
```

Now that you are in the folder with the extracted folder, type *ls* to see the extracted files.

Example:
```
ls
10251.zip  A4  A4.zlib  secret_message
```

The *.zip* file is the file that contains the secret message. If you try to look inside the *secret_message* folder right now, you will see that there is nothing inside. 

Try to unzip the *.zip* file using unzip. You will be asked for a password. But you probably don't know the password yet. 
```
unzip 10251.zip 
Archive:  10251.zip
[10251.zip] secret_message/message.txt password: 
password incorrect--reenter: 
   skipping: secret_message/message.txt  incorrect password
```

Now we will try to crack the password to the zip file using a *wordlist* and a *python script.* 

