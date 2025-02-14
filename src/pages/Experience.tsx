import { useState } from "react";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import TabSelector from "../components/TabSelector/TabSelector";
import styles from "../styles/global.module.css";

type Tab = "work" | "campus" | "education";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<Tab>("work");

  const workExperience = [
    {
      title: "Software Developer Intern | MobileMoney",
      subtitle: "August 2024 - Present",
      bullets: [
        "Developing RESTful API endpoints in Python + Django backend and UI components in Javascript + Backbone.js frontend",
        "Automated ATM transaction record analysis to generate weekly financial reports and flag suspicious patterns for Anti-Money Laundering",
        "Enhanced security with Time-based One Time Passwords (TOTP) for ATM transaction management",
        "Implemented Twilio opt-in/out management and exception handling, reducing failed message delivery costs by 85%",
        "Wireframed POS payment processing UI/UX flows on Figma to meet PCI DSS compliance standards"
      ]
    },
    {
      title: "Technology Development Program Intern | Optum",
      subtitle: "June 2023 - August 2023",
      bullets: [
        "Integrated Azure AI Search into healthcare platform and developed data pipeline from Azure Cosmos DB for AI/ML solution discovery",
        "Deployed scalable REST API using Java + Spring Boot framework with batching techniques for efficiency",
        "Wrote unit tests using JUnit and Mockito, increasing test coverage by 12%",
        "Developed frontend UI components in Typescript and tested with Storybook within Docker container",
        "Utilized Terraform to automate cloud resource management within CI/CD pipeline"
      ]
    }
  ];

  const campusInvolvement = [
    {
      title: "AWS Student Ambassador",
      subtitle: "July 2024 - Present",
      bullets: [
        "Hosting and organizing educational AWS workshops, averaging 100+ attendees each event",
        "Providing personalized mentorship to help students choose and prepare for AWS certification exams"
      ]
    },
    {
      title: "Commit the Change",
      subtitle: "October 2022 - Present",
      roles: [
        {
          roleTitle: "Full Stack Developer",
          date: "Oct 2024 - Present",
          bullets: [
            "Volunteering with 14 developer and 4 designer team to develop case management tool for Colette's Children's Home"
          ]
        },
        {
          roleTitle: "Full Stack Developer",
          date: "Sep 2023 - Sep 2024",
          bullets: [
            "Volunteered with 12-developer team to develop event catalog and planner using React with Vite",
            "Streamlined business operations to promote reusability, saving the nonprofit 15+ labor hours per planning season",
            "Implemented authentication with Firebase, including comprehensive error handling",
            "Developed student user role for the platform, providing view-only access to schedules while preserving admin functionalities"
          ]
        },
        {
          roleTitle: "Outreach Director",
          date: "Jun 2023 - Jun 2024",
          bullets: [
            "Researched and met with numerous local nonprofit organizations, leading to 3 successful partnerships",
            "Led presentations to explain the organization's mission and services, securing collaborative relationships",
            "Managed ongoing partnerships, coordinating volunteer opportunities and collaborations to enhance team cohesion"
          ]
        },
        {
          roleTitle: "Full Stack Developer",
          date: "Oct 2022 - Jun 2023",
          bullets: [
            "Volunteered with 12-developer team to develop a web-based database management application using React",
            "Modernized business operations from paper saving the nonprofit 20+ labor hours per season",
            "Implemented a RESTful API using Express.JS to facilitate CRUD operations on a MySQL database",
            "Created SQL triggers for calculating computations"
          ]
        }
      ]
    },
    {
      title: "UCI Information & Computer Sciences Student Council",
      subtitle: "November 2021 - June 2023",
      roles: [
        {
          roleTitle: "Secretary",
          date: "Sep 2022 - Jun 2023",
          bullets: [
            "Managed meeting minutes and internal documentation"
          ]
        },
        {
          roleTitle: "Public Relations Committee Member",
          date: "Nov 2021 - Jun 2023",
          bullets: [
            "Assisted in organizing and promoting student events"
          ]
        }
      ]
    },
    {
      title: "Python Lab Tutor",
      subtitle: "January 2022 - March 2022",
      bullets: [
        "Provided one-on-one Python programming tutoring to undergraduate students",
        "Assisted students with debugging code and understanding fundamental programming concepts"
      ]
    }
  ];

  const education = [
    {
      title: "University of California, Irvine",
      subtitle: "B.S. Computer Science | Expected March 2025",
      bullets: [
        "GPA: 3.87/4.00",
        "Relevant Coursework: Data Structures, Algorithms, Software Engineering",
        "Dean's Honor List: Fall 2022 - Present"
      ]
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "work":
        return workExperience.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ));
      case "campus":
        return campusInvolvement.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ));
      case "education":
        return education.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ));
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
