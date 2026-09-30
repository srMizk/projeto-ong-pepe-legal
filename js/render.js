/* ============================================
   Renderizacao de views - ONG Pepe Legal
   Contém: renderHome(), renderProjetos() e renderCadastro().
   Cada funcao retorna uma string HTML (Template Literals)
   que e injetada no #app pelo main.js via innerHTML.
   Este modulo faz parte da arquitetura ES6 Modules.
   ============================================ */
export function renderHome() {
    
    return `
        <section class="missao">
            <img src="../img/border_colie.jpg" alt="Cachorro peludo de cores branca e marrom, olhando para o lado">
            <div class="texto-missao">
                <h2>Nossa missão</h2>
                <p>A ONG Pepe Legal oferece cuidado especializado e gratuito para cães com déficits cognitivos, garantindo que cada animal receba o amor e a atenção que merece.</p>
            </div>
        </section>
        <section class="sobre-ong">
            <h2>Sobre a ONG Pepe legal</h2>
            <article class="sobre">
                <p>
                    Fundada em 2011, a ONG Pepe Legal nasceu de uma história de amor. Pepe, um cãozinho com síndrome cognitiva canina, foi resgatado das ruas e mostrou que animais com necessidades especiais merecem uma chance. Hoje, nossa missão é oferecer suporte veterinário, medicamentos e atividades terapêuticas para cães em situação de vulnerabilidade que possuem déficits cognitivos.Acreditamos que todo animal tem o direito a uma vida digna, com acesso à saúde e ao carinho que tanto merecem. Por isso, todos os nossos serviços são 100% gratuitos para as famílias.
                </p>
                <h3>Vidas atingidas</h3>
                <ul class="beneficiarios">
                    <li>1350+ cães atendidos desde 2011</li>
                    <li>85 famílias recebem acompanhamento mensal</li>
                    <li>4 projetos ativos transformando vidas</li>
                    <li>60 voluntários dedicados à causa</li>
                    <li>95% dos tutores relatam melhora na qualidade de vida dos pets</li>
                </ul>
                <h3>Diferenciais</h3>
                <div class="diferenciais">
                    <div class="card">
                        <h4>Atendimento especializado</h4>
                        <p>Nossa equipe é formada por veterinários e terapeutas capacitados para lidar com déficits cognitivos em cães, oferecendo um cuidado individualizado para cada animal.</p>
                    </div>
                    <div class="card">
                        <h4>100% Gratuito</h4>
                        <p>Acreditamos que o amor não deve ter custo. Todos os nossos serviços, consultas e medicamentos são oferecidos sem nenhum valor para as famílias.</p>
                    </div>
                    <div class="card">
                        <h4>Acompanhamento Humanizado</h4>
                        <p>Além do tratamento, oferecemos suporte emocional para as famílias, com orientações e acompanhamento contínuo em cada etapa do processo.</p>
                    </div>
                </div>
            </article>
        </section>
        <section class="grafico">
            <h2>Interesses dos colaboradores</h2>
            <canvas id="grafico-interesses"></canvas>
        </section>
        <section class="como-ajudar">
            <h2>Quer fazer parte desta história?</h2>
            <p>Como nossa ONG não cobra nada das famílias que necessitam de auxílio, sempre buscamos parceiros para executar nossa missão.</p>
            <p><strong>Seja voluntário ou faça uma doação - sua ajuda transforma vidas!</strong></p>
            <a href="#/cadastro" class="btn">Quero ajudar agora ></a>
        </section>`;
}

export function renderProjetos() {
    
    return `
    <section class="projetos">
            <h2>Conheça nossas iniciativas que estão mudando vidas</h2>
            <article>
                <h3>Multirão da saúde PET<span class="badge badge-ativo">Ativo</span></h3>
                <ul>
                    <li><strong>Objetivo:</strong> Oferecer diagnóstico e tratamento gratuito para cães com déficits cognitivos.</li>
                    <li><strong>Como funciona:</strong> Realizado anualmente em setembro, o multirão reúne veterinários especialistas que realizam consultas, aplicam testes cognitivos e distribuem medicamentos paliativos para alívio dos sintomas.</li>
                    <li><strong>Impacto:</strong> Já atendemos mais de 120 animais em 5 edições do evento.</li>
                    <li><strong>Próxima edição:</strong> Setembro de 2026</li>
                </ul>
            </article>
            <article>
                <h3>Alimentação saudável<span class="badge badge-ativo">Ativo</span></h3>
                <ul>
                    <li><strong>Objetivo:</strong> Garantir nutrição adequada para cães com necessidades especiais.</li>
                    <li><strong>Como funciona:</strong> Através de parcerias com empresas de ração, distribuímos alimentos de alta digestibilidade e suplementos nutricionais para famílias de baixa renda que possuem cães com déficits cognitivos.</li>
                    <li><strong>Impacto:</strong> Mais de 500kg de ração distribuídos mensalmente.</li>
                    <li><strong>Como ajudar:</strong> Doe ração ou contribua financeiramente para a compra de alimentos especializados.</li>
                </ul>
            </article>
            <article>
                <h3>Vacinação sem vacilação<span class="badge badge-ativo">Ativo</span></h3>
                <ul>
                    <li><strong>Objetivo:</strong> Prevenir doenças em cães com sistema imunológico fragilizado.</li>
                    <li><strong>Como funciona:</strong> A cada 3 meses, realizamos mutirões de vacinação, vermifugação e aplicação de antipulgas em comunidades carentes.</li>
                    <li><strong>Impacto:</strong> Mais de 200 vacinas aplicadas em 2025.</li>
                    <li><strong>Próximo mutirão:</strong> 15 de outubro de 2026</li>
                </ul>
            </article>
            <article>
                <h3>Oficina sensorial canina<span class="badge badge-ativo">Ativo</span></h3>
                <ul>
                    <li><strong>Objetivo:</strong> Estimular as funções cognitivas e motoras de cães com déficits.</li>
                    <li><strong>Como funciona:</strong> Todos os finais de semana, abrimos nossas portas para atividades que trabalham o raciocínio dos cães através de brincadeiras, jogos de farejamento e estímulos sensoriais.</li>
                    <li><strong>Impacto:</strong> 90% dos participantes apresentam melhora na interação social e redução de sintomas de ansiedade.</li>
                    <li><strong>Horários:</strong> Sábados e domingos, das 9h às 12h.</li>
                </ul>
            </article>
        </section>
        <section class="apoiar">
            <h2>Quer apoiar um desses projetos? Cadastre-se como voluntário e ajude a transformar vidas!</h2>
            <a href="#/cadastro" class="btn">Quero ser voluntário</a>
        </section>`;
}

export function renderCadastro() {
    
    return `
    <section class="cadastro">
            <h2>Seja um herói na vida de um cão especial</h2>
            <p>Preencha o formulário abaixo e faça parte da nossa equipe de colaboradores. Seja com doações, voluntariado ou parcerias, sua contribuição é essencial para continuarmos transformando vidas.</p>
            <p><strong>"Juntos, podemos fazer a diferença na vida de centenas de animais!"</strong></p>
            <form>
                <p>
                    <a href="#alerta-sucesso" class="link-oculto">Mostrar sucesso</a> |
                    <a href="#alerta-erro" class="link-oculto">Mostrar erro</a>
                </p>
                <div class="alerta alerta-sucesso" id="alerta-sucesso">
                    ✅ Cadastro realizado com sucesso!
                </div>
                <div class="alerta alerta-erro" id="alerta-erro">
                    ❌ Preencha todos os campos obrigatórios.
                </div>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <label for="nome">Nome completo:</label>
                    <input type="text" required minlength="5" maxlength="20" placeholder="Digite seu nome completo" name="nome" id="nome" />
                    <label for="data-nascimento">Data de nascimento:</label>
                    <input type="date" required name="data-nascimento" id="data-nascimento" />
                    <label for="cpf">CPF:</label>
                    <input type="text" required pattern="[0-9]{11}" placeholder="Digite apenas números" maxlength="11" minlength="11" name="cpf" id="cpf" />
                </fieldset>
                <fieldset>
                    <legend>Contato e Endereço</legend>
                    <label for="email">E-mail:</label>
                    <input type="email" required placeholder="usuário@dominio.com" name="email" id="email" />
                    <label for="telefone">Telefone:</label>
                    <input type="tel" required pattern="[0-9]{10,11}" placeholder="Digite apenas números" maxlength="11" minlength="10" name="telefone" id="telefone" />
                    <label for="cep">CEP:</label>
                    <input type="text" required pattern="[0-9]{8}" placeholder="Digite apenas números" maxlength="8" minlength="8" name="cep" id="cep" />
                    <label for="endereco">Endereço:</label>
                    <input type="text" required minlength="5" maxlength="30" placeholder="Rua, número, bairro" name="endereco" id="endereco" />
                    <label for="cidade">Cidade:</label>
                    <input type="text" required placeholder="Sua cidade" name="cidade" id="cidade" />
                    <label for="estado">Estado:</label>
                    <select name="estado" id="estado" required>
                        <option value="">Selecione seu estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>Como você quer ajudar?</legend>
                    <label><input type="checkbox" name="interesse[]" value="presencial" />Voluntariado presencial</label>
                    <label><input type="checkbox" name="interesse[]" value="remoto" />Voluntariado remoto</label>
                    <label><input type="checkbox" name="interesse[]" value="dinheiro" />Doações em dinheiro</label>
                    <label><input type="checkbox" name="interesse[]" value="mantimento" />Doação de ração/medicamentos</label>
                    <label><input type="checkbox" name="interesse[]" value="parceria" />Parcerias empresariais</label>
                    <label><input type="checkbox" name="interesse[]" value="Divulgacao" />Divulgação da causa</label>
                </fieldset>
                <fieldset>
                    <legend>Disponibilidade</legend>
                    <label><input type="checkbox" name="disponibilidade[]" value="dia-util" />Segunda a Sexta</label>
                    <label><input type="checkbox" name="disponibilidade[]" value="sabado" />Sábado</label>
                    <label><input type="checkbox" name="disponibilidade[]" value="domingo" />Domingo</label>
                </fieldset>
                <fieldset>
                    <legend>Mensagem</legend>
                    <label><textarea maxlength="500" name="sobre-voce" id="sobre-voce" placeholder="Quero ajudar a cuidar dos animais pois..."></textarea></label>
                </fieldset>
                <input type="submit" value="Enviar formulário" />
            </form>
        </section>
        <a href="#modal-confirmacao" class="btn-abrir-modal">Abrir modal de confirmação</a>
        <div class="modal-overlay" id="modal-confirmacao">
            <div class="modal">
                <h3>Confirmar envio</h3>
                <p>Deseja realmente enviar seu cadastro?</p>
                <div class="modal-botoes">
                    <button class="btn-confirmar">Sim, enviar</button>
                    <button class="btn-cancelar">Cancelar</button>
                </div>
            </div>
        </div>
        <a href="#toast-sucesso" class="btn-toast">Mostrar notificação</a>
        <div class="toast" id="toast-sucesso">
            ✅ Cadastro enviado com sucesso!
        </div>`;
}