
let pagina = 1;
const btnAnterior= document.getElementById('btnAnterior');
const btnSiguiente= document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () =>{
    if(pagina<1000){
    pagina += 1;
    cargarClasicos();
    }
} )

btnAnterior.addEventListener('click', () =>{
    if(pagina>1){
    pagina -= 1;
    cargarClasicos();
    }
} )

const cargarClasicos = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=dd0bbf1b1bb1e85c10a079b882c7950e&language=es-MX&page=${pagina}`);
        
        if (response.status === 200) {
            const datos = await response.json();
            let clasicos = '';
            datos.results.forEach(clasico => {
                clasicos = clasicos + 
                `
                
                <a href="peliculaSeleccionada.html">
                <div class="pelicula" id="${clasico.id}" onclick="apretado(this)">
                
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${clasico.poster_path}">
                <h3 class="titulo">${clasico.title}</h3>
                </div>
                </a>
                
                `;
                  
            });
            document.getElementById('contenedor').innerHTML = clasicos;
        }else if(response.status === 401){
            console.log("llave incorrecta");
        }else if(response.status === 404){
            console.log("informacion no encontrada");
        }
    } catch (error) {
        console.log(error);
    }


}

cargarClasicos();

function apretado(elem) {
    const id = elem.id;
    localStorage.setItem("id", id);

}