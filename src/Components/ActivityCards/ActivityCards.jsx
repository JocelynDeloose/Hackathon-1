import styles from "./ActivityCards.module.css";

function ActivityCards({ name, img, description, durée }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{name}</h1>
      <img className={styles.img} src={img} alt="activity theme" />
      <p className={styles.description}>{description}</p>
      <p className={styles.durée}>{durée}</p>
    </div>
  );
}

export default ActivityCards;
