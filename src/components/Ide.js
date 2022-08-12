import React from "react";
import icons from "../data/icons";
import ActionButton from "./ActionButton";
import Card from "./Card.js";
import Codeine from "../data/Codeine";
import SampleCodeFiles from "../data/sampleCodeFiles";

export default function Ide() {
    const sampleCodeFile = "../src/data/" + (SampleCodeFiles[Math.floor(Math.random() * SampleCodeFiles.length)]);

    const [filename, setFilename] = React.useState("");
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");

    function handleOnChange(evt) {
        setInput(evt.target.value);
        setFilename("custom.rx");
    }

    function run() {
        setOutput(Codeine.run(input));       
    }

    function save() {
        const blob = new Blob([input], { type: "plain/text" });
        const url = URL.createObjectURL(blob);
        const element = document.createElement("a");
        element.setAttribute("href", url);
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    function upload() {
        console.log("upload code");
        const element = document.createElement("input");
        element.setAttribute("type", "file");
        element.style.display = "none";
        document.body.appendChild(element);
        element.onclick = () => {
            loadFile(this.fileList[0]); //TODO: fix upload
        };
        element.click();
        document.body.removeChild(element);
    }

    function loadFile(filepath) {
        setFilename(filepath.substr(filepath.lastIndexOf("/") + 1));

        fetch(filepath)
        .then(response => response.text())
        .then(text => { setInput(text); });
    }    

    React.useEffect(() => {
        loadFile(sampleCodeFile);
    }, []);

    const actionButtons = [
        <ActionButton key="0" title={<>Upload {icons.filter(i => i.id === "upload")[0].svg}</>} handleOnClick={upload} type="upload" />,
        <ActionButton key="1" title={<>Save {icons.filter(i => i.id === "save")[0].svg}</>} handleOnClick={save} />,
        <ActionButton key="2" title={<>Run {icons.filter(i => i.id === "run")[0].svg}</>} handleOnClick={run} />
    ];

    let body_input = <textarea placeholder="add codeine code here" onChange={handleOnChange} value={input} autoFocus />;
    let body_output = <p id="log">{output}</p>;

    return (
        <div className="ide">
            <Card
                title="Input"
                tagLine={filename}
                body={body_input}
                actionButtons={actionButtons}
            />
            <Card title="Output" body={body_output}/>
        </div>
    );
}