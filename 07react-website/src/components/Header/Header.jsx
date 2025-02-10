import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/services" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Header Section */}
      <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          {/* Logo / Title */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>

          {/* Navigation Links (Desktop) */}
          <div className="nav-links" sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((text) => (
              <Button key={text} color="inherit">
                {text}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer (Side Menu) */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      <List>
          {navLinks.map(({ text, path }) => (
            <ListItem button key={text} component={Link} to={path} onClick={toggleDrawer(false)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
