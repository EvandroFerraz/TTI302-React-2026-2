// createRoot = cria a raiz da aplicação
import { createRoot } from "react-dom/client";
import React from "react";

// componente de classe
// App é uma classe que herda de Component
// toda filha de Component é reconhecida como um componente React
class App extends React.Component {
  constructor(props) {
    super(props); // envia a coleção de propriedades para a classe mãe
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
    };
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear(); // guarda o ano atual
    // new Date(ano, mês(0 a 11), dia(1 a 31))
    // 23/06/2026
    const d1 = new Date(anoAtual, 5, 23);
    // 24/09/2026
    const d2 = new Date(anoAtual, 8, 24);
    // 22/12/2026
    const d3 = new Date(anoAtual, 11, 22);
    // 21/03/2026
    const d4 = new Date(anoAtual, 2, 21);

    // se latitude < 0, então sul = true, indicando hemisfério sul
    const sul = latitude < 0;

    // intervalo 1: data >= 23/06 e < 24/09
    if (data >= d1 && data < d2) return sul ? "Inverno" : "Verão";
    // intervalo 2: data >= 24/09 e < 22/12
    if (data >= d2 && data < d3) return sul ? "Primavera" : "Outono";
    // intervalo 3: data >= 22/12 ou data < 21/03
    if (data >= d3 || data < d4) return sul ? "Verão" : "Inverno";
    // chego no próximo return apenas se nenhum if anterior foi verdadeiro
    // intervalo 4: data >= 21/03 e < 20/06
    return sul ? "Outono" : "Primavera";
  };

  icones = {
    Primavera: "fa-seedling",
    Verão: "fa-umbrella-beach",
    Outono: "fa-tree",
    Inverno: "fa-snowman",
  };

  render() {
    return <div>Meu app</div>;
  }
}

// raiz da aplicação = elemento da árvore DOM onde o código JSX será renderizado
// document.getElementById("root") retorna a <div> que tem o id="root"
// essa <div> será a raiz da aplicação, passada como parâmetro para createRoot()
// definida a raiz, o método render() renderiza o JSX de <App/> dentro da raiz
createRoot(document.getElementById("root")).render(<App />);
