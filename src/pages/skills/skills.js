import React from "react";
import Navbar from "../../components/Navbar/navbar.js";

import { ThemeProvider, Typography } from "@mui/material";
import theme from "../../assets/theme.js";
import OutlinedCard from "../../components/skills_card";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const baseballImage = require("../../assets/images/baseball_1.png");
const Skills = () => {
  const skills = OutlinedCard("Skills");
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />

        <Grid container spacing={5} columns={24}>
          <Grid item xs={8}>
            <Slide
              direction="right"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={1500}
            >
              <Typography
                mt={10}
                // mr={50}
                ml={10}
                width="75%"
                fontFamily={"monospace"}
                variant="h4"
                component={"h3"}
                color={"white"}
              >
                {/* <img src={mumbaiImage} alt="mumbai" width="200%" style={{
                borderRadius:"10%"
              }}/> */}
                <iframe
                  src="https://drive.google.com/file/d/1P21z07BHijHDQgNKGEevJUWYqGVuEE1j/preview"
                  width="540"
                  height="280"
                  style={{
                    borderRadius: "10%",
                  }}
                ></iframe>
              </Typography>
            </Slide>
          </Grid>
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1500}
          >
            <Grid item xs={16}>
              <Grid item xs={8}>
                <Typography
                  mt={10}
                  ml={40}
                  width="150%"
                  fontFamily={"monospace"}
                  variant="h4"
                  component={"h3"}
                  color={"white"}
                >
                  <a
                    href="https://github.com/f20180445/search_engine"
                    target="_blank"
                    style={{
                      color: "#dcd6c1",
                      textDecoration: "none",
                    }}
                  >
                    1. Instagram LLM Search Engine
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Slide>
        </Grid>

        <Grid container spacing={5} columns={24}>
          <Grid item xs={8}>
            <Slide
              direction="right"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={1500}
            >
              <Typography
                mt={10}
                // mr={50}
                ml={10}
                width="75%"
                fontFamily={"monospace"}
                variant="h4"
                component={"h3"}
                color={"white"}
              >
                <a
                  href="https://drive.google.com/drive/folders/1o-BvqsDup6rSG7DI0j7yF3Was2sK3nfD?usp=sharing"
                  target="_blank"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={baseballImage}
                    alt="mumbai"
                    width="540"
                    height="280"
                    style={{
                      borderRadius: "10%",
                    }}
                  />{" "}
                </a>
              </Typography>
            </Slide>
          </Grid>
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1500}
          >
            <Grid item xs={16}>
              <Grid item xs={8}>
                <Typography
                  mt={10}
                  ml={40}
                  width="150%"
                  fontFamily={"monospace"}
                  variant="h4"
                  component={"h3"}
                  color={"white"}
                >
                  <a
                    href="https://drive.google.com/drive/folders/1o-BvqsDup6rSG7DI0j7yF3Was2sK3nfD?usp=sharing"
                    target="_blank"
                    style={{
                      color: "#dcd6c1",
                      textDecoration: "none",
                    }}
                  >
                    2. Baseball App{" "}
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Slide>
        </Grid>

        <Grid container spacing={5} columns={24}>
          <Grid item xs={8}>
            <Slide
              direction="right"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={1500}
            >
              <Typography
                mt={10}
                // mr={50}
                ml={10}
                width="75%"
                fontFamily={"monospace"}
                variant="h4"
                component={"h3"}
                color={"white"}
              >
                <iframe
                  width="540"
                  height="280"
                  style={{
                    borderRadius: "10%",
                  }}
                  src="https://www.youtube.com/embed/qQwYqAtldx0"
                  title="DFP Z2_Group9"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Typography>
            </Slide>
          </Grid>
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1500}
          >
            <Grid item xs={16}>
              <Grid item xs={8}>
                <Typography
                  mt={10}
                  ml={40}
                  width="150%"
                  fontFamily={"monospace"}
                  variant="h4"
                  component={"h3"}
                  color={"white"}
                >
                  <a
                    href="https://drive.google.com/drive/folders/1vz3B-EHS49HoezMopypt53UqLxhVkTE5?usp=sharing"
                    target="_blank"
                    style={{
                      color: "#dcd6c1",
                      textDecoration: "none",
                    }}
                  >
                    3. Project Big Jab{" "}
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Slide>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Skills;
