import ActionButton from "./ActionButton";
import icons from "../data/icons";

export default function Navbar(props) {
    return (
        <nav>
            <div className="branding">
                <h1>Codeine</h1>
                <small>— the language of simple, numerical mutation</small>
            </div>
            <ActionButton title={<>{props.isDarkMode ? "Light" : "Dark"} Mode {icons.filter(i => i.id === (props.isDarkMode ? "light" : "dark"))[0].svg}</>} handleOnClick={props.onSetIsDarkMode} />
        </nav>
    );
}