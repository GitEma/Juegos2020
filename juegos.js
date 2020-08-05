var juegosArray = [];

function showJuegos(array) {

    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        let juegos = array[i];

        contenido += '<p>Título: </p>' + juegos.titulo + '<br>';
        contenido += '<p>Plataforma(s): </p>' + juegos.plataforma + '<br>';
        contenido += '<p>Fecha de lanzamiento: </p>' + juegos.fecha + '<br>';
        contenido += '<p>Género: </p>' + juegos.genero + '<br>';
        contenido += '<br><hr><br>'
        
        document.getElementById('catalago').innerHTML = contenido ;
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
