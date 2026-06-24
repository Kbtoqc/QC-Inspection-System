const MATERIAL_API = "URL_WEB_APP_MATERIAL_TYPE";

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
