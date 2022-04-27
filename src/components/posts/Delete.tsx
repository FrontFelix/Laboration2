import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import { DeletePost } from "../pappasTest/deletePost";

const options = [
  'Edit',
  'Delete'
];

const ITEM_HEIGHT = 48;


interface menuProps {
  id : number
}

function LongMenu(menu : menuProps){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event : any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="DENNA ">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
          <div className="delDots">•••</div>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
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
<<<<<<< Updated upstream
          <MenuItem key={option} onClick={() => {console.log('wagwan')}}>
=======
          <MenuItem key={option} onClick={() => console.log('wagwan')}>
>>>>>>> Stashed changes
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default LongMenu