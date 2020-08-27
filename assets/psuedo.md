# index.html

## Hero Container - Site Tile and Intro Text
    1) <h1> Title
    2) <p> description of site 
        - Timer Permitting -
            a) Link to user's favorite games page 
    
## Game Carousel - User Can Click a Game To Move To The Event Calendar
    A) Page loads with placeholder images
    B) placeholder images are updated by an AJAX return
        1) Bulma carousel with five images
            a.) Each <img> will use class = "car-img"
        2) <p> caption of what games are being displayed

## Example/Get Started - Demo the Functionality Using a Gif
    1) <img src="placeholder (please but a cat gif here :)">
    2) Link to page2.html

## Footer - Credit to Contributors
    1) That's us!



# page2.html

## Header
    1) <h1> Title 

## Game Container
    A) Elements are appended the DOM and populated by AJAX Pull
        1) Search Bar
            1. <input>
            2. <button>
                a.) use id="user-search"
                b.) runs the AJAX request
        2) Game Image - appended in JS
            1) src="" pulled from AJAX request
        3) Game Info - appended in JS; pulled from AJAX
            1. Game Name
            2. Rating
            3. Description
            4. Genre
        4) Clear, Next Buttons - appended in JS
            1. Clear button - remove JS appended elements
            2. Next - Use game data to populate the calendar form

## Calendar
    A) Game Container is hidden
    B) Calendar is dynamically created by JS
    c) Form info is populated by Game Container data
    1) Calendar
        a) Clicking date updates the form
            - Timer Permitting - 
            1. Play Sessions are saved to local storage and future play dates are displayed in green and details are shown when the calendar is clicked. 
    2) Form
        a) Most content will be populated from Calendar and Game container. User updates time and description
    3) Create
        a) Makes AJAX request to create a calendar invitation. Link takes user to their calendar application of choice to save

## Event Created 
    A) All previous containers are hidden
    B) Event information/confirmation is shown 
    C) Users can copy their calendar link to clipboard
    D) 'Make a New Event' button is shown on screen

