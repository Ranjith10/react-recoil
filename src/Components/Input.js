import React from 'react'
import { useRecoilState } from 'recoil'

import {nameAtom} from '../State/Atoms'

const Input = () => {

    const [name, setName] = useRecoilState(nameAtom)

    return (
        <div>
            <input 
                onChange = { (e) => setName(e.target.value) }
                type = 'text'
                value = { name }            
            />
        </div>
    )
}

export default Input
