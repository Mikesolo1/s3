
interface TelegramMessage {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  service?: string;
}

const TELEGRAM_BOT_TOKEN = "7969964492:AAGBBkXJyLlRFeovbv8uZr4fdmgNmuO9gXQ";
const TELEGRAM_CHAT_ID = "-1001986564650";

export const sendToTelegram = async (data: TelegramMessage): Promise<boolean> => {
  try {
    const text = `
🔔 Новая заявка с сайта!

👤 Имя: ${data.name}
📱 Телефон: ${data.phone}
${data.email ? `✉️ Email: ${data.email}` : ''}
${data.service ? `🔧 Услуга: ${data.service}` : ''}
${data.message ? `💬 Сообщение: ${data.message}` : ''}
`;

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    console.log('Telegram API response:', response);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return false;
  }
};
