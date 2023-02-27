import './App.css';
import BtnHolder from './komponente/BtnHolder';
import Sto from "./komponente/Sto";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from 'react'


function App() {

  const [stoIznos, setStoIznos] = useState(0);
  const [stoId, setStoId] = useState(1);
  const [stolovi, setStolovi] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  //const stolovi = [0, 0, 0, 0, 0, 0, 0, 0];

  function onNazad(iznos, brStola) {
    // console.log(iznos);
    // console.log(brStola);
    const pom = stolovi;
    pom[brStola - 1] = iznos;
    setStolovi(pom);
    //console.log(pom);
    //console.log("nazad");
    //console.log(stolovi[brStola - 1]);
  }

  function dajBroj(broj) {
    // console.log(stoId);
    // console.log(stoIznos);
    // console.log(broj);
    console.log(stolovi);
    setStoIznos(stolovi[broj - 1]);
    setStoId(broj);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BtnHolder dajBroj={dajBroj} />} />
        <Route path="/sto" element={<Sto brStola={stoId} pocetniIznos={stoIznos} onNazad={onNazad} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
