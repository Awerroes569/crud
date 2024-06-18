import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../redux/postRedux';
import PostForm from '../features/PostForm/PostForm';
import { EDIT_POST } from '../../redux/postRedux';

const PostEdit = () => {
    
    const { id } = useParams();
    const post = useSelector(state=>getPostById(state, id));

    return (
        <div>
            <h1>
                Change post and save
            </h1>
            <PostForm
                action={EDIT_POST}
                actionText={'Save changes'}
                titleForm={post.title?post.title:''}
                authorForm={post.author?post.author:''}
                publishedForm={post.publishedDate?post.publishedDate:''}
                categoryForm={post.category?post.category:''}
                descriptionForm={post.shortDescription?post.shortDescription:''}
                contentForm={post.content?post.content:''}
                id={post.id}
            />
        </div>
    )
}

export default PostEdit;