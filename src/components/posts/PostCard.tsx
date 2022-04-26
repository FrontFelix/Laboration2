import * as React from "react";
<<<<<<< Updated upstream:src/components/posts/PostCard.jsx

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const PostCard = ({ post }) => {
=======
import LongMenu  from "../posts/Delete";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DeletePost } from "../pappasTest/deletePost";
import { postInterface } from "../interface/interface";



function PostCard(props : postInterface) {

>>>>>>> Stashed changes:src/components/posts/PostCard.tsx
  return (
    <div className="post">
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.post.author}
          </Typography>
          <Typography variant="h5" component="div">
            {props.post.postTitle}
          </Typography>
<<<<<<< Updated upstream:src/components/posts/PostCard.jsx
          <Typography variant="body2">{post.content}</Typography>
        </CardContent>
      </React.Fragment>
=======
          <Typography variant="body2">{props.post.content}</Typography>
          <button onClick={() => DeletePost(props.post._id)}>testTaBort</button>
        </CardContent>
      </React.Fragment>
      <LongMenu id={props.post._id}/>
>>>>>>> Stashed changes:src/components/posts/PostCard.tsx
    </div>
  );
}

export default PostCard

