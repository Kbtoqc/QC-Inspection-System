document.addEventListener("DOMContentLoaded", () => {

  const inspectionDate =
    document.getElementById("inspectionDate");

  const inspector =
    document.getElementById("inspector");

  const inspectionType =
    document.getElementById("inspectionType");

  const material =
    document.getElementById("material");

  const finalJudgement =
    document.getElementById("finalJudgement");

  const saveButton =
    document.getElementById("saveInspection");


  function validateForm() {

    const isValid =

      inspectionDate.value.trim() !== "" &&

      inspector.value.trim() !== "" &&

      inspectionType.value.trim() !== "" &&

      material.value.trim() !== "" &&

      finalJudgement.value.trim() !== "";


    saveButton.disabled = !isValid;

  }


  inspectionDate.addEventListener("change", validateForm);

  inspector.addEventListener("change", validateForm);

  inspectionType.addEventListener("change", validateForm);

  material.addEventListener("change", validateForm);

  finalJudgement.addEventListener("change", validateForm);


  validateForm();

});
