import React from 'react'
import { PerentContext } from '../ContextApi/PerentContext'
import { useContext } from 'react'
export const ChildB = () => {
    const { LastName, SetLastName } = useContext(PerentContext)
    return (
        <>
            <div>childB {LastName}</div>
            <button onClick={() => { SetLastName("Changing last Name And all state 😃 ") }}>Change Last Name</button>
        </>
    )
}
