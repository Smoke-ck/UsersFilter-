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
    
    
    const API_URL = "https://randomuser.me/api/?results=15&inc=email,dob,name,picture,gender,nat"
    
    export const getUsers = async(): Promise<IUsersData> => {
    
        const responce = await fetch (
            API_URL, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'},
            }
        )
        return responce.json();
    }
    
    
    export const getFilterUsers = async(gender:string, nat:string): Promise<IUsersData> => {
        
        const responce = await fetch (   
            `${ API_URL}&${`gender=${gender}`}&${`nat=${nat}`}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'},
            }
        )
        return responce.json();
    }