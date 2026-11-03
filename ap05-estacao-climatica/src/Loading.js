import React from "react";

export class Loading extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center border rounded p-3">
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
        >
          {/*deve ser utilizado somente por dispositivos de acessibilidade,
                        como leitores de tela */}
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="text-primary">
            {this.props.mensagem}
        </p>
      </div>
    );
  }
}
// fora da classe que define o componenete
Loading.defaultProps = {
    mensagem: "Carregando"
}
