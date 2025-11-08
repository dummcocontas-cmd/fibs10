// ============================================
// CONFIGURAÇÃO DO FIREBASE
// ============================================
// 
// Este arquivo mostra ONDE encontrar suas credenciais do Firebase
// e COMO configurá-las nos arquivos do sistema.
//
// IMPORTANTE: Você precisa substituir as credenciais em 4 arquivos:
// 1. index.html
// 2. funcionario.html  
// 3. admin.html
// 4. setup-funcionarios.html
// ============================================

// PASSO 1: Obter as credenciais
// ------------------------------
// 1. Acesse: https://console.firebase.google.com/
// 2. Selecione seu projeto (ou crie um novo)
// 3. Clique no ícone de engrenagem ⚙️ > "Configurações do projeto"
// 4. Role até a seção "Seus aplicativos"
// 5. Clique no ícone </> (Web)
// 6. Registre o app (dê um nome, ex: "controle-s10-web")
// 7. Copie o objeto firebaseConfig

// PASSO 2: Copiar as credenciais
// -------------------------------
// Você verá algo assim:

const firebaseConfig = {
    apiKey: "AIzaSyC1234567890abcdefGHIJKLMNOP",
    authDomain: "seu-projeto-12345.firebaseapp.com",
    projectId: "seu-projeto-12345",
    storageBucket: "seu-projeto-12345.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456"
};

// PASSO 3: Substituir nos arquivos
// ---------------------------------
// Abra cada um dos 4 arquivos HTML e procure por:
//
// const firebaseConfig = {
//     apiKey: "SUA_API_KEY_AQUI",
//     ...
// };
//
// Substitua TODA a configuração pelas suas credenciais reais.

// ============================================
// CONFIGURAR O FIRESTORE DATABASE
// ============================================

// PASSO 4: Ativar o Firestore
// ----------------------------
// 1. No Firebase Console, clique em "Firestore Database"
// 2. Clique em "Criar banco de dados"
// 3. Selecione "Iniciar no modo de produção"
// 4. Escolha a localização: southamerica-east1 (São Paulo)
// 5. Clique em "Ativar"

// PASSO 5: Configurar regras de segurança
// ----------------------------------------
// 1. Vá em Firestore Database > Regras
// 2. Cole o código abaixo:

/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
*/

// 3. Clique em "Publicar"

// ⚠️ ATENÇÃO: Estas regras permitem acesso público sem autenticação.
// Para um ambiente de produção mais seguro, considere implementar
// autenticação com Firebase Auth.

// ============================================
// ESTRUTURA DO BANCO DE DADOS
// ============================================

// Após configurar, você terá estas coleções:

// 1. funcionarios/
//    Documentos com:
//    {
//      nome: "João Silva",
//      setor: "TI"
//    }

// 2. viagens/
//    Documentos com:
//    {
//      funcionarioId: "abc123",
//      funcionarioNome: "João Silva",
//      setor: "TI",
//      destino: "Centro",
//      horaSaida: "2025-11-07T14:30:00.000Z",
//      horaChegada: "2025-11-07T16:45:00.000Z",
//      kmInicial: 15000,
//      kmFinal: 15025,
//      observacoes: "Entrega de documentos",
//      status: "concluida" // ou "em_andamento"
//    }

// ============================================
// CADASTRAR FUNCIONÁRIOS
// ============================================

// Após configurar o Firebase:
// 1. Abra setup-funcionarios.html no navegador
// 2. Cadastre os 20 funcionários
// 3. Depois acesse index.html para usar o sistema

// ============================================
// DÚVIDAS COMUNS
// ============================================

// Q: Onde encontro meu apiKey?
// R: Firebase Console > Configurações do projeto > Seus aplicativos

// Q: Como sei se está configurado corretamente?
// R: Abra o Console do navegador (F12). Se houver erros do Firebase,
//    aparecerá lá. Se não houver erros, está funcionando!

// Q: Posso usar o mesmo Firebase em múltiplos projetos?
// R: Sim, mas é recomendado criar um projeto Firebase específico
//    para cada aplicação.

// Q: O Firebase é gratuito?
// R: Sim, para uso básico. O plano gratuito (Spark) suporta:
//    - 50.000 leituras/dia
//    - 20.000 escritas/dia  
//    - 20.000 exclusões/dia
//    Mais que suficiente para 20 funcionários!

// Q: Como faço backup dos dados?
// R: No Firebase Console, vá em Firestore Database e exporte
//    as coleções. Ou use a funcionalidade de exportar PDF
//    do sistema.

// ============================================
// PRÓXIMOS PASSOS
// ============================================

// 1. ✅ Configure as credenciais nos 4 arquivos HTML
// 2. ✅ Ative o Firestore Database
// 3. ✅ Configure as regras de segurança
// 4. ✅ Execute setup-funcionarios.html
// 5. ✅ Cadastre os 20 funcionários
// 6. ✅ Faça upload para GitHub Pages
// 7. ✅ Gere QR Code e cole na S10
// 8. ✅ Pronto para usar! 🎉
