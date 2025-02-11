import styles from "./ExperienceCard.module.css";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  items: string[];
}

const ExperienceCard = ({ title, subtitle, items }: ExperienceCardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
