## Networks 4

### Last day of camp

It's been a real pleasure getting to know you and hopefully we've added some value to your lives.  We'll reach out to your 
parent/guardian with details of how to stay in touch with the counselors over the coming years if you'd like to keep learning 
cyber or computer science.

### Our final layer: The Connection Layer (TCP/UDP)

Yesterday we played with the networking layer and IP the postal system of the internet, routing packets from network to network 
attempting to find the right IP address over time.

![IP at work](https://www.learnabhi.com/wp-content/uploads/2018/01/router.gif)

Today we get to ignore all of that hardware stuff and get back to human culture.  
Now we can pretend that two computers are connected to each other directly and just look at their conversations.

There are two basic paradigms of chatting on the internet: TCP and UDP 

Before we dive into how they're different let's look at how they're the same: ports

### Ports

How many programs are on your computer talking to the internet right now? **Name some.**

If a packet comes to your computer how are we to know if it is intended for Zoom or intended for Chrome?

Every program talking to the internet has a **PORT NUMBER**, like a phone extension or an apartment number, 
it's an extra specifier so the **End Host/Computer** knows which program to pass the data to.  Here's a minecraft video 
demonstrating the idea on our server:

INSERT VIDEO HERE

By the way, this is where **FIREWALLS** block packets to "closed" ports.

### UDP -- the need for speed

That's it!  UDP is just the postal service and a port number.  It is made for being as fast and direct as possible.  BUT 
you've seen that packets get lost on the internet, ALL THE TIME.  So UDP doesn't really care if every packet makes it, 
it doesn't even know if every packet makes it.  It cares mostly about speed more than quality.  This is how video games 
and ZOOM send their traffic.

![UDP joke](https://www.improgrammer.net/wp-content/uploads/2017/09/UDP-Jokes-Networking.png)

### TCP -- caution wins the day

TCP on the other hand will take as long as it takes to make sure you get every last bit of data.

Here's an example of how TCP starts a conversation

#### The 3 - way handshake

![three-way handshake](https://www.researchgate.net/profile/Steven_Hofmeyr/publication/2625984/figure/fig1/AS:654045261856797@1532947950772/The-three-way-TCP-handshake-for-establishing-a-connection-The-computer-requesting-the.png)

This is how you establish a "connection" (which really is just recognition that you're in a conversation):

**Phone rings** (SYN from client to server)

**Hello.  Who's this?** (SYN-ACK from server to client)

**This is Andy.** (ACK from client to server, now we both know we're chatting)

#### TCP data sending

Once you're done setting up your "connection" you can send each other data like this:


After every packet we say how much we've sent.  The receiver acknowledges (with an ACK) the amount they've received successfully. 

If it worked it looks like this:

![TCP ACK diagram](https://www.tutorialsweb.com/networking/tcp-ip/images/fig10_SlidingWindow.jpg)

![TCP joke](https://i.redd.it/wixamyrqxra01.png)

If it failed it looks more like this:

![Failed ACKs](https://www.tutorialspoint.com/data_communication_computer_network/images/go_back_n_arq.jpg)

## TCP and the Noisy Channel

OK Let's try it.  We're going to play the **Three word game**

We'll have 5 gold teams and 5 blue teams (G1, ..., G5, B1, ..., B5)

We will use a VERY SPECIFIC protocol on our noisy channel:

**START THE CONNECTION**

G1zzB1zzSYN


B1zzG1zzSYNACK


G1zzB1zzACK

**Send 3 words**

G1zzB1zz0zz3zzONCEzzUPONzzA

**ACKnowledge the words you've received without any gaps**

B1zzG1zzACKzz3

**etc**

B1zzG1zz3zz6zzTIMEzzTHEREzzWAS


G1zzB1zzACKzz6


G1zzB1zz6zz9zzAzzPETzzWEASEL


OK it's go time, 5 stories coming up.

<iframe height="566" style="width: 100%;" scrolling="no" title="The Noisy Channel" src="https://codepen.io/AndyNovo/embed/gOaJqqP?height=566&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/AndyNovo/pen/gOaJqqP'>The Noisy Channel</a> by Andy Novocin
  (<a href='https://codepen.io/AndyNovo'>@AndyNovo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Live Demo

Check out [this UD made demo where we can see how TCP handles failures interactively](https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/go-back-n-protocol/index.html)

## EXAMINE THE WIRESHARK http.pcap

OK now the counselors will do a live demo of packets between two servers as captures in a "pcap" file.

## PLAY BATTLESHIP

Alright!  Let's play Battleship using TCP and the Minecraft beacon

![Battleship](https://udel.codes/images/battleship.png)

## Do TERMINAL STUFF (ping, wget, and netcat)

If we still have time do the following in [our TERMINAL](http://167.172.0.101/lesson/other/term/0/0) and let's look at 
it from a networking perspective

`ping google.com`

`ping prof.ninja`

`wget https://crypto.prof.ninja/dictionary.txt`

`nc -zp 9090 localhost 1-1000 -v`

(That is [NETCAT](https://floatingoctothorpe.uk/2017/netcat-tricks-and-tips.html) it's cool!)


## FUTURE IN CYBER
