import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Generaciones from "./views/Generaciones";
import GeneracionesDetalle from "./views/GeneracionesDetalle";
import PokemonDetalle from "./views/PokemonDetalle";
function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/generaciones" element={<Generaciones></Generaciones>}></Route>
        <Route path="/generaciones/:gen" element={<GeneracionesDetalle></GeneracionesDetalle>}></Route>
        <Route path="/generaciones/:Genera/:name" element={<PokemonDetalle></PokemonDetalle>}></Route>
        </Routes>
    </div>
  );
}

export default App;
