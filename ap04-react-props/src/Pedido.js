// Componente = uma constante que guarda uma função que retorna JSX
const Pedido = (props) => {
    return (
          /* cartão */
          <div className="card">
            {/* cabeçalho do cartao */}
            <div className="card-header text-muted">{props.data}</div>
            {/* corpo do cartao */}
            <div className="card-body d-flex">
              <div className="d-flex align-item-center">
                <i className={props.icone}></i>
              </div>
              {/* flex-grow-1: tomar o espaço remanescente*/}
              <div className="flex-grow-1 ms-2 border">
                <h4 className="text-center">{props.titulo}</h4>
                <p className="text-center">{props.descricao}</p>
              </div>
            </div>
          </div>
    )
}
export default Pedido;