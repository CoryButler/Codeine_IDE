import React from "react";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

export default function App() {
    const isDarkMode_key = "isDarkMode";
    const isDarkModeDetected = localStorage.getItem(isDarkMode_key) === (true).toString() || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [isDarkMode, setIsDarkMode] = React.useState(isDarkModeDetected);

    function handleOnSetIsDarkMode() {
        setIsDarkMode(prev => {
            localStorage.setItem(isDarkMode_key, (!prev).toString());
            return !prev;
        });
    }

    return (
        <div className={(isDarkMode ? "container container--colors dark" : "container container--colors")}>
            <Navbar isDarkMode={isDarkMode} onSetIsDarkMode={handleOnSetIsDarkMode} />
            <MainContent />
            <Footer />
        </div>
    );
}