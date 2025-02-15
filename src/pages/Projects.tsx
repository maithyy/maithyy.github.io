import ProjectCard from "../components/ProjectCard/ProjectCard";
import styles from "../styles/global.module.css";
import { Project } from "../types/types";

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Nonprofit Case Management System",
      date: "September 2024 - Present",
      image: `${process.env.PUBLIC_URL}/images/cch.png`,
      description:
        "I am working with a 14 developer team over the 2024-2025 school year to develop a case management system for Colette's Children's Home, a local nonprofit that provides support to homeless women and children.",
      link: "https://github.com/ctc-uci/cch",
    },
    {
      title: "The Daily Smirk",
      date: "July 2024 - Present",
      image: `${process.env.PUBLIC_URL}/images/daily_smirk.png`,
      description:
        "A peer assessment tool for team projects utilizing a 'Smirks' rating system, deployed and used by 240+ students in INF 121. Developed frontend and backend of authentication pages with PKCE flow, and created Supabase SQL functions for efficient evaluation data retrieval and aggregation.",
      link: "https://yulyalu.github.io/Daily-Smirk-Website/",
    },
    {
      title: "Moji",
      date: "June 2024",
      image: `${process.env.PUBLIC_URL}/images/moji.jpg`,
      description:
        "Virtual education platform using AI facial recognition for student engagement. Implemented LiveKit for real-time video conferencing with secure rooms and developed system to analyze engagement using Hume AI API, displaying animated emojis representing participant sentiment.",
      link: "https://devpost.com/software/onlineconnect",
    },
    {
      title: "Electricity and Settlement Detection with AI",
      date: "March 2024 - June 2024",
      image: `${process.env.PUBLIC_URL}/images/project_poster.png`,
      description:
        "Developed 4 machine learning models (SegmentationCNN, UNet, ResNet, random forest classifier) to analyze satellite imagery for predicting areas lacking electrical infrastructure. Achieved 66% accuracy in predicting settlements without electricity across 6000 km² using semantic segmentation.",
      link: "https://github.com/maithyy/electricity-and-settlement-detection-with-ai",
    },
    {
      title: "Nonprofit Event Planner and Schedule",
      date: "September 2023 - June 2024",
      image: `${process.env.PUBLIC_URL}/images/aiss.png`,
      description:
        "I worked with a 14 developer team over the 2023-2024 school year to create a long term event planner for the Achievement Institute for STEM Scholars, a local nonprofit that provides academic support to underprivileged students.",
      link: "https://github.com/ctc-uci/aiss-frontendd",
    },
    {
      title: "Happi",
      date: "January 2024 - March 2024",
      image: `${process.env.PUBLIC_URL}/images/happi.png`,
      description:
        "Mental and physical health mobile app using React Native and Flask. Implemented text sentiment analysis with Google Cloud's Natural Language API, Firebase authentication, and Firestore data storage.",
      link: "https://github.com/your-repo/happi",
    },
    {
      title: "ICSearch",
      date: "January 2024 - March 2024",
      image: `${process.env.PUBLIC_URL}/images/icsearch.png`,
      description:
        "Search engine that efficiently searched and ranked 38k+ websites. Used NLTK for document preprocessing and created custom ranking algorithm using TF-IDF and Cosine Similarity.",
      link: "https://github.com/your-repo/icsearch",
    },
    {
      title: "FabFlix",
      date: "September 2023 - December 2023",
      image: `${process.env.PUBLIC_URL}/images/fabflix.png`,
      description:
        "Full-stack movie database application deployed on AWS EC2. Created Java servlets with JDBC to query MySQL database of 10k movies and 70k actors, optimizing query times by 200% through connection pooling and load balancing.",
      link: "https://github.com/your-repo/fabflix",
    },
    {
      title: "Nonprofit Database Management System",
      date: "October 2022 - June 2023",
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
        "First place winner at Embark Datathon 2023. Developed ML models (LSTM, XGBoost) to analyze 250,000 crime reports and propose government policies. Created comprehensive data visualizations using Python libraries.",
      link: "https://devpost.com/software/mischief-in-montreal",
    },
    {
      title: "ZotHome",
      date: "February 2023",
      image: `${process.env.PUBLIC_URL}/images/zothome.jpg`,
      description:
        "Cross-platform mobile app aggregating housing information from 5 websites. Implemented web scraping, created REST API using Next.js and CockroachDB, and deployed with Vercel.",
      link: "https://devpost.com/software/zothome",
    },
    {
      title: "Where's Petr?",
      date: "November 2022",
      image: `${process.env.PUBLIC_URL}/images/wheres_petr.png`,
      description:
        "Interactive website helping UCI students learn about campus locations and culture. Implemented location-changing functionality and interactive features for campus exploration.",
      link: "https://github.com/maithyy/Wheres-Petr",
    },
    {
      title: "KnuckleBones",
      date: "August 2022",
      image: `${process.env.PUBLIC_URL}/images/knucklebones.png`,
      description:
        "Python recreation of the KnuckleBones minigame from Cult of the Lamb, featuring game logic, achievement system, and leaderboard implementation.",
      link: "https://github.com/nathantoannguyen/KnuckleBones",
    },
    {
      title: "Commutr Course",
      date: "May 2022",
      image: `${process.env.PUBLIC_URL}/images/commutr_course.jpeg`,
      description:
        "Winner of Best Use of PeterPortal API at VenusHacks 2022. Created algorithm for generating optimal class schedules for commuter students, minimizing time spent on campus.",
      link: "https://devpost.com/software/petr-planner",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <h1>Projects</h1>
      <div className={styles.gridContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
