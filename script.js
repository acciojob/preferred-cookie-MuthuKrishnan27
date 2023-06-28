//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get the value of a cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

// Function to apply user preferences
function applyPreferences() {
  var fontSize = getCookie("font-size");
  var fontColor = getCookie("font-color");

  if (fontSize) {
    document.documentElement.style.setProperty("--fontsize", fontSize);
  }
  if (fontColor) {
    document.documentElement.style.setProperty("--fontcolor", fontColor);
  }
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();

  var fontSizeInput = document.getElementById("fontsize");
  var fontColorInput = document.getElementById("fontcolor");

  var fontSize = fontSizeInput.value + "px";
  var fontColor = fontColorInput.value;

  setCookie("font-size", fontSize, 365);
  setCookie("font-color", fontColor, 365);

  // Apply preferences immediately
  document.documentElement.style.setProperty("--fontsize", fontSize);
  document.documentElement.style.setProperty("--fontcolor", fontColor);
}

// Apply preferences on page load
applyPreferences();

// Add event listener to form submission
var form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmission);
