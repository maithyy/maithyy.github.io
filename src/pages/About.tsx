import AboutCard from "../components/AboutCard/AboutCard";
import styles from "../styles/global.module.css";

const About = () => {
  const workExperience = {
    title: "Optum - UnitedHealth Group, Irvine, CA",
    subtitle: "Software Engineering Intern | June - August 2023",
    items: [
      "Developed a search tool integrating Azure Cognitive Search into a Java and Spring Boot codebase, reducing duplication by 100x.",
      "Created REST API endpoint to batch index data from Azure CosmosDB.",
      "Utilized JUnit and Mockito for unit testing services and web controllers.",
      "Developed UI components in Typescript and tested within Docker using Storybook.",
    ],
  };

  return (
    <div className={styles.pageContainer}>
      <h1>About Me</h1>
      <div className={styles.gridContainer}>
        <AboutCard
          title={workExperience.title}
          subtitle={workExperience.subtitle}
          items={workExperience.items}
        />
      </div>
    </div>
  );
};

export default About;
