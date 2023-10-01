import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  ThemeProvider,
} from "@mui/material";
import theme from "../../assets/theme.js";

const jainamLogo = require("../../assets/images/jainam_logo_3.png");
const Navbar = () => {
  return (
    
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="success">
        <Toolbar>
          <Typography
            fontFamily={"cursive"}
            color={"black"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            marginBottom={-1}
            marginLeft={-3}
          >
                      <img src={jainamLogo} alt="jainam" height={60}/>
            {/* <strong>Jainam Gala</strong> */}
          </Typography>

          <Stack direction="row" spacing={7} marginLeft={10}>
            <Button color="primary" href="/">
              <Typography fontFamily={"monospace"} fontSize={20}>
                <strong>Home</strong>
              </Typography>
            </Button>
            <Button color="primary" href="about">
              <Typography fontFamily={"monospace"} fontSize={20}>
                <strong>About</strong>
              </Typography>
            </Button>
            <Button color="primary" href="/work-experience">
              <Typography fontFamily={"monospace"} fontSize={20}>
                <strong>Work Experience</strong>
              </Typography>
            </Button>
            <Button color="primary" href="/skills">
              <Typography fontFamily={"monospace"} fontSize={20}>
                <strong>Skills & Projects</strong>
              </Typography>
            </Button>
            <Button color="primary" href="/">
              <Typography fontFamily={"monospace"} fontSize={20}>
                <strong>Let's Work</strong>
              </Typography>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;