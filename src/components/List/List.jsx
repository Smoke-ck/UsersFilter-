import React from 'react'
import ListItem from '../ListItem/ListItem'
import Filter from '../Filter/Filter'
import { useState, useEffect } from 'react';
import './List.scss'

function List({ users }) {

    const [newUsers, setNewUsers] = useState(users)

    useEffect(() => {
        setNewUsers(JSON.parse(window.localStorage.getItem('newUsers')));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('newUsers', JSON.stringify(newUsers));
    }, [newUsers]);

    const usersfilter = (gender, nationality) => {

        if (gender === "all" && nationality[0] === "all") {
            return setNewUsers(users);
        }
        if (gender === "all" && nationality.length > 0) {
            const userFilter = users.filter(user => nationality.includes(user.nat))
            return setNewUsers(userFilter);
        }
        if (gender === "all") {
            return setNewUsers(users);
        }

        let newUsers = users.filter(user => user.gender === gender);
        setNewUsers(newUsers)

        if (nationality.length && nationality[0] !== 'all') {
            const userFilter = newUsers.filter(user => nationality.includes(user.nat))
            setNewUsers(userFilter)
        }
    }
    return <>
        <Filter usersfilter={usersfilter} />
        <div className="list">
            {newUsers.map((user) => (
                <ListItem
                    key={user.index}
                    user={user} />
            ))}
        </div>
    </>
}

export default List
