let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];

let bookmarkFormEle = document.getElementById("bookmarkForm");
let siteNameInputEle = document.getElementById("siteNameInput");
let siteUrlInputEle = document.getElementById("siteUrlInput");
let submitBtnEle = document.getElementById("submitBtn");
let siteNameErrMsgEle = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEle = document.getElementById("siteUrlErrMsg");
let bookmarksListEle = document.getElementById("bookmarksList");

siteNameInputEle.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEle.textContent = "Required*";
    } else {
        siteNameErrMsgEle.textContent = "";
    }

})
siteUrlInputEle.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEle.textContent = "Required*";
    } else {
        siteUrlErrMsgEle.textContent = "";
    }

})
let bookmark_id = 2

function addBookmark_and_append(name, url) {
    console.log(name)
    console.log(url)
    let new_list = document.createElement("li")
    new_list.classList.add("d-flex", "flex-row", "small-card")
    bookmarksListEle.appendChild(new_list)

    let new_list_container = document.createElement("div")
    new_list_container.classList.add("d-flex", "flex-row", "container")
    new_list.appendChild(new_list_container)

    let new_list_heading = document.createElement("h1")
    new_list_heading.classList.add("small-card-heading")
    new_list_heading.textContent = name
    new_list_container.appendChild(new_list_heading)


    let link_ele = document.createElement("a")
    link_ele.href = url
    link_ele.target = "_blank"

    let new_list_button = document.createElement("button")
    new_list_button.classList.add("btn", "btn-primary", "button-right")
    new_list_button.textContent = "Visit"



    link_ele.appendChild(new_list_button)


    new_list_container.appendChild(link_ele)


    console.log(new_list)

}
let addBookmark = function() {
    let name_site = siteNameInputEle.value
    let url_site = siteUrlInputEle.value
    let new_bookmark = {
        bookmarkId: "bookmark" + bookmark_id,
        name: name_site,
        url: url_site
    }
    bookmarks.push(new_bookmark)
    bookmark_id = bookmark_id + 1
    addBookmark_and_append(name_site, url_site)
}
let validate = function() {
    if ((siteNameInputEle.value === "") && (siteUrlInputEle.value === "")) {
        siteNameErrMsgEle.textContent = "Required*";
        siteUrlErrMsgEle.textContent = "Required*";
    } else if (siteNameInputEle.value === "") {
        siteNameErrMsgEle.textContent = "Required*";
    } else if (siteUrlInputEle.value === "") {
        siteUrlErrMsgEle.textContent = "Required*";
    } else {
        addBookmark()
    }
}
addBookmark_and_append(bookmarks[0].name, bookmarks[0].url)
bookmarkFormEle.addEventListener("submit", function(event) {
    event.preventDefault()
    validate()
});