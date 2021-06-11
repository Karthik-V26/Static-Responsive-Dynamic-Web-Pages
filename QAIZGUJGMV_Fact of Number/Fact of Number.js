let userInput = document.getElementById('userInput');
let factel = document.getElementById("fact");
let spinner = document.getElementById("spinner");

function action(event) {
    if (event.key === "Enter") {

        if (userInput.value === "") {
            alert("Please enter a number");
            return;
        } else {
            let options = {
                method: "GET",
            }
            spinner.classList.remove("d-none");
            factel.classList.add("d-none");
            let url = "https://apis.ccbp.in/numbers-fact?number=" + userInput.value;
            fetch(url, options)
                .then(function(response) {
                    return response.json()
                })
                .then(function(jsonData) {
                    spinner.classList.add("d-none");
                    factel.classList.remove("d-none");
                    console.log(jsonData.fact)
                    factel.textContent = jsonData.fact;
                });
        }
    }
}
userInput.addEventListener("keyup", action);