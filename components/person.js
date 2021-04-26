

export default function Person(props) {
    let style = props.color + " col-span-1 text-sm border-2 border-b-4 border-black py-8 pl-8"
    return (
        <p class={style} key={id}>
            <span class="font-bold">{props.username}</span><br/><br/>
            <span class="font-bold">favorite TS {props.type}</span><br/>
            {props.info} <br/><br/>
            <span class="font-bold">"{props.message}"</span>
        </p>
    )
}