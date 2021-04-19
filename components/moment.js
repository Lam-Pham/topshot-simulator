
const Moment = (props) => <button onClick={props.handleClick} disabled={props.disabled} class={props.class}>{props.content}</button>

export default Moment;
