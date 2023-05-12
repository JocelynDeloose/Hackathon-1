import photoCinema from "../../assets/cinema.jpg";
import photoEscape from "../../assets/escape.jpg";
import photoCourse from "../../assets/coursedorientation.jpg";
import photoHide from "../../assets/hideandseek.jpeg";
import photoImmun from "../../assets/immunity.jpeg";
import photoChasse from "../../assets/chasseautresor.jpg";
import styles from "./Activity.module.css";

const arrayOfActivity = [
  {
    name: "Escape Game",
    img: `${photoEscape}`,
    description:
      "Vous et votre équipe devaient trouver la clé permettant d'ouvrir la porte de sortie en resolvant tous un tas d'enigmes plus torduent les une des autres",
    durée: "1h30",
  },
  {
    name: "Cinema",
    img: `${photoCinema}`,
    description: "Un choix de film d'horreur à vous faire frissonner",
    durée: "~2h",
  },
  {
    name: "Immunité",
    img: `${photoImmun}`,
    description:
      "L'épreuve la plus froide de cette aventure, battez-vous pour la réussir",
    durée: "1H",
  },
  {
    name: "Course d'orientation",
    img: `${photoCourse}`,
    description:
      "Une course d'orientation à travers une foret où vous n'avez pas envie de vous retrouvez seul",
    durée: "3h",
  },
  {
    name: "Chasse aux trésors",
    img: `${photoChasse}`,
    description:
      "Pendant tout le long de votre aventure, vous pourrez prendre du temps afin de trouver deux objets qui vous assurerons un avantage certain, pensez-y cela pourrait vous sauvez la vie",
    durée: "pas de durée",
  },
  {
    name: "Cache cache",
    img: `${photoHide}`,
    description:
      "Un jeu pour enfant?? Détrompez-vous, vous allez sentir un frisson vous parcourir la nuque ",
    durée: "1h",
  },
];
export default function Activity() {
  return (
    <div className={styles.activityContainer}>
      {arrayOfActivity.map((item) => (
        <div className={styles.activityCard}>
          <h1 className={styles.nameActivity}>{item.name}</h1>
          <img
            className={styles.imgActivity}
            src={item.img}
            alt="activity theme"
          />
          <p className={styles.descriptionActivity}>{item.description}</p>
          <p className={styles.duréeActivity}>{item.durée}</p>
        </div>
      ))}
    </div>
  );
}
