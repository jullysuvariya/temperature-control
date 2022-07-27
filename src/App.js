import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function TempertaureControl() {

    const [temp, setTemp] = useState(10);
    const [tempColor, setTempColor] = useState('cold');

    const increseTemp = () => {
        console.log(temp);
        console.log(tempColor);
        setTemp((prev) => prev + 1);
        if (temp >= 15){
            setTempColor('hot');
        }
    }

    const decreseTemp = () => {
        console.log(temp);
        console.log(tempColor);
        setTemp((prev => prev - 1));
        if (temp < 15){
            setTempColor('cold');
        }
    }

  return (
    <div className='app-container'>
        <h1>Tempertaure Control App</h1>
        <div className='temperature-display-container'>
            <div className={`temperature-display ${tempColor}`}>{temp}&deg;C </div>
        </div>
        <div className='button-container'>
            <button onClick={increseTemp}>+</button>
            <button onClick={decreseTemp}>-</button>
        </div>
    </div>
  );
}

export default TempertaureControl;
