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

  //email validation

  function validateEmail(id) {
    if (email.value === "") {
      alert("Please enter an email address ");
      return false;
    } else {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (mailformat.test(id)) {
        return true;
      } else {
        alert("Please enter a valid email ID");
        return false;
      }
    }
  }

  const validateEmailResponse = validateEmail(email.value);
  if (!validateEmailResponse) {
    return false;
    
  }

  if (phone.value === "" || phone.value === null) {
    alert("Please enter a Mobile Number");
    return false;
  }

  if (website.value === "") {
    alert("Please enter Website");
    return false;
  }

  if (textArea.value === "") {
    alert("Please enter your query");
    return false;
  } else {
    alert("User is registered")
  }
});
