import React , {Component} from 'react';
import AcessoService from '../services/AcessoService';
import './Home.css';
import Acesso from '../componnets/Acesso'
import sair from '../logout.svg';
import {logout} from '../services/auth';

export default class Home extends Component{
    state = {
        usuario:'',
        acessos:[]
    };

    async componentDidMount(){
        

        const id = localStorage.getItem('@Access:id');
        const usuario = localStorage.getItem('@Access:nome');
        const response = await AcessoService.findAccess(id);
    
        
        this.setState({acessos:response.data});
        this.setState({usuario:usuario});
    }
    
    exit = async ()  =>{
        await logout();
        this.props.history.push('/home');
    }

    render(){
        
        return(
            
            <div className="home-wrapper">
                <div className="home-header">
                    <div className="home-header-text">
                        Usuário: {this.state.usuario}
                    </div>
                    <button className="home-header-button" type="button" onClick={this.exit} >
                        <img className="home-header-button-img" src={sair} alt='sair' width="20px"/>
                        
                    </button>
                </div>
                
                
                <ul className='home-list'>
                {this.state.acessos.map(acesso => (
                    <Acesso key={acesso.id} acesso={acesso}/>
                ))
                }
                </ul>
            </div>
        );
    }
}