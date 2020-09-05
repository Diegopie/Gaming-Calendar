// * Global Variables
    // This will be given a value in the Game Container, then used in the Form Container
    let selectedGame;

    // Store infomation from AJAX request
    let gameData = {
        title: "",
        image: "",
        platforms: "",
        store: "",
        genres: "",
        released: "",
    };

// * Functions
    // Create AJAX Request to RAWG API
    function rawgReq() {        
        let url = 'https://api.rawg.io/api/games?search=' + selectedGame;
                // console.log(url);
        $.ajax({
            url: url,
            method: "GET"
        }) .then (function (activeGame) {
                // console.log(url);
                // console.log(activeGame); // this returns all games with selectedGame in their title
                // console.log(activeGame.results);

            // Store relvent responce data in global gameData object
            let gameInfo = activeGame.results[0];
            gameData.title = gameInfo.name;
            gameData.image = gameInfo.background_image;
            gameData.platforms = gameInfo.platforms;
            gameData.store = gameInfo.stores;
            gameData.genres = gameInfo.genres;
            gameData.released = gameInfo.released;
                // console.log(gameData);

            // Run renderGame now that the object is updated  
            renderGame();
        });
    }

    //  Parse and Append Values from gameData to DOM
    function renderGame() {

        // Variables to create HTML elements and store parsed gameData values
        let title = $('<h2>').text(gameData.title).addClass("title is-4 is-size-1");
        let img = $('<img>').attr('src', gameData.image).attr('alt', gameData.title);
        let platString = "";
        let storeString = "";
        let genresString = "";
                // console.dir(gameData);

        // Add all the game platforms to a string        
        for (i = 0; i < gameData.platforms.length; i++) {
            platString += gameData.platforms[i].platform.name + ", ";
                    // console.log(platString);
        }

        // Add all the game stores to a string        
        for (i = 0; i < gameData.store.length; i++) {
            storeString += gameData.store[i].store.name + ", ";
                    // console.log(storeString);
        }

        // Add all the game genres to a string        
        for (i = 0; i < gameData.genres.length; i++) {
            genresString += gameData.genres[i].name + ", ";
                    // console.log(genresString);
        }

        // Display data on DOM
        $('#game-titl').append(title);
        $('#game-img').append(img);
        $('#platforms').text(platString);
        $('#store').text(storeString);
        $('#genres').text(genresString);
        $('#date').text(gameData.released);

        // Display container for game content
        $('#game-contain').removeClass('hide');

        // Hide search bar
        $('#game-search').addClass('hide');
    }

    // Display Message if User Inputs are Not Valid
    function calMessage(message) {
        $('#cal-msg').text(message)
    }

     // Display Message if User Inputs are Not Valid
     function searMessage(message) {
        $('#sear-msg').text(message)
    }

    // Render QR Code
    function renderQR(URL, Title, Date, Time) {
                console.log(Time);
        // Create and Append HTML Elements based on User Calendar Values
        let qrDiv = $("<div class='qr card my-2 mx-2'>");
        let cardCont = $("<div class='card-content>");
        let qrP = $("<h2>").text("Here is your invite code!").attr("class", "card-title is-size-2 has-text-weight-bold my-4 mx-4");
        $(".qrColumn").append(qrP);
        qrDiv.append(cardCont);
        qrDiv.append(qrP)
        cardCont.append(qrP);
        let qrH2 = $("<h2>").text(Title).addClass('is-size-2');
        qrDiv.append(qrH2);
        let qrH3 = $("<h3>").text(Date).addClass('is-size-3');
        qrDiv.append(qrH3);
        let qrTime = $("<h3>").text(moment(Time, "HHmm").format("LT")).addClass('is-size-3');
        qrDiv.append(qrTime);
        let qrImg = $("<img>").attr("src", URL).attr("alt", Title);
        qrDiv.append(qrImg);
        $(".qrColumn").append(qrDiv);
        $("#copy-new").removeClass("hide"); 
    }


// * Click Listeners

    //  Search Button: Grab Value of User Input and Run Pass selectedGame to rawgReq(); 
    $('#user-search').click(function(){
        event.preventDefault()
        selectedGame = $('#user-text').val().trim();
            if (selectedGame === "") {
                searMessage("Search field cannot be empty");
                return;
            }
        
                // console.log(selectedGame);
        rawgReq(selectedGame);        
    });

    // Clear Button: Reload Page
    $('.clear-button').click(function(){
        location.reload();
    });

    // Next Button: Remove Game Container From the Screen and Display Calendar Container
    $('.next-button').click(function(){
        $('#game-contain').addClass('hide');
        $('#cal-contain').removeClass('hide');
                // console.dir($('#game-title'));

        // Add game title to event name input
        $('#game-title').val(gameData.title);
    });

    // Create Button: Make QRickit Requesed 
    $('.create-btn').click(function(){
        // Reset Invalid Field Message
        $('#cal-msg').text("")        
        // Grab user event name
        let subject = $('#game-title').val();
                console.log("-- QR CODE --");
                console.log(subject);
            // Check if valid
            if (subject === "") {            
                calMessage("Event name cannot be empty");
                return;
            }
        // Grab user description
        let desc = $('#game-desc').val();
                console.log(desc);
            // Check if valid
            if (desc === "") {            
                calMessage("Description cannot be empty");
                return;
            }
        // Grab user date
        let rawDate = $('#game-date').val();
                console.log(rawDate);
        // Convert to usable date
        let startDate = moment(rawDate).format('YYYYMMDD')
                console.log(startDate);
            // Check if valid
            if (rawDate === "") {            
                calMessage("A date must be selected");
                return;
            // Check if date is in the past
            } else if (startDate < moment().format('YYYYMMDD')){
                calMessage("Date cannot be in the past");
                return;
            }
        // Grab user hour
        let hour = $('#hour').val()
                console.log(hour);
            // Check if valid
            if (hour === null) {            
                calMessage("An hour must be selected");
                return;
            }
        // Grab user mintutes
        let min = $('#minutes').val()
                console.log(min);
            // Check if valid
            if (min === null) {            
                calMessage("A minute must be selected");
                return;
            }
        // Grab user period
        let period = $('#period').val()
                console.log(period);
            // Check if valid
            if (period === null) {
                calMessage("A period must be selected");
                return;
            // Convert hour to military time
            } else if (period === "PM" && hour < 12) {                
                hour = parseInt(hour)  + 12
            } else if (period === "AM" && hour === "12") {                
                hour = parseInt(hour)  + 12
            }

        // Convert user date so it can be displayed nicely on DOM
        let qrDate = moment(rawDate).format('MMMM Do YYYY');        
        
        // Combine user time selections to usable string
        let time = hour + min
        let date = startDate + "T" + time + "00"
                console.log("-- start date --");
                console.log(date);
        if (startDate+time < moment().format("YYYYMMDDHHmm")) {
            console.log(startDate+time);
            console.log(moment().format("YYYYMMDDHHmm"));
            calMessage("Event cannot be in the past");
            return;
        }

        // Create QR URL based on converted user values
        let qrickURL = "https://qrickit.com/api/qr.php?d=BEGIN%3AVEVENT%0D%0ASUMMARY%3A" + subject+ "%0D%0ADESCRIPTION%3A"+desc+"%0D%0ADTSTART%3A"+date+"%0D%0AEND%3AVEVENT%0D%0A&t=g&addtext=&txtcolor=000000& fgdcolor=000000&bgdcolor=FFFFFF&qrsize=200";
                console.log(qrickURL);

        // Run renderQR() by Passing These Variables
        renderQR(qrickURL, subject, qrDate, time);
    });

    // New Event Button: Reload Page
    $('.event-btn').click(function(){
        location.reload();
    });