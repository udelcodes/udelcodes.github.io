# Networks 2

## Warmup task: Blue team send Gold team a CONCEPT via Minecraft


Notice that the Heart version of Concept has three distinct parts to each image.

![MC PARTY GAME](https://udel.codes/images/concepthearts.png)

It had a "header" which has "row" and "column" and a "payload" (the picture ID).  

This is made to model actual "packets", like this one:

![Wireshark Screen Capture](https://udel.codes/images/wireshark.png)


## Protocols vs Signal Processing

**Task 2** Now Blue will send a heart message to Gold and we'll play a little game.  Notice that our ability to get the correct colors from the beacon takes some subtle, real-world, adjustments to our style of communicating.  This is the art of signal processing, to put a signal into a form where it is easier to read correctly on the other side.  Now what to do with those colors (bytes) once you get them, that's the art of protocols.


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


**Task 3:** Interactively design what the "layers" are for "winning minecraft"

## The OSI 7 layers

![OSI Layers](https://blogs.bmc.com/wp-content/uploads/2018/06/osi-model-7-layers-1024x734.jpg)

Each layer has it's own culture.

**Task 4:** Look at our video, intro to building the internet in Minecraft

<video controls>
			<source src="https://prof.ninja/camp/printchicken.mp4" type="video/mp4">
			<p>Your browser doesn't support HTML5 video. Here is
				 a <a href="https://prof.ninja/camp/printchicken.mp4">link to the video</a> instead.</p>
</video>

In our minecraft internet the **physical layer is chests in minecarts** our application layer is stuff like _"print mona lisa"_

## Examine Wireshark to see the layers

**Task 5:** Let the counselor do an interactive Wireshark layer demo.

Notice how CONCEPT with hearts was "envelopes" inside of "boxes", and the internet puts those "boxes" into "carts" that go into "trucks", etc. We saw the same concept show up in week 1 and week 3 (IV vs ct, head vs body).

## Physical Layer - Broadcasting

Buzzing the wire is our beacon, likewise fiber-optic is similar, but Radio (wi-fi) is different.  
Notice that our beacon was visible to everyone.  In radio (and ethernet) there is the idea that every local computer hears everything!

Don't trust public wi-fi.

### Zoom is wifi

**Task 6:** Have people start conversations, out loud, in zoom and talk over each other.  

See how ineffective it is.

Imagine it is a dark room without names.

Likewise highlight the importance of saying "who is speaking" and "who is suposed to listen"  (this includes "Hey Everyone")

This is "addressing" and it is the opening of every packet ever sent.  The MAC address (Media Access Control).

### The Noisy Channel

<iframe height="793" style="width: 100%;" scrolling="no" title="The Noisy Channel" src="https://codepen.io/AndyNovo/embed/gOaJqqP?height=793&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/AndyNovo/pen/gOaJqqP'>The Noisy Channel</a> by Andy Novocin
  (<a href='https://codepen.io/AndyNovo'>@AndyNovo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

**Task 7:** Let's try to play 20 questions between **5 teams from each track** using the noisy channel, and develop some labelling conventions to help us.  The counselors will communicate your "protocol" to the other team with your number (Gold 1 to Blue 1).  Let's limit it to our word list for brevity's sake.

## Let's Talk Packets

<iframe width="560" height="315" src="https://www.youtube.com/embed/O7CuFlM4V54?start=61" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p class="codepen" data-height="654" data-theme-id="light" data-default-tab="result" data-user="AndyNovo" data-slug-hash="pogJeKd" style="height: 654px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Packet-Switched Networks vs Circuit-Switched">
  <span>See the Pen <a href="https://codepen.io/AndyNovo/pen/pogJeKd">
  Packet-Switched Networks vs Circuit-Switched</a> by Andy Novocin (<a href="https://codepen.io/AndyNovo">@AndyNovo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### ALOHAnet

The FIRST wireless network was in the Hawaiian islands (natural no?) called ALOHAnet, 7 universities on 4 islands:

![ALOHA net](https://www.technologyuk.net/computing/computer-networks/network-technologies/images/aloha.gif)

They used radio because it was cheaper.  And it used "packets" and timing:

![Collision](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pure_ALOHA1.svg/300px-Pure_ALOHA1.svg.png)

**Task 8:** Play the ALOHAnet demo to get a feel for exponential back-off.

_GOAL: Let's get the alphabet across in order, A to Z_

<iframe height="714" style="width: 100%;" scrolling="no" title="ALOHAnet Broadcast Game" src="https://codepen.io/AndyNovo/embed/NWxxqxp?height=714&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/AndyNovo/pen/NWxxqxp'>ALOHAnet Broadcast Game</a> by Andy Novocin
  (<a href='https://codepen.io/AndyNovo'>@AndyNovo</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Q and A about the internet (answers day 4)
