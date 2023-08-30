import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './NavBar.css'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  color: 'black',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'whitesmoke',
  '&:hover': {
    backgroundColor: 'whitesmoke',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '60%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    // width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function NavBar({ handleDrawer,ChangeFlex}) {
  
  //grid Toggle
  const [gToggle, setgToggle] = React.useState(true)
  const GridToggle = () => {
    setgToggle(!gToggle)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='Appbar-container' position="fixed" sx={{ backgroundColor: "white" }}>
        <Toolbar className='Toolbar-container'>
          <IconButton id='menu' size="large" edge="start" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon onClick={()=>handleDrawer()} />
          </IconButton>

          <Typography
            variant="h6" id='text' noWrap sx={{ display: { xs: 'none', sm: 'block' } }}>
            Reminders
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search', color: 'normal',textalign:'left' }} />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" color="normal">
              < RefreshIcon />
            </IconButton>

            <IconButton size="large" onClick={() => { GridToggle(); ChangeFlex() }}>
              {!gToggle ? <GridViewIcon /> : <ViewStreamOutlinedIcon />}
            </IconButton>

            <IconButton size="large" color="normal">
              <SettingsOutlinedIcon />
            </IconButton>

            <IconButton id='app-icon' size="large" color="normal">
              <AppsOutlinedIcon />
            </IconButton>

            <IconButton size="large">
              <AccountCircleOutlinedIcon />
            </IconButton>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar