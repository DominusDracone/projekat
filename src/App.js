import './App.css';
import BtnHolder from './komponente/BtnHolder';
import Sto from "./komponente/Sto";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from 'react'


function App() {

  const [stoIznos, setStoIznos] = useState(0);
  const [stoId, setStoId] = useState(1);
  const stolovi = [0, 0, 0, 0, 0, 0, 0, 0];

  function dajBroj(broj) {
    // console.log(stoId);
    // console.log(stoIznos);
    // console.log(broj);
    // console.log(stolovi[broj - 1]);
    setStoIznos(stoIznos + stolovi[broj - 1]);
    setStoId(broj);
    console.log(stoId);
    console.log(stoIznos);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BtnHolder dajBroj={dajBroj} />} />
        <Route path="/sto" element={<Sto brStola={stoId} pocetniIznos={stoIznos} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
