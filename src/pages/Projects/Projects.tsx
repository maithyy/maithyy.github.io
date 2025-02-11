import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Project } from "../../types/types";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Get Inspired Database",
      date: "November 2022 - June 2023",
      image: `${process.env.PUBLIC_URL}/images/get_inspired.png`,
      description:
        "I worked with a 12 developer team over the 2022-2023 school year to create a database management application for a local nonprofit, Get Inspired, to manage their Pismo clam preservation data.",
      link: "https://github.com/ctc-uci/get-inspired",
    },
    {
      title: "Mischief in Montreal",
      date: "April 2023",
      image: `${process.env.PUBLIC_URL}/images/mischief_in_montreal.jpg`,
      description:
        "Mischief in Montreal is a data analytics project I submitted for Embark Datathon 2023 and won first place overall and people's choice. I worked with a team of 4 to propose government policies based on our analysis of a dataset containing information about more than 250,000 crimes committed in Montreal, Canada.",
      link: "https://devpost.com/software/mischief-in-montreal",
    },
    {
      title: "ZotHome",
      date: "February 2023",
      image: `${process.env.PUBLIC_URL}/images/zothome.jpg`,
      description:
        "ZotHome is a React Native mobile application I submitted for ZotHacks 2023. I worked with a team of 4 to create an app that helps UCI students make housing choices by aggregating housing information from 3 different websites into one. We offered a filter feature that allows users to specify their desires features as well as a map to display the locations of the housing options.",
      link: "https://devpost.com/software/zothome",
    },
    {
      title: "KnuckleBones",
      date: "August 2023",
      image: `${process.env.PUBLIC_URL}/images/knucklebones.png`,
      description:
        "Knucklebones is a Python recreation of the KnuckleBones minigame from Cult of the Lamb.",
      link: "https://github.com/nathantoannguyen/KnuckleBones",
    },
    {
      title: "Where's Petr?",
      date: "November 2022",
      image: `${process.env.PUBLIC_URL}/images/wheres_petr.png`,
      description:
        "Where's Petr is a React application that I submitted for WebJam 2022. I worked with a team of 3 to create an interactive informational website to acquaint UCI students with campus locations and campus culture. We created a game that allows users to click on a hidden anteater on the locations and a feature that would upload a hidden anteater in the picture you upload with an image download option.",
      link: "https://github.com/maithyy/Wheres-Petr",
    },
    {
      title: "Commutr Course",
      date: "June 2023",
      image: `${process.env.PUBLIC_URL}/images/commutr_course.jpeg`,
      description:
        "Commutr Course is a React application that I submitted for VenusHacks 2022 and won Best Use of PeterPortal API. I worked with a team of 4 to create a class schedule planner that generates all possible combinations of classes with different lecture and discussion times. It displays the most optimal schedules based on commuter preferences, minimizing time spent on campus.",
      link: "https://devpost.com/software/petr-planner",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
