

export default function Person(props) {
    return (
        <p class={props.style} key={props.id}>
            <span class="font-bold">{props.username}</span><br/><br/>
            <span class="font-bold">favorite TS {props.type}</span><br/>
            {props.info} <br/><br/>
            <span class="font-bold">"{props.message}"</span>
        </p>
    )
}