import React from "react";
import icons from "../data/icons";
import ActionButton from "./ActionButton";
import Card from "./Card.js";
import Codeine from "../data/Codeine";
import SampleCodeFiles from "../data/sampleCodeFiles";

export default function Ide() {
    const maxFilenameLength = 14;
    const sampleCodeFile = "../src/data/" + (SampleCodeFiles[Math.floor(Math.random() * SampleCodeFiles.length)]);

    const [filename, setFilename] = React.useState("");
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("");

    function handleOnChange(evt) {
        setInput(evt.target.value);
        setFilename("custom.rx");
        if (!window.onbeforeunload) {
            window.onbeforeunload = () => { return ""; };
        }
    }

    function run() {
        setOutput(Codeine.run(input));       
    }

    function save() {
        const blob = new Blob([input], { type: "plain/text" });
        const url = URL.createObjectURL(blob);
        const element = document.createElement("a");
        element.setAttribute("href", url);
        element.setAttribute("download", filename.replace("…", ""));
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    function upload() {
        const element = document.createElement("input");
        element.setAttribute("type", "file");
        element.setAttribute("accept", ".rx");
        element.style.display = "none";
        document.body.appendChild(element);
        element.onchange = (evt) => {
            if (evt.target.files.length > 0) loadFile(evt.target.files[0]);
        };
        element.click();
        document.body.removeChild(element);
    }

    function loadFile(file) {
        const reader = new FileReader();
        reader.onload = () => {
            let newFilename = file.name.lastIndexOf("/") + 1;
            if (newFilename.length > maxFilenameLength) {
                const startIndex = newFilename.length - (maxFilenameLength - 1);
                newFilename = "…" + newFilename.substr(startIndex);
            }
            setFilename(newFilename);
            setInput(reader.result);
            console.log(newFilename);
        };
        reader.onerror = () => { setOutput(`ERROR: "${file.name}" did not load.`); };
        reader.readAsText(file);
    }

    const actionButtons = [
        <ActionButton key="0" title={<>Upload {icons.filter(i => i.id === "upload")[0].svg}</>} handleOnClick={upload} type="upload" />,
        <ActionButton key="1" title={<>Save {icons.filter(i => i.id === "save")[0].svg}</>} handleOnClick={save} />,
        <ActionButton key="2" title={<>Run {icons.filter(i => i.id === "run")[0].svg}</>} handleOnClick={run} />
    ];

    let body_input = <textarea
        placeholder="add codeine code here"
        onChange={handleOnChange}
        onDragOver={handleOnDragOver}
        onDrop={handleOnDrop}
        value={input}
        spellCheck="false"
        autoFocus />;
    let body_output = <p id="log">{output}</p>;


    function handleOnDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "copy";
    }

    function handleOnDrop(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        if (evt.dataTransfer.files.length > 0) loadFile(evt.dataTransfer.files[0]);
    }

    React.useEffect(() => {
        fetch(sampleCodeFile)
        .then(response => response.text())
        .then(text => {
            let newFilename = sampleCodeFile.substr(sampleCodeFile.lastIndexOf("/") + 1);
            if (newFilename.length > maxFilenameLength) {
                const startIndex = newFilename.length - (maxFilenameLength - 1);
                newFilename = "…" + newFilename.substr(startIndex);
            }
            setFilename(newFilename);
            setInput(text);
            console.log(newFilename);
        });
    }, []);

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