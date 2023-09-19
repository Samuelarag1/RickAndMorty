import Card from "../card/Card";
import styles from "../cards/Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles["container-cards"]}>
      {characters.map((caracter, index) => {
        return (
          <div key={index}>
            <Card
              id={index}
              name={caracter.name}
              status={caracter.status}
              species={caracter.species}
              gender={caracter.gender}
              origin={caracter.name.origin}
              image={caracter.image}
              onClose={() => onClose(caracter.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
