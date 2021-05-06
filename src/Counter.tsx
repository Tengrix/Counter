import React from 'react';
import './App.css';
import s from './App.module.css'
import {CounterType} from "./redux/counter-reducer";

type counterType = {
    counter: CounterType;
    increase: () => void
    reset: () => void;
}

function Counter(props: counterType) {
    let counterClassName = props.counter === 5 ? s.counter : ''
    return (
        <div className={s.App}>
            <div className={counterClassName}>
                <h3 className={s.newCounter}>{props.counter}</h3>
            </div>
            <span>
        <button className={s.btn} disabled={props.counter === 5} onClick={()=>{props.increase()}}>inc</button>
      </span>
            <button className={s.btn} disabled={props.counter === 0} onClick={()=>{props.reset()}}>reset
            </button>
        </div>
    );
}

export default Counter;
