// @ts-ignore
import { createContext, FC, useContext, useState } from "react";
import { userInterface } from "../interface/interface";



interface UserContext {
    loggedInUser : userInterface,
    fetchUser : (user : userInterface) => void,
}

export const UserContext = createContext<UserContext>({
    loggedInUser : {
      _id: 1,
      username: "wagwan",
      userRealName: "test",
      userPassword: "wagwan",
      isAdmin: true,
    },
    fetchUser: (user : userInterface) => {},
});

export function UserProvider(props : any) {

    const [loggedInUser, setLoggedInUser] = useState({
      _id: 1,
      username: "wagwan",
      userRealName: "test",
      userPassword: "wagwan",
      isAdmin: true,
    })

    const fetchUser = async (data : userInterface) => {
      setLoggedInUser(data)
    }

  return (
    <UserContext.Provider value={{loggedInUser, fetchUser}}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);