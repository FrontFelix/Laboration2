// @ts-ignore
import { createContext, FC, useContext, useState } from "react";
import { userInterface } from "../interface/interface";



interface UserContext {
    loggedInUser : userInterface,
    fetchUser : () => void,
}

export const UserContext = createContext<UserContext>({
    loggedInUser : {
      _id: 1,
      username: "test",
      userRealName: "test",
      userPassword: "wagwan",
      isAdmin: true,
    },
    fetchUser: () => {},
});

export function UserProvider(props : any) {

    const [loggedInUser, setLoggedInUser] = useState({
      _id: 1,
      username: "test",
      userRealName: "test",
      userPassword: "wagwan",
      isAdmin: true,
    })

    const fetchUser = async () => {
      let response = await fetch('http://localhost:8080/login', {
        method: "GET"
      })
      let data = await response.json()
      setLoggedInUser(data)
    }

  return (
    <UserContext.Provider value={{loggedInUser, fetchUser}}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);