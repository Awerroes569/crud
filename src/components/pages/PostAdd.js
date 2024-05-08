import { Container } from "react-bootstrap";
import AddPostForm from "../features/AddPostForm/AddPostForm.js";


const PostAdd = () => {
  return (
    <Container>
      <h1>Add post</h1> 
      <AddPostForm />
    </Container>
  );
}

export default PostAdd;