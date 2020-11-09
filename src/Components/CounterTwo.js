import React from 'react'
import { useRecoilState } from 'recoil'

import {sharedGlobalCounter} from '../State/Atoms'
import './Counter.css'

const CounterTwo = () => {
    const [globalCount, setGlobalCount] = useRecoilState(sharedGlobalCounter)
    
    return (
        <div className = 'counter-wrapper'>
            <label className = 'counter-label'>Counter</label>
            <div classNamea = 'counter-button-container'>            
                <button className = 'counter-button' onClick = { () => setGlobalCount(v => v - 1) }>-</button>
                <label>{globalCount}</label>
                <button className = 'counter-button' onClick = { () => setGlobalCount(v => v + 1) }>+</button>
            </div>       
        </div>
    )
}

export default CounterTwo
