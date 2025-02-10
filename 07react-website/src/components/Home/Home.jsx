import React from "react";
import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ py: 4, textAlign: "center" }}>
      <Typography variant="h4">Welcome to My Website</Typography>
      <Typography variant="body1">This is the Home Page.</Typography>
    </Container>
  );
};

export default Home;
