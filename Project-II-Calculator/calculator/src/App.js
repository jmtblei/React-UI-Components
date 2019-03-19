import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonsContainer from './components/ButtonComponents/ButtonContainer';
import ActionContainer from './components/ButtonComponents/ActionContainer';

const App = () => {
  return (
    <React.Fragment>
      <div className="calculatorcontainer">
        <CalculatorDisplay text="0"/>
        <div className="allbuttonscontainer">
          <ButtonsContainer />
          <ActionContainer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
