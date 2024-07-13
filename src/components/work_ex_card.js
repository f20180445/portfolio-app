import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled, useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";

const card = (jobTitle, company, skills) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography fontFamily={"monospace"} variant="h5" component="div" color="primary">
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
                width: "100%",
                fontWeight: "bolder",
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </React.Fragment>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
  [theme.breakpoints.down('sm')]: {
    width: '120%', // Make card take 90% width on small screens
    margin: '10px auto', // Adjust margin for small screens, centered horizontally
  },
  [theme.breakpoints.up('md')]: {
    width: '90%', // Set fixed width for medium and up screens
    margin: 50,
    marginBottom: 10,
    marginTop: -10,
  },
}));

export default function OutlinedCard(jobTitle, company, skills) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledCard
      variant="outlined"
      style={{
        color: "black",
        background: "#264143",
        marginBottom: isSmallScreen ? 10 : 10,
        marginTop: isSmallScreen ? 10 : -10,
      }}
    >
      {card(jobTitle, company, skills)}
    </StyledCard>
  );
}
