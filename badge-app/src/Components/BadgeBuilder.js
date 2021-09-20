import React from 'react'

function BadgeBuilder(props) {
    return(
        <div>
            <p>First Name: {props.badge.fName}</p>
            <p>Last Name: {props.badge.lName}</p>
            <p>Email: {props.badge.email}</p>
            <p>Place of Birth: {props.badge.birthPlace}</p>
            <p>Phone Number: {props.badge.phone}</p>
            <p>Favorite Food: {props.badge.favFood}</p>
            <p>A little something about me: {props.badge.bio}</p>
            <hr/>
        </div>
    )
}

export default BadgeBuilder