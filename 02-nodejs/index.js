/*
0 Obter um usuario
1 Obter o numero de um telefone de usuario a partir do seu id
2 Obter o endereço do usuario pelo id
*/

function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome : 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(callback) {
    setTimeout(function () {
        return callback(null, {
            telefone: '123123123',
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Dos bobods',
            numero: 0
        })
    }, 2000);
}

function resolverUsuario(erro, usuario) {
    console.log('Usuario ', obterUsuario);
}

function resolverTelefone(erro, usuario) {
    console.log('Telefone ', obterEndereco);
}

function resolverEndereco(erro, endereco) {
    console.log('Endereco ', obterEndereco);
}


obterUsuario(function resolverUsuario(erro, usuario) {
    // NULL || "" || 0 === false
    if (erro) {
        console.error('DEU RUIM em USUARIO ', erro);
        return;
    }
   
    obterTelefone(function resolverTelefone(error, telefone) {
        if (error) {
            console.error('DEU RUIM em TELEFONE', error);
            return;
        }
       
        
        obterEndereco(function resolverEndereco(erro1, endereco) {
            if (erro1) {
                console.error('DEU RUIM em ENDERECO');
                return;
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua}, ${endereco.numero},
            Telefone: ${telefone.ddd} ${telefone.telefone}`);
        })
    });
});

