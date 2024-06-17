import { useParams } from 'react-router';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getPostById } from '../../redux/postRedux';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { REMOVE_POST_BY_ID } from '../../redux/postRedux';



const PostView = () => {
    
    const { id } = useParams();
    const post = useSelector(state=>getPostById(state, id));

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removePost = postId => ({
        type: REMOVE_POST_BY_ID,
        payload: postId,
      });

    const dispatch = useDispatch();
    const handleRemovePost = () => {
        dispatch(removePost(id));
      };

    const navigate = useNavigate();
    const path="/post/edit/"+id;

    const handleEdit = () => navigate(path);

    if(!post) return <Navigate to="/" />
    else return (
        <Container className="m-1 py-3">
            <Row style={{marginBottom: '1.5rem'}}>
                <Col
                    xs="12"
                    sm="6"
                    className="mb-2 mb-sm-0"
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        padding: 0
                    }}
                >                
                   {post.title}                   
                </Col>
                <Col
                    xs="12"
                    sm="6"
                    className="d-flex flex-row justify-content-start"
                >
                    <Button
                        variant="outline-success"
                        onClick={handleEdit}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outline-danger"
                        className="ms-2"
                        onClick={handleShow}
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
            <Row 
                style={{marginBottom: '1rem'}}
            >
                <Col 
                    xs="12"
                    sm="2"
                    className="mb-2 mb-sm-0 d-flex align-items-center"
                    style={{ textAlign: 'left', padding: 0}}
                >
                    <p
                        style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: 0 
                        }}
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
                    xs="12"
                    sm="2"
                    className="d-flex align-items-center mb-2 mb-sm-0"
                    style={{ textAlign: 'left', padding: 0}}
                >
                    <p
                        style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: 0 
                        }}
                    >
                        Published:
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
                        {post.publishedDate.toLocaleDateString()}
                    </p>
                </Col>
            </Row>
            <Row 
                style={{marginBottom: '1rem'}}
            >
                <Col 
                    xs="12"
                    sm="2"
                    className="d-flex align-items-center mb-2 mb-sm-0"
                    style={{ textAlign: 'left', padding: 0}}
                >
                    <p
                        style={{ 
                            fontSize: '18px',
                            fontWeight: 'bold',
                            margin: 0 }}
                    >
                        Category:
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
                        {post.category}
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
                        dangerouslySetInnerHTML={{ __html: post.content }} 
                    />
                </Col>
            </Row>

            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Are you sure?
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    This operation will completely remove this post from the app. Are you sure you want to do that?
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        onClick={handleRemovePost}
                    >
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

export default PostView;