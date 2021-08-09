export default function Estilo(props) {
  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "#2d2" : "#00f",
          color: props.color ? props.color : "#fff",
        }}
      >
        Texto
      </h1>
      <h2 className={props.numero >= 0 ? "azul": "vermelho"}>Texto #02</h2>
    </div>
  );
}
