import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PostView from './components/pages/PostView';
import PostEdit from './components/pages/PostEdit';
import About from './components/pages/About';
import Wrong from './components/pages/Wrong';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import PostAdd from './components/pages/PostAdd';
import Category from './components/pages/Category';
import Categories from './components/pages/Categories';

function App() {
  return (
    <Container className="min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostView />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<PostAdd />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Wrong />} />
      </Routes>
      <Footer /> 
    </Container>
  );
}

export default App;
