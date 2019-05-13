import api from './api'

 const UsuarioService = {
    getPessoa : async function (param){
        const resp = await api.post('usuario/pessoa',param);
        //let {data} = await resp.data;
        return await resp;
    },

    authenticate : async function (param){
        const resp = await api.post('usuario/authenticate',param);
        //let {data} = await resp.data;
        return await resp;
    },
};


export default UsuarioService;