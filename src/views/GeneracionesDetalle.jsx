import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function GeneracionesDetalle() {
  const { gen } = useParams();
  const [generacion, setGeneracion] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  var url = "";
  var i=0
  if (gen === "1") {
    url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
    i=1
  }else if (gen === "2") {
    url = "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100";
    i=151
  }else if (gen === "3") {
    url= "https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135"
    i=251
  }else if (gen === "4") {
    url= "https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107"
    i=386
  }else if (gen === "5") {
    url= "https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156"
    i=493
  }else if (gen === "6") {
    url= "https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72"
    i=649
  }else if (gen === "7") {
    url= "https://pokeapi.co/api/v2/pokemon/?offset=721&limit=88"
    i=721
  }else if (gen === "8") {
    url= "https://pokeapi.co/api/v2/pokemon/?offset=809&limit=96"
    i=809
  }else if (gen === "9") {
    url= "https://pokeapi.co/api/v2/pokemon/?offset=905&limit=120"
    i=905
  }

  const getApiData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setGeneracion(data.results);
  }

  useEffect(() => {
    getApiData();
  }, [gen]);

  
  return(
    <div className="pokemon__cards">
        
        {generacion.map((pokemon)=>{
            return(
                

                <div className="pokemon__card" key={i}>
                <h2>{i++}:{pokemon.name}</h2>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"+i+".png"}></img>
                
                </div>
                
            )

        }
            
            
        )}
        
    </div>

  )
}
