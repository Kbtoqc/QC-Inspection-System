console.log("Print JS Loaded");


const SEARCH_API =
"https://script.google.com/macros/s/AKfycbx8YbMBRqHYwElWw0o5vLu_XiQd4ARR5-0k1WcVw3fRxBWVUTkIkhZD4yjw121pw5oZ/exec";



const params = new URLSearchParams(window.location.search);

const inspectionID = params.get("id");



loadInspection();



async function loadInspection(){


    const response = await fetch(SEARCH_API,{

        method:"POST",

        body:JSON.stringify({

            action:"getDetail",

            inspectionID:inspectionID

        })

    });



    const data = await response.json();



    console.log(data);



    showHeader(data.header);

    showDetail(data.details);

    showPhoto(data.photos);


}





function showHeader(h){


let html = `


<table class="header-table">


<tr>
<td>Inspection ID</td>
<td>${h.inspectionID}</td>
</tr>


<tr>
<td>Inspection Date</td>
<td>${h.inspectionDate}</td>
</tr>


<tr>
<td>SO No</td>
<td>${h.soNo}</td>
</tr>


<tr>
<td>Customer</td>
<td>${h.customer}</td>
</tr>


<tr>
<td>Supplier</td>
<td>${h.supplier}</td>
</tr>


<tr>
<td>Inspection Type</td>
<td>${h.inspectionType}</td>
</tr>


<tr>
<td>Model</td>
<td>${h.model}</td>
</tr>


<tr>
<td>Serial No</td>
<td>${h.serialNo}</td>
</tr>


<tr>
<td>Final Judgement</td>
<td>${h.judgement}</td>
</tr>


<tr>
<td>Remark</td>
<td>${h.remark}</td>
</tr>


</table>


`;


document.getElementById("header").innerHTML = html;


}




function showDetail(details){


let html = `


<h3>Inspection Checklist</h3>


<table>


<tr>

<th>No</th>
<th>Check Point</th>
<th>Spec</th>
<th>Check Type</th>
<th>Result</th>
<th>Remark</th>

</tr>


`;



details.forEach(d=>{


html += `


<tr>

<td>${d.itemNo}</td>

<td>${d.checkPoint}</td>

<td>${d.spec}</td>

<td>${d.checkType}</td>

<td>${d.result}</td>

<td>${d.remark}</td>

</tr>


`;


});



html += "</table>";



document.getElementById("detail").innerHTML = html;


}




function showPhoto(photos){


if(!photos || photos.length==0)
return;



let html="<h3>Inspection Photos</h3>";



photos.forEach(p=>{


html += `<img src="${p}">`;


});



document.getElementById("photo").innerHTML = html;


}
