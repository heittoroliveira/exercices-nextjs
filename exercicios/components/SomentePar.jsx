export default function SomentePar(params) {
/*     if(params.numero % 2 === 0){
        return <span>{params.numero}</span>
    } else {
        return null
    } */
    const numeroPar = params.numero % 2 === 0
    return numeroPar ? <span>{params.numero}</span> : null
};
