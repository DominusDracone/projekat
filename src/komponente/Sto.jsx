import React from 'react'
import SideBar from "./SideBar"
import Pice from './Pice'
import Cola from "C:/xampp/htdocs/ITEH/treci_domaci/projekat/src/slike/Coca-Cola.png"
import Sprite from "C:/xampp/htdocs/ITEH/treci_domaci/projekat/src/slike/sprite.jpg"
import Mocha from "C:/xampp/htdocs/ITEH/treci_domaci/projekat/src/slike/Mocha.png"
import Narandza from "C:/xampp/htdocs/ITEH/treci_domaci/projekat/src/slike/sok.jpg"
import { useState } from 'react'
import '../App.css';



function Sto({ brStola, pocetniIznos, pocetniRacun, onNazad }) {

    //let iznos = 0;
    const [iznos, setIznos] = useState(pocetniIznos);
    const [racun, setRacun] = useState(pocetniRacun);

    function onNaplata() {
        setIznos(0);
        console.log("naplata");
        setRacun("Vaš račun je:" + iznos);
    }

    function onAdd(cena, naziv) {
        //console.log(naziv);
        setRacun(naziv + "-" + racun);
        setIznos(iznos + cena);
        //console.log(iznos);
    }

    function onObrisi() {
        setIznos(0);
        setRacun("");
        //console.log(iznos);
    }

    const pice1 =
    {
        naziv: "Koka kola",
        cena: 200,
        slika: Cola,
    };
    const pice2 =
    {
        naziv: "Sprite",
        cena: 200,
        slika: Sprite,
    };
    const pice3 =
    {
        naziv: "Mocha",
        cena: 230,
        slika: Mocha,
    };
    const pice4 =
    {
        naziv: "Sok od narandže",
        cena: 180,
        slika: Narandza,
    };

    return (
        <div className='sto'>
            <table className='pica'>
                <tr>
                    <td>
                        <Pice pice={pice1} onAdd={onAdd}></Pice>
                    </td>
                    <td>
                        <Pice pice={pice2} onAdd={onAdd}></Pice>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Pice pice={pice3} onAdd={onAdd}></Pice>
                    </td>
                    <td>
                        <Pice pice={pice4} onAdd={onAdd}></Pice>
                    </td>
                </tr>
            </table>
            <SideBar className="sideBar" iznos={iznos} brStola={brStola} racun={racun} onObrisi={onObrisi} onNaplata={onNaplata} onNazad={onNazad}></SideBar>
        </div>
    )
}

export default Sto
