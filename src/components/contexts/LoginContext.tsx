// @ts-ignore
import { createContext, FC, useContext, useState } from "react";
import { userInterface } from "../interface/interface";

interface UserContext {
    loggedInUser : userInterface | {},
    fetchUser : () => void,
}

export const UserContext = createContext<UserContext>({
    loggedInUser : {},
    fetchUser: () => {}
});

export const UserProvider: FC = (props) => {

    const [loggedInUser, setLoggedInUser] = useState({})

    const fetchUser = () => {

    }

  return (
    <UserContext.Provider value={{loggedInUser, fetchUser}}>
      <h1>wagwan</h1>
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);