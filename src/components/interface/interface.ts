export interface postInterface {
    _id : number,
    postTitle : string,
    author : string,
    content : string
}

export interface userInterface {
    _id : number, 
    username : string,
    userRealName : string,
    userPassword : string,
    isAdmin : boolean
    
}