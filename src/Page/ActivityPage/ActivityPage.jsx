import Activity from "../../Components/Activity/Activity";
import styles from "./ActivityPage.module.css";

function ActivityPage() {
  return (
    <div className={styles.activPagContainer}>
      <div className={styles.activity}>
        <h1 className={styles.titreHead}>
          Oserez-vous avoir la plus grande peur de votre vie?
        </h1>
      </div>
      <Activity />
    </div>
  );
}

export default ActivityPage;
