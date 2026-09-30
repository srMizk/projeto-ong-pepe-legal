/* ============================================
   Orquestrador da SPA - ONG Pepe Legal
   Contém: objeto de rotas, função navegar(),
   listeners de load, hashchange, input e submit,
   além da função criarGrafico().
   ============================================ */
import { renderHome, renderProjetos, renderCadastro } from './render.js';
import { salvarCadastro, obterCadastros } from './storage.js';
import { validarCPF, validarTelefone, validarCEP } from './validation.js';

const rotas = {
    '/': renderHome,
    '/projetos': renderProjetos,
    '/cadastro': renderCadastro
};

function navegar() {
    
    const hash = window.location.hash.slice(1) || '/';
    const render = rotas[hash] || renderHome;
    document.getElementById('app').innerHTML = render();

    if (hash ==='/' || hash === '') criarGrafico();
}

/* ============================================
   Grafico com Chart.js - ONG Pepe Legal
   Usa a biblioteca Chart.js (via CDN) para
   visualizar a contagem de interesses dos
   colaboradores cadastrados no localStorage.
   ============================================ */
function criarGrafico() {
    const canvas = document.getElementById('grafico-interesses');
    if (!canvas) return;

    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    const contagem = {};
    cadastros.forEach(c => {
        (c.interesse || []).forEach(i => {
            contagem[i] = (contagem[i] || 0) + 1;
        });
    });

    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: Object.keys(contagem).map(texto =>
                texto.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('')
            ),
            datasets: [{
                label: 'Colaboradores por interesse',
                data: Object.values(contagem),
                backgroundColor: '#6A0DAD'
            }]
        }
    });
}


window.addEventListener('load', navegar);
window.addEventListener('hashchange', navegar);

document.addEventListener('input', function(evento) {
    const campo = evento.target;

    if (campo.id === 'cpf') validarCPF(campo);
    if (campo.id === 'telefone') validarTelefone(campo);
    if (campo.id === 'cep') validarCEP(campo);
});

document.addEventListener('submit', function(evento) {
    if (evento.target.matches('form')) {
        evento.preventDefault();
        
        const form = evento.target;
        if (form.checkValidity()) {
            const novoCadastro = {
            nome: form.nome.value,
            email: form.email.value,
            telefone: form.telefone.value,
            interesse: Array.from(form.querySelectorAll('input[name="interesse[]"]:checked')).map(c => c.value),
            dataEnvio: new Date().toISOString()
        };
        const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        cadastros.push(novoCadastro);
        localStorage.setItem('cadastros', JSON.stringify(cadastros));
        
            alert('Cadastro enviado com sucesso!');
        } else {
            alert('Preencha todos os campos corretamente.');
        }
    }
});