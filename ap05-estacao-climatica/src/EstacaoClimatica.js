import React from "react";

export class EstacaoClimatica extends React.Component {
  timer = null

  state = {
    data: null
  }

  // executa a primeira vez que o componente EstacaoClimatica é renderizado na DOM
  componentDidMount(){
    console.log("componentDidMount")
    this.timer = setInterval(() => {
      this.setState({data: new Date().toLocaleTimeString()})
    }, 1000)
  }

  // executa logo antes do componente EstacaoClimatica ser removido da DOM
  componentWillUnmount(){
    console.log("componentWillUnmount")
    clearInterval(this.timer) // timer volta a ser nulo
  }

  // executa toda vez que o estado do componente é atualizado, depois do render()
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render')
    return (
      /*um cartão Bootstrap*/
      <div className="card">
        {/*o corpo do cartão*/}
        <div className="card-body">
          {/*centralizar verticalmente e margem abaixo*/}
          <div
            className="d-flex align-items-center border rounded mb-2"
            style={{ height: "6rem" }}
          >
            {/*icone obtido do estado do componente*/}
            <i className={`fas fa-5x ${this.props.icone}`}></i>
            {/*largura 75%, margem à esquerda (start), fs aumenta a fonte*/}
            <p className="w-75 ms-3 text-center fs-1">{this.props.estacao}</p>
          </div>
          <div>
            <p className="text-center">
              {/*renderização condicional*/}
              {this.props.latitude ? 
                `Coordenadas: ${this.props.latitude},${this.props.longitude} Timer: ${this.state.data}`
                :
                'Clique no botão para saber a sua estação climática' 
              }
            </p>
          </div>
          {/*botão para encontrar a estação climatica*/}
          <button
            onClick={this.props.obterLocalizacao}
            className="btn btn-outline-primary w-100 mt-2"
          >
            Qual a minha estação?
          </button>

        </div>
      </div>
    );
  }
}
