import React, { useEffect, useRef, useState } from 'react'
export const UseRef = () => {
    const [name, setName] = useState("");

    // const [renderedCount, setrenderedCount] = useState(0);
    // useEffect(() => {
    //     setrenderedCount(previousRendredCount => previousRendredCount + 1) 
    //     this will rerendered Page and Go to Infinite Loop thats why we have to use useRef
    // })

    const renderedCount = useRef(0);
    useEffect(() => {
        renderedCount.current = renderedCount.current + 1;
    })
    return (
        <div>
            <label htmlFor="inputText" >UseRef</label>
            <input type="text" id='inputText' onChange={(e) => setName(e.target.value)} />

            <div>My name is {name}</div>
            <div>I rendered {renderedCount.current} Time</div>
        </div>
    )
}
