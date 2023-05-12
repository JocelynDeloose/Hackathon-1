import style from "./ReservationPage.module.css";
import airport from "../../assets/airport.svg";
import garage from "../../assets/garage.svg";
import swim from "../../assets/swim.svg";
import table from "../../assets/table.svg";
import wifi from "../../assets/wifi.svg";
import chambre1 from "../../assets/Chambre1.svg";
import chambre2 from "../../assets/Chambre2.svg";
const rooms = [
  {
    id: 1,
    imgSrc: chambre1,
    name: "Chambre solo",
    price: "350€ /nuitée",
    equipment: [
      { id: 1, logoSrc: airport },
      { id: 2, logoSrc: garage },
      { id: 3, logoSrc: swim },
      { id: 4, logoSrc: table },
      { id: 5, logoSrc: wifi },
    ],
  },
  {
    id: 2,
    imgSrc: chambre2,
    name: "Chambre duo",
    price: "550€ /nuitée",
    equipment: [
      { id: 1, logoSrc: airport },
      { id: 2, logoSrc: garage },
      { id: 3, logoSrc: swim },
      { id: 4, logoSrc: table },
      { id: 5, logoSrc: wifi },
    ],
  },
];

function ReservationPage() {
  return (
    <section className={style.Reservation_container}>
      <div className={style.Reservation_cards_container}>
        {rooms.map((room) => (
          <div key={room.id} className={style.Reservation_card}>
            <img
              className={style.Reservation_card_img}
              src={room.imgSrc}
              alt=""
            />
            <div className={style.Reservation_title_container}>
              <span>{room.name}</span>
              <span>Prix : {room.price}</span>
            </div>
            <div className={style.Reservation_h3_container}>
              <h3>Equipement</h3>
            </div>
            <div className={style.Reservation_logo_container}>
              {room.equipment.map((item) => (
                <img key={item.id} src={item.logoSrc} alt="" />
              ))}
            </div>
            <div className={style.Reservation_button_container}>
              <button>Réserver</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReservationPage;
