import { Card as MuiCard, CardContent } from "@mui/material";
import "./Card.css";

const Card = (props) => {
  return (
    <MuiCard variant="outlined" sx="opacity: 80%; margin: 25px 25px;">
      <CardContent sx="margin: 0;padding: 0px 8px">
        {props.children}
      </CardContent>
    </MuiCard>
  );
};

export default Card;
