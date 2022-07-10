## The challenge

It's a dashboard for a fancy looking time tracking app. The users should be
allowed to change between the three time frames (daily, weekly and monthly).
Also the page should be totally responsive.

## Technologies

In a first moment I decided to use react, but seemed a bit overkilling so I
decided to stay "vanilla" but all we know writing vanilla **CSS** is a pain, so I
used **SASS** in this project.

## How?

### Javascript

The javascript is very simple, it fetchs the data (from the *data.json* file
provided) and adds html to the DOM using it. I decided to do it this way, so in
a future I can write the fully functional app, with its users and an API. But
for the moment, the basics are done :D

### HTML/CSS

Here is the tricky, part I used some tricks to for the cards of time spent,
using **SASS** maps I managed to write selectors for the colors on each card
using its id.

To overlap the cards content with its colored background I contained its content
(yes, a bit verbose) inside another div, and changed its background to create
this *folder* style. The **z-index** property here was beyond important so I can
make it look good (a work properly).

Staying with the cards, the hover/focus effect on these ones was a bit hard to
made, because this events also affect the children, to fix this and keep the
background color when the "background" isn't being hovered I used a ::before
pseudo-element, you can check this in the code if you want (it's a bit messy,
sorry).

## Final thoughts

I really enjoyed my time doing this time, I know there are some deficits in the
CSS (SASS) so in a future I will refactor it.

And with nothing else to say, thank you if you read till down here. Greetings :D
