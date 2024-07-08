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
      home: {
        btn: "Batafsil",
        catalog: "Katalog",
        search: "Qidirish...",
        tools: "Uskunalar bo'limi",
        withus: "Biz bilan ishlashning afzalliklari",
        work: "Ish jarayoni",
        service: "Bizning xizmatlarimiz",
        partner: "Bizning Xalqaro hamkorlarimiz",
        comment: "Xaridorlarimiz fikri",
        contact: "Bog'lanish uchun ma'lumot",
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
      home: {
        catalog: "Каталог",
        search: "Поиск...",
        tools: "Раздел Инструменты",
        withus: "Преимущества работы с нами",
        work: "Процесс работы",
        service: "Наши услуги",
        partner: "Наши международные партнеры",
        comment: "Отзывы клиентов",
        contact: "Контактная информация",
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
