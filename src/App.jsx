import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import { Home, About, Projects, Contact } from './pages';
import Footer from "./components/Footer.jsx";
import { ThemeProvider } from './contexts/ThemeContext.jsx';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <AppContent />
            </Router>
        </ThemeProvider>
    );
}

const AppContent = () => {
    const location = useLocation();

    return (
            <main className="bg-gradient-to-br 
                 from-slate-900 
                 via-blue-900 
                 to-cyan-900 
                 dark:bg-gradient-to-br 
                 dark:from-slate-950 
                 dark:via-blue-950 
                 dark:to-cyan-950 
                 text-gray-100 
                 min-h-screen 
                 transition-colors duration-300">
            <Navbar />
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