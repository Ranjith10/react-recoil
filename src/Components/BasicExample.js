import React from 'react'
import { useRecoilState } from 'recoil'

import { numberArrayAtom, showListAtom } from '../State/Atoms'
import './BasicExample.css'

const BasicExample = () => {
    const [numberList, setNumberList] = useRecoilState(numberArrayAtom)
    const [showList, setShowList] = useRecoilState(showListAtom)

    const addItem = () => {
        let numberArr = [...numberList]
        let newValue = Math.random()
        numberArr = [...numberArr, newValue]
        setNumberList(numberArr)
    }

    return (
        <div className = 'content-card'>
            <div className = 'button-container'>
                <button className = 'add-item' onClick = { () => addItem() }>Add Item</button>
                <button onClick = { () => setShowList(!showList) }>
                    {
                        showList ? 'Hide List' : 'Show List'
                    }
                </button>
            </div>
            <div className = { showList ? 'value-container' : 'value-container hidden' }>
                {
                    numberList.map((number, index) => {
                        return (
                            <div key = { index }>
                                {number}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BasicExample
