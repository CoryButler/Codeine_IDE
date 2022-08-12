import ActionButton from "./ActionButton";

export default function Card(props) {
    return (
        <div className="card" style={props.style ? props.style : {}}>
            <div className="card--header">
                <h3>{props.title}</h3>
                {props.tagLine && <small>— {props.tagLine}</small>}
                {props.actionButtons && <div className="action-button-tray">{props.actionButtons}</div>}
            </div>
            <div className="card--body">{props.body}</div>
        </div>
    );
}