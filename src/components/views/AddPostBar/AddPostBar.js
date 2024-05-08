import {Container, Row, Col} from 'react-bootstrap'; 
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddPostBar = () => {

    const navigate = useNavigate();

    const handleAddPost = () => {
        navigate('/add');
    }

    return (
        <Container className="mb-3">
            <Row className="d-flex flex-row">
                <Col xs="6">
                    <h1>All posts</h1>
                </Col>
                <Col
                    xs="5"
                    className="d-flex justify-content-end"
                >
                    <Button
                        variant="outline-success"
                        onClick={handleAddPost}
                    >
                        Add post
                    </Button>
                </Col>
                <Col xs="1"></Col>
            </Row>
        </Container>
    );
}

export default AddPostBar;