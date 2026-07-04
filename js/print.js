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
