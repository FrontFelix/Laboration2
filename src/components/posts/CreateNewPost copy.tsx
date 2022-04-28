import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HandleAddNewPost from "../pappasTest/addNewPostTest";
import TextField from "@mui/material/TextField";
import { useUser } from "../contexts/LoginContext";

export function CreateNewPostTEST() {
  const { fetchPosts } = useUser();

  const formSubmit = () => {
    HandleAddNewPost();
    fetchPosts();
  };

  return (
    <div>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        align="center"
      >
        Add new post
      </Typography>
      <form
        className="createNewPostStyle"
        id="addNewPostForm"
        // onSubmit={HandleAddNewPost}
        onSubmit={formSubmit}
      >
        <div className="UpdateNewPostStyle">
          <TextField
            id="outlined-basic"
            label="Post title"
            variant="outlined"
            required
            autoComplete="off"
            InputLabelProps={{ required: false }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Share your thoughts..."
            multiline
            rows={4}
            required
            InputLabelProps={{ required: false }}
            autoComplete="off"
          />
        </div>
        <Button type="submit" variant="contained">
          Submit new post
        </Button>
      </form>
    </div>
  );
}
