const Feedback = (props) => {
    return(
        <div className="d-flex justify-content-evenly m-2">
            {/* Botão que confirma o recebimento do pedido */}
            <button type="button" onClick={props.funcaoOK} 
                className="btn btn-primary">
                {props.textoOK}
            </button>
            {/* Botão que indica que o pedido não foi recebido */}
            <button type="button" onClick={props.funcaoNOK} 
                className="btn btn-danger">
                {props.textoNOK}
            </button>
        </div>
    )
}
export default Feedback;