import { Container, Row, Col } from 'react-bootstrap';

const Post = ({ post }) => {
    return (
        <Container className="m-2">
            <Row>
                <Col>
                    <h4>{post.title}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>Author:</h6>
                </Col>
                <Col>
                    <p>{post.author}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>Published:</h6>
                </Col>
                <Col>
                    <p>{post.publishedDate}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{post.shortDescription}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Post;