//vertical navbar
const NavBar = () => (
    <div className="vertical-navbar">
      <a href="#events" className="nav-item">EVENTS</a>
      <a href="#talks" className="nav-item">TALKS</a>
      <a href="#workshops" className="nav-item">WORKSHOPS</a>
    </div>
)


// Header component
const Header = () => (
    <div className="header">
      <h1>ONE PIC THAT DEFINES US</h1>
    </div>
  );
  
  // Section component for Events, Talks, Workshops
  const Section = ({ title, content, imageUrl }) => (
    <div className="section">
      <div className="text">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* Image will be set via CSS background-image */}
      </div>
    </div>
  );


  // Content component with Section components inside
const Content = () => {
    const sectionContent = `As a third-year Information Technology student at Velagapudi Ramakrishna Siddhartha Engineering College (VRSEC), I am keenly interested in exploring and utilizing the latest tools and technologies that can augment my learning and project development capabilities. Figma, with its advanced design and collaboration features, stands out as an ideal platform for fostering my skills in user interface and user experience design.`;
  
    return (
      <div className="content">
        <Header />
        <div className="section-cards">
            <Section title="EVENTS" content={sectionContent} imageUrl="path-to-events-image.jpg" />
            <Section title="TALKS" content={sectionContent} imageUrl="path-to-talks-image.jpg" />
            <Section title="WORKSHOPS" content={sectionContent} imageUrl="path-to-workshops-image.jpg" />
        </div>   
      </div>
    );
  };
  
  
  // HomePage component
  const HomePage = () => {
    return (
      <div className="homePage">
        <NavBar />
        <Content />
      </div>
    );
  };
  
  export default HomePage;
  