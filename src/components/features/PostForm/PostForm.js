import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { getCurrentDate } from "../../common/utils";
import { useDispatch } from 'react-redux';
import { ADD_POST } from "../../../redux/postRedux";
import { useNavigate } from 'react-router-dom';

//action, actionText oraz (potencjalnie) również parametry 
//ze startowymi wartościami dla pól formularza (title, author itd.). 
//Podkreślamy “opcjonalnie”, gdyż o ile action i actionText

const PostForm = (props) => {
    /*
    action,
    actionText,
    titleForm='',
    authorForm='',
    publishedForm=getCurrentDate(),
    descriptionForm='',
    contentForm=''
    */

    const [title, setTitle] = useState(props.titleForm?props.titleForm:'' );
    const [author, setAuthor] = useState(props.authorForm?props.authorForm:'' );
    const [published, setPublished] = useState(props.publishedForm?props.publishedForm:getCurrentDate() );
    const [description, setDescription] = useState(props.descriptionForm?props.descriptionForm:'' );
    const [content, setContent] = useState(props.contentForm?props.contentForm:'' );   
    const [id, setId] = useState(props.id?props.id:'' ); 
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toDo = () => ({
        type: props.action,
        payload: {
            title: title,
            shortDescription: description,
            content: content,
            publishedDate: published,
            author: author,
            id: id,
        },
      });

    const handleClick = () => {
        dispatch(toDo());
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
                onClick={handleClick}
            >
                {props.actionText}
            </Button>
        </Form>
    );
};

export default PostForm;