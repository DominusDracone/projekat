import React from 'react'
import Cola from "C:/xampp/htdocs/ITEH/treci_domaci/projekat/src/slike/Coca-Cola.png"
import { AiOutlinePlusCircle } from "react-icons/ai"

function Pice() {
    return (
        <div className='Pice'>
            <img style={{ width: 100, height: 100 }} src={Cola} />
            <div>
                <p>Naziv</p>
                <p>Cena</p>
            </div>
            <button className='btn'>
                <AiOutlinePlusCircle />
            </button>
        </div>
    )
}

export default Pice
