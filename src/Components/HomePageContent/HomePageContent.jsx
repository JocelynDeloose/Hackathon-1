import Style from "./HomePageContent.module.css";
import haunted from "../../assets/haunted.jpg";
function HomePageContent() {
  return (
    <div className={Style.HomePageContent_container}>
      <div className={Style.Slider_container}>
        <h1 className={Style.Slider_title}>BloodyCastle</h1>
        <h2 className={Style.Slider_under_title}>Will you dare to go there?</h2>
        <img className={Style.Slider_image} src={haunted} alt="" />
      </div>
      <div className={Style.Text_container}>
        <div className={Style.Concept_container}>
          <h3 className={Style.Concept_tile}>Our Concept</h3>
          <p className={Style.Concept_paragraph}>
            If you are looking for an unforgettable experience, our castle is
            the perfect place for you. Imagine spending a night in a luxurious a
            luxurious room, decorated in a traditional way, but with a modern a
            modern touch for added comfort. While staying safely behind the
            behind the thick walls of the castle, you will be able to hear the
            the strange noises and screams in the night, witnesses to the ghosts
            and and vampires that haunt the place. Our unique concept is
            inspired by the vampire legends of the region, and we have created a
            experience for the discerning traveler who is looking for something
            looking for something different. We offer you activities, such as
            guided tours of the castle at night, vampire hunts vampire hunts and
            even cooking classes with our renowned renowned chef.
          </p>
        </div>
        <div className={Style.Why_container}>
          <h3 className={Style.Why_title}>Why?</h3>
          <p className={Style.Why_paragraph}>
            So why come? Why not enjoy a unique and experience that will thrill
            you while providing the luxury and comfort the luxury and comfort
            you deserve? Our haunted castle is a true gem, an oasis of calm and
            mystery in the middle of the in the middle of the wilderness. Book
            your overnight stay in our haunted castle now in our haunted castle
            and let yourself be carried away by a unique experience that you
            will never forget. Translated with www.DeepL.com/Translator (free
            version)
          </p>
        </div>
      </div>
      <div className={Style.Map_container}>
        <img></img>
      </div>
    </div>
  );
}

export default HomePageContent;
//Pourquoi
//Concept
