import { Form, Button, Container } from "react-bootstrap";
import { useState, useRef} from "react";
import { getCurrentDate } from "../../common/utils";
import { useDispatch } from 'react-redux';
import { ADD_POST } from "../../../redux/postRedux";
import { useNavigate } from 'react-router-dom';
import Editor from "../Editor/Editor";
import Quill from "quill";
import styles from './PostForm.module.scss'; 
import 'quill/dist/quill.snow.css';
import { Delta } from "quill/core";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
    const [published, setPublished] = useState(props.publishedForm?props.publishedForm: new Date() );
    const [description, setDescription] = useState(props.descriptionForm?props.descriptionForm:'' );
    const [content, setContent] = useState(props.contentForm?props.contentForm:'' );   
    const [id, setId] = useState(props.id?props.id:'' ); 
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const quillRef = useRef();

    const handleGetFormattedText = () => {
        //console.log('keys:', quillRef.current.keys());
        if (quillRef.current) {
          const formattedText = quillRef.current.getFormattedText();
          console.log('Formatted Text:', formattedText);
          setContent(formattedText);
        }
      };

    

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
                <br/>
                <DatePicker
                    selected={published}
                    onChange={(date) => {console.log(typeof date, date);setPublished(date)}} />
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
                
                    <Editor
                        class="fs-1"
                        ref={quillRef}
                        readOnly={false}
                        
                        onSelectionChange={handleGetFormattedText}
                        onTextChange={handleGetFormattedText}
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