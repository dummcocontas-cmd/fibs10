# 🔧 CRIAR ÍNDICE NO FIRESTORE

Se ao tentar registrar uma saída você vir um erro sobre "índice composto" ou "composite index", siga estes passos:

## 📋 COMO CRIAR O ÍNDICE:

### Opção 1: Pelo Link de Erro (MAIS FÁCIL)
1. Quando o erro aparecer no Console do navegador (F12)
2. Haverá um LINK no erro
3. Clique nesse link
4. Ele abrirá o Firebase Console já na tela certa
5. Clique em "Criar Índice"
6. Aguarde 1-2 minutos

### Opção 2: Criar Manualmente
1. Acesse o Firebase Console
2. Vá em **Firestore Database**
3. Clique na aba **Índices**
4. Clique em **Criar índice**
5. Configure:
   - **Coleção:** viagens
   - **Campos a indexar:**
     - Campo 1: **status** → Crescente
     - Campo 2: **horaChegada** → Decrescente
   - **Escopo da consulta:** Coleção
6. Clique em **Criar índice**
7. Aguarde 1-2 minutos até ficar verde

## ✅ PRONTO!

Após criar o índice, recarregue a página e o KM automático vai funcionar!

## 💡 DICA:

O Firestore precisa de índices para consultas que:
- Usam WHERE + ORDER BY em campos diferentes
- Usam múltiplos ORDER BY

Isso é normal e só precisa fazer UMA VEZ!
