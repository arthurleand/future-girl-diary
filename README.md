# Diário de Uma Menina do Futuro - Landing Page

Landing page para o livro "Diário de Uma Menina do Futuro", com sistema de captura de e-mails usando Google Sheets e Google Apps Script.

## 🚀 Configuração

### 1. Configurar o Google Sheets
1. Crie uma nova planilha no [Google Sheets](https://sheets.google.com)
2. Adicione as seguintes colunas:
   - Timestamp
   - Nome
   - Email
3. Copie o ID da planilha (a parte longa entre /d/ e /edit na URL)

### 2. Configurar o Google Apps Script
1. Acesse [script.google.com](https://script.google.com)
2. Crie um novo projeto
3. Copie o conteúdo do arquivo `google-apps-script.js` para o editor
4. Atualize:
   - SPREADSHEET_ID com o ID da sua planilha
   - SAMPLE_PDF_URL com a URL do seu PDF no GitHub Pages
   - WALLPAPER_URL com a URL do seu wallpaper no GitHub Pages
5. Implante como Web App:
   - Clique em "Implantar" > "Nova implantação"
   - Escolha "Web app"
   - Execute como: "Eu"
   - Quem tem acesso: "Qualquer pessoa"
6. Copie a URL do Web App

### 3. Configurar o GitHub Pages
1. Crie um novo repositório no GitHub
2. Faça upload dos arquivos do projeto
3. Ative o GitHub Pages nas configurações do repositório
4. Faça upload dos arquivos de download (PDF e wallpaper) na pasta `downloads`

### 4. Atualizar o Formulário
1. Abra `js/form-handler.js`
2. Atualize `YOUR_GOOGLE_SCRIPT_URL` com a URL do seu Web App

## 📁 Estrutura do Projeto
```
future-girl-diary/
├── index.html
├── styles.css
├── js/
│   └── form-handler.js
├── images/
│   ├── book-cover.svg
│   ├── tech-icon.svg
│   ├── creativity-icon.svg
│   ├── values-icon.svg
│   ├── digital-world.svg
│   ├── traditional-games.svg
│   └── future-elements.svg
└── downloads/
    ├── amostra.pdf
    └── wallpaper.jpg
```

## 🎨 Paleta de Cores
- Primary: #FF6B9C (Pink)
- Secondary: #4E9BFF (Blue)
- Accent: #FFD93D (Yellow)
- Text: #2C3E50 (Dark Blue)

## 🔒 Segurança
- Os dados são armazenados de forma segura no Google Sheets
- O envio de e-mails é feito através do Gmail via Google Apps Script
- Todos os arquivos estáticos são servidos via HTTPS pelo GitHub Pages

## 📧 Sistema de E-mail
- E-mail de boas-vindas automático
- Template HTML responsivo
- Links para download da amostra e wallpaper
- Links para redes sociais

## 📱 Responsividade
- Design adaptativo para todos os dispositivos
- Breakpoints principais: 768px
- Fontes responsivas
- Imagens otimizadas

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Apps Script
- Google Sheets
- GitHub Pages
