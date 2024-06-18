import { Form, Button } from "react-bootstrap";
import { useState, useRef}  from "react";
import { getCurrentDate } from "../../common/utils";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Editor from "../Editor/Editor";
import 'quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { getAllCategories } from "../../../redux/categoryRedux";  

const PostForm = (props) => {

    const [title, setTitle] = useState(props.titleForm?props.titleForm:'' );
    const [author, setAuthor] = useState(props.authorForm?props.authorForm:'' );
    const [published, setPublished] = useState(props.publishedForm?props.publishedForm: new Date() );
    const [category, setCategory] = useState(props.categoryForm?props.categoryForm:'' );
    const [description, setDescription] = useState(props.descriptionForm?props.descriptionForm:'' );
    const [content, setContent] = useState(props.contentForm?props.contentForm:'' );   
    const [id, setId] = useState(props.id?props.id:'' );
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [categories, setCategories] = useState([...useSelector(state=>getAllCategories(state))]);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const quillRef = useRef();

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleGetFormattedText = () => {
        if (quillRef.current) {
          const formattedText = quillRef.current.getFormattedText();
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
            category: category,
            author: author,
            id: id,
        },
      });

    const handleClick = () => {
        setContentError(!content);
        setDateError(!published);
        if(content && published) {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        dispatch(toDo());
        setTitle('');
        setAuthor('');
        setPublished(getCurrentDate());
        setDescription('');
        setContent('');
        navigate('/');
      };

    const handleCategoryChange = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
    }

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
                    {...register('title', {
                        required: 'Title is required',
                        minLength: {
                          value: 4,
                          message: 'Title must be at least 4 characters long'
                        }
                      })
                    }
                    type="text"
                    placeholder="Enter title of the post"
                    onChange={e=>setTitle(e.target.value)}
                    value={title}
                />
                {errors.title && 
                    <small
                        className="
                            d-block
                            form-text
                            text-danger
                            mt-2"
                    >
                        {errors.title.message}
                    </small>
                }
                
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formAuthor"
            >
                <Form.Label>
                    Author
                </Form.Label>
                <Form.Control
                    {...register('author', {
                        required: 'Author is required',
                        minLength: {
                        value: 4,
                        message: 'Author must be at least 4 characters long'
                        }
                    })
                    }
                    type="text"
                    placeholder="Enter author of the post"
                    onChange={e=>setAuthor(e.target.value)}
                    value={author}
                />
                {errors.author && 
                    <small
                        className="
                            d-block
                            form-text
                            text-danger
                            mt-2"
                    >
                        {errors.author.message}
                    </small>
                }
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
                    onChange={(date) => {setPublished(date)}} />
                {
                    dateError
                    && 
                    <small
                        className="
                            d-block
                            form-text
                            text-danger
                            mt-2"
                    >
                        Date is required
                    </small>
                }
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formDescription"
            >
                <Form.Label>
                    Short description
                </Form.Label>
                <Form.Control
                    {...register('description', {
                        required: 'Description is required',
                        minLength: {
                        value: 30,
                        message: 'Description must be at least 30 characters long'
                        }
                    })
                    }
                    type="text"
                    placeholder="Enter short description of the post"
                    onChange={e=>setDescription(e.target.value)}
                    value={description}
                />
                {
                    errors.description
                    && 
                    <small
                        className="
                            d-block
                            form-text
                            text-danger
                            mt-2"
                    >
                        {errors.description.message}
                    </small>
                }
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
                    {
                        contentError
                        && 
                        <small
                            className="
                                d-block
                                form-text
                                text-danger
                                mt-2"
                        >
                            Content can not be empty
                        </small>
                    }
                
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    Category: 
                </Form.Label> 
                <br/>
                <select
                    id="select"
                    value={category}
                    onChange={handleCategoryChange}
                >
                    <option value="">
                        --Please choose a category--
                    </option>
                    {
                        categories.map((category) =>
                        <option
                            key={category}
                            value={category}
                        >
                            {category}
                        </option>
                        )
                    }   
                </select>
                <br/>
                <br/>
            </Form.Group>
            
            <Button
                variant="primary"
                type="submit"
                onClick={validate(handleClick)}
            >
                {props.actionText}
            </Button>
        </Form>
        
        
    );
};

export default PostForm;