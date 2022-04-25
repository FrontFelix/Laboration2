import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HandleAddNewPost from "./pappasTest/addNewPostTest";

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

export function CreateNewPost() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Create new post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new post
          </Typography>
          <form
            className="createNewPostStyle"
            id="addNewPostForm"
            onSubmit={(HandleAddNewPost, handleClose)}
          >
            <label htmlFor="postTitle">Title</label>
            <input type="text" name="title" id="titleInput" required />

            <label htmlFor="postContent">Content</label>
            <input type="text" name="content" id="contentInput" required />
            {/* <button type="submit" id="submitPostButton">
              Add post
            </button> */}
            <Button type="submit" id="submitPostButton" variant="contained">
              Submit new post
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
