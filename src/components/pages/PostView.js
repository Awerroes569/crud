import { useParams } from 'react-router';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getPostById } from '../../redux/postRedux';

const PostView = () => {
    
    const { id } = useParams();
    const post = useSelector(state=>getPostById(state, id));

    return (
        <Container className="m-1 py-3">
            <Row style={{marginBottom: '1.5rem'}}>
                <Col xs="12" sm="6" className="mb-2 mb-sm-0" style={{fontSize: '24px', fontWeight: 'bold', padding: 0}}>                
                   {post.title}                   
                </Col>
                <Col xs="12" sm="6" className="d-flex flex-row justify-content-start">
                    <Button variant="outline-success">
                        Edit
                    </Button>
                    <Button
                        variant="outline-danger"
                        className="ms-2"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
            <Row 
                style={{marginBottom: '1rem'}}
            >
                <Col 
                    xs="12" sm="2"
                    className="mb-2 mb-sm-0 d-flex align-items-center"
                    style={{ textAlign: 'left', padding: 0}}
                >
                    <p
                        style={{ fontSize: '18px', fontWeight: 'bold',  margin: 0 }}
                    >
                        Author:
                    </p>
                </Col>
                <Col
                    xs="12"
                    sm="10"
                    className="d-flex align-items-center"
                    style={{ textAlign: 'left' }}
                >
                    <p
                        style={{ fontSize: '16px', margin: 0}}
                    >
                        {post.author}
                    </p>
                </Col>
            </Row>
            <Row
                style={{marginBottom: '1rem'}}
            >
                <Col
                    xs="12" sm="2"
                    className="d-flex align-items-center mb-2 mb-sm-0"
                    style={{ textAlign: 'left', padding: 0}}
                >
                    <p
                        style={{ fontSize: '18px', fontWeight: 'bold',  margin: 0 }}
                    >
                        Published:
                    </p>
                </Col>
                <Col
                    xs="12" sm="10"
                    className="d-flex align-items-center"
                    style={{ textAlign: 'left' }}
                >
                    <p
                        style={{ fontSize: '16px', margin: 0}}
                    >
                        {post.publishedDate}
                    </p>
                </Col>
            </Row>
            <Row
                style={{marginBottom: '1rem'}}
            >
                <Col
                    style={{ padding: 0}}
                >
                    <p
                        style={{ fontSize: '18px', margin: 0}}
                    >
                        {post.content}
                    </p>
                </Col>
            </Row>

        </Container>
    )
}

export default PostView;