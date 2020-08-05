var juegosArray = [];

function showJuegos(array) {

    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        let juegos = array[i];

        contenido += 'Título: ' + juegos.titulo + '<br>';
        contenido += 'Plataforma(s): ' + juegos.plataforma + '<br>';
        contenido += 'Fecha de lanzamiento: ' + juegos.fecha + '<br>';
        contenido += 'Género: ' + juegos.genero + '<br>';
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
