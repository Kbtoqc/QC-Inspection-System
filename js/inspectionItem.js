const INSPECTION_ITEM_API =
"https://script.google.com/macros/s/AKfycbw9QKqQNuHD5nQdP7MTwDOc5vu4nyMFCgeeHsXnG7dZYxrykaCf2yJv4-ZU36CvYvYU/exec";


function loadInspectionItem() {

    const material = document.getElementById("material").value;

    const body = document.getElementById("inspectionBody");

    body.innerHTML = "";


    fetch(INSPECTION_ITEM_API)

    .then(response => response.json())

    .then(data => {

        data.forEach(item => {

            if(item.materialType === material){

                const row = body.insertRow();

                row.insertCell(0).textContent = item.itemNo;
                row.insertCell(1).textContent = item.checkPoint;
                row.insertCell(2).textContent = item.spec;
                row.insertCell(3).textContent = item.checkType;
                row.insertCell(4).textContent = item.resultType;

            }

        });

    });

}
