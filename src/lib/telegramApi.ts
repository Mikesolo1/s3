
interface TelegramMessage {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  service?: string;
  company?: string;
}

const TELEGRAM_BOT_TOKEN = "7969964492:AAGBBkXJyLlRFeovbv8uZr4fdmgNmuO9gXQ";
const TELEGRAM_CHAT_ID = "7969964492"; // ID чата в формате строки

export const sendToTelegram = async (data: TelegramMessage): Promise<boolean> => {
  try {
    // Форматирование текста сообщения со всеми доступными полями
    const text = `
🔔 Новая заявка с сайта!

👤 Имя: ${data.name}
📱 Телефон: ${data.phone}
${data.email ? `✉️ Email: ${data.email}` : ''}
${data.company ? `🏢 Компания: ${data.company}` : ''}
${data.service ? `🔧 Услуга: ${data.service}` : ''}
${data.message ? `💬 Сообщение: ${data.message}` : ''}
`;

    console.log('Отправка сообщения в Telegram:', text);

    // Используем прокси для обхода проблем с CORS
    const proxyUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    // Переходим на использование строкового формата ID чата
    // Используем предоставленный ID: 4666180937
    const response = await fetch(proxyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID, // Используем строковый формат ID
        text: text,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const responseData = await response.json();
      console.error('Telegram API error:', responseData);
      return false;
    }
    
    const responseData = await response.json();
    console.log('Telegram API response:', responseData);
    return responseData.ok;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return false;
  }
};
