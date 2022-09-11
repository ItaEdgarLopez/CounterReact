import React from 'react';
import './counter.css';

function Contador({ numClicks }) {
    return (
        <div className='contador'>
        {numClicks}
        </div>
    );

    
}

export default Contador;