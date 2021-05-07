import React from 'react';
import Counter from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {CounterType, increaseAC, resetAC} from "./redux/counter-reducer";


function App() {

    const counter = useSelector<AppRootStateType, CounterType>(state => state.counter)
    const dispatch = useDispatch()

    const increase = () => {
        dispatch(increaseAC())
    }
    const reset = () => {
        dispatch(resetAC())
    }
    return (
        <div>
            <Counter counter={counter}
                     increase={increase}
                     reset={reset}
            />
        </div>
    );
}

export default App;
