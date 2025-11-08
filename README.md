# 🚗 Sistema de Controle S10

Sistema completo de gerenciamento de uso de veículo compartilhado (S10) com Firebase Firestore.

## 📋 Funcionalidades

### Para Funcionários:
- ✅ Login simplificado com seleção de nome
- ✅ Registro de saída (destino, KM inicial, observações)
- ✅ Registro de devolução (KM final, observações)
- ✅ Visualização das últimas viagens realizadas
- ✅ Verificação de disponibilidade do veículo em tempo real
- ✅ Bloqueio automático quando carro está em uso

### Para Administradores:
- ✅ Dashboard com estatísticas em tempo real
- ✅ Histórico completo de todas as viagens
- ✅ Filtros por funcionário, setor, data e status
- ✅ Edição e exclusão de registros
- ✅ Relatório mensal detalhado
- ✅ Exportação de relatórios em PDF
- ✅ Total de KM rodados por funcionário/mês

## 🚀 Configuração

### 1. Criar projeto no Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Dê um nome ao projeto (ex: "controle-s10")
4. Desabilite o Google Analytics (opcional)
5. Clique em "Criar projeto"

### 2. Configurar Firestore Database

1. No menu lateral, clique em **"Firestore Database"**
2. Clique em **"Criar banco de dados"**
3. Selecione **"Iniciar no modo de produção"**
4. Escolha a localização (ex: southamerica-east1 - São Paulo)
5. Clique em **"Ativar"**

### 3. Configurar regras de segurança do Firestore

No Firebase Console, vá em **Firestore Database > Regras** e cole:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir leitura e escrita para todos (já que não há autenticação)
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

⚠️ **IMPORTANTE**: Estas regras permitem acesso público. Para produção, considere implementar autenticação.

### 4. Obter credenciais do Firebase

1. No Firebase Console, clique no ícone de engrenagem ⚙️ > **Configurações do projeto**
2. Role até **"Seus aplicativos"**
3. Clique no ícone **< / >** (Web)
4. Registre o app (ex: "controle-s10-web")
5. Copie o objeto `firebaseConfig`

### 5. Configurar os arquivos HTML

Abra os arquivos `index.html`, `funcionario.html` e `admin.html` e substitua a configuração do Firebase:

```javascript
const firebaseConfig = {
    apiKey: "SUA_API_KEY_AQUI",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO_ID",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};
```

### 6. Cadastrar funcionários no Firestore

Execute o arquivo `setup-funcionarios.html` no navegador para cadastrar os 20 funcionários.

Ou cadastre manualmente no Firebase Console:

1. Vá em **Firestore Database**
2. Clique em **"Iniciar coleção"**
3. ID da coleção: `funcionarios`
4. Adicione documentos com os campos:
   - `nome` (string): Nome do funcionário
   - `setor` (string): Setor do funcionário

Exemplo de estrutura:
```
funcionarios/
  ├── doc1: { nome: "João Silva", setor: "TI" }
  ├── doc2: { nome: "Maria Santos", setor: "RH" }
  └── doc3: { nome: "Pedro Costa", setor: "Vendas" }
```

## 📁 Estrutura do Projeto

```
controle-s10/
├── index.html              # Página de login
├── funcionario.html        # Tela do funcionário
├── admin.html              # Painel administrativo
├── setup-funcionarios.html # Script para cadastrar funcionários
└── README.md               # Este arquivo
```

## 🌐 Hospedagem no GitHub Pages

### 1. Criar repositório no GitHub

```bash
git init
git add .
git commit -m "Sistema de Controle S10"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/controle-s10.git
git push -u origin main
```

### 2. Ativar GitHub Pages

1. Vá nas **Settings** do repositório
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **main** branch
4. Clique em **Save**
5. Seu site estará disponível em: `https://SEU_USUARIO.github.io/controle-s10/`

## 📱 Criar QR Code para acesso rápido

Após hospedar, gere um QR Code com a URL do seu sistema:

1. Acesse [QR Code Generator](https://www.qr-code-generator.com/)
2. Cole a URL: `https://SEU_USUARIO.github.io/controle-s10/`
3. Baixe o QR Code
4. Imprima e cole dentro da S10

## 🔐 Acesso Administrativo

Para acessar o painel administrativo:
- Clique em **"Acesso Administrativo"** na tela de login
- Ou acesse diretamente: `https://SEU_USUARIO.github.io/controle-s10/admin.html`

## 📊 Estrutura de Dados no Firestore

### Coleção: `funcionarios`
```javascript
{
  nome: "João Silva",
  setor: "TI"
}
```

### Coleção: `viagens`
```javascript
{
  funcionarioId: "abc123",
  funcionarioNome: "João Silva",
  setor: "TI",
  destino: "Centro da cidade",
  horaSaida: "2025-11-07T14:30:00.000Z",
  horaChegada: "2025-11-07T16:45:00.000Z",
  kmInicial: 15000,
  kmFinal: 15025,
  observacoes: "Entrega de documentos",
  status: "concluida" // ou "em_andamento"
}
```

## 🎨 Tecnologias Utilizadas

- **HTML5**
- **Tailwind CSS** (via CDN)
- **JavaScript (Vanilla)**
- **Firebase Firestore** (Banco de dados em tempo real)
- **jsPDF** (Geração de PDFs)

## 📝 Fluxo de Uso

1. **Funcionário acessa via QR Code**
2. **Seleciona seu nome no dropdown**
3. **Registra saída** (destino + KM inicial)
4. **Sistema bloqueia o carro para outros usuários**
5. **Ao retornar, registra devolução** (KM final)
6. **Carro fica disponível novamente**
7. **Administrador pode visualizar/editar todos os registros**

## ⚠️ Observações Importantes

- O sistema funciona apenas online (requer internet)
- Apenas 1 viagem pode estar ativa por vez
- Administrador pode forçar fechamento de viagens
- Todos os horários são registrados automaticamente
- KM final não pode ser menor que KM inicial

## 🆘 Suporte

Para problemas ou dúvidas:
1. Verifique se o Firebase está configurado corretamente
2. Verifique as regras de segurança do Firestore
3. Abra o Console do navegador (F12) para ver erros
4. Certifique-se de que os funcionários foram cadastrados

## 📄 Licença

Este projeto é de uso livre.

---

Desenvolvido para facilitar o controle de uso de veículos compartilhados 🚗
# s10
