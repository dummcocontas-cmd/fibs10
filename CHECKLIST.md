# ✅ CHECKLIST DE INSTALAÇÃO - SISTEMA CONTROLE S10

Use este checklist para garantir que não esqueceu nenhum passo importante!

## 🔥 FIREBASE - CONFIGURAÇÃO INICIAL

- [ ] Criar conta no Firebase (https://console.firebase.google.com/)
- [ ] Criar novo projeto (nome sugerido: "controle-s10")
- [ ] Ativar Firestore Database
- [ ] Selecionar modo: "Iniciar no modo de produção"
- [ ] Escolher localização: southamerica-east1 (São Paulo)
- [ ] Configurar regras de segurança (permitir read/write: true)
- [ ] Publicar as regras

## 🔑 CREDENCIAIS

- [ ] Ir em Configurações do projeto (ícone ⚙️)
- [ ] Rolar até "Seus aplicativos"
- [ ] Clicar em ícone Web (</>) 
- [ ] Registrar app (nome: "controle-s10-web")
- [ ] Copiar objeto firebaseConfig
- [ ] Colar credenciais em: **index.html**
- [ ] Colar credenciais em: **funcionario.html**
- [ ] Colar credenciais em: **admin.html**
- [ ] Colar credenciais em: **setup-funcionarios.html**

## 👥 CADASTRO DE FUNCIONÁRIOS

- [ ] Abrir arquivo setup-funcionarios.html no navegador
- [ ] Verificar se conectou ao Firebase (mensagem verde)
- [ ] Preparar lista dos 20 funcionários (formato: Nome, Setor)
- [ ] Colar lista no campo de texto
- [ ] Clicar em "Cadastrar Lista Completa"
- [ ] Confirmar que todos foram cadastrados com sucesso
- [ ] Verificar na lista se aparecem os 20 funcionários

## 🧪 TESTES LOCAIS

- [ ] Abrir index.html no navegador
- [ ] Verificar se aparece lista de funcionários no dropdown
- [ ] Selecionar um funcionário e fazer login
- [ ] Testar registro de saída (preencher destino e KM inicial)
- [ ] Verificar se status do carro mudou para "Em uso"
- [ ] Testar registro de devolução (preencher KM final)
- [ ] Verificar se carro voltou para "Disponível"
- [ ] Abrir admin.html
- [ ] Verificar se a viagem de teste aparece no histórico
- [ ] Testar filtros (por funcionário, data, status)
- [ ] Testar edição de uma viagem
- [ ] Testar exclusão de uma viagem
- [ ] Testar exportação de PDF
- [ ] Testar relatório mensal

## 🌐 GITHUB PAGES - HOSPEDAGEM

- [ ] Criar conta no GitHub (https://github.com/)
- [ ] Criar novo repositório público
- [ ] Nome sugerido: "controle-s10"
- [ ] Fazer upload de todos os arquivos HTML
- [ ] Ir em Settings do repositório
- [ ] Clicar em Pages (menu lateral)
- [ ] Em "Source", selecionar: main branch
- [ ] Clicar em Save
- [ ] Aguardar 1-2 minutos
- [ ] Copiar URL gerada (formato: usuario.github.io/controle-s10)
- [ ] Testar a URL no navegador
- [ ] Confirmar que o sistema está funcionando online

## 📱 QR CODE

- [ ] Acessar gerador de QR Code (https://www.qr-code-generator.com/)
- [ ] Colar URL do GitHub Pages
- [ ] Gerar QR Code
- [ ] Baixar imagem em alta resolução
- [ ] Imprimir o QR Code
- [ ] Plastificar (opcional, mas recomendado)
- [ ] Colar dentro da S10 em local visível

## 📋 TESTE FINAL EM PRODUÇÃO

- [ ] Escanear QR Code com celular
- [ ] Fazer login com funcionário de teste
- [ ] Registrar uma saída real
- [ ] Sair e voltar ao carro
- [ ] Registrar devolução
- [ ] Acessar painel admin no computador
- [ ] Verificar se viagem apareceu corretamente
- [ ] Testar com mais 2-3 funcionários diferentes
- [ ] Confirmar que bloqueio de viagem simultânea funciona

## 📣 COMUNICAÇÃO COM A EQUIPE

- [ ] Comunicar a todos sobre o novo sistema
- [ ] Explicar como usar o QR Code
- [ ] Fazer demonstração rápida (1-2 minutos)
- [ ] Compartilhar link do painel admin (se aplicável)
- [ ] Estabelecer pessoa responsável pelo suporte
- [ ] Definir processo para adicionar novos funcionários

## 🔒 SEGURANÇA (OPCIONAL - MELHORIAS FUTURAS)

- [ ] Considerar implementar Firebase Authentication
- [ ] Configurar regras mais restritivas no Firestore
- [ ] Criar backup semanal dos dados
- [ ] Documentar procedimento de recuperação

## 📊 ACOMPANHAMENTO

- [ ] Definir frequência de geração de relatórios (semanal/mensal)
- [ ] Estabelecer responsável por gerar relatórios
- [ ] Criar processo de análise de KM rodados
- [ ] Definir alertas para manutenção do veículo

---

## ⚠️ PROBLEMAS COMUNS E SOLUÇÕES

### ❌ "Erro ao carregar funcionários"
✅ Verifique se as credenciais do Firebase estão corretas
✅ Verifique se o Firestore foi ativado
✅ Abra Console (F12) e veja erro específico

### ❌ "Nenhum funcionário aparece no dropdown"
✅ Verifique se executou setup-funcionarios.html
✅ Verifique no Firebase Console se a coleção "funcionarios" existe
✅ Verifique as regras de segurança do Firestore

### ❌ "Não consigo registrar saída"
✅ Verifique conexão com internet
✅ Verifique se outro funcionário já está com o carro
✅ Abra Console (F12) para ver erros

### ❌ "GitHub Pages não carrega o site"
✅ Aguarde 2-3 minutos após configurar
✅ Verifique se o repositório é público
✅ Tente acessar pelo modo anônimo do navegador
✅ Limpe cache do navegador (Ctrl+Shift+Delete)

### ❌ "QR Code não abre no celular"
✅ Verifique se URL está correta
✅ Teste a URL manualmente no celular
✅ Gere novo QR Code se necessário

---

## 🎉 CONCLUSÃO

Ao completar todos os itens deste checklist, seu sistema estará:

✅ Totalmente funcional
✅ Hospedado gratuitamente
✅ Acessível via QR Code
✅ Pronto para uso pelos 20 funcionários
✅ Com painel administrativo completo

**Tempo estimado total de instalação: 30-45 minutos**

---

## 📞 SUPORTE

Para dúvidas técnicas sobre Firebase:
- https://firebase.google.com/docs

Para dúvidas sobre GitHub Pages:
- https://docs.github.com/pages

Para problemas com o código:
- Abra o Console do navegador (F12)
- Veja a aba "Console" para mensagens de erro
- Verifique configuração do Firebase

---

**Desenvolvido para facilitar o controle de veículos compartilhados** 🚗

Boa sorte com a implementação! 🎯
