// ID da sua planilha do Google Sheets
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';

// URLs dos seus arquivos (você hospedará no GitHub Pages)
const SAMPLE_PDF_URL = 'https://seu-usuario.github.io/seu-repositorio/downloads/amostra.pdf';
const WALLPAPER_URL = 'https://seu-usuario.github.io/seu-repositorio/downloads/wallpaper.jpg';

function doPost(e) {
  try {
    // Pegar dados do formulário
    const data = JSON.parse(e.postData.contents);
    const name = data.name;
    const email = data.email;
    const timestamp = new Date();
    
    // Validar dados
    if (!name || !email) {
      throw new Error('Nome e email são obrigatórios');
    }
    
    // Salvar na planilha
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    sheet.appendRow([timestamp, name, email]);
    
    // Enviar email
    sendWelcomeEmail(name, email);
    
    return ContentService.createTextOutput('Success')
      .setMimeType(ContentService.MimeType.TEXT);
    
  } catch(error) {
    console.error('Error:', error);
    return ContentService.createTextOutput('Error: ' + error.message)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

function sendWelcomeEmail(name, email) {
  const subject = 'Bem-vindo ao Diário de Uma Menina do Futuro!';
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #FF6B9C; font-size: 28px; margin-bottom: 10px;">Olá ${name}!</h1>
        <p style="color: #2C3E50; font-size: 16px; line-height: 1.6;">
          Que alegria ter você aqui! Obrigado por se interessar pelo "Diário de Uma Menina do Futuro"!
        </p>
      </div>
      
      <div style="background-color: #F8F9FA; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
        <h2 style="color: #4E9BFF; font-size: 22px; margin-bottom: 15px;">Seus Downloads Exclusivos</h2>
        <p style="color: #2C3E50; margin-bottom: 20px;">
          Como prometido, aqui estão seus materiais especiais:
        </p>
        
        <div style="text-align: center;">
          <a href="${SAMPLE_PDF_URL}" 
             style="display: inline-block; 
                    background-color: #4E9BFF; 
                    color: white; 
                    padding: 12px 24px; 
                    text-decoration: none; 
                    border-radius: 25px;
                    margin-bottom: 15px;">
            📚 Baixar Amostra Grátis
          </a>
          
          <br>
          
          <a href="${WALLPAPER_URL}" 
             style="display: inline-block; 
                    background-color: #FFD93D; 
                    color: #2C3E50; 
                    padding: 12px 24px; 
                    text-decoration: none; 
                    border-radius: 25px;">
            🎨 Baixar Wallpaper Exclusivo
          </a>
        </div>
      </div>
      
      <div style="margin-bottom: 30px;">
        <h3 style="color: #FF6B9C; font-size: 20px; margin-bottom: 15px;">O que você vai encontrar na amostra?</h3>
        <ul style="color: #2C3E50; padding-left: 20px;">
          <li>Os primeiros capítulos da aventura de Ana Clara</li>
          <li>Ilustrações exclusivas dos personagens</li>
          <li>Uma surpresa especial ao final!</li>
        </ul>
      </div>
      
      <div style="text-align: center; margin-top: 30px;">
        <p style="color: #2C3E50; font-size: 14px;">
          Siga-nos nas redes sociais para mais novidades:
        </p>
        <div style="margin-top: 10px;">
          <a href="#" style="color: #4E9BFF; text-decoration: none; margin: 0 10px;">Instagram</a>
          <a href="#" style="color: #4E9BFF; text-decoration: none; margin: 0 10px;">TikTok</a>
        </div>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
        <p style="color: #666; font-size: 12px;">
          Se tiver alguma dúvida, é só responder este email!
          <br>
          Com carinho, Equipe Diário de Uma Menina do Futuro
        </p>
      </div>
    </div>
  `;
  
  MailApp.sendEmail({
    to: email,
    subject: subject,
    htmlBody: htmlBody
  });
}
