import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";


function Home() {
 
  return (
    <>
    <div>
    <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ marginLeft: "13%" }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  marginLeft: "15%",
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,

                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                FlipKart
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography>Explore</Typography>
                <Typography sx={{ marginLeft: "5%" }}>Plus</Typography>
              </Box>
            </Box>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "45%",
                marginLeft: "3%",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for Products Brand, and More"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <Button sx={{background:"white" ,color:"blue" ,padding:"0.6%" ,marginLeft:"2%"}}>
              Login
            </Button>
            <Typography sx={{marginLeft:"3%",fontSize:"1.3rem"}}>
              Become a seller
            </Typography>
            <Typography sx={{marginLeft:"3%",fontSize:"1.2rem"}}>
              More
            </Typography>
            <Typography sx={{marginLeft:"3%",fontSize:"1.2rem"}}>
              Cart
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
     
    </>
  );
}

export default Home;
