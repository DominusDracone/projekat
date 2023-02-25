import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5"
import { MdDeleteForever } from "react-icons/md"
import { SiCashapp } from "react-icons/si"

function SideBar() {
  return (
    <div className='SideBar'>
      <p>SideBar</p>
      <p>Iznos</p>
      <button className='btn'>
        <SiCashapp />
      </button>
      <button className='btn'>
        <MdDeleteForever />
      </button>
      <button className='btn'>
        <IoArrowBackOutline />
      </button>
    </div>
  )
}

export default SideBar
