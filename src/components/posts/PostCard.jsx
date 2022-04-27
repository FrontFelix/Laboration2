import * as React from "react";
import {LongMenu}  from "../posts/Delete";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DeletePost } from "../pappasTest/deletePost";

export const PostCard = ({ post }) => {

  return (
    <div className="post">
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {post.author}
          </Typography>
          <Typography variant="h5" component="div">
            {post.postTitle}
          </Typography>
          <Typography variant="body2">{post.content}</Typography>
          <button onClick={() => DeletePost(post._id)}>testTaBort</button>
        </CardContent>
      </React.Fragment>
      <LongMenu id={post._id}/>
    </div>
  );
};
