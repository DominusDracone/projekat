import React from 'react'
import { Link } from "react-router-dom";

function StoBtn({ broj, dajBroj }) {
    return (
        <div className='stoBtn'>
            <Link to='/sto'><button className='StoBtn' onClick={() => dajBroj(broj)}>{broj}</button></Link>
        </div>
    )
}

export default StoBtn
