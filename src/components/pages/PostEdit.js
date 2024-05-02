import { useParams } from 'react-router';

const PostEdit = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>PostEdited {id}</h1>
        </div>
    )
}

export default PostEdit;