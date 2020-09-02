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
                console.log(activeGame); //this returns all games with selectedGame in their title
                // console.log(activeGame.results);
            let gameInfo = activeGame.results[0];
            gameData.title = gameInfo.name;
            gameData.image = gameInfo.background_image;
            gameData.platforms = gameInfo.platforms;
            gameData.store = gameInfo.stores;
            gameData.genres = gameInfo.genres;
            gameData.released = gameInfo.released

            // console.log(gameData);
            
            // This function will be used once we add logic for updating the DOM
            renderGame()
        });
    }


    function renderGame() {
        let title = $('<h2>').text(gameData.title).addClass("title is-4 game-title")
        let img = $('<img>').attr('src', gameData.image).addClass("whatever")
        let platString = ""
        let storeString = ""
        let genresString = ""
        console.dir(gameData);
        // Add all the game platforms to a string
        console.log(gameData.platforms.length);
        for (i = 0; i < gameData.platforms.length; i++) {
            // console.log(gameData.platforms[i].platform.name);
            platString += gameData.platforms[i].platform.name + ", ";
            // console.log(platString);
        }
        // Add all the game stores to a string
        console.log(gameData.store.length);
        for (i = 0; i < gameData.store.length; i++) {
            // console.log(gameData.store[i].store.name);
            storeString += gameData.store[i].store.name + ", ";
            // console.log(storeString);
        }
         // Add all the game genres to a string
         console.log(gameData.genres.length);
         for (i = 0; i < gameData.genres.length; i++) {
             console.log(gameData.genres[i].name);
             genresString += gameData.genres[i].name + ", ";
             console.log(genresString);
         }


        
        // $('#usethis').append(title, img, platforms)
        $('#game-titl').append(title)
        $('#game-img').append(img)
        $('#platforms').text(platString)
        $('#store').text(storeString)
        $('#genres').text(genresString)
        $('#date').text(gameData.released)


    }