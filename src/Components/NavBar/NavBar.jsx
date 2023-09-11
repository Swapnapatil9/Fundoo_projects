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
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
// import AccountCircle from '@mui/icons-material/AccountCircle';
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
  marginLeft: '10px',
  width: '50%', textAlign: 'left', height: '45px',
  [theme.breakpoints.up('sm', 'md')]: {
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
    [theme.breakpoints.up('md', 'sm')]: {
      width: '20ch',
    },
  },
}));

function NavBar({ handleDrawer, ChangeFlex , handleLogout}) {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={()=>{handleMenuClose(); handleLogout()}}>Log Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="normal"
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  //grid Toggle
  const [gToggle, setgToggle] = React.useState(true)
  const GridToggle = () => {
    setgToggle(!gToggle)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='Appbar-container' position="fixed" sx={{ backgroundColor: "white", display: { xs: 'block', sm: 'block' }}}>
        <Toolbar className='Toolbar-container' >
          <IconButton id='menu' size="large" >
            <MenuIcon onClick={() => handleDrawer()} />
          </IconButton>
          
          <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' alt='keep' height={'40px'}></img>
          <Typography
            variant="h6" id='text' noWrap sx={{ display: { xs: 'block', sm: 'none', md:'flex' } }}>
            Keep
          </Typography>

          <Search sx={{ display: { xs: 'none', sm: 'block' } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ color: 'normal', textAlign: 'left' }} />
          </Search>

          <Box sx={{ display: { xs: 'none', sm: 'flex', md:'flex' }, marginLeft:'200px'}}>
            <IconButton size="large" color="normal">
              < RefreshIcon />
            </IconButton>

            <IconButton size="large" onClick={() => { GridToggle(); ChangeFlex() }}>
              {!gToggle ? <GridViewIcon /> : <ViewStreamOutlinedIcon />}
            </IconButton>

            <IconButton size="large" color="normal">
              <SettingsOutlinedIcon />
            </IconButton>

            <IconButton id='app-icon' size="large" color="normal" >
              <AppsOutlinedIcon />
            </IconButton>

            <IconButton
              size="large"
              // edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="normal"
            >
              <AccountCircleOutlinedIcon handleLogout={handleLogout}/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none', sm:'none'} , marginLeft:'300px'}}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="normal"
            >
              <MoreIcon />
            </IconButton>
            </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
export default NavBar