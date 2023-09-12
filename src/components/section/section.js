// import './section.sass';

export default function Section(props) {
    const description = props.description
        ?  <p> {props.description} </p>
        : null
    return (
        <section>
            <h2>{props.title}</h2>
            {description}
            {props.children}
        </section>
    )
}
