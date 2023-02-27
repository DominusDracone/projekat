import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai"

function Pice({ pice, onAdd }) {

    return (
        <div className='Pice'>
            <img style={{ width: 200, height: 200 }} src={pice.slika} />
            <div className='text'>
                <p>{pice.naziv}</p>
                <p>Cena:</p>
                <p>{pice.cena}</p>
            </div>
            <button className='btn' onClick={() => onAdd(pice.cena, pice.naziv)}>
                <AiOutlinePlusCircle />
            </button>
        </div>
    )
}

export default Pice
