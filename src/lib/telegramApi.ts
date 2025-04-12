
interface TelegramMessage {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  service?: string;
  company?: string;
}

const TELEGRAM_BOT_TOKEN = "7969964492:AAGBBkXJyLlRFeovbv8uZr4fdmgNmuO9gXQ";
const TELEGRAM_CHAT_ID = "-1001986564650";

export const sendToTelegram = async (data: TelegramMessage): Promise<boolean> => {
  try {
    // Format the message text with all available fields
    const text = `
🔔 Новая заявка с сайта!

👤 Имя: ${data.name}
📱 Телефон: ${data.phone}
${data.email ? `✉️ Email: ${data.email}` : ''}
${data.company ? `🏢 Компания: ${data.company}` : ''}
${data.service ? `🔧 Услуга: ${data.service}` : ''}
${data.message ? `💬 Сообщение: ${data.message}` : ''}
`;

    console.log('Sending message to Telegram:', text);
    
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
      }),
    });

    const responseData = await response.json();
    
    if (!response.ok) {
      console.error('Telegram API error:', responseData);
      return false;
    }
    
    console.log('Telegram API response:', responseData);
    return responseData.ok;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return false;
  }
};
