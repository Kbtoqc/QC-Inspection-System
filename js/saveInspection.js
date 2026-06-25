const SAVE_API =
"https://script.google.com/macros/s/AKfycbyAGKN_dGTq2GtmPVznU8EccXFlqhXfd2o9isaIoirQLAhU7SHN6VWhScGaWPDuixpz/exec";



document.addEventListener("DOMContentLoaded", function(){


  document
  .getElementById("saveInspection")
  .addEventListener("click", saveInspection);


});





function saveInspection(){


  const details = [];



  document
  .querySelectorAll("#inspectionBody tr")
  .forEach(row => {



    details.push({

      itemNo:
      row.cells[0].innerText,


      checkPoint:
      row.cells[1].innerText,


      spec:
      row.cells[2].innerText,


      checkType:
      row.cells[3].innerText,


      result:
      row.querySelector(".result")
      ? row.querySelector(".result").value
      : "",


      remark:
      row.querySelector(".remark")
      ? row.querySelector(".remark").value
      : ""

    });



  });





  const data = {


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
    document.getElementById("finalRemark").value,


    details:details


  };




  fetch(
    SAVE_API,
    {

      method:"POST",

      body:JSON.stringify(data)

    }

  )


  .then(response=>response.json())


  .then(result=>{


    if(result.success){


      alert(
        "Saved Successfully\n" +
        result.inspectionId
      );


      clearForm();



    }else{


      alert(
        "Save Failed\n" +
        result.message
      );


    }



  })


  .catch(error=>{


    console.error(error);


    alert(
      "Save Failed\n" +
      error
    );


  });



}





function clearForm(){



  document
  .querySelectorAll("input")
  .forEach(input=>{

    if(input.type !== "file"){

      input.value="";

    }

  });



  document
  .querySelectorAll("select")
  .forEach(select=>{

    select.selectedIndex=0;

  });



  document
  .querySelectorAll("textarea")
  .forEach(area=>{

    area.value="";

  });



  document
  .getElementById("inspectionBody")
  .innerHTML="";



  document
  .getElementById("inspectionPhotos")
  .value="";



}
