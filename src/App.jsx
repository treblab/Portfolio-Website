import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import { Home, About, Projects, Contact } from './pages';
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

const AppContent = () => {
    const location = useLocation();

    return (
        <main className="bg-slate-300/20 min-h-screen">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <ConditionalFooter />
        </main>
    );
}

const ConditionalFooter = () => {
    const location = useLocation();
    if (location.pathname !== '/') {
        return <Footer />;
    }
    return null;
}

export default App;