import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  ThemeProvider,
} from "@mui/material";
import theme from "../../assets/theme.js";
import { Link } from "react-router-dom";

const jainamLogo = require("../../assets/images/jainam_logo_6.png");
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
            <img
              src={jainamLogo}
              alt="jainam"
              width={60}
              style={{
                marginLeft: 50,
              }}
            />
            {/* <strong>Jainam Gala</strong> */}
          </Typography>

          <Stack direction="row" spacing={7} marginLeft={10}>
            <Link to="/">
              <Button color="primary">
                <Typography fontFamily={"monospace"} fontSize={20}>
                  <strong>Home</strong>
                </Typography>
              </Button>
            </Link>
            {/* <Button color="primary" href="about">
              <Typography fontFamily={"monospace"} fontSize={20}>
                <strong>About</strong>
              </Typography>
            </Button> */}
            <Link to="/work-experience">
              <Button color="primary">
                <Typography fontFamily={"monospace"} fontSize={20}>
                  <strong>Work Experience</strong>
                </Typography>
              </Button>
            </Link>
            <Link to="/skills">
              <Button color="primary">
                <Typography fontFamily={"monospace"} fontSize={20}>
                  <strong>Projects</strong>
                </Typography>
              </Button>
            </Link>
            {/* <Button color="primary" href="/">
              <Typography fontFamily={"monospace"} fontSize={20}>
                <strong>Let's Work</strong>
              </Typography>
            </Button> */}
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;
