import styles from "./ExperienceCard.module.css";

interface Role {
  roleTitle: string;
  date: string;
  bullets: string[];
}

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  /** For experiences that consist of a single role, just pass a simple bullet list */
  bullets?: string[];
  /** For experiences that have multiple roles attached to one organization */
  roles?: Role[];
}

const ExperienceCard = ({ title, subtitle, bullets, roles }: ExperienceCardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
      {roles ? (
        <div className={styles.rolesContainer}>
          {roles.map((role, index) => (
            <div key={index} className={styles.roleSection}>
              <h4 className={styles.roleHeader}>
                {role.roleTitle}{" "}
                <span className={styles.date}>({role.date})</span>
              </h4>
              <ul className={styles.list}>
                {role.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className={styles.listItem}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        bullets && (
          <ul className={styles.list}>
            {bullets.map((bullet, index) => (
              <li key={index} className={styles.listItem}>
                {bullet}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default ExperienceCard;
