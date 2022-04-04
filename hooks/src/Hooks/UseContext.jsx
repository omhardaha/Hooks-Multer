import React, { useContext, useEffect, useState } from 'react'

import { ChildA } from './UseContextChild/childA'
import { ChildB } from './UseContextChild/childB'
import { PerentContext } from './ContextApi/PerentContext'
export const UseContext = () => {
    let firstName = "omHardaha";
    // let LastName = "Hardaha"
    const [LastName, SetLastName] = useState("Hardaha")
    return (
        <>
            <div>
                UseContext
            </div>
            <PerentContext.Provider value={{ firstName, LastName, SetLastName }}>
                <ChildA />
                <ChildB />
            </PerentContext.Provider>
        </>
    )
}
