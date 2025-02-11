import { useState } from "react";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import TabSelector from "../components/TabSelector/TabSelector";
import styles from "../styles/global.module.css";

type Tab = "work" | "campus" | "education";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<Tab>("work");

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

  const campusInvolvement = {
    title: "Campus Organizations",
    subtitle: "Technical Project Manager | September 2022 - Present",
    items: [
      "Lead development team of 12 students to create a database management application for a local nonprofit.",
      "Organize weekly meetings and coordinate with stakeholders to ensure project requirements are met.",
      "Mentor new members in web development technologies and best practices.",
    ],
  };

  const education = {
    title: "University of California, Irvine",
    subtitle: "B.S. Computer Science | Expected June 2025",
    items: [
      "GPA: 3.95/4.00",
      "Relevant Coursework: Data Structures, Algorithms, Software Engineering",
      "Dean's Honor List: Fall 2022 - Present",
    ],
  };

  const renderContent = () => {
    switch (activeTab) {
      case "work":
        return <ExperienceCard {...workExperience} />;
      case "campus":
        return <ExperienceCard {...campusInvolvement} />;
      case "education":
        return <ExperienceCard {...education} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.pageContainer}>
      <h1>About Me</h1>
      <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
      <div className={styles.gridContainer}>{renderContent()}</div>
    </div>
  );
};

export default Experience;
