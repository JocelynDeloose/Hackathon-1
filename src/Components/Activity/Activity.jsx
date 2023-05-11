import ActivityCards from "../ActivityCards/ActivityCards";
import photoCinema from "../../assets/cinema.jpg";
import photoEscape from "../../assets/escape.jpg";
import photoCourse from "../../assets/coursedorientation.jpg";
import photoHide from "../../assets/hideandseek.jpeg";
import photoImmun from "../../assets/immunity.jpeg";
import photoChasse from "../../assets/chasseautresor.jpg";
import styles from "./Activity.module.css";

const arrayOfActivity = [
  {
    name: "Escape Room",
    img: `${photoEscape}`,
    description:
      "Your team and you have to espace of this room, for this you have to resolve somme mystery",
    durée: "1h30",
  },
  {
    name: "cinema",
    img: `${photoCinema}`,
    description: "some horror movies for you",
    durée: "~2h",
  },
  {
    name: "Immunity",
    img: `${photoImmun}`,
    description: "it's a fight for win the immunity",
    durée: "1H",
  },
  {
    name: "orienteering",
    img: `${photoCourse}`,
    description: "this is a race in the wood, only one winner",
    durée: "3h",
  },
  {
    name: "treasure hunt",
    img: `${photoChasse}`,
    description:
      "During your stay, you can find two items, don't forget this, may be them save you...",
    durée: "all time",
  },
  {
    name: "hide and seek",
    img: `${photoHide}`,
    description: "During this game, you have to hide you, we seek you",
    durée: "1h",
  },
];

export default function Activity() {
  return (
    <div className={styles.container}>
      {arrayOfActivity.map((item) => (
        <ActivityCards
          key={item.name}
          name={item.name}
          img={item.img}
          description={item.description}
          durée={item.durée}
        />
      ))}
    </div>
  );
}
