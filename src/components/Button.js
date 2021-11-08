
import React from 'react'

const Button = ({onClick, start}) => {
    return (
        <div>
            <button onClick={onClick} type ='submit'>+{start}</button>
        </div>
    )
}

export default Button
