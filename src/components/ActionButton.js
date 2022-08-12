export default function ActionButton(props) {
    return (
        <div
            className="action-button"
            onClick={props.handleOnClick}
        >{props.title}</div>
    );
}