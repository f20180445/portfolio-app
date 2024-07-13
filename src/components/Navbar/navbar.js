import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  ThemeProvider,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../../assets/theme.js";
import { Link } from "react-router-dom";
import { TimelineConnector } from "@mui/lab";

const jainamLogo = require("../../assets/images/jainam_logo_7.png");

const Navbar = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div style={{backgroundColor: '#264143', height: '100%'}}>
      <List>
        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
          <Typography fontFamily={'monospace'} color={'#dcd6c1'}> Home </Typography>
        </ListItem>
        <ListItem button component={Link} to="/work-experience" onClick={handleDrawerToggle}>
          <Typography fontFamily={'monospace'} color={'#dcd6c1'}> Work Experience </Typography>
        </ListItem>
        <ListItem button component={Link} to="/skills" onClick={handleDrawerToggle}>
          <Typography fontFamily={'monospace'} color={'#dcd6c1'}> Projects </Typography>
        </ListItem>
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        color="success"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(38, 65, 67, 0),
          rgba(38, 65, 67, 1))`,
        }}
      >
        <Toolbar>
          <img
            src={jainamLogo}
            alt="jainam"
            width={60}
            style={{ marginLeft: isMobile ? 0 : 50 }}
          />
          <Typography
            fontFamily={"cursive"}
            color={"black"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            marginBottom={-1}
            marginLeft={-3}
          ></Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Stack direction="row" spacing={7} marginLeft={10}>
              <Link to="/">
                <Button color="primary">
                  <Typography fontFamily={"monospace"} fontSize={20}>
                    <strong>Home</strong>
                  </Typography>
                </Button>
              </Link>
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
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
