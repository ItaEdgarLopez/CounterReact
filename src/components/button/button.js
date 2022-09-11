import React from 'react';
import './button.css'


function Botton({ text, esBotonDeClick, manjarClick }) {
  return (
    <button
    className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
    onClick={manjarClick}
    >
      {text}
    </button>
  );
}


export default Botton;