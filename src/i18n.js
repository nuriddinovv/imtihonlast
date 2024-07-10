import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("language") || "ru";

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
        cardtext: "Qulay narx siyosati",
        cardp:
          "Uskunalarimiz yuqori sifatga ega va boshqa kompanyalardan 25% arzon.",
        1: "Siz kerakli uskunalar uchun ariza topshirasiz.",
        2: "Mutaxassislarimiz siz bilan bog'lanib, uskunalar bo'yicha barcha savollarga javob berishadi.",
        3: "Uskunaning mezonlari va talab qilinadigan texnik xususiyatlaridan kelib chiqib, biz maxsus tijorat taklifini tuzamiz.",
        4: "Siz bilan shartnoma imzolaymiz.",
        5: "Uskunalarni yetkazib beramiz.",
        6: " Uskunani o'rnatib beramiz va tibbiy xodimlaringizga uskunadan foydalanish tartibini  o'rgatamiz.",
        7: "Biz 1 yildan 3 yilgacha kafolat beramiz va kafolat muddati davomida biz 24 soat davomida bepul xizmat ko'rsatamiz.",
        8: "Mutaxassislarimiz siz bilan bog'lanib, uskunalar bo'yicha barcha savollarga javob berishadi.",
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
        btn: "Подробнее",
        catalog: "Каталог",
        search: "Поиск...",
        tools: "Отдел оборудования",
        withus: "Преимущества работы с нами",
        work: "Рабочий процесс",
        service: "Наши сервисы",
        partner: "Наши международные партнеры",
        comment: "Отзывы от наших клиентов",
        contact: "Контактная информация",
        cardtext: "Удобная ценовая политика",
        cardp:
          "Наше оборудование высокого качества и на 25% дешевле, чем у других компаний.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
