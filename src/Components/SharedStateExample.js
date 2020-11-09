import React from 'react'

import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'
import './BasicExample.css'
import './Counter.css'

const SharedStateExample = () => {
    return (
        <div className = 'content-card'>
            <div className = 'content-title'>
                Counters with shared state using an Atom and the [useRecoilState] Hook
            </div>
            <div className = 'counter-container'>
                <CounterOne />
                <CounterTwo />
            </div>
        </div>
    )
}

export default SharedStateExample
