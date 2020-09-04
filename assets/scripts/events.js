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
    }

// * Grab value of user input and run rawgReq(); 
    $('#user-search').click(function(){
        event.preventDefault()
        selectedGame = $('#user-text').val().trim();
        
                // console.log(selectedGame);
        rawgReq(selectedGame);        
    });

    // Create ajax request to RAWG API
    function rawgReq() {
        let url = 'https://api.rawg.io/api/games?search=' + selectedGame;
                // console.log(url);
        $.ajax({
            url: url,
            method: "GET"
        }) .then (function (activeGame) {
            console.log(url)
                // console.log(activeGame); // this returns all games with selectedGame in their title
                // console.log(activeGame.results);
            // Store relvent responce data in global gameData object
            let gameInfo = activeGame.results[0];
            gameData.title = gameInfo.name;
            gameData.image = gameInfo.background_image;
            gameData.platforms = gameInfo.platforms;
            gameData.store = gameInfo.stores;
            gameData.genres = gameInfo.genres;
            gameData.released = gameInfo.released

            // console.log(gameData);
            
            
            renderGame()
        });
    }

// * Parse and Append values from gameData to DOM
    function renderGame() {
        // Variables to create HTML elements and store parsed gameData values
        let title = $('<h2>').text(gameData.title).addClass("title is-4 game-title")
        let img = $('<img>').attr('src', gameData.image).addClass("whatever")
        let platString = ""
        let storeString = ""
        let genresString = ""
        console.dir(gameData);

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

        // Add data to DOM
        $('#game-titl').append(title)
        $('#game-img').append(img)
        $('#platforms').text(platString)
        $('#store').text(storeString)
        $('#genres').text(genresString)
        $('#date').text(gameData.released)
        // Display container for game content
        $('#game-contain').removeClass('hide')
        // Hide search bar
        $('#game-search').addClass('hide')
    }

// * Reload page on Clear Button click
    $('.clear-button').click(function(){
        location.reload();
    });

// * Remove game container from the screen and display calendar container
    $('.next-button').click(function(){
        $('#game-contain').addClass('hide');
        $('#cal-contain').removeClass('hide');
                // console.dir($('#game-title'));
        // Add game title to title input
        $('#game-title').val(gameData.title);
    });

// * Make QRickit requesed 
    $('.create-btn').click(function(){
        let subject = $('#game-title').val();
                console.log("-- QR CODE --");
                console.log(subject);
        let desc = $('#game-desc').val();
                console.log(desc);
        let rawDate = $('#game-date').val();
                console.log(rawDate);

        let hour = $('#hour').val()
                console.log(hour);

        let min = $('.minutes-input').val()
                console.log(min);

        let period = $('#period').val()
                console.log(period);
            if (period === "AM") {
                period = "T0"
            } else {
                period = "T1"
            }

        let startDate = moment(rawDate).format('YYYYMMDD')
                console.log(startDate);

        let date = startDate + period + hour + min + "00"
        console.log("-- start date --");
        console.log(date);

        // This doesnt work
        let qrickURL = "<img src='https://qrickit.com/api/qr.php?d=BEGIN%3AVEVENT%0D%0ASUMMARY%3A" + subject+ "%0D%0ADESCRIPTION%3A"+desc+"%0D%0ADTSTART%3A"+date+"%0D%0AEND%3AVEVENT%0D%0A&t=g&addtext=&txtcolor=000000& fgdcolor=000000&bgdcolor=FFFFFF&qrsize=200'";

        console.log(qrickURL);

        
    });

    let qrDiv = $("<div class='qr'>");
        let subject = $("#game-title").val(); 
        let qrH2 = $("<h2>").text(subject);
        qrDiv.append(qrH2);
        // let rawDate = $("game-date");
        // let qrH3 = $("<h3>").text(game-date);
        // qrDiv.append(qrH3);
        // let qrickURL = subject;
        // let qrImg = $("<img>").attr("src", qrickURL);
        // qrDiv.append(qrImg);
        $(".qrColumn").append(qrDiv);