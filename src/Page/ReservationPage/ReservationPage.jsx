import style from "./ReservationPage.module.css";
import airport from "../../assets/airport.svg";
import garage from "../../assets/garage.svg";
import swim from "../../assets/swim.svg";
import table from "../../assets/table.svg";
import wifi from "../../assets/wifi.svg";
import chambre1 from "../../assets/Chambre1.svg";
import chambre2 from "../../assets/Chambre2.svg";

function ReservationPage() {
  return (
    <section className={style.Reservation_container}>
      <div className={style.Reservation_cards_container}>
        <div className={style.Reservation_card}>
          <img className={style.Reservation_card_img} src={chambre1} alt="" />
          <div className={style.Reservation_title_container}>
            <span>Chambre solo</span>
            <span>Prix : 350€ /nuitée</span>
          </div>
          <div className={style.Reservation_h3_container}>
            <h3>Equipement</h3>
          </div>
          <div className={style.Reservation_logo_container}>
            <img src={airport} alt="" />
            <img src={garage} alt="" />
            <img src={swim} alt="" />
            <img src={table} alt="" />
            <img src={wifi} alt="" />
          </div>
          <div className={style.Reservation_button_container}>
            <button>Réserver</button>
          </div>
        </div>
        <div className={style.Reservation_card}>
          <img className={style.Reservation_card_img} src={chambre2} alt="" />
          <div className={style.Reservation_title_container}>
            <span>Chambre duo</span>
            <span>Prix : 550€ /nuitée</span>
          </div>
          <div className={style.Reservation_h3_container}>
            <h3>Equipement</h3>
          </div>
          <div className={style.Reservation_logo_container}>
            <img src={airport} alt="" />
            <img src={garage} alt="" />
            <img src={swim} alt="" />
            <img src={table} alt="" />
            <img src={wifi} alt="" />
          </div>
          <div className={style.Reservation_button_container}>
            <button>Réserver</button>
          </div>
        </div>
        <div className={style.Reservation_journey_container}>
          <h2>Journée type</h2>
          <div className={style.Reservation_journey_exemple}>
            <span>08:00</span>
            <span>Exemple</span>
          </div>
          <div className={style.Reservation_journey_exemple}>
            <span>10:00</span>
            <span>Exemple</span>
          </div>
          <div className={style.Reservation_journey_exemple}>
            <span>12:00</span>
            <span>Exemple</span>
          </div>
          <div className={style.Reservation_journey_exemple}>
            <span>14:00</span>
            <span>Exemple</span>
          </div>
          <div className={style.Reservation_journey_exemple}>
            <span>16:00</span>
            <span>Exemple</span>
          </div>
          <div className={style.Reservation_journey_exemple}>
            <span>18:00</span>
            <span>Exemple</span>
          </div>
          <div className={style.Reservation_journey_exemple}>
            <span>20:00</span>
            <span>Exemple</span>
          </div>
          <div className={style.Reservation_journey_exemple}>
            <span>22:00</span>
            <span>Exemple</span>
          </div>
          <div className={style.Reservation_journey_exemple}>
            <span>24:00</span>
            <span>Exemple</span>
          </div>
          <div className={style.Reservation_journey_exemple}>
            <span>02:00</span>
            <span>Exemple</span>
          </div>
          <div className={style.Reservation_journey_exemple}>
            <span>04:00</span>
            <span>Exemple</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReservationPage;
