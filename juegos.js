var juegosArray = [];

function showJuegos(array) {

    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        let juegos = array[i];

        contenido += `
         <p>Título: </p>` + juegos.titulo + `<br>`;
        `<p>Plataforma(s): </p>` + juegos.plataforma + `<br>`;
        `<p>Fecha de lanzamiento: </p>` + juegos.fecha + `<br>`;
        `<p>Género: </p>` + juegos.genero + `<br>`;
        `<br><hr><br>`
        
        document.getElementById('catalago').innerHTML = contenido;
    }
};

document.addEventListener("DOMContentLoaded", function(e){
    getJSONDATA(JUEGOS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            juegosArray = resultObj.data;

            showJuegos(juegosArray);
        }
    });
});
