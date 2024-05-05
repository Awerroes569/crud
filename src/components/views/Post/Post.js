import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './Post.module.scss';


const Post = ({ post }) => {
    return (
        <Container className="m-1 py-3 border rounded">
            <Row>
                <Col 
                    style={{ padding: 0, fontWeight: 'bold' }}
                >
                    <p className="fs-5">
                        {post.title}
                    </p>
                </Col>
            </Row>
            <Row 
                style={{marginBottom: '1rem'}}
            >
                <Col 
                    xs="4"
                    className="d-flex align-items-center"
                    style={{ textAlign: 'left', padding: 0}}
                >
                    <p
                        style={{ fontSize: '16px', fontWeight: 'bold',  margin: 0 }}
                    >
                        Author:
                    </p>
                </Col>
                <Col
                    xs="8"
                    className="d-flex align-items-center"
                    style={{ textAlign: 'left' }}
                >
                    <p
                        style={{ fontSize: '14px', margin: 0}}
                    >
                        {post.author}
                    </p>
                </Col>
            </Row>
            <Row
                style={{marginBottom: '1rem'}}
            >
                <Col
                    xs="4"
                    className="d-flex align-items-center"
                    style={{ textAlign: 'left', padding: 0}}
                >
                    <p
                        style={{ fontSize: '16px', fontWeight: 'bold',  margin: 0 }}
                    >
                        Published:
                    </p>
                </Col>
                <Col
                    xs="8"
                    className="d-flex align-items-center"
                    style={{ textAlign: 'left' }}
                >
                    <p
                        style={{ fontSize: '14px', margin: 0}}
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
                        style={{ fontSize: '14px', margin: 0}}
                    >
                        {post.shortDescription}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col
                    style={{ padding: 0}}
                >
                    <Button 
                        variant="primary"
                    >
                        Read more
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Post;