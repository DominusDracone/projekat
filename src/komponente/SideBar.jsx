import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5"
import { MdDeleteForever } from "react-icons/md"
import { SiCashapp } from "react-icons/si"
import { Link } from "react-router-dom";

function SideBar({ iznos, brStola, racun, onObrisi, onNaplata, onNazad }) {

  return (
    <div className='SideBar'>
      <div className='text'>
        <h2>Broj stola: {brStola}</h2>
        <p>Iznos: </p>
        <p>{iznos}</p>
        <h1>{racun}</h1>
      </div>
      <button className='btn' onClick={onNaplata}>
        <SiCashapp />
      </button>
      <button className='btn' onClick={onObrisi}>
        <MdDeleteForever />
      </button>
      <button className='btn' onClick={() => onNazad(iznos, brStola, racun)}>
        <Link to="/"><IoArrowBackOutline /></Link>
      </button>
    </div>
  )
}

export default SideBar
