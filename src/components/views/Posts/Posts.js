import {Container, Row, Col} from 'react-bootstrap';  
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postRedux";
import Post from '../Post/Post';


const Posts = () => {

    const posts = useSelector(getAllPosts);

    return (
        <Container>
            <Row>
                {posts.map(post => (
                    <Col xs="12" sm="6" md="4">
                        <Post post={post} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default Posts;