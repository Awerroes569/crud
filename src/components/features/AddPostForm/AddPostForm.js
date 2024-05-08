import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { getCurrentDate } from "../../common/utils";
import { useDispatch } from 'react-redux';
import { ADD_POST } from "../../../redux/postRedux";
import { useNavigate } from 'react-router-dom';


const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState(getCurrentDate());
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addPost = () => ({
        type: ADD_POST,
        payload: {
            title: title,
            shortDescription: description,
            content: content,
            publishedDate: published,
            author: author,
        },
      });

    const handleAddPost = () => {
        console.log('Adding post');
        dispatch(addPost());
        setTitle('');
        setAuthor('');
        setPublished(getCurrentDate());
        setDescription('');
        setContent('');
        navigate('/');
      };

    return (
        <Form >
            <Form.Group
                className="mb-3" 
                controlId="formTitle"
            >
                <Form.Label>
                    Title
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter title of the post"
                    onChange={e=>setTitle(e.target.value)}
                    value={title}
                />
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formAuthor"
            >
                <Form.Label>
                    Author
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter author of the post"
                    onChange={e=>setAuthor(e.target.value)}
                    value={author}
                />
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formPublished"
            >
                <Form.Label>
                    Published
                </Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Enter date of the post"
                    onChange={e=>setPublished(e.target.value)} 
                />
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formDescription"
            >
                <Form.Label>
                    Short description
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter short description of the post"
                    onChange={e=>setDescription(e.target.value)}
                    value={description}
                />
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formContent"
            >
                <Form.Label>
                    Main content
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter main content of the post"
                    onChange={e=>setContent(e.target.value)}
                    value={content}
                />
            </Form.Group>
   
            <Button
                variant="primary"
                type="submit"
                onClick={handleAddPost}
            >
                Add post
            </Button>
        </Form>
    );
};

export default AddPostForm;