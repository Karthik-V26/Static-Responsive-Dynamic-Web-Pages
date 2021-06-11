let jokeBtn = document.getElementById("jokeBtn");
let jokeText = document.getElementById("jokeText");
let spinner = document.getElementById("spinner");
let options = {
    method: "GET",

};
jokeBtn.onclick = function() {
    spinner.classList.remove("d-none");
    jokeText.classList.add("d-none");

    fetch("https://api.chucknorris.io/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            jokeText.classList.remove("d-none");
            jokeText.textContent = jsonData.value;
        });
}