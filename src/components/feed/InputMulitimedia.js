import React from 'react'
import './InputMulitimedia.css'

function InputMulitimedia({Icon, title, color}) {
    return (
        <div className="inputMulitimedia">
            <Icon style={{color:color}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputMulitimedia
