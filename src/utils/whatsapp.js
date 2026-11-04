export const WHATSAPP_PHONE = '5492944778814';

export const buildWhatsAppUrl = (customText) => {
  const defaultText = '¡Hola! Quisiera consultar por un producto de su catálogo en Emporio 69.';
  const text = customText || defaultText;
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
};
