/* ============================================
   Persistencia com localStorage - ONG Pepe Legal
   Contém: salvarCadastro() e obterCadastros().
   Usa JSON.stringify para gravar e JSON.parse
   para ler, com fallback || [] no primeiro acesso.
   ============================================ */
export function salvarCadastro(cadastro) {
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    cadastros.push(cadastro);
    localStorage.setItem('cadastros', JSON.stringify(cadastros));
}

export function obterCadastros() {
    return JSON.parse(localStorage.getItem('cadastros')) || [];
}