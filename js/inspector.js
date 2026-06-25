const INSPECTOR_API = "https://script.google.com/macros/s/AKfycby-rz0BE7Q04J7CixQ4XRYJMcbo4Wo1WqtvdZ3I7amsrUGgA_kAhLEdiOHGBuJV74tj/exec";

console.log("Inspector JS Loaded");

window.onload = function() {

  const inspectorBox = document.getElementById("inspector");

  console.log("Inspector Box:", inspectorBox);

  fetch(INSPECTOR_API)
    .then(response => {

      console.log("API Response:", response);

      return response.json();

    })
    .then(data => {

      console.log("Inspector Data:", data);

      data.forEach(name => {

        let option = document.createElement("option");

        option.value = name;
        option.text = name;

        inspectorBox.appendChild(option);

      });

    })
    .catch(error => {

      console.log("Inspector Load Error:", error);

    });

};
