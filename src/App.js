import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PostView from './components/pages/PostView';
import Add from './components/pages/Add';
import PostEdit from './components/pages/PostEdit';
import About from './components/pages/About';
import Wrong from './components/pages/Wrong';

function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostView />} />
          <Route path="/add" element={<Add />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Wrong />} />
        </Routes> 
    </div>
  );
}

export default App;
