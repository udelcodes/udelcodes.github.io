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



![TCP joke](https://i.redd.it/wixamyrqxra01.png)

If it failed it looks more like this:

![Failed ACKs](https://www.tutorialspoint.com/data_communication_computer_network/images/go_back_n_arq.jpg)

## Make rules for 3 word game here


## DO THE AMER VISUALIZATION THING

## EXAMINE THE WIRESHARK http.pcap

## PLAY BATTLESHIP

## Do TERMINAL STUFF (ping, wget, and netcat)

## FUTURE IN CYBER
