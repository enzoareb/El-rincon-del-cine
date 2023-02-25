
const id = localStorage.getItem("id");

const cargarSeleccion = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dd0bbf1b1bb1e85c10a079b882c7950e&language=es-AR`);
        
        if (response.status === 200) {
            
            const datos = await response.json();
           
            
            let seleccionHTML = 
                `
                
                <h2><span>${datos.title}</span></h2>
                <h3><span>${datos.tagline}</span></h3>

                <div class="img-box1">
                  <img src="https://image.tmdb.org/t/p/w500/${datos.poster_path}" alt="" /> 
                  ${datos.overview} </div>
                <p>Titulo original : ${datos.original_title }</p>
                <p>Genero : ${datos.genres[0].name  }</p>
                <p>Popularidad   : ${datos.popularity}</p>
                <p>Produccion : ${datos.production_companies[0].name}</p>
                <p>Estreno : ${datos.release_date}</p>
                <p>Duracion : ${datos.runtime} min</p>
                <p>Estado : ${datos.status}</p>
                <p>Valoracion : ${datos.vote_average}</p>    
                `;
                  
                
            document.getElementById('contenedor').innerHTML = seleccionHTML;
        }else if(response.status === 401){
            console.log("llave incorrecta");
        }else if(response.status === 404){
            console.log("informacion no encontrada");
        }
    } catch (error) {
        console.log(error);
    }


}

cargarSeleccion();

