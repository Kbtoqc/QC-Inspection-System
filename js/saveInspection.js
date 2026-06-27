console.log("Save JS Loaded");


const SAVE_API =
"https://script.google.com/macros/s/AKfycbyAGKN_dGTq2GtmPVznU8EccXFlqhXfd2o9isaIoirQLAhU7SHN6VWhScGaWPDuixpz/exec";


let currentInspectionID = "";


const saveButton = document.getElementById("saveInspection");


saveButton.onclick = async function(){


    const header = {

        inspectionDate: document.getElementById("inspectionDate").value,
        soNo: document.getElementById("soNo").value,
        poNo: document.getElementById("poNo").value,
        inspector: document.getElementById("inspector").value,
        customer: document.getElementById("customer").value,
        supplier: document.getElementById("supplier").value,
        inspectionType: document.getElementById("inspectionType").value,
        materialType: document.getElementById("material").value,
        model: document.getElementById("model").value,
        serialNo: document.getElementById("serialNo").value,
        finalJudgement: document.getElementById("finalJudgement").value,
        finalRemark: document.getElementById("finalRemark").value

    };


    const details=[];


    document.querySelectorAll("#inspectionBody tr").forEach(row=>{

        details.push({

            itemNo: row.cells[0].innerText,
            checkPoint: row.cells[1].innerText,
            spec: row.cells[2].innerText,
            checkType: row.cells[3].innerText,
            result: row.querySelector(".result").value,
            remark: row.querySelector(".remark").value

        });

    });


    saveButton.disabled=true;
    saveButton.innerText="Saving...";


    try{


        const response = await fetch(SAVE_API,{

            method:"POST",

            body:JSON.stringify({

                header:header,
                details:details

            })

        });



        const result = await response.json();



        if(result.status==="success"){


            currentInspectionID = result.inspectionID;


            document.getElementById("afterSave").style.display="block";


            saveButton.style.display="none";


        }
        else{


            alert(result.message);


            saveButton.disabled=false;
            saveButton.innerText="Save Inspection";


        }



    }
    catch(error){


        console.error(error);

        alert("Save Failed");


        saveButton.disabled=false;
        saveButton.innerText="Save Inspection";


    }


};





document.getElementById("uploadPhotoButton").onclick=function(){


    window.location.href =
    "photoUpload.html?id="+currentInspectionID;


};





document.getElementById("finishButton").onclick=function(){


    clearForm();


    document.getElementById("afterSave").style.display="none";


    saveButton.style.display="block";


    saveButton.disabled=false;


    saveButton.innerText="Save Inspection";


};





function clearForm(){


document.getElementById("soNo").value="";
document.getElementById("poNo").value="";

document.getElementById("model").value="";
document.getElementById("serialNo").value="";

document.getElementById("finalRemark").value="";


document.getElementById("inspector").selectedIndex=0;
document.getElementById("customer").selectedIndex=0;
document.getElementById("supplier").selectedIndex=0;
document.getElementById("inspectionType").selectedIndex=0;
document.getElementById("material").selectedIndex=0;
document.getElementById("finalJudgement").selectedIndex=0;


document.getElementById("inspectionBody").innerHTML="";


const today=new Date();


document.getElementById("inspectionDate").value =
today.toISOString().split("T")[0];


}
