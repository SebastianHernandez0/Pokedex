import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetalle(){

    const { name } = useParams();
    const {Genera} = useParams();

    const [pokemon,setPokemon]= useState([])
    const [stats,setStats]= useState([])
    const [sprites,setSprites]=useState([])
    const [spritesHome,setSpritesHome]=useState([])
    const [tipo,setTipo] = useState([])

    const getPokemon = async() => {
        const apiUrl= "https://pokeapi.co/api/v2/pokemon/"+name
        const response= await fetch(apiUrl)
        const data= await response.json()
        setPokemon(data)
        setStats(data.stats)
        setSprites(data.sprites.other.dream_world)
        setSpritesHome(data.sprites.other.home)
        setTipo(data.types)
        

        
    }


    useEffect(()=>{
        getPokemon()
    },[name])  

    return(
        <div className="pokemon__detalle">
            <h1 style={{display:"flex", gap:"0.5rem"}}>{pokemon.name}: {tipo.map((tipo,id)=>(
                <p key={id}>{tipo.type.name }</p>

            ))}  </h1>
            <img src={sprites.front_default || spritesHome.front_default }></img>
            <ul>
                {stats.map((stat,id)=>(
                    <li key={id}>{stat.stat.name}: {stat.base_stat}</li>
                ))}
            </ul>
            
        </div>
    )
}