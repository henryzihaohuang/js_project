<p align="center"> 
  <img src="https://i.ibb.co/J3ryc2m/Screen-Shot-2021-02-06-at-10-05-18-PM.png">
</p>


## Background and Overview
Lost in Translation is a single-level isometric game to designed to emulate the feeling of trying to navigate your way in a foreign country to get to your destination. I wanted to draw from my background in languages and share my real-life hack to learning languages, which is to explore and try in real-life situations. Lost in Translation is played from a main character who is trying to get to the airport from their hostel, but cannot speak the primary language of the country, Spanish. 

Players will be able to explore and answer questions that will help them learn basic Spanish as they navigate the isometric world. Players have a time limit to find the three things they need before getting on their flight, or else they lose: 1) their passport, 2) their wallet, and 3) their flight tickets. 

* Note for PM : I wanted to keep this as simple as possible, given the timeframe. If this does not seem feasible in a few weeks, I'd also be down to do another language learning game that is simpler, like matching pictures to words and spelling words to finish sentences to gain points. Please let me know what you think.

## Functionality and MVPs
* `User` navigates through the map using arrow keys: up down, left, right.
* `User` can click to interact with objects to complete their mission.
* `User` must find a `passport`, `tickets`, and their `wallet`.
* The game should have text that guides the `user` to the goal items.

## Wireframe & Mockups

<p align="center"> 
  <img src="https://i.ibb.co/rQYngKy/new-wireframe.png">
</p>


<p align="center"> 
  <img src="https://i.ibb.co/9s4wPB5/splash.png">
</p>


## File Structure
* /dist
* /src
    * /assets
        * /sound
           * upbeat-music.mp3
        * /images
            ...
    * /scripts (js)
        * map.js
        * player.js
        * dialogue.js 
        * item.js
        * util.js
    * /styles (scss)
        * stylesheets
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
* Melon.js - tile map
* JavaScript - Game logic
* Sprites - Animation
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
* Complete map details
* Source sound
* Styling

Day 5 - Feb 12
* Debug
* Host

## Bonus Features
* Player can respond to non-playable characters' dialogues. As an added bonus to enrich language learning aspect of the game.
