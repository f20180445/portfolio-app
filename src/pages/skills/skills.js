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

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import CodeIcon from "@mui/icons-material/Code";
import InsightsIcon from "@mui/icons-material/Insights";
import CategoryIcon from "@mui/icons-material/Category";
import ConstructionIcon from "@mui/icons-material/Construction";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

import Software from "../skills/softwareProjects"
import TitlebarBelowImageList from "./testComponent.js";
import ProjectOutlinedCard from "../../components/projects_card.js";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));




const p1 = ProjectOutlinedCard(
  "Summer Software Engineer Intern",
  "ISAFE Ventures",
  ["React Native", "SQL", "Gitlab", "Firebase", "Postman"]
);

const Skills = () => {
  const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};
  const skills = OutlinedCard("Skills");
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
    <div class="tab-stretch">
        <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
      style={{
        width: "100%",
        background: "#264143",
        color: "#dcd6c1",
      }}
      variant="fullWidth"
      // textColor="secondary"
      // indicatorColor="primary"
      
      
    >
      <Tab icon={<CodeIcon />} label="Software" style={{
        width: "100%", color: "#dcd6c1",
      }} />
      <Tab icon={<InsightsIcon />} label="Data" style={{
        width: "100%", color: "#dcd6c1",
      }}/>
      <Tab icon={<CategoryIcon />} label="Product" style={{
        width: "100%", color: "#dcd6c1",
      }}/>
    </Tabs>
    </div>
      { value == 0 ? <TitlebarBelowImageList tabName='software'/>
        : value == 1 ? <TitlebarBelowImageList tabName='data'/>
        : value == 2 ? <TitlebarBelowImageList tabName='product'/>
        : <></>
      }
      </ThemeProvider>
    </>
  );
};

export default Skills;
