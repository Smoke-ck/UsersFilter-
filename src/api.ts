export type IUsers ={
    dob:{age:string,date:string},
    email:string,
    gender:string,
    name:{title:string,first:string,last:string},
    nat:string,
    picture: {large:string,medium:string,thumbnail:string}
}

export type IUsersData ={
   info:{},
   results:Array<IUsers>
}

const API_URL = 'https://randomuser.me/api/?seed=foobar&results=15&inc=gender,email,dob,name,picture,nat';

export const getUsers = async(): Promise<IUsersData> => {
    const responce = await fetch (
        API_URL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        }
    )
    return responce.json();
}
