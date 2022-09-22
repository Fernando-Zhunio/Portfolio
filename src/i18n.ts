import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  es: {
    translation: {
      "Welcome": "Hola, bienvenido soy",
      "Name": "Fernando Zhunio Reyes",
      "profession": "Desarrollador de Software",
      "knowledge": "Conocimientos",
      "Programming languages": "Lenguajes de programación y mas",
      "Other": "Otros",
      "Contact": "Contacto",
      "About me": "Sobre mi",
      "Jobs": "Trabajos",
    }
  },
  en: {
    translation: {
      "Welcome": "Hello, welcome I am",
      "Name": "Fernando Zhunio Reyes",
      "profession": "Software Developer",
      "knowledge": "Knowledge",
      "Programming languages": "Programming languages and more",
      "Other": "Other",
      "Contact": "Contact",
      "About me": "About me",
      "Jobs": "Jobs",

    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;