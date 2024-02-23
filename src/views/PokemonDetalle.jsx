import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PokemonDetalle() {
  const { name } = useParams();
  const { Genera } = useParams();

  const [pokemon, setPokemon] = useState([]);
  const [stats, setStats] = useState([]);
  const [sprites, setSprites] = useState([]);
  const [spritesHome, setSpritesHome] = useState([]);
  const [tipo, setTipo] = useState([]);

  const getPokemon = async () => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + name;
    const response = await fetch(apiUrl);
    const data = await response.json();
    setPokemon(data);
    setStats(data.stats);
    setSprites(data.sprites.other.dream_world);
    setSpritesHome(data.sprites.other.home);
    setTipo(data.types);
  };

  useEffect(() => {
    getPokemon();
  }, [name]);

  const navigate = useNavigate();
  const volver= ()=>{
    navigate(`/generaciones/${Genera}`)
  }
  const imgTipo = (tipo) => {
    if (tipo === "fire") {
      return "/fuego.webp";
    }
    if (tipo === "water") {
      return "/agua.webp";
    }
    if (tipo === "grass") {
      return "/planta.webp";
    }
    if (tipo === "electric") {
      return "/electrico.webp";
    }
    if (tipo === "ice") {
      return "/hielo.webp";
    }
    if (tipo === "fighting") {
      return "/lucha.webp";
    }
    if (tipo === "poison") {
      return "/veneno.webp";
    }
    if (tipo === "ground") {
      return "/tierra.webp";
    }
    if (tipo === "fairy") {
      return "/hada.webp";
    }
    if (tipo === "psychic") {
      return "/psiquico.webp";
    }
    if (tipo === "bug") {
      return "/bicho.webp";
    }
    if (tipo === "rock") {
      return "/roca.webp";
    }
    if (tipo === "ghost") {
      return "/fantasma.webp";
    }
    if (tipo === "dragon") {
      return "/dragon.webp";
    }
    if (tipo === "dark") {
      return "/siniestro.webp";
    }
    if (tipo === "steel") {
      return "/acero.webp";
    }
    if (tipo === "normal") {
      return "/normal.webp";
    }
    if (tipo === "flying") {
      return "/volador.webp";
    }
  };

  return (
    <div className="pokemon__detalle">
      <div className="detalle__div">
        <h1>
          {pokemon.name}:{" "}
          {tipo.map((tipo, id) => (
            <div className="detalle__tipodiv" key={id}>
              <span className="detalle__span">{tipo.type.name}</span>
              <img
                className="detalle__icon"
                src={imgTipo(tipo.type.name)}
              ></img>
            </div>
          ))}
        </h1>
        <img
          className="detalle__img"
          src={sprites.front_default || spritesHome.front_default}
        ></img>
        <h1>Stats</h1>
        <ul>
          {stats.map((stat, id) => (
            <li key={id}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={volver} className="detalle__btn">Volver a la Pokedex</button>
    </div>
  );
}
