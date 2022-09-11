import './App.css';
import logomio from './imgs/logo-react.svg';
import Botton from './components/button/button';
import Contador from './components/count/counter';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manjarClick = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarCont = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='logo-content'>
        <img 
          className='logo'
          src={logomio}
          alt='Logo de contador'
        />
      </div>
        <div className='contendor-principal'>
        <Contador 
          numClicks={numClics}
        />
        <Botton
          text="Click"
          esBotonDeClick={true}
          manjarClick={manjarClick}

        />
        <Botton 
        text="Reset"
        esBotonDeClick={false}
        manjarClick={reiniciarCont}
        />

        </div>
    </div>
  );
}

export default App;
