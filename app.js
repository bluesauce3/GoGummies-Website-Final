function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function smoothScroll() {
    document.documentElement.style.scrollBehavior = "smooth";
}

function saveFormData(event) {
  event.preventDefault();
  let formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  let data = JSON.stringify(formData);
  localStorage.setItem("formData", data);
  alert("Form data saved successfully!");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

function getFormData() {
  let savedData = localStorage.getItem("formData");
    if (savedData) {
	    let formData = JSON.parse(savedData);
	    return(formData);
}
}