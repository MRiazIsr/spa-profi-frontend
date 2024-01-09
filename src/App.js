import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NoPage from "./components/PageNotFound/PageNotFound";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.key} mode="out-in">
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;