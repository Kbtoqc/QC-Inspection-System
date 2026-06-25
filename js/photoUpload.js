document.addEventListener("DOMContentLoaded", () => {

  const photoInput =
    document.getElementById("inspectionPhotos");

  const photoList =
    document.getElementById("photoList");


  photoInput.addEventListener("change", () => {

    photoList.innerHTML = "";


    Array.from(photoInput.files).forEach(file => {

      const div = document.createElement("div");

      div.textContent = file.name;

      photoList.appendChild(div);

    });

  });

});
