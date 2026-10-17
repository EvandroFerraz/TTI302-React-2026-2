import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Pedido from "./Pedido";
import Cartao from "./Cartao";
import Feedback from "./Feedback";

// Componente = constante que guarda uma função que retorna JSX
// App = componente principal da aplicação; serve para agrupar os demais componentes em um único JSX
const App = () => {
  const textoOK = "Já chegou";
  const textoNOK = "Ainda não chegou";
  const funcaoOK = () => alert("Agradecemos a confirmação!!");
  const funcaoNOK = () => alert("Verificaremos o ocorrido!!");
  const componenteFeedback = (
    <Feedback
      textoOK={textoOK}
      funcaoOK={funcaoOK}
      textoNOK={textoNOK}
      funcaoNOK={funcaoNOK}
    />
  );

  // retorna o código JSX do componente principal
  return (
    // container principal
    <div className="container border rounded mt-2">
      {/*linha para o título*/}
      <div className="row border-bottom m-2">
        <h1 className="display-5 text-center">Seus Pedidos</h1>
      </div>

      {/*linha para o primeiro pedido*/}
      <div className="row">
        {/* controle de colunas para resposividade */}
        <div className="col-sm-8 col-md-6 m-2">
          <Cartao cabecalho="22/04/2021">
            {/* inserir 1º Pedido aqui */}
            <Pedido
              icone="fas fa-hdd fa-2x"
              titulo="SSD"
              descricao="SSD Kingston A400 - SATA"
            />
            <Feedback
              textoOK={textoOK}
              funcaoOK={funcaoOK}
              textoNOK={textoNOK}
              funcaoNOK={funcaoNOK}
            />
          </Cartao>
        </div>
      </div>

      {/*linha para o segundo pedido*/}
      <div className="row">
        {/* controle de colunas para resposividade */}
        <div className="col-sm-8 col-md-6 m-2">
          <Cartao cabecalho="20/04/2021">
            {/* inserir 2º Pedido aqui */}
            <Pedido
              icone="fas fa-book fa-2x"
              titulo="Livro"
              descricao="Concrete Mathematics - Donald Knuth"
            />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>

      {/*linha para o terceiro pedido*/}
      <div className="row">
        {/* controle de colunas para resposividade */}
        <div className="col-sm-8 col-md-6 m-2">
          <Cartao cabecalho="21/01/2021">
            {/* inserir 3º Pedido aqui */}
            <Pedido
              icone="fas fa-laptop fa-2x"
              titulo="Notebook"
              descricao="Notebook Dell - 8Gb - i5"
            />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>
    </div>
  );
};

// raiz = elemento da árvore DOM onde será renderizado o JSX do componente principal, pelo método render()
createRoot(document.getElementById("root")).render(<App />);
