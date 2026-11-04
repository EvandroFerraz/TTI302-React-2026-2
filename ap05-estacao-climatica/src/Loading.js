import React from 'react'

export class Loading extends React.Component {
    render(){
        return(
            <div className="d-flex justify-content-center align-items-center 
                border rounded p-3">      
                {/* a div representa o spinner */}
                <div className="spinner-border text-primary" 
                    style={{width:'3rem', height: '3rem'}}>
                    
                    <span className="visually-hidden">Carregando...</span>
                </div>
                <p className="text-primary">{this.props.mensagem}</p>
            </div>
        )
    }
}

//fora da classe que define o componente
Loading.defaultProps = {
    mensagem: "Carregando"
}