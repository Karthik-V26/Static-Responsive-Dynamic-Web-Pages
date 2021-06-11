let searchInput = document.getElementById('searchInput');
let spinner = document.getElementById("spinner");
let resultCountries = document.getElementById("resultCountries");
let searchInputEl = "";
let result_flags = [];

function createandappend(result) {
    let country_card = document.createElement("div");
    country_card.classList.add("country-card", "d-flex", "flex-row", "col-11", "col-md-5", "mr-auto", "ml-auto");

    resultCountries.appendChild(country_card);
    let country_flag = document.createElement("img");
    country_flag.src = result.flag;
    country_flag.classList.add("country-flag", "mt-auto", "mb-auto");
    country_card.appendChild(country_flag);

    let des = document.createElement("div");
    des.classList.add("d-flex", "flex-column", "ml-4")
    let headingel = document.createElement("h1");
    headingel.classList.add("country-name");
    headingel.textContent = result.name;
    des.appendChild(headingel);


    let populationel = document.createElement("p");
    populationel.classList.add("country-population");
    populationel.textContent = result.population;
    console.log(populationel);
    des.appendChild(populationel);

    country_card.appendChild(des)


}

function displayresult() {
    for (let result of result_flags) {
        let flag = result.name;
        if (flag.includes(searchInputEl)) {
            createandappend(result);
        }

    }
}

function countries_list() {

    let options = {
        method: "GET",

    };
    resultCountries.textContent = "";
    spinner.classList.remove("d-none");
    resultCountries.classList.add("d-none");

    fetch("https://restcountries.eu/rest/v2/all?fields=name;population;flag", options)

        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            resultCountries.classList.remove("d-none");
            spinner.classList.add("d-none");

            result_flags = jsonData;
            displayresult()


        });

}

function onchangeInput(event) {
    searchInputEl = event.target.value;
    countries_list();
}
countries_list()
searchInput.addEventListener("keyup", onchangeInput);