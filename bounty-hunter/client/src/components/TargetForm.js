import React, { useState } from 'react'

function TargetForm(props) {
    const initInput = {
        fName: props.fName || '',
        lName: props.lName || '',
        eliminated: false,
        bounty: props.bounty || '',
        type: props.type || ''
    }

    const [input, setInput] = useState(initInput)

    function handleChange(e) {
        const { name, value } = e.target
        setInput(prevInput => ({ ...prevInput, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(input, props._id)
        setInput(initInput)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='fName'
                value={input.fName}
                onChange={handleChange}
                placeholder='First Name' />
            <input
                type='text'
                name='lName'
                value={input.lName}
                onChange={handleChange}
                placeholder='Last Name' />
            <input
                type='text'
                name='bounty'
                value={input.bounty}
                onChange={handleChange}
                placeholder='Bounty Amount' />
            <input
                type='text'
                name='type'
                value={input.type}
                onChange={handleChange}
                placeholder='Sith or Jedi?' />
            <button>{props.btnText}</button>
        </form>
    )
}

export default TargetForm