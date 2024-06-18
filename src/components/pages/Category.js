import { Container } from "react-bootstrap";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux'
import { getAllByCategory } from '../../redux/postRedux';
import Post from '../views/Post/Post';


const Category = () => {

    const category = 'Music';

    const categoryPosts = useSelector(state=>getAllByCategory(state, category));

    return (
    <Container>
        <h1>Category: {category}</h1>
        {categoryPosts.map(post => (
            <Post post={post} />
        ))}
        
    </Container>
    );
}

export default Category;