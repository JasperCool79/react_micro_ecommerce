import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
    Grid,
    Badge,
    Avatar
} from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from '../../assets/images/icons/newlogo.png';
  import React, { useState, useEffect } from "react";
  
  const headersData = [
    {
      label: "Listings",
      href: "/listings",
    },
    {
      label: "Mentors",
      href: "/mentors",
    },
    {
      label: "My Account",
      href: "/account",
    },
    {
      label: "Log Out",
      href: "/logout",
    },
  ];
  
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "#400CCC",
      paddingRight: "79px",
      paddingLeft: "118px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
      },
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
      },
      search: {
        paddingTop: 10,
        position: 'relative',
        borderRadius: 2,
        backgroundColor: 'primary',
        '&:hover': {
          backgroundColor: 'secondary',
        },
        marginRight: 2,
        marginLeft: 0,
        width: '100%',
      },
      searchIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: '#ffffff',
      },
      inputInput: {
        padding: 1,
        // vertical padding + font size from searchIcon
        paddingLeft: 25,
        paddingTop: 2,
        width: '100%',
      },

  }));
  
  export default function Header() {
    const { header, logo, menuButton, toolbar, drawerContainer,search, searchIcon,inputInput,inputRoot } = useStyles();
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
    }, []);
  
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          
              
              <Grid container justify="space-between">
                  <Grid item>{femmecubatorLogo}</Grid>
                  <Grid item><div style={{paddingTop: 10}}>{getMenuButtons()}</div></Grid>
                  <Grid item>
                    <div className={search}>
                        <div className={searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: inputRoot,
                            input: inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                  </Grid>
                  <Grid>
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                  </Grid>
              </Grid>
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
  
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
              </Drawer>
              <Grid container justify="space-between">
                  <Grid item><div style={{paddingTop: 8}}>{femmecubatorLogo}</div></Grid>
                  <Grid>
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                  </Grid>
              </Grid>
        </Toolbar>
      );
    };
  
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
          
            <MenuItem>{label}</MenuItem>
        );
      });
    };
  
      const femmecubatorLogo = (
          <Button>
              <img src={Logo} style={{maxWidth: 70,maxHeight: 40,color: 'white',padding: 2}}/>
          </Button>
    //     <Typography variant="h6" component="h1" className={logo}>
    //     MyShop
    //   </Typography>
    );
  
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };
  
    return (
      <header>
        <AppBar className={header} position='relative'>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
  }