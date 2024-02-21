import { useNavigate } from "react-router-dom";

export default function Generaciones() {

    const navigate= useNavigate();
    const irAGeneraciones = (gen) => {
        navigate(`/generaciones/${gen}`);
    }


  return (
    <div className="layout__genera">
      <div className="genera__cards">
        <div className="cards__card">
            <h2>Primera</h2>
            <img onClick={()=> irAGeneraciones(1)} src="/gen1.png"></img>
        </div>
        <div className="cards__card">
        <h2>Segunda</h2>
            <img onClick={()=> irAGeneraciones(2)} src="/gen2.png"></img>
        </div>
        <div className="cards__card">
        <h2>Tercera</h2>
            <img onClick={()=> irAGeneraciones(3)} src="/gen3.png"></img>
        </div>
        <div className="cards__card">
        <h2>Cuarta</h2>
            <img onClick={()=> irAGeneraciones(4)} src="/gen4.png"></img>
        </div>
        <div className="cards__card">
        <h2>Quinta </h2>
            <img onClick={()=> irAGeneraciones(5)} src="/gen5.png"></img>
        </div>
        <div className="cards__card">
        <h2>Sexta</h2>
            <img onClick={()=> irAGeneraciones(6)} src="/gen6.png"></img>
        </div>
        <div className="cards__card">
        <h2>Septima </h2>
            <img onClick={()=> irAGeneraciones(7)} src="/gen7.png"></img>
        </div>
        <div className="cards__card">
        <h2>Octava</h2>
            <img onClick={()=> irAGeneraciones(8)} src="/gen8.png"></img>
        </div>
        <div className="cards__card">
        <h2>Novena</h2>
            <img onClick={()=> irAGeneraciones(9)} src="/gen9.jpeg"></img>
        </div>
      </div>
    </div>
  );
}
