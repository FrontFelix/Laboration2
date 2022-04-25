import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HandleAddNewPost from "../pappasTest/addNewPostTest";
import TextField from "@mui/material/TextField";

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
      <Button variant="contained" onClick={handleOpen}>
        Create new post
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
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
            Add new post
          </Typography>
          <form
            className="createNewPostStyle"
            id="addNewPostForm"
            onSubmit={HandleAddNewPost}
            // onSubmit={(HandleAddNewPost, handleClose)}
          >
            <label htmlFor="postTitle">Title</label>
            <TextField id="titleInput" variant="standard" />
            <label htmlFor="postContent">Content</label>
            <TextField
              id="contentInput"
              variant="outlined"
              multiline
              maxRows={10}
            />
            <Button type="submit" variant="contained">
              Submit new post
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
