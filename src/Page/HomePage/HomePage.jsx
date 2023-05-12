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
            <h3 className={Style.Concept_title}>Our Concept</h3>
            <p className={Style.Concept_paragraph}>
              If you are looking for an unforgettable experience, our castle is
              the perfect place for you. Imagine spending a night in a luxurious
              a luxurious room, decorated in a traditional way, but with a
              modern a modern touch for added comfort. While staying safely
              behind the behind the thick walls of the castle, you will be able
              to hear the the strange noises and screams in the night, witnesses
              to the ghosts and and vampires that haunt the place. Our unique
              concept is inspired by the vampire legends of the region, and we
              have created a experience for the discerning traveler who is
              looking for something looking for something different. We offer
              you activities, such as guided tours of the castle at night,
              vampire hunts vampire hunts and even cooking classes with our
              renowned renowned chef.
            </p>
          </div>
          <div className={Style.Why_container}>
            <h3 className={Style.Why_title}>Why?</h3>
            <p className={Style.Why_paragraph}>
              So why come? Why not enjoy a unique and experience that will
              thrill you while providing the luxury and comfort the luxury and
              comfort you deserve? Our haunted castle is a true gem, an oasis of
              calm and mystery in the middle of the in the middle of the
              wilderness. Book your overnight stay in our haunted castle now in
              our haunted castle and let yourself be carried away by a unique
              experience that you will never forget. Translated with
              www.DeepL.com/Translator (free version)
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
