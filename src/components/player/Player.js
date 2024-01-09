import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "react-bootstrap";

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <Card>
      <CardImg src={imageUrl} style={{ height: "350px" }} />
      <CardBody>
        <CardTitle>name: {name}</CardTitle>
        <CardSubtitle>Equipe: {team}</CardSubtitle>
        <CardText>age: {age}</CardText>
        <CardText>Nationality: {nationality}</CardText>
        <CardText>Numero:{jerseyNumber} </CardText>
      </CardBody>
    </Card>
  );
}
Player.defaultProps = {
  name: "default",
  team: "default",
  nationality: "default",
  jerseyNumber: "default",
  age: "default",
  imageUrl: "default",
};
export default Player;
