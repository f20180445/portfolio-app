import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Navbar from "../../components/Navbar/navbar";
import { ThemeProvider, Typography, useMediaQuery, Grid } from "@mui/material";
import theme from "../../assets/theme.js";
import CodeIcon from "@mui/icons-material/Code";
import InsightsIcon from "@mui/icons-material/Insights";
import CategoryIcon from "@mui/icons-material/Category";
import ConstructionIcon from "@mui/icons-material/Construction";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import OutlinedCard from "../../components/work_ex_card";
import Slide from "@mui/material/Slide";
import Code from "@mui/icons-material/Code";

export default function WorkExperience() {
  const bigbasket = OutlinedCard("Software Engineer", "Bigbasket", [
    "Flutter",
    "Git",
    "SQL",
    "JIRA",
  ]);
  const paypal = OutlinedCard("Business Analyst", "PayPal", [
    "Python",
    "SQL",
    "Tableau",
    "Jupyter Notebook",
    "NumPy",
    "Pandas",
  ]);
  const tekie = OutlinedCard("Product Manager", "Tekie", [
    "React.js",
    "Node.js",
    "User Interview",
    "User Journey",
    "Content",
  ]);
  const thinkTalent = OutlinedCard(
    "Product Manager",
    "Think Talent",
    ["UX Research", "User Flows", "Market Research", "Prioritization"]
  );
  const cloudAdmin = OutlinedCard(
    "Teaching Assistant",
    "Carnegie Mellon University - AI Technicians Program",
    ["Microsoft Azure", "Cloud Computing", "Git", "DevOps", "Python"]
  );
  const techStartup = OutlinedCard(
    "Teaching Assistant",
    "Carnegie Mellon University - Tech Startup Course",
    ["Market Discovery", "Building MVP", "Team Building", "Fundraising"]
  );
  const iSafeVentures = OutlinedCard(
    "Software Engineer",
    "ISAFE Ventures",
    ["React Native", "SQL", "Gitlab", "Firebase", "Postman"]
  );
  const bny = OutlinedCard(
    "Senior Associate Data Scientist",
    "BNY (Bank of New York)",
    ['GenAI', 'LLM', 'Data Analytics', 'SQL', 'Data Visualization']
  );

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid container justifyContent="center">
          <Timeline position={isSmallScreen ? "left" : "alternate"} style={{}}>
          <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      July 2024 - Present
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <ConstructionIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {bny}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      July 2021 - June 2022
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      May 2023 - August 2023
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator color="#264143">
                  <TimelineDot color="secondary">
                    <Code color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector color="#264143" sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {iSafeVentures}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      May 2023 - August 2023
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      July 2021 - June 2022
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <ConstructionIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {paypal}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      July 2021 - June 2022
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      July 2022 - December 2022
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator color="#264143">
                  <TimelineDot color="secondary">
                    <CloudQueueIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {bigbasket}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      July 2022 - December 2022
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      April 2023 - May 2024
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <CodeIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {cloudAdmin}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      April 2023 - May 2024
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      August 2023 - December 2023
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <InsightsIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {techStartup}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      August 2023 - December 2023
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      July 2020 - April 2022
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <CategoryIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {tekie}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      July 2020 - April 2022
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1500}>
              <TimelineItem>
                {!isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      May 2021 - July 2021
                    </Typography>
                  </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <CategoryIcon color="primary" />
                  </TimelineDot>
                  {!isSmallScreen && <TimelineConnector sx={{ background: "#264143" }} />}
                </TimelineSeparator>
                <TimelineContent color={"#62b0a5"} width={100}>
                  {thinkTalent}
                </TimelineContent>
                {isSmallScreen && (
                  <TimelineOppositeContent color="#264143">
                    <Typography fontFamily={"monospace"} style={{ marginTop: 10 }}>
                      May 2021 - July 2021
                    </Typography>
                  </TimelineOppositeContent>
                )}
              </TimelineItem>
            </Slide>
          </Timeline>
        </Grid>
      </ThemeProvider>
    </>
  );
}
