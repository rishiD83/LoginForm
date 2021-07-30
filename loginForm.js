const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const website = document.getElementById("website");
const textArea = document.getElementById("text");
const form = document.getElementById("form");
const submit = document.querySelector("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value === "" || name.value === null) {
    alert("Please Enter a valid Name");
    return false;
  }

  if (email.value === "") {
    alert("Please enter an email address ");
    return false;
  }

  if (phone.value === "") {
    alert("Please enter a Mobile Number ");
    return false;
  }

  if (email === "") {
    alert("Please enter Website");
    return false;
  }

  if (textArea.value === "") {
    alert("Please enter your query");
    return false;
  }

  else { alert("User Registered")}
});
