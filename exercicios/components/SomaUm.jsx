export default function SomaUm(props) {
    props.numero++ // nao pode atribuir em props
    return (
        <div>
            <h1>{props.numero}</h1>
        </div>
    )
};
