console.log("Search JS Loaded");


const SEARCH_API =
"https://script.google.com/macros/s/AKfycbx8YbMBRqHYwElWw0o5vLu_XiQd4ARR5-0k1WcVw3fRxBWVUTkIkhZD4yjw121pw5oZ/exec";



async function searchInspection() {


    const request = {


        inspectionID: document.getElementById("inspectionID").value,

        soNo: document.getElementById("soNo").value,

        inspectionType: document.getElementById("inspectionType").value,

        model: document.getElementById("model").value,

        serialNo: document.getElementById("serialNo").value,

        dateFrom: document.getElementById("dateFrom").value,

        dateTo: document.getElementById("dateTo").value


    };



    console.log("Send:", request);



    try {


        const response = await fetch(SEARCH_API, {


            method: "POST",

            body: JSON.stringify(request)


        });



        const result = await response.json();



        console.log("Result:", result);



        if (result.status !== "success") {


            document.getElementById("result").innerHTML =
            "Search Error : " + result.message;

            return;

        }



        let html = `


        <table>


        <tr>

        <th>Inspection ID</th>

        <th>Date</th>

        <th>SO No</th>

        <th>Customer</th>

        <th>Model</th>

        <th>Serial No</th>

        <th>Judgement</th>

        <th>Print</th>

        </tr>


        `;



        if(result.data.length === 0){


            html += `

            <tr>

            <td colspan="8">
            No Data Found
            </td>

            </tr>

            `;


        }
        else {



            result.data.forEach(item => {



                html += `


                <tr>


                <td>${item.inspectionID}</td>


                <td>${item.inspectionDate}</td>


                <td>${item.soNo}</td>


                <td>${item.customer}</td>


                <td>${item.model}</td>


                <td>${item.serialNo}</td>


                <td>${item.judgement}</td>


                <td>

                <button onclick="printInspection('${item.inspectionID}')">

                Print

                </button>


                </td>


                </tr>


                `;



            });


        }



        html += "</table>";



        document.getElementById("result").innerHTML = html;



    }
    catch(error){


        console.error(error);


        alert("Search Error");


    }


}




function printInspection(id){


    window.open(
    "print.html?id=" + id,
    "_blank"
);


}
