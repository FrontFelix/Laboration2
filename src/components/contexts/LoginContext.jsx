// import { createContext, useContext, useState } from "react";

// export const LoginContex = createContext({
//     loggedInUserData: {},
//     FetchLoggedInUser: () => {}
// })



// export const LoginProvider = async () => {
//     let [loggedInUserData, setLoggedInUserData] = useState()

//     let FetchLoggedInUser = async () => {
//         let response = await fetch("http://localhost:8080/login", {
//           method: "GET"
//         });
//         let data = await response.json()
//         setLoggedInUserData(data)
//     }


//     return (
//         <LoginContex.Provider
//         value={{
//             loggedInUserData, FetchLoggedInUser
//         }}
//         >
//         </LoginContex.Provider> 
//     )
    
// }


// export const useUser = () => useContext(LoginContex)