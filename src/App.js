import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NoPage from "./components/PageNotFound/PageNotFound";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
