import React, { FC } from 'react'
import { useState } from 'react';
import './Filter.scss'

type IUsersFilter = {
    usersfilter: (gender:string,nationality:string[]) => void
}

const Filter:FC<IUsersFilter> = ({ usersfilter }) => {

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
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form__filters">
                <select onChange={handleGender} size={4} className='form__filter form__genderFilter'>
                    <option disabled>Gender</option>
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <select
                    value={nationality}
                    onChange={handleNationality}
                    multiple={true}
                    size={4}
                    className='form__filter form__nationalityFilter'>
                    <option disabled>Nationality</option>
                    <option value="all">All</option>
                    <option value="AU">AU</option>
                    <option value="BR">BR</option>
                    <option value="CA">CA</option>
                    <option value="CH">CH</option>
                    <option value="DE">DE</option>
                    <option value="DK">DK</option>
                    <option value="ES">ES</option>
                    <option value="FI">FI</option>
                    <option value="FR">FR</option>
                    <option value="GB">GB</option>
                    <option value="IE">IE</option>
                    <option value="IR">IR</option>
                    <option value="NO">NO</option>
                    <option value="NL">NL</option>
                    <option value="NZ">NZ</option>
                    <option value="TR">TR</option>
                    <option value="US">US</option>
                </select>
            </div>
            <p className="form__info">Please select gender</p>
            <input type="submit" value="Apply filters" disabled={disable} className="form__button" />
        </form>
    )
}

export default Filter
