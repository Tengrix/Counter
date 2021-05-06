import React, {useState} from 'react';
import './App.css';
import s from './App.module.css'

type counterType = number;

function App() {

    const [counter, setCounter] = useState<counterType>(0)
    let counterClassName = counter===5?s.counter:''
    return (
        <div className="App">
            <div className={counterClassName}>
                {counter}
            </div>
            <span>
        <button disabled={counter===5} onClick={() => {
            setCounter(counter + 1)
        }}>inc</button>
      </span>
            <button disabled={counter===0} onClick={() => {
                setCounter(0)
            }}>reset
            </button>
        </div>
    );
}

export default App;
