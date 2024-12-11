import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col sm={6} md={4}>
            <Card className="proj-card">
                <Card.Img variant="top" src={imgUrl} alt={title} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary" href={url} target="_blank" rel="noopener noreferrer">
                        View Project
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};
