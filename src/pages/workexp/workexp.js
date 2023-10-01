import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Navbar from "../../components/Navbar/navbar";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "../../assets/theme.js";
import CodeIcon from "@mui/icons-material/Code";
import InsightsIcon from "@mui/icons-material/Insights";
import CategoryIcon from "@mui/icons-material/Category";
import ConstructionIcon from '@mui/icons-material/Construction';
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import OutlinedCard from "../../components/work_ex_card";
import Slide from "@mui/material/Slide";
import Code from "@mui/icons-material/Code";

export default function WorkExperience() {
  const bigbasket = OutlinedCard("Software Engineer", "Bigbasket", ["Flutter", "Git", "SQL", "JIRA"]);
  const paypal = OutlinedCard("Business Analyst Intern", "PayPal", ["Python", "SQL", "Tableau", "Jupyter Notebook", "NumPy", "Pandas"]);
  const tekie = OutlinedCard("Product Management Intern", "Tekie", ["React.js", "Node.js", "User Interview", "User Journey", "Content"]);
  const thinkTalent = OutlinedCard(
    "Product Management Intern",
    "Think Talent",
    ["UX Research", "User Flows", "Market Research", "Prioritization"]
  );
  const cloudAdmin = OutlinedCard(
    "Teaching Assistant",
    "Carnegie Mellon University - AI Technicians Program",
    ["Microsoft Azure", "Cloud Computing", "Git", "DevOps", "Python", ]
  );
  const techStartup = OutlinedCard(
    "Teaching Assistant",
    "Carnegie Mellon University - Tech Startup Course",
    ["Market Discovery", "Building MVP", "Team Building", "Fundraising"]
  );
  const iSafeVentures = OutlinedCard(
    "Summer Software Engineer Intern",
    "ISAFE Ventures",
    ["React Native", "SQL", "Gitlab", "Firebase", "Postman"]
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Timeline position="alternate">
        <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1500}
          >
            <TimelineItem>
              <TimelineOppositeContent color="#eeba2c">
                <Typography fontFamily={"monospace"}>
                  May 2023 - August 2023
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success">
                  <Code />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent color={"#eeba2c"} width={100}>
                {iSafeVentures}
              </TimelineContent>
            </TimelineItem>
          </Slide>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1500}
          >
            <TimelineItem>
              <TimelineOppositeContent color="#eeba2c">
                <Typography fontFamily={"monospace"}>
                  August 2023 - Present
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success">
                  <ConstructionIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent color={"#eeba2c"} width={100}>
                {techStartup}
              </TimelineContent>
            </TimelineItem>
          </Slide>
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1500}
          >
            <TimelineItem>
              <TimelineOppositeContent color="#eeba2c">
                <Typography fontFamily={"monospace"}>
                  April 2023 - Present
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success">
                  <CloudQueueIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent color={"#eeba2c"} width={100}>
                {cloudAdmin}
              </TimelineContent>
            </TimelineItem>
          </Slide>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1500}
          >
            <TimelineItem>
              <TimelineOppositeContent color="#eeba2c">
                <Typography fontFamily={"monospace"}>
                  July 2022 - December 2022
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success">
                  <CodeIcon color="primary" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent color={"#eeba2c"} width={100}>
                {bigbasket}
              </TimelineContent>
            </TimelineItem>
          </Slide>
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1500}
          >
            <TimelineItem>
              <TimelineOppositeContent color="#eeba2c">
                <Typography fontFamily={"monospace"}>
                  July 2021 - June 2022
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success">
                  <InsightsIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent color={"#eeba2c"} width={100}>
                {paypal}
              </TimelineContent>
            </TimelineItem>
          </Slide>
          <Slide
            direction="right"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1500}
          >
            <TimelineItem>
              <TimelineOppositeContent color="#eeba2c">
                <Typography fontFamily={"monospace"}>
                  July 2020 - April 2022
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success">
                  <CategoryIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent color={"#eeba2c"} width={100}>
                {tekie}
              </TimelineContent>
            </TimelineItem>
          </Slide>
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={1500}
          >
            <TimelineItem>
              <TimelineOppositeContent color="#eeba2c">
                <Typography fontFamily={"monospace"}>
                  May 2021 - July 2021
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success">
                  <CategoryIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent color={"#eeba2c"} width={100}>
                {thinkTalent}
              </TimelineContent>
            </TimelineItem>
          </Slide>
        </Timeline>
      </ThemeProvider>
    </>
  );
}
