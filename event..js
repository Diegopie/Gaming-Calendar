const nextBtn = document.getElementById("next-button");
const clearBtn = document.getElementById("clear-button");
const createBtn = document.getElementById("create-button")

clearBtn.addEventListener("click", clearFunc);

nextBtn.addEventListener('click', next)

// createBtn.addEventListener("click", createFunc);


function clearFunc() {
    // clear info from table
    // var rating = document.getElementById("rating");
    // var description = document.getElementById("description");
    // var genre = document.getElementById("genre");
    // var store = document.getElementById("store");

    // rating.remove();
    // description.remove();
    // genre.remove();
    // store.remove();

    // updating page
    location.reload();
}

function next() {
    // showing calendar
    var calendar = document.getElementById("calendar")
    calendar.classList.remove("hide");

    // showing form
    var form = document.getElementById("form")
    form.classList.remove("hide")
}