export function salvarCadastro(cadastro) {
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    cadastros.push(cadastro);
    localStorage.setItem('cadastros', JSON.stringify(cadastros));
}

export function obterCadastros() {
    return JSON.parse(localStorage.getItem('cadastros')) || [];
}