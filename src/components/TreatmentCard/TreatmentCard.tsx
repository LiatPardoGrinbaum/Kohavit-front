import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type treatmentsCardType = {
  id?: string;
  title: string;
  content: string;
  link: string;
  image: string;
};

const TreatmentCard = (props: treatmentsCardType) => {
  return (
    <Card
      className="cardHover"
      sx={{
        maxWidth: 350,
        direction: "rtl",
        transition: "all 0.5s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}>
      <CardMedia sx={{ height: 200 }} image={props.image} title="eyebrows" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">גלי עוד</Button>
      </CardActions>
    </Card>
  );
};

export default TreatmentCard;
