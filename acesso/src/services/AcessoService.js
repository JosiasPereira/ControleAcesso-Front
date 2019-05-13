import api from './api'

 const AcessoService = {
   findAccess : async  function (id){
        const resp = await api.get('acesso/usuario/'+id)
        return await resp;
}
};


export default AcessoService;