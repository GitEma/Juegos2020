var juegosArray = [];

function showJuegos(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let juegos = array[i];

        htmlContentToAppend += `
         <p>Título: </p>` + juegos.titulo + `<br>
        <p>Plataforma(s): </p>` + juegos.plataforma + `<br>
        <p>Fecha de lanzamiento: </p>` + juegos.fecha + `<br>
        <p>Género: </p>` + juegos.genero + `<br>
        <br><hr><br>`

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
