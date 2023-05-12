import Style from "./HomePage.module.css";
import haunted from "../../assets/haunted.jpg";
import haunted2 from "../../assets/haunted-mansion-feat2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function HomePage() {
  function MapPlaceholder() {
    return (
      <p>
        Castle of bran.
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    );
  }

  function MapWithPlaceholder() {
    return (
      //view App.css for map style
      <MapContainer
        center={[45.51508, 25.36709]}
        zoom={13}
        scrollWheelZoom={true}
        placeholder={<MapPlaceholder />}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[45.51508, 25.36709]}>
          <Popup>
            <p className={Style.Hotel_location}>We are here !</p>
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
  return (
    <div className={Style.HomePageContent_container}>
      <div className={Style.Slider_container}>
        <h1 className={Style.Slider_title}>BloodyCastle</h1>
        <h2 className={Style.Slider_under_title}>
          Une expérience que vous n&apos;oublierez pas de sitôt !
        </h2>
        <Carousel
          showArrows={false}
          showStatus={false}
          autoPlay={true}
          showThumbs={false}
          width="100%"
          infiniteLoop={true}
          interval={4000}
        >
          <img className={Style.Slider_image} src={haunted} />
          <img className={Style.Slider_image} src={haunted2} />
        </Carousel>
      </div>
      <div className={Style.Body_container}>
        <div className={Style.Text_container}>
          <div className={Style.Concept_container}>
            <h3 className={Style.Concept_title}>Notre concept</h3>
            <p className={Style.Concept_paragraph}>
              Si vous recherchez une expérience inoubliable, notre château est
              l&apos;endroit idéal pour vous. Imaginez passer une nuit dans une
              chambre luxueuse , décorée de manière traditionnelle, mais avec
              une touche moderne pour plus de confort. Tout en restant en
              sécurité derrière les murs épais du château, vous pourrez entendre
              les bruits et cris étranges dans la nuit, témoins des fantômes et
              vampires qui hantent les lieux. Notre concept unique
              s&apos;inspire des légendes vampiriques de la région et nous avons
              créé une expérience pour le voyageur averti qui recherche quelque
              chose de différent. Nous vous proposons des activités, telles que
              des visites guidées du château la nuit, des chasses aux vampires,
              des chasses aux vampires et même des cours de cuisine avec notre
              chef renommé.
            </p>
          </div>
          <div className={Style.Why_container}>
            <h3 className={Style.Why_title}>Pourquoi ?</h3>
            <p className={Style.Why_paragraph}>
              Alors pourquoi venir ? Pourquoi ne pas vivre une expérience unique
              et qui vous ravira a tous, en vous offrant le luxe et le confort
              que vous méritez ? Notre château hanté est un véritable joyau, une
              oasis de calme et de mystère au milieu de la nature sauvage.
              Réservez dès maintenant votre nuitée dans notre château hanté et
              laissez-vous emporter par une expérience unique que vous
              n&apos;oublierez jamais.
            </p>
          </div>
        </div>
        <div className={Style.Map_container}>
          <MapWithPlaceholder />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
