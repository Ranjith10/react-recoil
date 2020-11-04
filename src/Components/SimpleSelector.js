import React from 'react'
import { selector, useRecoilState, useRecoilValue } from 'recoil'

import {numberAtom} from '../State/Atoms'

const isNumberEven = selector({
    key: 'isEven',
    get: ({ get }) => {
        const number = get(numberAtom)
        let isEven = number % 2 === 0
        return isEven ? 'Even' : 'Odd'
    }
})

const SimpleSelector = () => {

    const [number, setNumber] = useRecoilState(numberAtom)
    const isEven = useRecoilValue(isNumberEven)

    return (
        <div>
            <input 
                onChange = { e => setNumber(e.target.value) }
                type = 'number'
                value = { number }
            />
            <div>
                The given {number} is {isEven}
            </div>
        </div>
    )
}

export default SimpleSelector
