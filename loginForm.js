const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const website = document.getElementById("website");
const textArea = document.getElementById("text");
const form = document.getElementById("form")
const submit = document.querySelector("btn");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    if (name.value === "") {
        alert("Please Enter a valid Name");
    }

    if (email.value ==="" ) {
        alert("Please enter an email address ")
        
    }

}) 