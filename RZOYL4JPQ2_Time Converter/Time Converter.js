let hoursInputEle = document.getElementById("hoursInput");
let minutesInputEle = document.getElementById("minutesInput");
let convertBtnEle = document.getElementById("convertBtn");
let errorMsgELe = document.getElementById("errorMsg");
let timeInSecondsELe = document.getElementById("timeInSeconds");

let hours = ""
let minutes = ""

hoursInputEle.addEventListener("keydown", function(event) {
    if (event.target.value === "") {
        errorMsgELe.textContent = "Please enter a valid number of hours."
    } else if (event.target.value < 0) {
        errorMsgELe.textContent = "Please enter a valid number of hours."
    }

});
minutesInputEle.addEventListener("keydown", function(event) {
    if (event.target.value === "") {
        errorMsgELe.textContent = "Please enter a valid number of minutes."
    } else if (event.target.value < 0) {
        errorMsgELe.textContent = "Please enter a valid number of minutes."
    }
});
let check = function() {
    timeInSecondsELe.classList.add("d-none")
    if (hoursInputEle.value === "") {
        errorMsgELe.textContent = "Please enter a valid number of hours."

    } else if (minutesInputEle.value === "") {
        errorMsgELe.textContent = "Please enter a valid number of minutes."
    } else {
        hours = hoursInputEle.value
        minutes = minutesInputEle.value
        noOfSeconds(hours, minutes)
    }
}
let noOfSeconds = function(hours, minutes) {

    let timeSeconds = (((((hours) * 60) + parseInt(minutes))) * 60)
    errorMsgELe.textContent = ""
    timeInSecondsELe.classList.remove("d-none")
    timeInSecondsELe.textContent = timeSeconds

}
convertBtnEle.addEventListener("click", function() {
    check()

});