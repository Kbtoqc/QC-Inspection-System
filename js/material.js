const MATERIAL_API = "https://script.google.com/macros/s/AKfycbwOXcgOVIpMYFKRcceRi3Uxhp_zxBq05VchU18xF-3mwKXJ1hWjzzGmjCozwLkK3A0l/exec";

fetch(MATERIAL_API)

.then(response => response.json())

.then(data => {

    const materialBox = document.getElementById("material");

    data.forEach(material => {

        const option = document.createElement("option");

        option.textContent = material;
        option.value = material;

        materialBox.appendChild(option);

    });

});
