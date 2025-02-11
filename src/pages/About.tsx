const About = () => {
  return (
    <div className="container my-4">
      <h1>About Me</h1>
      <div className="container mt-4 text-start mb-4">
        <div className="card bg-dark text-light mb-3">
          <h2 className="card-header">
            Work Experience
          </h2>
          <div className="card-body">
            <h3 className="card-title">Optum - UnitedHealth Group, Irvine, CA</h3>
            <p className="card-subtitle mb-2">Software Engineering Intern | June - August 2023</p>
            <ul>
              <li>Developed a search tool integrating Azure Cognitive Search into a Java and Spring Boot codebase, reducing duplication by 100x.</li>
              <li>Created REST API endpoint to batch index data from Azure CosmosDB.</li>
              <li>Utilized JUnit and Mockito for unit testing services and web controllers.</li>
              <li>Developed UI components in Typescript and tested within Docker using Storybook.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
