let addUserForm = document.getElementById("addUserForm");
let nameel = document.getElementById("name");
let emailel = document.getElementById("email");
let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");
let statusel = document.getElementById("status");
let genderMale = document.getElementById("genderMale");
let genderFemale = document.getElementById("genderFemale");

let formdata = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"

};
nameel.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Required*";
    } else {
        nameErrMsg.textContent = "";
        formdata.name = event.target.value;
    }
});
emailel.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "Required*";
    } else {
        emailErrMsg.textContent = "";
        formdata.email = event.target.value;
    }
});
statusel.addEventListener("change", function(event) {
    formdata.status = event.target.value;
});
genderMale.addEventListener("change", function(event) {
    formdata.gender = event.target.value;
});
genderFemale.addEventListener("change", function(event) {
    formdata.gender = event.target.value;
});

function validate(data) {
    let {
        name,
        email
    } = formdata;
    if (name === "") {
        nameErrMsg.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsg.textContent = "Required*";
    }
}

function submit_data(event) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 86d415bc3925e9e5ebb11f75ab310ead057b0234f2b742a2db5b37fc392bfb44"
        },
        body: JSON.stringify(formdata)
    };
    fetch("https://gorest.co.in/public-api/users", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData)
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    emailErrMsg.textContent = "Email already Exists";
                }
            }
        });
}
addUserForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validate(formdata);
    submit_data(formdata);
})