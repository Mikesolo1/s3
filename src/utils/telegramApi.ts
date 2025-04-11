
/**
 * Utility functions to send messages to a Telegram bot
 */

const TELEGRAM_BOT_TOKEN = "7969964492:AAGBBkXJyLlRFeovbv8uZr4fdmgNmuO9gXQ";
const TELEGRAM_CHAT_ID = "-1001956765940"; // Default group chat ID

/**
 * Sends a message to the Telegram bot
 * @param message The message to send
 * @returns Promise with the response
 */
export const sendTelegramMessage = async (message: string): Promise<Response> => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  console.log("Sending message to Telegram:", message);
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });
    
    console.log("Telegram API response status:", response.status);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Telegram API error:", errorData);
      throw new Error(`Telegram API error: ${response.status}`);
    }
    
    return response;
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    throw error;
  }
};

/**
 * Format form data into a readable message
 * @param data Form data object
 * @param formName Name of the form (e.g., "Contact Form", "Partner Form")
 * @returns Formatted message string
 */
export const formatFormDataForTelegram = (data: Record<string, string>, formName: string): string => {
  const timestamp = new Date().toLocaleString("ru-RU");
  
  let message = `<b>📝 Новая заявка с сайта (${formName})</b>\n`;
  message += `<b>⏱ Дата:</b> ${timestamp}\n\n`;
  
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      // Convert field names to readable Russian labels
      const fieldLabels: Record<string, string> = {
        name: "Имя",
        phone: "Телефон",
        email: "Email",
        company: "Компания",
        message: "Сообщение",
        plan: "Тариф",
      };
      
      const label = fieldLabels[key] || key;
      message += `<b>${label}:</b> ${value}\n`;
    }
  });
  
  message += `\n<b>📍 Источник:</b> Кнопка "${formName}"`;
  
  return message;
};
