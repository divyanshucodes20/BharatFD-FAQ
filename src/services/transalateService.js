import { Translate } from '@google-cloud/translate';

const translate = new Translate({ key: process.env.GOOGLE_API_KEY });

const translateText = async (text) => {
  const languages = ['hi', 'bn', 'en'];
  const translations = {};

  for (const lang of languages) {
    const [translatedText] = await translate.translate(text, lang);
    translations[lang] = translatedText;
  }
  
  return translations;
};

export default { translateText };
