import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import TitlebarBelowImageList from "../pages/skills/testComponent";

const projectCard = (jobTitle, company, skills) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography
          fontFamily={"monospace"}
          variant="h5"
          component="div"
          color="primary"
        >
          <b>{company}</b>
        </Typography>
        <Typography fontFamily={"monospace"} sx={{ mb: 1.5 }} color="#dcd6c1">
          {jobTitle}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              variant="outlined"
              style={{
                color: "#264143",
                borderColor: "black",
                backgroundColor: "#dcd6c1",
                fontSize: 10,
                width: "30%",
                fontWeight: "bolder",
              }}
            />
          ))}
        </Stack>
        {/* <Typography fontFamily={"monospace"} variant="body2">
          {skills}
        </Typography> */}
      </CardContent>
    </React.Fragment>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
}));

export default function ProjectOutlinedCard(jobTitle, company, skills) {
  return (
    // <Box width={20} margin={1000} padding={1000}>
    <StyledCard
      width={200}
      margin={1000}
      variant="outlined"
      style={{
        color: "black",
        // background: "#62b0a5",
        background: "#264143",
        margin: 50,
        marginBottom: 10,
        marginTop: -10,
      }}
    >
      {projectCard(jobTitle, company, skills)}
    </StyledCard>
    // </Box>
  );
}
