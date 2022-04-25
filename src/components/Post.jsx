import * as React from "react";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const PostCard = ({ post }) => {
  return (
    <div class="postContainer">
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {post.author}
          </Typography>
          <Typography variant="h5" component="div">
            {post.postTitle}
          </Typography>
          <Typography variant="body2">{post.content}</Typography>
        </CardContent>
      </React.Fragment>
    </div>
  );
};
