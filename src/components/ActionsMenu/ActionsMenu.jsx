import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

const ActionsMenu = ({
  showMenu,
  handleAdd,
  handleRemove,
  handleStart,
  handleReset,
  handleMenuClose,
  handleZoomIn,
  handleZoomOut,
}) => {
  return showMenu ? (
    <Paper
      sx={{
        width: 50,
        maxWidth: '100%',
        position: 'absolute',
        top: 0,
        right: -60,
      }}
    >
      <MenuList>
        {handleAdd && (
          <MenuItem onClick={handleAdd}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
          </MenuItem>
        )}

        {handleRemove && (
          <MenuItem onClick={handleRemove}>
            <ListItemIcon>
              <RemoveIcon />
            </ListItemIcon>
          </MenuItem>
        )}

        {handleStart && (
          <MenuItem onClick={handleStart}>
            <ListItemIcon>
              <PlayArrowIcon />
            </ListItemIcon>
          </MenuItem>
        )}

        {handleReset && (
          <MenuItem onClick={handleReset}>
            <ListItemIcon>
              <ReplayIcon />
            </ListItemIcon>
          </MenuItem>
        )}

        {handleZoomIn && (
          <MenuItem onClick={handleZoomIn}>
            <ListItemIcon>
              <ZoomInIcon />
            </ListItemIcon>
          </MenuItem>
        )}

        {handleZoomOut && (
          <MenuItem onClick={handleZoomOut}>
            <ListItemIcon>
              <ZoomOutIcon />
            </ListItemIcon>
          </MenuItem>
        )}

        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <CloseIcon />
          </ListItemIcon>
        </MenuItem>
      </MenuList>
    </Paper>
  ) : null;
};

export default ActionsMenu;
