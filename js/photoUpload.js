console.log("Photo Upload JS Loaded");


const params = new URLSearchParams(window.location.search);


const inspectionID = params.get("id");


const inspectionBox =
document.getElementById("inspectionID");


if(inspectionID){

    inspectionBox.value = inspectionID;

}
else{

    alert("Invalid Inspection ID");

}



const uploadButton =
document.getElementById("uploadButton");


const photoInput =
document.getElementById("photos");


const fileList =
document.getElementById("fileList");


const statusBox =
document.getElementById("status");



const PHOTO_UPLOAD_API =
"https://script.google.com/macros/s/AKfycbyx5BWuoCALxEIkaJN7a93NOtHSYD7t8XDPjkwTcEtXshmDwWZ14OSILhbBr5Z3WFdo2A/exec";




photoInput.onchange=function(){


fileList.innerHTML="";


Array.from(this.files).forEach(file=>{


let li=document.createElement("li");

li.innerText=file.name;

fileList.appendChild(li);


});


};




uploadButton.onclick=async function(){


if(!inspectionID){

alert("Inspection ID Missing");

return;

}


if(photoInput.files.length===0){

alert("Please select photo");

return;

}



uploadButton.disabled=true;


for(let i=0;i<photoInput.files.length;i++){


let file=photoInput.files[i];


let base64 = await new Promise(resolve=>{


let reader=new FileReader();


reader.onload=function(){

resolve(reader.result.split(",")[1]);

};


reader.readAsDataURL(file);


});



await fetch(PHOTO_UPLOAD_API,{

method:"POST",

body:JSON.stringify({

inspectionID:inspectionID,

fileNo:i+1,

fileName:file.name,

mimeType:file.type,

base64:base64

})

});


statusBox.innerHTML =
"Uploaded "+(i+1)+" / "+photoInput.files.length;


}



alert("Upload Complete");


};
