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
import { ListItemButton } from '@mui/material';

const drawerWidth = 200;

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
    border: '2px solid blue',
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

function MiniDrawer({ open, getData, setTypeOfNotes }) {
  const navList = [
    { id: 1, name: 'Notes', icon: <LightbulbOutlinedIcon /> },
    { id: 2, name: 'Reminders', icon: <NotificationsOutlinedIcon /> },
    { id: 3, name: 'Edit Labels', icon: <EditOutlinedIcon /> },
    { id: 4, name: 'Archive', icon: <ArchiveOutlinedIcon /> },
    { id: 5, name: 'Trash', icon: <DeleteOutlinedIcon /> }
  ]

  return (
    <Box sx={{ position: 'relative', display: { xs: 'block', sm: 'block' ,alignItems:'flex-start'} }}>

      <Drawer variant="permanent" className='drawer' open={open} >

        <List className='list'>
          {navList?.map(list => {
            return (
              <ListItem id='hovericon' key={list.id}>
                <ListItemButton onClick={() => setTypeOfNotes(list.name)}>
                  <ListItemIcon>
                    {list.icon}
                  </ListItemIcon>
                  <ListItemText primary={list.name} getData={getData} />
                </ListItemButton>
              </ListItem>
            )
          }

          )}
        </List>
      </Drawer>
    </Box>

  );
}
export default MiniDrawer
