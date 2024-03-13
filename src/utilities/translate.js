import en from '../translations/en';
import cn from '../translations/cn';
import jp from '../translations/jp';

const translations = { en, cn, jp };

export const translate = (key, language = 'en') => {
  return translations[language][key] || key;
};