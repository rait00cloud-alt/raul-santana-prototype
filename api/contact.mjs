import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Nome e e-mail são obrigatórios' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Raul Santana <contato@raulsantanna.com.br>',
      to: 'contato@raulsantanna.com.br',
      subject: 'Novo contato do website — Raul Santana',
      html: `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08);">
<tr><td style="background:linear-gradient(135deg,#1a1a1a,#333);padding:40px 30px;text-align:center;">
<h1 style="color:#fff;font-size:24px;font-weight:700;margin:0;letter-spacing:1px;text-transform:uppercase;">NOVO CONTATO</h1>
<p style="color:#aaa;font-size:14px;margin:8px 0 0;">Website — Raul Santana</p>
</td></tr>
<tr><td style="padding:40px 30px;">
<p style="font-size:16px;color:#333;margin:0 0 24px;">Um novo visitante enviou suas informações através do formulário de contato do site.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border-radius:8px;padding:20px;margin-bottom:24px;">
<tr><td style="padding:10px 0;">
<span style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Nome</span>
<p style="font-size:16px;color:#1a1a1a;margin:4px 0 0;font-weight:600;">${name}</p>
</td></tr>
<tr><td style="padding:10px 0;border-top:1px solid #e0e0e0;">
<span style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;font-weight:600;">E-mail</span>
<p style="font-size:16px;color:#1a1a1a;margin:4px 0 0;font-weight:600;"><a href="mailto:${email}" style="color:#d4a74d;text-decoration:none;">${email}</a></p>
</td></tr>
</table>
</td></tr>
<tr><td style="background:#f9f9f9;padding:20px 30px;text-align:center;border-top:1px solid #e8e8e8;">
<p style="font-size:12px;color:#999;margin:0;">E-mail gerado automaticamente por <a href="https://raulsantanna.com.br" style="color:#d4a74d;text-decoration:none;">raulsantanna.com.br</a></p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`,
      replyTo: email,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro:', error);
    return res.status(500).json({ error: 'Falha ao enviar mensagem' });
  }
}
