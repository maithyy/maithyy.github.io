import { Project } from '../../types/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      </h2>
      <h3 className={styles.date}>{project.date}</h3>
      <img 
        src={project.image} 
        alt={project.title}
        className={`img-fluid ${styles.image}`}
      />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
