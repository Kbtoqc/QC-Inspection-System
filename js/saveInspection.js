function saveInspection(){

    let inspectionNo = generateInspectionNo();


    let headerData = {

        inspectionNo: inspectionNo,

        inspectionDate:
            document.getElementById("inspectionDate").value,

        inspector:
            document.getElementById("inspector").value,

        inspectionType:
            document.getElementById("inspectionType").value,

        materialType:
            document.getElementById("material").value,

        model:
            document.getElementById("model").value,

        serialNo:
            document.getElementById("serialNo").value,

        soNo:
            document.getElementById("soNo").value,

        poNo:
            document.getElementById("poNo").value,

        supplier:
            document.getElementById("supplier").value,

        customer:
            document.getElementById("customer").value,

        finalJudgement:
            document.getElementById("finalJudgement").value,

        overallRemark:
            document.getElementById("overallRemark").value,

        items: []

    };



    let rows = document
        .getElementById("inspectionBody")
        .rows;



    for(let i = 0; i < rows.length; i++){


        let row = rows[i];


        let item = {

            itemNo:
                row.cells[0].innerText,

            checkPoint:
                row.cells[1].innerText,

            spec:
                row.cells[2].innerText,

            checkType:
                row.cells[3].innerText,

            resultType:
                "",

            result:
                "",

            remark:
                ""

        };


        let resultElement =
            row.cells[4].querySelector("select, input");


        if(resultElement){

            item.result =
                resultElement.value;

        }


        let remarkElement =
            row.cells[5].querySelector("input");


        if(remarkElement){

            item.remark =
                remarkElement.value;

        }


        headerData.items.push(item);

    }



    fetch(
    "https://script.google.com/macros/s/AKfycbyAGKN_dGTq2GtmPVznU8EccXFlqhXfd2o9isaIoirQLAhU7SHN6VWhScGaWPDuixpz/exec",
    {

        method:"POST",

        body:JSON.stringify(headerData)

    })


    .then(response => response.text())


    .then(data=>{

        alert(
            "Save Complete\n" + inspectionNo
        );

    });


}




function generateInspectionNo(){


    let today =
        new Date();


    let yyyy =
        today.getFullYear();


    let mm =
        String(today.getMonth()+1)
        .padStart(2,"0");


    let dd =
        String(today.getDate())
        .padStart(2,"0");


    return "INS-" 
        + yyyy 
        + mm 
        + dd
        + "-001";

}
