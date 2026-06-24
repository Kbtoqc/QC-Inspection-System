const INSPECTOR_API = "https://script.google.com/macros/s/AKfycby-rz0BE7Q04J7CixQ4XRYJMcbo4Wo1WqtvdZ3I7amsrUGgA_kAhLEdiOHGBuJV74tj/exec";


fetch(INSPECTOR_API)

.then(response => response.json())

.then(data => {

    const inspectorBox = document.getElementById("inspector");


    data.forEach(name => {

        const option = document.createElement("option");

        option.textContent = name;
        option.value = name;

        inspectorBox.appendChild(option);

    });


})
.catch(error => {

    console.log("Inspector Load Error:", error);

});
