fetch("https://script.google.com/macros/s/AKfycbyKuiMu4hfPttljc3HnF7hdKE2HP8UG7z68KMCvkk8GSBG6bLJeuL-aeirobW3VDJ9o/exec")

.then(response => response.json())

.then(data => {

    let box = document.getElementById("inspectionType");

    data.forEach(type => {

        let option = document.createElement("option");

        option.text = type;
        option.value = type;

        box.add(option);

    });

});
