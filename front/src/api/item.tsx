import axios from "axios"

const url_base = "http://localhost:9999"

// export function login(matricula, senha){
//     return axios({
//         method:"POST",
//         url:url_base+"/alunos/login",
//         data:{
//             matricula:matricula,
//             senha:senha
//         }
//     })
// }

export function fetchItens(){
    return axios({
        method: "GET",
        url: url_base+"/itens",
        // headers:{
        //     token: token
        // }
    })
}