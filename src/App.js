import './App.css';
import BtnHolder from './komponente/BtnHolder';
import Sto from "./komponente/Sto";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from 'react'


function App() {

  const [stoIznos, setStoIznos] = useState(0);
  const [stoId, setStoId] = useState(1);
  const [stolovi, setStolovi] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [racuni, setRacuni] = useState(["", "", "", "", "", "", "", ""]);
  const [racun, setRacun] = useState("");

  function onNazad(iznos, brStola, racun) {
    const pom = stolovi;
    pom[brStola - 1] = iznos;
    setStolovi(pom);
    const pom1 = racuni;
    pom1[brStola - 1] = racun;
    setRacuni(pom1);
    //console.log(pom);
    //console.log("nazad");
    //console.log(stolovi[brStola - 1]);
  }

  function dajBroj(broj) {
    // console.log(stoId);
    // console.log(stoIznos);
    // console.log(broj);
    console.log(stolovi);
    console.log(racuni);
    setStoIznos(stolovi[broj - 1]);
    setRacun(racuni[broj - 1]);
    setStoId(broj);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BtnHolder dajBroj={dajBroj} />} />
        <Route path="/sto" element={<Sto brStola={stoId} pocetniIznos={stoIznos} pocetniRacun={racun} onNazad={onNazad} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
