import './Root.css';

import * as React from 'react';
import {Outlet, useNavigate} from "react-router";

import {CSSObject, styled, Theme, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Dashboard, Logout, Settings} from "@mui/icons-material";
import {Avatar} from "@mui/material";
import {deepOrange} from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
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

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
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

export default function Root() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const user = sessionStorage.getItem("user")!;

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleDrawerItemIcons(pathName: string) {
    if (pathName === 'Dashboard') return <Dashboard/>
    else if (pathName === 'Settings') return <Settings/>
  }

  function handleDrawerItemPath(pathName: string) {
    navigate(pathName);
  }

  function handleLogout() {
    sessionStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <AppBar position="fixed" open={open} sx={{backgroundColor: '#0e0e10'}}>
        <Toolbar className="toolbar">
          <div className="toolbarLeft">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && {display: 'none'}),
              }}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <div style={{fontFamily: 'roboto'}}>Scout</div>
            </Typography>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Avatar sx={{bgcolor: deepOrange[500]}}>{Array.from(user)[0].toUpperCase()}</Avatar>
            <label style={{color: 'white', fontSize: '16px', marginLeft: '8px', marginRight: '16px'}}>
              Hello, {user}
            </label>
            <Logout onClick={handleLogout}/>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}
              PaperProps={{
                sx: {
                  backgroundColor: "#202023"
                }
              }}>
        <DrawerHeader>
          <IconButton sx={{color: '#8f8f8f'}} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{backgroundColor: '#0e0e10'}}/>
        <List sx={{color: '#e1e1e1'}}>
          {['Dashboard', 'Settings'].map((text) => (
            <ListItem key={text} disablePadding sx={{display: 'block'}}>
              <ListItemButton
                onClick={() => handleDrawerItemPath(text.toLowerCase())}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#8f8f8f'
                  }}
                >
                  {handleDrawerItemIcons(text)}
                </ListItemIcon>
                <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <DrawerHeader/>
        <Outlet/>
      </Box>
    </Box>
  );
}