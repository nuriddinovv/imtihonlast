import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      navbar: {
        mainpage: "Asosiy sahifa",
        catalog: "Katalog",
        about: "Biz haqimizda",
        news: "Yangiliklar",
        blog: "Blog",
        contacts: "Aloqa",
        language: "UZB",
        company: "Kompaniya",
        winning: "Yutuqlar",
        team: "Jamoa",
        galery: "Galereya",
      },
    },
  },
  ru: {
    translation: {
      navbar: {
        mainpage: "Главная",
        catalog: "Каталог",
        about: "О нас",
        news: "Новости",
        blog: "Блог",
        contacts: "Контакты",
        language: "RU",
        company: "Компания",
        winning: "Достижения",
        team: "Команда",
        galery: "Галерея",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
