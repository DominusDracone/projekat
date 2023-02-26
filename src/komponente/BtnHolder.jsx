import React from 'react'
import StoBtn from "./StoBtn";
import { Link } from "react-router-dom";

function BtnHolder({ dajBroj }) {
    const niz = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div>
            {niz.map((el) => (
                <StoBtn broj={el} dajBroj={dajBroj} />
            ))}
            {/* <StoBtn Broj={1} /> */}
            <Link to="/sto"><button>Kreni</button></Link>
        </div>
    )
}

export default BtnHolder
