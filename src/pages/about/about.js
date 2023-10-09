import React from "react";
import Navbar from "../../components/Navbar/navbar.js";
import { Grid, Typography } from "@mui/material";
import Slide from "@mui/material/Slide";

const mumbaiImage = require("../../assets/images/mumbai.avif");
const About = () => {
  return (
    <div className="about-page">
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
            <Grid item xs={8}>
              <Typography
                mt={20}
                ml={10}
                width="150%"
                fontFamily={"monospace"}
                variant="h4"
                component={"h3"}
                color={"white"}
              >
                Born and brought up in Mumbai, India.
              </Typography>
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
            <Typography
              mt={20}
              mr={50}
              ml={-30}
              width="75%"
              fontFamily={"monospace"}
              variant="h4"
              component={"h3"}
              color={"white"}
            >
              <img
                src={mumbaiImage}
                alt="mumbai"
                width="200%"
                style={{
                  borderRadius: "10%",
                }}
              />
            </Typography>
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
