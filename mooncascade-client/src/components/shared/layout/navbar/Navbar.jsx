/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Logo from "../../logo/Logo";
import SmallBookingButton from "../../buttons/SmallBookingButton";
import data from "../../../../content/media.json";

function Navbar({handleOpen}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [showNav, setShowNav] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      // console.log(document.documentElement.scrollTop)
      if (position >= 700) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar data-aos="fade-up" position="static" sx={{ bgcolor: '#1F5757' }} className={`bg-primary_black font-primary_font fixed left-0 right-0 z-50 transition-all duration-500 ${showNav ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } ,cursor:"pointer" }}>
            <Logo data-aos="fade-up" height={40} width={200}/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {data.pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <a href={`/${page.key}`}>
                   <Typography textAlign="center">{page.label.toLowerCase()}</Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
   
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },justifyContent:"center"}}>
            {data.pages.map((page) => (
              <a key={page.key} href={`/${page.key}`} >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ borderRadius:0, marginX: "2rem", marginY:"1rem", minWidth:'max-content' , color: "white", display: "block" ,textTransform: 'none',":hover":{borderBottom:"1px solid white"}}}
              >
                {page.label}
              </Button>
              </a>
            ))}
          </Box>
          <SmallBookingButton handleOpen={handleOpen}/>
          <Box sx={{ flexGrow: 1, justifyContent:"end" , display: { xs: "flex", md: "none" } }}>
             <Logo data-aos="fade-up" height={20} width={120}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
