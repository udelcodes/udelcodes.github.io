# Networks 2

## Warmup: Blue team send Gold team a CONCEPT via Minecraft


Notice that the Heart version of Concept has three distinct parts to each image.

![MC PARTY GAME](https://udel.codes/images/concepthearts.png)

It had a "header" which has "row" and "column" and a "payload" (the picture ID).  

This is made to model actual "packets", like this one:

![Wireshark Screen Capture](https://udel.codes/images/wireshark.png)


## Protocols vs Signal Processing

Now Blue will send a heart message to Gold and we'll play a little game.  Notice that our ability to get the correct colors from the beacon takes some subtle, real-world, adjustments to our style of communicating.  This is the art of signal processing, to put a signal into a form where it is easier to read correctly on the other side.  Now what to do with those colors (bytes) once you get them, that's the art of protocols.


### Travelling to Chicago

We are going to travel to Chicago! Here are seven steps that you will take when travelling through an airport...

| Layer | Description |
| ----------- | ----------- |
| Application | Leaving Newark house Arriving in Chicago to hotel|
| Transport | Driving to long-term parking Use an Uber to get to hotel|
| Security | Showing ticket and Passport, walking through dectors|
| Gates| You will use gate A34 And arrive at gate F45|
| Seats| Sitting at seat A23 Getting out of seat A23|
| Taxi-airstrip | Peter will guide us to strip 5 for takeoff, Peter will land-us at strip 3 for landing|
| Airtraffic Controller | You are prepared for take off. You are clear for landing|

## The OSI 7 layers

![OSI Layers](https://blogs.bmc.com/wp-content/uploads/2018/06/osi-model-7-layers-1024x734.jpg)

Each layer has it's own culture.

In our minecraft internet the physical layer is chests in minecarts our application layer is "print mona lisa"

## Physical Layer

Buzzing the wire is our beacon, likewise fiber-optic is similar, but Radio (wi-fi) is different.  
Notice that our beacon was visible to everyone.  In radio (and ethernet) there is the idea that every local computer hears everything!

Don't trust public wi-fi.

### Zoom is wifi

Have people start conversations and talk over each other.  See how ineffective it is.

Likewise highlight the importance of saying "who is speaking" and "who is suposed to listen"  (this includes "Hey Everyone")

This is "addressing" and it is the opening of every packet ever sent.  The MAC address (Media Access Control).

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
