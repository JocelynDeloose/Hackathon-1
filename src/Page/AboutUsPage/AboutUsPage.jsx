import photoRudy from "../../assets/rudy.png";
import photoAnthony from "../../assets/anthony.png";
import photoGingembre from "../../assets/jade.png";
import photoSacha from "../../assets/sacha.png";
import photoJocelyn from "../../assets/jocelyn.png";
import photoGriffith from "../../assets/Griffith.png";
import styleabout from "./AboutUsPage.module.css";
import { BsLinkedin } from "react-icons/bs";

const arrayOfUs = [
  {
    name: "Rudy Plessis",
    img: `${photoRudy}`,
    linkedin: "https://www.linkedin.com/in/rudy-plessis/",
  },
  {
    name: "Anthony Senechal",
    img: `${photoAnthony}`,
    linkedin: "https://www.linkedin.com/in/anthony-senechal-1b0928265/",
  },
  {
    name: "Jade-Ambre Rousseau",
    img: `${photoGingembre}`,
    linkedin: "https://www.linkedin.com/in/jadambre-rss/",
  },
  {
    name: "Sacha Loumachi",
    img: `${photoSacha}`,
    linkedin: "https://www.linkedin.com/in/sacha-loumachi/",
  },
  {
    name: "Jocelyn Deloose",
    img: `${photoJocelyn}`,
    linkedin: "https://www.linkedin.com/in/jocelyn-deloose/",
  },
  {
    name: "Griffith",
    img: `${photoGriffith}`,
    linkedin: "https://fr.wikipedia.org/wiki/Maine_coon",
  },
];

function AboutUsPage() {
  return (
    <div className={styleabout.aboutusglobal}>
      <div className={styleabout.aboutusContainer}>
        {arrayOfUs.map((item) => (
          <div className={styleabout.aboutusCard} key={item.name}>
            <img
              className={styleabout.imgAboutUs}
              src={item.img}
              alt="about us"
            />
            <h2 className={styleabout.nameAboutUs}>{item.name}</h2>
            <a href={item.linkedin} target="_blank" rel="noreferrer">
              <BsLinkedin className={styleabout.linkedinAboutUs} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsPage;
