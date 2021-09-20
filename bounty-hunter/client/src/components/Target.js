import React, { useState } from 'react'
import TargetForm from './TargetForm'

function Target(props) {
    const { fName, lName, bounty, type, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className='target'>
            {!editToggle ?
                <>
                    <h1>{fName} {lName}</h1>
                    <p>{bounty}</p>
                    <p>{type}</p>
                    <button
                        onClick={() => props.deleteTarget(_id)}
                        className='delete-btn'>Delete
                    </button>
                    <button
                        className='edit-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
                :
                <>
                    <TargetForm
                        fName={fName}
                        lName={lName}
                        bounty={bounty}
                        type={type}
                        _id={_id}
                        btnText='Submit Edit'
                        submit={props.editTarget}
                    />
                    <button
                        className='close-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    )
}

export default Target