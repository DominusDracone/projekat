import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5"
import { MdDeleteForever } from "react-icons/md"
import { SiCashapp } from "react-icons/si"
import { Link } from "react-router-dom";

function SideBar({ iznos, onObrisi, onNaplata }) {

  function onNazad() {
    console.log("nazad");
  }
  return (
    <div className='SideBar'>
      <p>SideBar</p>
      <p>Iznos: </p>
      <p>{iznos}</p>
      <button className='btn' onClick={onNaplata}>
        <SiCashapp />
      </button>
      <button className='btn' onClick={onObrisi}>
        <MdDeleteForever />
      </button>
      <button className='btn' onClick={onNazad}>
        <Link to="/"><IoArrowBackOutline /></Link>
      </button>
    </div>
  )
}

export default SideBar
