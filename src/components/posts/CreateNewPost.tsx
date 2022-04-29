import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useUser } from "../contexts/LoginContext";
import HandleAddNewPost from "../functions/addNewPost";

export function CreateNewPost() {
  const { fetchPosts } = useUser();

  const formSubmit = () => {
    HandleAddNewPost();
    fetchPosts();
    setTimeout(() => {
      window.location.reload()
    }, 100)
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
        id="addNewPostFormTEST"
        // onSubmit={HandleAddNewPost}
        onSubmit={formSubmit}
      >
          <TextField
            id="titleInput"
            label="Post title"
            variant="outlined"
            required
            autoComplete="off"
            InputLabelProps={{ required: false }}
          />
          <TextField
            id="contentInput"
            label="Share your thoughts..."
            multiline
            rows={4}
            required
            InputLabelProps={{ required: false }}
            autoComplete="off"
          />
        <Button type="submit" variant="contained">
          Submit new post
        </Button>
      </form>
    </div>
  );
}
