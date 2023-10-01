import React from "react";
import Navbar from "../../components/Navbar/navbar.js";

import { ThemeProvider, Typography } from "@mui/material";
import theme from "../../assets/theme.js";
import OutlinedCard from "../../components/skills_card";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Skills = () => {
  const skills = OutlinedCard("Skills");
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <br /> <br />
        {skills}
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={2} md={2}>
              <Item>
                xs=2 <br /> smd
              </Item>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
              <Item>
                xs=2 <br /> smd
              </Item>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
      
    </>
  );
};

export default Skills;
