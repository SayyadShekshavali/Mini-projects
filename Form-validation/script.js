const fnameInput = document.getElementById("fname");
const forfnameLabel = document.getElementById("forfname");
const passwordInput = document.getElementById("password");
const passwordLabel = document.getElementById("forpassword");

fnameInput.addEventListener("focus", () => {
  forfnameLabel.classList.add("focused");
});

fnameInput.addEventListener("blur", () => {
  if (fnameInput.value.trim() !== "") {
    forfnameLabel.classList.add("filled");
  } else {
    forfnameLabel.classList.remove("filled");
    forfnameLabel.classList.remove("focused");
  }
});
passwordInput.addEventListener("focus", () => {
  passwordLabel.classList.add("focused");
});

passwordInput.addEventListener("blur", () => {
  if (passwordInput.value.trim() !== "") {
    passwordLabel.classList.add("filled");
  } else {
    passwordLabel.classList.remove("filled");
    passwordLabel.classList.remove("focused");
  }
});

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  const passwordInput = document.querySelector("#password");
  const regexp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$&^*~`]).{8,}$/;

  if (!regexp.test(passwordInput.value)) {
    alert("Select a strong password!");
  } else if (fnameInput.value === "") {
    alert("Enter name ");
  } else {
    // Redirect to the file

    window.location.href =
      "https://www.visitsaudi.com/en/campaigns/india?gad_source=1&gclid=CjwKCAiA-ty8BhA_EiwAkyoa34O0QfOUdifhUQ--xueoU-WLfEoRN-wT4DqhRA7wla_JsWil7agaYBoCzaQQAvD_BwE&gclsrc=aw.ds";
    fnameInput.value = "";
  }
});
