import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
      {" "}
      <CardActionArea href={props.link}>
        <CardMedia sx={{ height: 200 }} image={props.image} title="eyebrows" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>

        <Button size="small">גלי עוד</Button>
      </CardActionArea>
    </Card>
  );
};

export default TreatmentCard;
