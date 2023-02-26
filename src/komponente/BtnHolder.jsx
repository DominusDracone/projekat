import React from 'react'
import StoBtn from "./StoBtn";

function BtnHolder() {
    const niz = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div>
            {niz.map((el) => (
                <a href="/sto"><StoBtn Broj={el} /></a>
            ))}
            {/* <StoBtn Broj={1} /> */}
        </div>
    )
}

export default BtnHolder
