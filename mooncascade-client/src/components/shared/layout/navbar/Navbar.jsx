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
import BookingButton from "../../buttons/BookingButton";
import Logo from "../../logo/Logo";


const pages = [{
  key:"our-work",
  label:"Our Work",
},{
  key:"services",
  label:"Services",
},
{
  key:"career",
  label:"Career"
},
{
  key:"about-us",
  label:"About Us",
},
{
  key:"contact-us",
  label:"Contact Us",
},{
  key:"blog",
  label:"Blog",
}];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {

  
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
      if (position > 700) {
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
    <AppBar position="static" className={`bg-primary_gray font-primary_font fixed left-0 right-0 z-50 transition-all duration-500 ${showNav ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <Container maxWidth="xl" className="bg-primary_gray">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } ,cursor:"pointer" }}>
            <Logo height={160} width={160}/>
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
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <a href={`/${page.key}`}>
                   <Typography textAlign="center">{page.label}</Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Image src="/logo.png" alt="logo" width={200} height={200}/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },justifyContent:"center"}}>
            {pages.map((page) => (
              <a key={page.key} href={`/${page.key}`}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
              </a>
            ))}
          </Box>
          <BookingButton/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
