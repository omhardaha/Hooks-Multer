import React from 'react'
import { PerentContext } from '../ContextApi/PerentContext'
import { useContext } from 'react'
export const ChildA = () => {

    const { firstName } = useContext(PerentContext)
    return (
        <div>childA {firstName}</div>
    )
}
