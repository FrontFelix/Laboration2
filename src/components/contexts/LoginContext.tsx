// @ts-ignore
import { createContext, FC, useContext, useEffect, useState } from "react";
import { postInterface, userInterface } from "../interface/interface";

interface UserContext {
  loggedInUser: userInterface;
  fetchUser: () => void;
  isLoggedIn: boolean;
  fetchPosts: () => void;
  posts: postInterface[];
  editModal: boolean;
  closeEditModal: () => void;
  openEditModal: () => void;
}

export const UserContext = createContext<UserContext>({
  loggedInUser: {
    _id: 1,
    username: "wagwan",
    userRealName: "test",
    userPassword: "wagwan",
    isAdmin: true,
  },
  fetchUser: () => {},
  isLoggedIn: false,
  fetchPosts: () => {},
  posts: [],
  editModal: false,
  closeEditModal: () => {},
  openEditModal: () => {},
});

export function UserProvider(props: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({
    _id: 1,
    username: "wagwan",
    userRealName: "test",
    userPassword: "wagwan",
    isAdmin: true,
  });

  const fetchUser = async () => {
    try {
      let response = await fetch("http://localhost:8080/account/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      // console.log(await loginUser())
      let data = await response.json();
      setLoggedInUser(data);
      setIsLoggedIn(true);
    } catch {
      setIsLoggedIn(false);
    }
    // console.log(data)
  };

  const fetchPosts = async () => {
    let data = fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const closeEditModal = () => {
    setEditModal(false);
  };
  const openEditModal = () => {
    setEditModal(true);
  };

  // useEffect(() => {
  //   fetchUser()
  // })

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        fetchUser,
        isLoggedIn,
        posts,
        fetchPosts,
        closeEditModal,
        openEditModal,
        editModal,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
