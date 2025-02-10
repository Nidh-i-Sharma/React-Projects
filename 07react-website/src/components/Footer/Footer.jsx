import React from "react";
import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        {/* Footer Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <Link href="#" color="inherit" underline="none">
            About
          </Link>
          <Link href="#" color="inherit" underline="none">
            Services
          </Link>
          <Link href="#" color="inherit" underline="none">
            Contact
          </Link>
          <Link href="#" color="inherit" underline="none">
            Privacy Policy
          </Link>
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <IconButton color="inherit" href="#">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="#">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="#">
            <LinkedInIcon />
          </IconButton>
        </Box>

        {/* Copyright Text */}
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} My Website. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
