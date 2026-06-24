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


                let row = body.insertRow();


                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);


                cell1.textContent = item.itemNo;

                cell2.textContent = item.checkPoint;

                cell3.textContent = item.spec;

                cell4.textContent = item.checkType;


                // Result

                let result = createResultInput(
                    item.resultType,
                    item.itemNo
                );

                cell5.appendChild(result);


                // Remark

                let remark = document.createElement("input");

                remark.type = "text";

                remark.placeholder = "Remark";

                remark.id = "remark_" + item.itemNo;


                cell6.appendChild(remark);


            }


        });


    });

}
