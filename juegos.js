var juegosArray = [];

function showJuegos(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let juegos = array[i];

        htmlContentToAppend += `
         <div class="row">
                    <div class="col-3">
                        <img src="` + juegos.imagen + `" alt="` + juegos.descripcion + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ juegos.titulo +`</h4>
                        </div>
                        <p>Plataforma(s): </p>` + juegos.plataforma + `<br>
                        <p>Fecha de lanzamiento: </p>` + juegos.fecha + `<br>
                        <p>Género: </p>` + juegos.genero + `<br></div><br><hr><br>
                    </div>
                </div>`

        document.getElementById("informacion").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONDATA(JUEGOS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") 
        {
            juegosArray = resultObj.data;

            showJuegos(juegosArray);
        }
    });
});


/*
function insert(numeroDiv, imgName){
var src = document.getElementsByTagName('div')[numeroDiv]
var img = document.createElement('img');
img.src = imgName;

src.appendChild(img);
}



// la function insert esta bien pero debo encontrar como hacerla funcionar correctamente. 

*/

