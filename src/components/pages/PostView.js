import { useParams } from 'react-router';

const PostView = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Post {id}</h1>
        </div>
    )
}

export default PostView;