import { createContext, FC, useContext, useEffect, useState } from "react";

interface PostContext {
  updatedPostInfoContent: {};
  UpdatePostInfo: () => void;
}

export const PostContex = createContext<PostContext>({
  updatedPostInfoContent: {
    title: "hejhej title",
    content: "hejhej content",
  },
});


export function PostProvider(props : any) {




    return (
        <PostContex.Provider value ={{updatedPostInfoContent, UpdatePostInfo}}
    )
}

export const useUser = () => useContext(PostContex)