










// * Global Variables
    // This will be given a value in the Game Container, then used in the Form Container
    let selectedGame;


    let gameData = {
        title: "",
        image: "",
        platforms: "",
        store: "",
        genres: "",
        released: "",
    }


    $('#user-search').click(function(){
        selectedGame = $('#user-text').val().trim();
        console.log(selectedGame);
        rawgReq(selectedGame)
    });



    function rawgReq(game) {
        let url = 'https://api.rawg.io/api/games?search=' + selectedGame
        console.log(url);

        $.ajax({
            url: url,
            method: "GET"
        }) .then (function current(activeGame) {
                // console.log(activeGame); this returns all games with selectedGame in their title
                console.log(activeGame.results);
            let gameInfo = activeGame.results[0]
            gameData.title = gameInfo.name;
            gameData.image = gameInfo.background_image;
            gameData.platforms = gameInfo.platforms
            gameData.store = gameInfo.stores
                        // To display, we'll need to loop through the length of the platform array
            renderGame()
        })
    }
    function renderGame() {
        let title = $('<h2>').text(gameData.title).addClass("whatever")
        let img = $('<img>').attr('src', gameData.image).addClass("whatever")
        let ul = $('<ul>').addClass('gamelist')

        $('#usethis').append(title, img, ul)

        let platforms = {}; 
        console.log(gameData.platforms.length);
        for (i = 0; i < gameData.platforms.length; i++) {
            console.log(gameData.platforms[i].platform.name);
            let newPlat = $('<ul>')
            let platString = ""
            // Im trying to get all platforms displayed on one stringm, so tht string is diaplayed to the DOM
            platString += gameData.platforms[i].platform.name
            console.log(platString);
            newPlat.text(platString)


        console.dir(gameData);
        }
    }