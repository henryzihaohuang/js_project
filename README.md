<p align="center"> 
  <img src="https://i.ibb.co/J3ryc2m/Screen-Shot-2021-02-06-at-10-05-18-PM.png">
</p>


## Background and Overview
Lost in Translation is a single-level isometric game to designed to emulate the feeling of trying to navigate your way in a foreign country to get to your destination. I wanted to draw from my background in languages and share my real-life hack to learning languages, which is to explore and try in real-life situations. Lost in Translation is played from a main character who is trying to get to the airport from their hostel, but cannot speak the primary language of the country, Spanish. 

<p align="center">
  <img src="https://media.giphy.com/media/uevsuTCbS0aEajJUah/giphy.gif">
</p>
 
Players will be able to explore and answer questions that will help them learn basic Spanish as they navigate the isometric world. Players have a time limit to find the three things they need before getting on their flight, or else they lose: 1) their passport, 2) their wallet, and 3) their flight tickets. 

* Note for PM : I wanted to keep this as simple as possible, given the timeframe. If this does not seem feasible in a few weeks, I'd also be down to do another language learning game that is simpler, like matching pictures to words and spelling words to finish sentences to gain points. Please let me know what you think.

## Functionality and MVPs
* `User` navigates through the map using arrow keys: up down, left, right.
* `User` can click to interact with objects to complete their mission.
* `User` must find a `passport`, `tickets`, and their `wallet`.
* `User` will answer Spanish language-learning questions when they find items within countdown time limit.
    * When `User` answers questions wrong, they get time deducted from their countdown.
    * When `User` answers questions right, they get time added to the countdown.
    
<p align="center"> 
  <img src="https://media.giphy.com/media/ySPsBUNdVMHmFya8X4/giphy.gif">
</p> 

## Wireframe & Mockups

<p align="center"> 
  <img src="https://i.ibb.co/k8tFyZT/new-wireframe.png">
</p>

## File Structure
* /dist
    * /assets
        * /audio
        * /images
* /src
    * /scripts (js)
        * countdown.js
        * dialogue.js
        * passport.js 
        * sunny.js
        * tickets.js
    * /styles (css)
    * index.js
* .gitignore
* index.html
* package-lock.json
* package.json
* postcss.config.js
* README.md
* webpack.common.js
* webpack.dev.js
* webpack.prod.js

## Architecture and Technology
* JavaScript - Game logic
* Canvas - Game
* SCSS - Page Styling 

## Implementation Timeline
Feb 6-7
* Readme Project Proposal

Day 1 - Feb 8
* Splash page
* Map part 1
* Build player
* Player movement

Day 2 - Feb 9
* Map part 2
* Game logic
* Dialogue

Day 3 - Feb 10
* Map part 3
* Game logic
* Dialoge

Day 4 - Feb 11
* More map details
* Source sound
* Styling

Day 5 - Feb 12
* Debug
* Host

## Bonus Features
* Will add more at least one more room to extend story of Sunny getting to the airport via taxi.


