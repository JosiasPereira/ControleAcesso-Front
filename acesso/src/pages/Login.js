import React, { Component } from 'react';

import securityLogo from '../security.svg' ;
import './Login.css';
import UsuarioService from '../services/UsuarioService';

import { login } from "../services/auth";

export default class Login extends Component {
  state = {
    username : '',
    password : '',
    error:'',
    pessoaUsuario:{}
  };

  handleInputChangeUses = (e) =>{
    this.setState({username: e.target.value});
  };

  handleInputChangePass = (e) =>{
    this.setState({password: e.target.value});
  };

  handleSubmit = async (e) =>{
    e.preventDefault();

    const {username, password} = this.state;
    const param = {
      username, 
      password
    };

    const param2 = {
      usuario: username, 
      senha: password
    };

    
    if (!username.length || !password.length){
      this.setState({error:"Preencha usuário e senha para continuar!"});
      alert("Preencha usuário e senha para continuar!");
    }else{
      try{
        const response = await UsuarioService.authenticate(param);
        console.log(response);
        login(response.headers.authorization);
        
        console.log(param2);
        const pessoa = await UsuarioService.getPessoa(param2);

        localStorage.setItem('@Access:nome',pessoa.data.nome);
        localStorage.setItem('@Access:username',pessoa.data.usuario );
        localStorage.setItem('@Access:id',pessoa.data.id);
        //localStorage.setItem('@Access:username',response.data.nome);

        console.log(pessoa);
        this.props.history.push('/home');


      }catch(error){
        this.setState({error:"Houve um problema com o login, verifique suas credenciais!"});
        alert(this.state.error);
      }
        

    }  

  }

  render() {
    return (
        <div className= "login-wrapper">
          <img src = {securityLogo} alt="GoJosias" width="250"/>
          <form onSubmit={this.handleSubmit}>
              <input 
                placeholder="Nome de usuário"
                value = {this.state.username}
                onChange = {this.handleInputChangeUses}
              />
              <input type="password"
                placeholder="Senha de acesso"
                value = {this.state.password}
                onChange = {this.handleInputChangePass}
              />
              <button type="submmit"> Entrar</button>
          </form>
        </div> 
    );
  }
}
