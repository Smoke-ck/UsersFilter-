   import React, { FC } from 'react'
import ListItem from '../ListItem/ListItem'
import Filter from '../Filter/Filter'
import { useState, useEffect } from 'react';
import './List.scss'
import { getFilterUsers, IUsers } from '../../api';

type IUsersList = {
    users: Array<IUsers>
}

const List: FC<IUsersList> = ({ users }) => {

    const genderData = ['All', 'Male', 'Female'];
    const nationalityData = ['All','AU','BR','CA','CH','DE','DK','ES','FI','FR','GB','IE','IR','NO','NL','NZ','TR','US'];
    const [newUsers, setNewUsers] = useState(users)

    

    useEffect(() => {
        setNewUsers(JSON.parse(window.localStorage.getItem('newUsers') || '[]'));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('newUsers', JSON.stringify(newUsers));
    }, [newUsers]);

    const usersfilter = (gender: string , nationality: string[]) => {
        const nat = nationality.join().toLowerCase();
        getFilterUsers(gender,nat).then(data => setNewUsers(data.results))
    }

    return <>
        <Filter 
        usersfilter={usersfilter} 
        genderData={genderData}
        nationalityData={nationalityData}/>
        <div className="list">
            {newUsers.map((user) => (
                <ListItem
                    key={user.dob.date}
                    user={user} />
            ))}
        </div>
    </>
}

export default List