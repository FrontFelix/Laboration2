import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HandleAddNewPost from "../pappasTest/addNewPostTest";
import TextField from "@mui/material/TextField";
import { useUser } from "../contexts/LoginContext";
import HandleUpdatePost from "../pappasTest/UpdatePost";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface menuProps {
  id: number;
}

export function UpdatePost(props: menuProps) {
  const { editModal, closeEditModal, fetchPosts } = useUser();

  const [titleValue, setTitleValue] = React.useState("");
  const [contentValue, setContentValue] = useState("");

  const formSubmit = (e: any) => {
    closeEditModal();
    HandleUpdatePost(e, props.id, titleValue, contentValue);
    window.location.reload();
  };

  return (
    <div>
      <Modal
        open={editModal}
        onClose={closeEditModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            Edit post
          </Typography>
          <form
            className="UpdateNewPostStyle"
            id="UpdatedPostForm"
            // onSubmit={HandleAddNewPost}
            onSubmit={formSubmit}
          >
            <label htmlFor="UpdatedPostTitle">Title</label>
            <TextField
              onChange={(e) => setTitleValue(e.target.value)}
              id="UpdatedPostTitle"
              variant="standard"
            />
            <label htmlFor="UpdatedContentTitle">Content</label>
            <TextField
              onChange={(e) => setContentValue(e.target.value)}
              id="UpdatedContentTitle"
              variant="outlined"
              multiline
              maxRows={10}
            />
            <Button type="submit" variant="contained">
              Save edit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
