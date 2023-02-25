
let pagina = 1;
const btnAnterior= document.getElementById('btnAnterior');
const btnSiguiente= document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () =>{
    if(pagina<1000){
    pagina += 1;
    cargarSeries();
    }
} )

btnAnterior.addEventListener('click', () =>{
    if(pagina>1){
    pagina -= 1;
    cargarSeries();
    }
} )

const cargarSeries = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=dd0bbf1b1bb1e85c10a079b882c7950e&language=es-MX&page=${pagina}`);
        
        if (response.status === 200) {
            const datos = await response.json();
            let series = '';
            datos.results.forEach(serie => {
                series = series + 
                `
                

                <a href="serieSeleccionada.html">
                <div class="pelicula" id="${serie.id}" onclick="apretado(this)">
                
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${serie.poster_path}">
                <h3 class="titulo">${serie.name}</h3>
                </div>
                </a>
                
                `;
                  
            });
            document.getElementById('contenedor').innerHTML = series;
        }else if(response.status === 401){
            console.log("llave incorrecta");
        }else if(response.status === 404){
            console.log("informacion no encontrada");
        }
    } catch (error) {
        console.log(error);
    }


}

cargarSeries();

function apretado(elem) {
    const id = elem.id;
    localStorage.setItem("id", id);

}