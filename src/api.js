const API_URL = 'https://randomuser.me/api/?seed=foobar&results=15&inc=gender,email,dob,name,picture,nat';

export const getUsers = async() => {
    const responce = await fetch (
        API_URL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        }
    )
    return responce.json();
}
