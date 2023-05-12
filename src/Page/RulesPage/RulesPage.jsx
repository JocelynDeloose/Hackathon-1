import styles from "./RulesPageStyles.module.css";

function RulesPage() {
  return (
    <div className={styles.rules_container}>
      <div className={styles.text}>
        <h2>Règlement intérieur</h2>
        <p>
          Le domaine du Château, comprenant son parc, ses dépendances et son
          château, est une propriété privée.
          <br /> Il est donc régi par un règlement intérieur et toute personne
          souhaitant visiter ou séjourner sur le domaine doit doit se conformer
          au règlement ci-dessous, sous peine de se voir refuser l'accès. <br />
          <br />
          Comme vous le savez peut-être, notre résidence est reliée à une
          mystérieuse zone d'ombre qui pourrait être considérée comme
          paranormale. <br /> Par conséquent, l'accès au château est fortement
          déconseillé aux femmes enceintes et aux personnes cardiaques, et les
          mineurs non accompagnés sont interdits.
          <br />
          <br /> Il est obligatoire pour toute personne visitant le domaine pour
          y passer une ou plusieurs nuits de remplir la décharge de
          résponsabilité sur place.
          <br />
          Sans elle, l'accès au château vous sera refusé. <br />
          Le château est une propriété privée inscrite au titre des monuments
          historiques. les visiteurs sont tenus de respecter le lieu et son
          histoire. <br />
          <br />
          Toute personne toute personne ayant une attitude frivole ou suspecte
          pourra être expulsée à la discrétion des propriétaires. <br /> Si vous
          envisagez de réaliser un film d'investigation sur le paranormal,
          veuillez nous envoyer votre synopsis et votre demande d'autorisation
          de tournage. <br />
          <br />
          Il est de votre devoir de respecter les limites indiquées par le ruban
          et de ne les franchir sous aucun prétexte. Elles indiquent une zone de
          construction dangereuse strictement interdite au public.
        </p>
      </div>
    </div>
  );
}

export default RulesPage;
