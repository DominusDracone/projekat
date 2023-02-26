import React from 'react'
import StoBtn from "./StoBtn";

function BtnHolder({ dajBroj }) {
    const niz = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div>
            {niz.map((el) => (
                <StoBtn broj={el} dajBroj={dajBroj} />
            ))}
        </div>
    )
}

export default BtnHolder
