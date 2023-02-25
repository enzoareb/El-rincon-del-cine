
const id = localStorage.getItem("id");

const cargarSeleccion = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=dd0bbf1b1bb1e85c10a079b882c7950e&language=es-AR`);
        
        if (response.status === 200) {
            
            const datos = await response.json();
           
            
            let seleccionHTML = 
                `
                
                <h2><span>${datos.name}</span></h2>
                <h3><span>${datos.tagline}</span></h3>

                <div class="img-box1">
                  <img src="https://image.tmdb.org/t/p/w500/${datos.poster_path}" alt="" /> 
                  ${datos.overview} </div>
                <p>Titulo original : ${datos.original_name }</p>
                <p>Genero : ${datos.genres[0].name  }</p>
                <p>Temporadas : ${datos.number_of_seasons }</p>
                <p>Capitulos : ${datos.number_of_episodes }</p>

                
                <p>Popularidad   : ${datos.popularity}</p>
                <p>Produccion : ${datos.production_companies[0].name}</p>
                <p>Estreno : ${datos.first_air_date}</p>
                <p>Ultimo episodio : ${datos.last_air_date}</p>
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

