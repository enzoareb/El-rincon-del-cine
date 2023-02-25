
const id = localStorage.getItem("id");

const cargarSeleccion = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=dd0bbf1b1bb1e85c10a079b882c7950e&language=es-AR`);
        
        if (response.status === 200) {
            
            const datos = await response.json();
           
            
            let seleccionHTML = 
                `
                
                <h2><span>${datos.name}</span></h2>
                

                <div class="img-box1">
                  <img src="https://image.tmdb.org/t/p/w500/${datos.profile_path}" alt="" /> 
                  ${datos.biography} </div>
                <p>Tambien conocido como : ${datos.also_known_as[0] }</p>
                <p>Genero : ${datos.known_for_department }</p>
                <p>Nacimiento : ${datos.birthday }</p>
                <p>Lugar de nacimiento: ${datos.place_of_birth}</p>

                <p>Fallecimiento : ${datos.deathday }</p>

                
                <p>Popularidad   : ${datos.popularity}</p>
                
               
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

