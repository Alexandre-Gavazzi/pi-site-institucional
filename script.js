var bd_cod_gerado = 0;
var bd_cod_digitado = 0;

function error() {
    alert('Preencha todos os campos corretamente!')
}
function error_email_senha() {
    alert('Verifique o email/senha e as confirmações!')
}
function bem_vindo() {
    alert('BEM VINDO NOVO MEMBRO')
    alert('SEU CADASTRO FOI EFETUADO COM SUCESSO')
}
function cod_invalido() {
    alert('CÓDIGO INVÁLIDO')
}
function limpando_tudo() {
    ipt_cad_nome.value = '';
    ipt_cad_datenasc.value = '';
    ipt_cad_user.value = '';
    ipt_cad_celular.value = '';
    ipt_cad_email.value = '';
    ipt_cad_conf_email.value = '';
    ipt_cad_senha.value = '';
    ipt_cad_conf_senha.value = '';
    ipt_dig_cod.value = '';
    span_codigo_gerado.innerHTML = '___________';
}

function bu_cadastrar() {
    var ax_nome = ipt_cad_nome.value;
    var ax_datanasc = ipt_cad_datenasc.value;
    var ax_user = ipt_cad_user.value;
    var ax_celular = ipt_cad_celular.value;
    var ax_email = ipt_cad_email.value;
    var ax_conf_email = ipt_cad_conf_email.value;
    var ax_senha = ipt_cad_senha.value;
    var ax_conf_senha = ipt_cad_conf_senha.value;
    bd_cod_digitado = ipt_dig_cod.value;

    if (ax_nome == '' || ax_datanasc == '' || ax_user == '' || ax_celular == '' || ax_email == '' || ax_conf_email == '' || ax_senha == '' || ax_conf_senha == '') {
        error()
    } else {
        if (ax_email == ax_conf_email && ax_senha == ax_conf_senha) {
            if (bd_cod_gerado <= 0) {
                cod_invalido()
            } else if (bd_cod_gerado == bd_cod_digitado) {
                bem_vindo()
                limpando_tudo()
            } else {
                cod_invalido()
            }
        } else {
            error_email_senha()
        }
    }
}

function bu_gerar_codigo() {
    bd_cod_gerado = (Math.random() * 9 + 1).toFixed(9);
    span_codigo_gerado.innerHTML = bd_cod_gerado;
}

function bu_entrar() {
    var login = ipt_login.value == `jpdoscss`;
    var senha = ipt_senha.value == `brandaodospi`;

    var validacao = login && senha;

    if (validacao) {
        alert(`Login Efetuado com Sucesso`);
    } else {
        alert('Tente Novamente');
    }
}