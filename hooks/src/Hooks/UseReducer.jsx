import React, { useState, useReducer } from 'react'
export const UseReducer = () => {
    const [changes, setChange] = useState("Click Action")
    function reducer(countObj, action) {
        // console.log(action);
        setChange(action.payload.name);
        if (action.type === 'decrement') {
            return { count: countObj.count - 1 }
        } else {
            return { count: countObj.count + 1 }
        }
    }
    const [countObj, dispatch] = useReducer(reducer, { count: 10 });
    function increment() {
        dispatch({ type: 'increment', payload: { name: "increment" } });
    }
    function decrement() {
        dispatch({ type: 'decrement', payload: { name: "decrement" } });
        //we can payload as a argument....
    }
    return (
        <>
            <div>
                UseReducer
            </div>
            <button onClick={decrement}> Decrement </button>
            <span style={{ margin: "50px" }}>{countObj.count} {changes}</span>
            <button onClick={increment}> Increment </button>
        </>
    )
}
