import * as React from "react";
import LongMenu  from "../posts/Delete";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import { DeletePost } from "../pappasTest/deletePost";
import { postInterface } from "../interface/interface";



function PostCard(props : postInterface) {

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
          <Typography variant="body2">{props.post.content}</Typography>
          <button onClick={() => console.log('wagwan')}>testTaBort</button>
        </CardContent>
      </React.Fragment>
      <LongMenu id={props.post._id}/>
    </div>
  );
}

export default PostCard

