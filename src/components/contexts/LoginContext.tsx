// @ts-ignore
import { createContext, useContext, useState } from "react";
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
  signOut: () => void;
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
  signOut: () => {},
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
      let data = await response.json();
      setLoggedInUser(data);
      setIsLoggedIn(true);
    } catch {
      setIsLoggedIn(false);
    }
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

  const signOut = async () => {
    let response = fetch(`http://localhost:8080/account/logout`, {
      method: "DELETE",
      credentials: "include",
    });
    setIsLoggedIn(false);
    setLoggedInUser({
      _id: 1,
      username: "wagwan",
      userRealName: "test",
      userPassword: "wagwan",
      isAdmin: true,
    });
    window.location.reload();
  };


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
        signOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
