export default function repeticao1() {

    const listaAprovados = [
        'João',
        'Maria',
        'Carlos',
        'Daniel',
        'Laura',
        'Bia',
        'Ana'
    ]

    function renderizarLista() {
       return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return (
        <ul>
            { renderizarLista()}
        </ul>
    )
};
/* 
function renderizarLista() {
    const items = []

    for (let i = 0; i < listaAprovados.length; i++) {
       items.push(<li key={i}>{listaAprovados[i]}</li>)            
    }

    return items
} */