import { Container } from "react-bootstrap";
import { ADD_POST } from "../../redux/postRedux.js";
import PostForm from "../features/PostForm/PostForm.js";


const PostAdd = () => {

  const action = ADD_POST;

  return (
    <Container>
      <h1>
        Add post
      </h1> 
      <PostForm
        action={action}
        actionText={'Add post'}
      />
    </Container>
  );
}

export default PostAdd;