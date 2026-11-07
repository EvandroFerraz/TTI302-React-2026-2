import React from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

// componente de classe = classe que herda de Component
export default class Busca extends React.Component{
    
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (event) => {
        // event.target = campo de texto que teve seu valor alterado
        // event.target.value = valor atual no campo de texto
        console.log(event.target.value)
        // componente controlado = o estado do componente controla o valor digitado
        this.setState({termoDeBusca: event.target.value})
    }

    // método de ciclo de vida, executa toda vez que o estado de um componente é alterado
    render(){
        return(
            // empilhando os filhos
            <div className="flex flex-column">
                {/*ícone à esquerda do campo de texto; largura máxima*/}
                <span className="p-input-icon-left w-full">
                    <i className="pi pi-search"/>
                    <InputText value = {this.state.termoDeBusca} className="w-full" 
                        onChange={this.onTermoAlterado} placeholder={this.props.dica}/>
                </span>
                <Button label="OK" className="p-button-outlined mt-2"/>
            </div>
        )
    }
}
Busca.defaultProps = {
    dica: "Digite algo que deseja ver..."
}