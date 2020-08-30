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

    // Grab value of user input and run rawgReq(); 
    $('#user-search').click(function(){
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
        }) .then (function current(activeGame) {
                // console.log(activeGame); this returns all games with selectedGame in their title
                // console.log(activeGame.results);
            let gameInfo = activeGame.results[0];
            gameData.title = gameInfo.name;
            gameData.image = gameInfo.background_image;
            gameData.platforms = gameInfo.platforms;
            gameData.store = gameInfo.stores;
            
            // This function will be used once we add logic for updating the DOM
            // renderGame()
        });
    }
