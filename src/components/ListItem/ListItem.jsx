import React from 'react'
import './ListItem.scss'

function ListItem({ user}) {
    const {gender,name,picture,dob,nat,email} = user;
    const date = dob.date.slice(0,10)
    return (
        <div className="listItem">
            <img src={picture.large} alt="" className="listItem__image"/>
            <h3>{name.first} {name.last}</h3>
            <p>{gender}</p>
            <p>{date}</p>
            <p>{email}</p>
            <p>nationality: {nat}</p>
        </div>
    )
}

export default ListItem
