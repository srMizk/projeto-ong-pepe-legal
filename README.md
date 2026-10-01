# ONG Pepe Legal

Projeto de Single Page Application (SPA) desenvolvido para a ONG Pepe Legal, organização fictícia que cuida de cães com déficits cognitivos.

## Tecnologias

- HTML5 semântico
- CSS3 (Grid, Flexbox, Design System com variáveis)
- JavaScript (ES6 Modules, roteamento por hash, localStorage)
- Chart.js (via CDN) para visualização de dados

## Estrutura

- `html/` — arquivos HTML (app.html é o ponto de entrada)
- `css/` — estilos e Design System
- `js/` — módulos ES6 (render, storage, validation, main)
- `img/` — imagens otimizadas em múltiplos formatos

## Instalação local

Como a aplicação é estática, não há dependências via NPM. Para executar:

1. Clone o repositório: git clone https://github.com/srmizk/projeto-ong-pepe-legal.git

2. Entre na pasta: cd projeto-ong-pepe-legal

3. Abra com um servidor local (Live Server do VS Code ou similar). É obrigatório usar HTTP por causa dos ES6 Modules.

4. Acesse no navegador: http://127.0.0.1:5500/html/app.html


## Testes

Cenários validados:
- Validação de formulário em tempo real com RegEx
- Persistência de dados entre sessões com localStorage
- Navegação SPA sem recarregamento
- Renderização do gráfico de interesses com Chart.js

## Versionamento

O projeto segue o padrão **GitFlow** com branches:
- `main` — produção estável
- `develop` — integração contínua
- `feature/` — desenvolvimento isolado
- `release/` — preparação de versão
- `hotfix/` — correções urgentes

Mensagens de commit seguem o padrão **Conventional Commits** (`feat`, `chore`, `docs`, `merge`).

Versionamento semântico no formato **MAJOR.MINOR.PATCH**, com a tag `v1.0.0` marcando o lançamento oficial.

## Versão

v1.0.0 — Entrega final