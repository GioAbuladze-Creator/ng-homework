export interface User {
    email:string,
    password:string,
    nickname:string,
    phone:string,
    website:string,
    deleteMode?:boolean,
    authorized?:boolean
}