# Networks 2

## Warmup: Blue team send Gold team a CONCEPT via Minecraft


Notice that the Heart version of Concept has three distinct parts to each image.

![MC PARTY GAME](https://udel.codes/images/concepthearts.png)

It had a "header" which has "row" and "column" and a "payload" (the picture ID).  

This is made to model actual "packets", like this one:

![Wireshark Screen Capture](https://udel.codes/images/wireshark.png)


## Protocols vs Signal Processing

Now Blue will send a heart message to Gold and we'll play a little game.  Notice that our ability to get the correct colors from the beacon takes some subtle, real-world, adjustments to our style of communicating.  This is the art of signal processing, to put a signal into a form where it is easier to read correctly on the other side.  Now what to do with those colors (bytes) once you get them, that's the art of protocols.

## Travel analogy for OSI 7 layers

Each layer has it's own culture.

## Physical Layer

Buzzing the wire is our beacon, likewise fiber-optic is similar, but Radio (wi-fi) is different.  
Notice that our beacon was visible to everyone.  In our minecraft internet the physical layer is chests in minecarts our application layer is "print mona lisa"

### Zoom is wifi

Have people start conversations and talk over each other.  See how ineffective it is.

Likewise highlight the importance of saying "who is speaking" and "who is suposed to listen"  (this includes "Hey Everyone")

### The Noisy Channel

Let's try to play 20 questions between pairs of people between the two teams (5-6 games at once) using the noisy channel, and develop some labelling conventions to help us.

### ALOHAnet

Let's play the ALOHAnet demo to get a feel for exponential back-off (I'll try to make messages blurred if they collide).

## Questions about the internet

Collate the best questions from our team and add some from our campers, we can try to answer them by day 4.

## Examine Wireshark to see the layers

Notice how CONCEPT with hearts was "envelopes" inside of "boxes", and the internet puts those "boxes" into "carts" that go into "trucks", etc. We saw the same concept show up in week 1 and week 3 (IV vs ct, head vs body).

## Top-level applications

HTTP and SSH (Web Requests) vs bottom layer Wi-fi and Ethernet (MAC addresses), look at some log files.
