import React from "react";
import Navbar from "../../components/Navbar/navbar.js";
import { useTypingText } from "../../components/useTypingText.js";
import { Grid, Typography, Button, ThemeProvider } from "@mui/material";
import Slide from "@mui/material/Slide";
import theme from "../../assets/theme.js";

const jainamImage = require("../../assets/images/jainam.png");
const Home = () => {
  const { word, stop, start } = useTypingText(
    [
      "Software Engineer.",
      "Music Lover.",
      "Product Manager.",
      "Business Analyst.",
    ],
    50,
    20
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="home-page">
          <Navbar />
          <Grid container spacing={5} columns={24}>
            <Slide
              direction="right"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={1500}
            >
              <Grid item xs={16}>
                <Grid container spacing={5} columns={8}>
                  <Grid item xs={8}>
                    <Typography
                      mt={20}
                      ml={25}
                      width="75%"
                      fontFamily={"monospace"}
                      variant="h4"
                      component={"h3"}
                      color={"white"}
                    >
                      Hey! <br />
                      This is <span style={{ color: "#eeba2c" }}>Jainam</span>,
                      nice to meet you. <br />I am a{" "}
                      <span style={{ color: "#eeba2c" }}>{word}</span>
                    </Typography>
                  </Grid>

                  <Grid item xs={8}>
                    <Typography
                      ml={25}
                      fontFamily={"monospace"}
                      variant="h3"
                      component={"h3"}
                      color={"white"}
                    >
                      <Button
                        color="primary"
                        href="/"
                        style={{
                          background: "#eeba2c",
                          fontFamily: "monospace",
                          fontSize: 20,
                        }}
                      >
                        <strong>Hit me up!</strong>
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Slide>
            <Grid item xs={8}>
              <Slide
                direction="up"
                in={true}
                mountOnEnter
                unmountOnExit
                timeout={1500}
              >
                <img src={jainamImage} alt="jainam" height="50%" />
              </Slide>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Home;
