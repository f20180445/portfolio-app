import React from "react";
import Navbar from "../../components/Navbar/navbar.js";
import { UseTypingText } from "../../components/useTypingText.js";
import { Grid, Typography, Button, ThemeProvider } from "@mui/material";
import Slide from "@mui/material/Slide";
import theme from "../../assets/theme.js";
import { InstagramEmbed } from "react-social-media-embed";
import {
  faInstagram,
  faGithub,
  faSteam,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.scss";
import { SpotifyNowPlaying } from "../../components/Spotify/displaySpotify.js";
const jainamImage = require("../../assets/images/jainam.png");
const Home = () => {
  const { word, stop, start } = UseTypingText(
    [
      "Software Engineer.",
      "Music Lover.",
      "Product Manager.",
      "Business Analyst.",
    ],
    50,
    20
  );
  const words = [
    "Software Engineer.",
    "Music Lover.",
    "Product Manager.",
    "Business Analyst.",
  ];
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
                      mt={15}
                      ml={25}
                      width="75%"
                      fontFamily={"monospace"}
                      variant="h4"
                      component={"h3"}
                      color={"white"}
                    >
                      Hey! <br />
                      {/* This is <span style={{ color: "#62b0a5" }}>Jainam</span>, */}
                      This is <span style={{ color: "#62b0a5" }}>Jainam</span>,
                      nice to meet you. <br />I am a{" "}
                      <span style={{ color: "#62b0a5" }}>{word}</span>
                      {/* <span style={{ color: "#62b0a5" }}>
                        <UseTypingText words={words} />
                      </span> */}
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
                      {/* <Button
                        color="primary"
                        // href="/"
                        style={{
                          // background: "#62b0a5",
                          background: "#62b0a5",
                          fontFamily: "monospace",
                          fontSize: 20,
                        }}
                      >
                        <strong>Hit me up!</strong>
                      </Button> */}
                      <div class="social-container">
                        {/* <span style={{fontSize:25}}>Socials </span><br/> */}
                        <a
                          href="https://www.instagram.com/jainamxgala/"
                          target="_blank"
                          className="instagram social"
                        >
                          <FontAwesomeIcon icon={faInstagram} size="1x" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/jainam-gala-278b9b1b3/"
                          target="_blank"
                          className="linkedin social"
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            size="1x"
                            color="#62b0a5"
                          />
                        </a>
                        <a
                          href="https://github.com/f20180445?tab=repositories"
                          target="_blank"
                          className="github social"
                        >
                          <FontAwesomeIcon icon={faGithub} size="1x" />
                        </a>
                        <a
                          href="https://steamcommunity.com/id/baaphutera/"
                          target="_blank"
                          className="steam social"
                        >
                          <FontAwesomeIcon icon={faSteam} size="1x" />
                        </a>
                      </div>

                      <SpotifyNowPlaying />
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
                {/* <img src={jainamImage} alt="jainam" height="50%" style={{
                  backgroundColor:"#62b0a5",
                  borderRadius:"10%",
                  borderColor:"#000",
                  borderWidth:10,
                  marginTop:10
                }} /> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#62b0a5",
                    borderRadius: "10%",
                    borderColor: "#000",
                    // borderWidth:10,
                    marginTop: 100,
                    marginRight: 25,
                    width: 400,
                  }}
                >
                  <InstagramEmbed
                    url="https://www.instagram.com/p/CiIiVpohndg/"
                    width={328}
                    height={600}
                  />
                </div>
              </Slide>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Home;
