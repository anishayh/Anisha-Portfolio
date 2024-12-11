import { Container, Col, Row } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assests/img/color-sharp2.png";
import projImg1 from "../assests/img/project-img1.png";
import projImg2 from "../assests/img/project-img2.png";

export const Projects = () => {
    const projects = [
        {
            title: "Gym-Scout App",
            description: "Backend",
            imageUrl: projImg1,
            url: "https://github.com/anishayh/Camping" // Project URL
        },
        {
            title: "Workout Ai-Assistant",
            description: "ML/NLP",
            imageUrl: projImg2,
            url: "https://github.com/i-rishikesh/Major_Project" // Project URL
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="justify-content-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="mt-4">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <Col>
                                            <h4>Second Tab Content</h4>
                                            <p>Additional projects can be listed here.</p>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background" />
        </section>
    );
};


