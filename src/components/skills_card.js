import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const card = (title) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography fontFamily={"monospace"} variant="h5" component="div" align="center">
          {title}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
}));

export default function OutlinedCard(title) {
  return (
    // <Box width={20} margin={1000} padding={1000}>
    <StyledCard
      width={200}
      margin={1000}
      variant="outlined"
      style={{
        color: "black",
        background: "#eeba2c",
        margin: 50,
        marginBottom: 10,
        marginTop: -10,
      }}
    >
      {card(title)}
    </StyledCard>
    // </Box>
  );
}
