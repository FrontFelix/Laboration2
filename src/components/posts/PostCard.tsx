import * as React from "react";
import LongMenu from "./LongMenu";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import { DeletePost } from "../pappasTest/deletePost";
import { postInterface } from "../interface/interface";
import { useUser } from "../contexts/LoginContext";

interface postCard {
  post: postInterface;
}

function PostCard(props: postCard) {
  const { loggedInUser } = useUser();
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
        </CardContent>
      </React.Fragment>
      {props.post.author === loggedInUser.username && (
        <LongMenu id={props.post._id} />
      )}
    </div>
  );
}

export default PostCard;
