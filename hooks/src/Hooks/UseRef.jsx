import React, { useEffect, useRef, useState } from 'react'
export const UseRef = () => {
    const [name, setName] = useState("");
    //           1
    // const [renderedCount, setrenderedCount] = useState(0);
    // useEffect(() => {
    //     setrenderedCount(previousRendredCount => previousRendredCount + 1) 
    //     this will rerendered Page and Go to Infinite Loop thats why we have to use useRef
    // })


    //          2
    // const renderedCount = useRef(0);
    // useEffect(() => {
    //     renderedCount.current = renderedCount.current + 1;
    // })

    //       3
    // we can store whole object in useRef
    const inputRef = useRef();
    function focus(){
        console.log(inputRef.current);
        inputRef.current.focus();
    } 
    return (
        <div>
            <label htmlFor="inputText" >UseRef</label>
            <input  type="text" ref={inputRef} onChange={(e) => setName(e.target.value)} />

            <div>My name is {name}</div>
            <button onClick={()=>focus()}>Focus</button>
        </div>
    )
}
