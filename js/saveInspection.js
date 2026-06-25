console.log("Save JS Loaded");


const saveButton = document.getElementById("saveInspection");


console.log("Save Button:", saveButton);



if(saveButton){

  saveButton.addEventListener("click", function(){


    const header = {


      inspectionDate:
      document.getElementById("inspectionDate").value,


      soNo:
      document.getElementById("soNo").value,


      poNo:
      document.getElementById("poNo").value,


      inspector:
      document.getElementById("inspector").value,


      customer:
      document.getElementById("customer").value,


      supplier:
      document.getElementById("supplier").value,


      inspectionType:
      document.getElementById("inspectionType").value,


      materialType:
      document.getElementById("material").value,


      model:
      document.getElementById("model").value,


      serialNo:
      document.getElementById("serialNo").value,


      finalJudgement:
      document.getElementById("finalJudgement").value,


      finalRemark:
      document.getElementById("finalRemark").value


    };


    console.log("Header Data:", header);


  });

}
