import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UpdatePost } from "./UpdatePost";
import { useUser } from "../contexts/LoginContext";
import { DeletePost } from "../pappasTest/deletePost";
import MoreVertIcon  from "@mui/icons-material/MoreVert";

const options = ["Edit", "Delete"];

const ITEM_HEIGHT = 48;

interface menuProps {
  id: number;
}

function LongMenu(menu: menuProps) {
  const { openEditModal, editModal } = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => {
              if (option === "Edit") {
                openEditModal();
              }
              if (option === "Delete") {
                DeletePost(menu.id);
                window.location.reload();
              }
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      <UpdatePost id={menu.id} />
    </div>
  );
}

export default LongMenu;
