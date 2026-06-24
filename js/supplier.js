fetch("https://script.google.com/macros/s/AKfycbxMucxispr3qhpxDVZ0-WnCdlzO3hs_KRXVORVIsid_olm33zvU02TTzYdT-iBntLCU/exec")

.then(response => response.json())

.then(data => {

    let box = document.getElementById("supplier");

    data.forEach(item => {

        let option = document.createElement("option");

        option.text = item;
        option.value = item;

        box.add(option);

    });

});
