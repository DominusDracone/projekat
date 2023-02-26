import React from 'react'

function StoBtn({ broj, dajBroj }) {
    return (
        <div className='stoBtn'>
            <button className='StoBtn' onClick={() => dajBroj(broj)}>{broj}</button>
        </div>
    )
}

export default StoBtn
