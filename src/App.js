import React from "react";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

export default function App() {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    function handleOnSetIsDarkMode() {
        setIsDarkMode(prev => !prev);
    }

    console.log(isDarkMode);

    return (
        <div className={"container" + (isDarkMode ? " dark" : "")}>
            <Navbar isDarkMode={isDarkMode} onSetIsDarkMode={handleOnSetIsDarkMode} />
            <MainContent isDarkMode={isDarkMode} />
        </div>
    );
}