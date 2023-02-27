import React from 'react';
import StoBtn from "./StoBtn";
import '../App.css';

function BtnHolder({ dajBroj }) {
    return (
        <div className='BtnHolder'>
            <div className="st1"><StoBtn broj={1} dajBroj={dajBroj} /></div>
            <div className="st2"><StoBtn broj={2} dajBroj={dajBroj} /></div>
            <div className="st3"><StoBtn broj={3} dajBroj={dajBroj} /></div>
            <div className="st4"><StoBtn broj={4} dajBroj={dajBroj} /></div>
            <div className="st5"><StoBtn broj={5} dajBroj={dajBroj} /></div>
            <div className="st6"><StoBtn broj={6} dajBroj={dajBroj} /></div>
            <div className="st7"><StoBtn broj={7} dajBroj={dajBroj} /></div>
            <div className="st8"><StoBtn broj={8} dajBroj={dajBroj} /></div>
        </div>
    )
}

export default BtnHolder
