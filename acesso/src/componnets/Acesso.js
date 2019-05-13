import React,{Component} from 'react';

import './Acesso.css';
import AcessoService from '../services/AcessoService';

export default class Acesso extends Component{

  

    checkAccess = async ()=>{
        const {id} = this.props.tweet;
    
        //await api.post(`likes/${_id}`);
    }
    
    render(){
        const {acesso} = this.props;
        return(
            <li className="acesso">
                <div>
                    <h1 className="acesso-header">Objeto: {acesso.objeto.nome}</h1>
                    <p>
                        <h2>Permissões</h2>
                    </p>
                    <p>
                        <h4 className="acesso-itemAcesso">
                            Ler: {acesso.ler ? "Sim": "Não"}                       
                        </h4>
                        <h4 className="acesso-itemAcesso">
                            Escrever: {acesso.escrever  ? "Sim": "Não"}                       
                        </h4>
                        <h4 className="acesso-itemAcesso">
                            Executar: {acesso.executar  ? "Sim": "Não"}                       
                        </h4>
                    </p>
                    
                    
                </div>
            </li>
        );
    }
}