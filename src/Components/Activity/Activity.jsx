import photoCinema from "../../assets/cinema.jpg";
import photoEscape from "../../assets/escape.jpg";
import photoCourse from "../../assets/coursedorientation.jpg";
import photoHide from "../../assets/hideandseek.jpeg";
import photoImmun from "../../assets/immunity.jpeg";
import photoChasse from "../../assets/chasseautresor.jpg";
import styles from "./Activity.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import axios from "axios";
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
      "Un jeu pour enfant?? Détrompez-vous, vous allez sentir un frisson vous parcourir la nuque et une bonne suée froide",
    durée: "1h",
  },
];
export default function Activity() {
  const [movies, setMovies] = useState([]);

  async function fetchCinema() {
    try {
      const data = await axios.get(
        "https://www.omdbapi.com/?s=Paranormal&page=2&i=tt3896198&apikey=ab9cc8e4"
      );
      setMovies(data.data.Search);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCinema();
  }, []);
  return (
    <div className={styles.activityContainer}>
      {arrayOfActivity.map((item) => (
        <div className={styles.activityCard} key={item.name}>
          <h1 className={styles.nameActivity}>{item.name}</h1>
          {item.name === "Cinema" ? (
            <Carousel
              dynamicHeight={false}
              showArrows={true}
              showStatus={false}
              autoPlay={true}
              showThumbs={false}
              width="100%"
              centerSlidePercentage={5}
              infiniteLoop={true}
              interval={2000}
            >
              {movies?.map((movie) => (
                <img
                  key={movie.Title}
                  className={styles.imgActivityCarousel}
                  src={movie?.Poster}
                  alt="activity theme"
                />
              ))}
              {/* <img className={Style.Slider_image} src={haunted} />
              <img className={Style.Slider_image} src={haunted2} /> */}
            </Carousel>
          ) : (
            <img
              className={styles.imgActivity}
              src={item.img}
              alt="activity theme"
            />
          )}
          <p className={styles.descriptionActivity}>{item.description}</p>
          <p className={styles.duréeActivity}>{item.durée}</p>
        </div>
      ))}
    </div>
  );
}
