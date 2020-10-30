import React from 'react'
import { useRecoilValue } from 'recoil'

import { nameAtom } from '../State/Atoms'

const Name = () => {
    const name = useRecoilValue(nameAtom)
    return (
        <div>
            The input is {name}.<br />
            This is updated via useRecoilValue
        </div>
    )
}

export default Name
