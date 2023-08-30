import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import muiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "./MiniDrawer.css"

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const Drawer = styled(muiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    border:'2px solid blue',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function MiniDrawer({open}) {

  const navList = [
    { id: 1, name: 'Notes', icon: <LightbulbOutlinedIcon /> },
    { id: 2, name: 'Reminders', icon: <NotificationsOutlinedIcon /> },
    { id: 3, name: 'Edit Labels', icon: <EditOutlinedIcon /> },
    { id: 4, name: 'Archive', icon: <ArchiveOutlinedIcon /> },
    { id: 5, name: 'Trash', icon: <DeleteOutlinedIcon /> }
  ]
  
  return (
    <Box sx={{ display: 'flex', position: 'relative' ,border:'2px solid red'}}>
     
      <Drawer variant="permanent" className='drawer' open={open} sx={{border:'2px solid red'}} >
        
        <List className='list'>
          {
            navList.map(list => (
              <ListItem id='hovericon' button key={list.id}>
                <ListItemIcon>
                  {list.icon}
                </ListItemIcon>
                <ListItemText primary={list.name} />
              </ListItem>
            ))}
        </List>
      </Drawer>
    </Box>
   
  );
}
export default MiniDrawer
