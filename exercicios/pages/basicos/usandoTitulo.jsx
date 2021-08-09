import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
  return (
    <div>
      <Titulo
        principal="Página de Cadastro"
        secundario="Incluir, alterare excluir coisas!"
      />
       <Titulo
        principal="Página de Login"
        secundario="Email e senha"
        pequeno={true}
      />
      <Titulo
        principal="Página de Login"
        
      />
    </div>
  );
}
