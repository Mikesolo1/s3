
interface TelegramMessage {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  service?: string;
  company?: string;
}

const TELEGRAM_BOT_TOKEN = "7969964492:AAGBBkXJyLlRFeovbv8uZr4fdmgNmuO9gXQ";
const TELEGRAM_CHAT_ID = "-1001986564650"; // Keep the original chat ID

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

    // Change the API endpoint to use a proxy to bypass CORS issues
    const proxyUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(proxyUrl, {
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

    if (!response.ok) {
      const responseData = await response.json();
      console.error('Telegram API error:', responseData);
      
      // If the issue is with the chat ID, try an alternative approach
      if (responseData.description && responseData.description.includes("chat not found")) {
        console.log('Trying alternative chat ID format...');
        
        // Try without quotes
        const alternativeResponse = await fetch(proxyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: -1001986564650, // As a number without quotes
            text: text,
            parse_mode: 'HTML',
          }),
        });
        
        const altResponseData = await alternativeResponse.json();
        console.log('Alternative response:', altResponseData);
        return altResponseData.ok;
      }
      
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
