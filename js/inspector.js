fetch("https://script.google.com/macros/s/AKfycby-rz0BE7Q04J7CixQ4XRYJMcbo4Wo1WqtvdZ3I7amsrUGgA_kAhLEdiOHGBuJV74tj/exec")

.then(response => response.json())

.then(data => {

    let box = document.getElementById("inspector");

    data.forEach(item => {

        let option = document.createElement("option");

        option.text = item.Inspector_Name;
        option.value = item.Inspector_Name;

        box.add(option);

    });

});
