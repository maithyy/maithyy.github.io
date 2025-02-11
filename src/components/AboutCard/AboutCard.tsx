import styles from "./AboutCard.module.css";

interface AboutCardProps {
  title: string;
  subtitle: string;
  items: string[];
}

const AboutCard = ({ title, subtitle, items }: AboutCardProps) => {
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

export default AboutCard;
