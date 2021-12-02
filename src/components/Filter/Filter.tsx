import React, { FC } from 'react'
import { useState } from 'react';
import './Filter.scss'

type IUsersFilter = {
    usersfilter: (gender:string,nationality:string[]) => void
    genderData:string[]
    nationalityData:string[]
}

const Filter:FC<IUsersFilter> = ({ usersfilter, genderData, nationalityData }) => {

    const [gender, setGender] = useState('')
    const data: string[] = [];
    const [nationality, setNationality] = useState(data)
    const [disable, setdisable] = useState(true)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        usersfilter(gender, nationality);
    }

    const handleGender = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value)
        setdisable(false)
    }

    const handleNationality = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let element = e.target.value;
        if (nationality.includes(element)) {
            const newNationality = nationality.filter((value) => value !== element);
            return setNationality(newNationality)
        }
        setNationality([...nationality, element])
        setdisable(false)
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form__filters">
                <select onChange={handleGender} size={4} className='form__filter form__genderFilter'>
                    <option disabled>Gender</option>
                    {genderData.map(value => <option value={value}>{value}</option>)}
                </select>
                <select
                    value={nationality}
                    onChange={handleNationality}
                    multiple={true}
                    size={4}
                    className='form__filter form__nationalityFilter'>
                    <option disabled>Nationality</option>
                    {nationalityData.map(value => <option value={value}>{value}</option>)}
                </select>
            </div>
            <p className="form__info">Please select filter</p>
            <input type="submit" value="Apply filters" disabled={disable} className="form__button" />
        </form>
    )
}

export default Filter
