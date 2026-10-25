import type { Allergen, ItemTag, Nutrition } from "./types";

/** Fixed interface text of the public menu (not business content). */
export type MenuStrings = {
  language: string;
  currency: string;
  categories: string;
  soldOut: string;
  close: string;
  tags: Record<ItemTag, string>;
  allergens: string;
  allergenNames: Record<Allergen, string>;
  nutrition: string;
  perPortion: string;
  /** Heading of a combo's contents */
  combo: string;
  /** Badge on combos in lists */
  comboBadge: string;
  /** Screen-reader text before a combo's struck-through regular price */
  regularPrice: string;
  nutrients: Record<keyof Nutrition, string>;
  feedback: {
    open: string;
    title: string;
    rating: string;
    stars: (count: number) => string;
    comment: string;
    name: string;
    contact: string;
    consent: string;
    submit: string;
    thanks: string;
    error: string;
    demoNote: string;
  };
  call: {
    open: string;
    title: string;
    table: (name: string) => string;
    waiter: string;
    waiterHint: string;
    bill: string;
    billHint: string;
    sent: string;
    error: string;
  };
  nav: { home: string; menu: string; about: string };
  welcome: string;
  search: string;
  seeAll: string;
  popular: string;
  similar: string;
  itemCount: (count: number) => string;
  noResults: string;
  back: string;
  poweredBy: string;
  notFound: { title: string; body: string };
};

const tr: MenuStrings = {
  language: "Dil",
  currency: "Para birimi",
  categories: "Kategoriler",
  soldOut: "Tükendi",
  close: "Kapat",
  tags: {
    vegetarian: "Vejetaryen",
    vegan: "Vegan",
    spicy: "Acılı",
    glutenFree: "Glütensiz",
    popular: "Çok tercih edilen",
    new: "Yeni",
    chefsPick: "Şef önerisi",
  },
  allergens: "Alerjenler",
  allergenNames: {
    gluten: "Gluten",
    crustaceans: "Kabuklular",
    eggs: "Yumurta",
    fish: "Balık",
    peanuts: "Yer fıstığı",
    soy: "Soya",
    milk: "Süt ürünleri",
    nuts: "Sert kabuklu yemişler",
    celery: "Kereviz",
    mustard: "Hardal",
    sesame: "Susam",
    sulphites: "Sülfitler",
    lupin: "Acı bakla",
    molluscs: "Yumuşakçalar",
  },
  nutrition: "Besin değerleri",
  perPortion: "Porsiyon başına",
  combo: "Kombin içeriği",
  comboBadge: "Kombin",
  regularPrice: "Ayrı ayrı fiyatı",
  nutrients: { calories: "Kalori", protein: "Protein", carbs: "Karb.", fat: "Yağ" },
  feedback: {
    open: "Geri bildirim",
    title: "Deneyiminiz nasıldı?",
    rating: "Puanınız",
    stars: (count) => `${count} yıldız`,
    comment: "Yorumunuz",
    name: "Adınız (isteğe bağlı)",
    contact: "Telefon ya da e-posta (isteğe bağlı)",
    consent:
      "İletişim bilgilerimin, geri bildirimimle ilgili bana ulaşılması amacıyla işlenmesini kabul ediyorum.",
    submit: "Gönder",
    thanks: "Teşekkürler! Geri bildiriminiz alındı.",
    error: "Gönderilemedi. Lütfen biraz sonra yeniden deneyin.",
    demoNote: "Bu bir örnek menüdür; gönderimler kaydedilmez.",
  },
  call: {
    open: "Garson",
    title: "Nasıl yardımcı olalım?",
    table: (name) => `Masa: ${name}`,
    waiter: "Garson çağır",
    waiterHint: "Bir çalışanımız masanıza gelir.",
    bill: "Hesap iste",
    billHint: "Hesabınız masanıza getirilir.",
    sent: "İletildi, birazdan yanınızdayız.",
    error: "İletilemedi. Lütfen bir çalışanımıza seslenin.",
  },
  nav: { home: "Ana sayfa", menu: "Menü", about: "Hakkımızda" },
  welcome: "Bugün ne yemek istersiniz?",
  search: "Menüde ara",
  seeAll: "Tümünü gör",
  popular: "Çok tercih edilenler",
  similar: "Benzer ürünler",
  itemCount: (count) => `${count} ürün`,
  noResults: "Aramanızla eşleşen ürün yok.",
  back: "Geri",
  poweredBy: "CG Menu ile hazırlandı",
  notFound: {
    title: "Menü bulunamadı",
    body: "Bu adreste yayınlanmış bir menü yok.",
  },
};

const en: MenuStrings = {
  language: "Language",
  currency: "Currency",
  categories: "Categories",
  soldOut: "Sold out",
  close: "Close",
  tags: {
    vegetarian: "Vegetarian",
    vegan: "Vegan",
    spicy: "Spicy",
    glutenFree: "Gluten-free",
    popular: "Popular",
    new: "New",
    chefsPick: "Chef's pick",
  },
  allergens: "Allergens",
  allergenNames: {
    gluten: "Gluten",
    crustaceans: "Crustaceans",
    eggs: "Eggs",
    fish: "Fish",
    peanuts: "Peanuts",
    soy: "Soy",
    milk: "Milk",
    nuts: "Tree nuts",
    celery: "Celery",
    mustard: "Mustard",
    sesame: "Sesame",
    sulphites: "Sulphites",
    lupin: "Lupin",
    molluscs: "Molluscs",
  },
  nutrition: "Nutrition",
  perPortion: "Per portion",
  combo: "In this combo",
  comboBadge: "Combo",
  regularPrice: "Price separately",
  nutrients: { calories: "Calories", protein: "Protein", carbs: "Carbs", fat: "Fat" },
  feedback: {
    open: "Feedback",
    title: "How was your experience?",
    rating: "Your rating",
    stars: (count) => `${count} ${count === 1 ? "star" : "stars"}`,
    comment: "Your comment",
    name: "Your name (optional)",
    contact: "Phone or email (optional)",
    consent:
      "I agree to my contact details being processed so that I can be reached about my feedback.",
    submit: "Send",
    thanks: "Thank you! Your feedback has been received.",
    error: "Could not send. Please try again in a moment.",
    demoNote: "This is a sample menu; submissions are not saved.",
  },
  call: {
    open: "Waiter",
    title: "How can we help?",
    table: (name) => `Table: ${name}`,
    waiter: "Call a waiter",
    waiterHint: "Someone will come to your table.",
    bill: "Ask for the bill",
    billHint: "We'll bring the bill to your table.",
    sent: "Sent. We'll be right with you.",
    error: "Could not be sent. Please ask a member of staff.",
  },
  nav: { home: "Home", menu: "Menu", about: "About" },
  welcome: "What would you like to eat today?",
  search: "Search the menu",
  seeAll: "See all",
  popular: "Popular",
  similar: "You may also like",
  itemCount: (count) => `${count} ${count === 1 ? "item" : "items"}`,
  noResults: "No items match your search.",
  back: "Back",
  poweredBy: "Made with CG Menu",
  notFound: {
    title: "Menu not found",
    body: "There is no menu published at this address.",
  },
};

const de: MenuStrings = {
  language: "Sprache",
  currency: "Währung",
  categories: "Kategorien",
  soldOut: "Ausverkauft",
  close: "Schließen",
  tags: {
    vegetarian: "Vegetarisch",
    vegan: "Vegan",
    spicy: "Scharf",
    glutenFree: "Glutenfrei",
    popular: "Beliebt",
    new: "Neu",
    chefsPick: "Empfehlung des Küchenchefs",
  },
  allergens: "Allergene",
  allergenNames: {
    gluten: "Gluten",
    crustaceans: "Krebstiere",
    eggs: "Eier",
    fish: "Fisch",
    peanuts: "Erdnüsse",
    soy: "Soja",
    milk: "Milch",
    nuts: "Schalenfrüchte",
    celery: "Sellerie",
    mustard: "Senf",
    sesame: "Sesam",
    sulphites: "Sulfite",
    lupin: "Lupinen",
    molluscs: "Weichtiere",
  },
  nutrition: "Nährwerte",
  perPortion: "Pro Portion",
  combo: "Im Menü enthalten",
  comboBadge: "Menü",
  regularPrice: "Einzelpreis",
  nutrients: { calories: "Kalorien", protein: "Eiweiß", carbs: "KH", fat: "Fett" },
  feedback: {
    open: "Feedback",
    title: "Wie war Ihr Besuch?",
    rating: "Ihre Bewertung",
    stars: (count) => `${count} ${count === 1 ? "Stern" : "Sterne"}`,
    comment: "Ihr Kommentar",
    name: "Ihr Name (optional)",
    contact: "Telefon oder E-Mail (optional)",
    consent:
      "Ich bin einverstanden, dass meine Kontaktdaten verarbeitet werden, um mich zu meinem Feedback zu kontaktieren.",
    submit: "Senden",
    thanks: "Vielen Dank! Ihr Feedback ist angekommen.",
    error: "Senden fehlgeschlagen. Bitte versuchen Sie es gleich noch einmal.",
    demoNote: "Dies ist eine Beispielkarte; Einsendungen werden nicht gespeichert.",
  },
  call: {
    open: "Service",
    title: "Wie können wir helfen?",
    table: (name) => `Tisch: ${name}`,
    waiter: "Bedienung rufen",
    waiterHint: "Jemand kommt an Ihren Tisch.",
    bill: "Rechnung bitte",
    billHint: "Wir bringen die Rechnung an Ihren Tisch.",
    sent: "Gesendet. Wir sind gleich bei Ihnen.",
    error: "Konnte nicht gesendet werden. Bitte sprechen Sie unser Personal an.",
  },
  nav: { home: "Start", menu: "Speisekarte", about: "Über uns" },
  welcome: "Worauf haben Sie heute Appetit?",
  search: "Speisekarte durchsuchen",
  seeAll: "Alle ansehen",
  popular: "Beliebt",
  similar: "Das könnte Ihnen auch gefallen",
  itemCount: (count) => `${count} Artikel`,
  noResults: "Keine Treffer für Ihre Suche.",
  back: "Zurück",
  poweredBy: "Erstellt mit CG Menu",
  notFound: {
    title: "Speisekarte nicht gefunden",
    body: "Unter dieser Adresse ist keine Speisekarte veröffentlicht.",
  },
};

const ru: MenuStrings = {
  language: "Язык",
  currency: "Валюта",
  categories: "Категории",
  soldOut: "Нет в наличии",
  close: "Закрыть",
  tags: {
    vegetarian: "Вегетарианское",
    vegan: "Веганское",
    spicy: "Острое",
    glutenFree: "Без глютена",
    popular: "Популярное",
    new: "Новинка",
    chefsPick: "Выбор шефа",
  },
  allergens: "Аллергены",
  allergenNames: {
    gluten: "Глютен",
    crustaceans: "Ракообразные",
    eggs: "Яйца",
    fish: "Рыба",
    peanuts: "Арахис",
    soy: "Соя",
    milk: "Молоко",
    nuts: "Орехи",
    celery: "Сельдерей",
    mustard: "Горчица",
    sesame: "Кунжут",
    sulphites: "Сульфиты",
    lupin: "Люпин",
    molluscs: "Моллюски",
  },
  nutrition: "Пищевая ценность",
  perPortion: "На порцию",
  combo: "В комбо входит",
  comboBadge: "Комбо",
  regularPrice: "По отдельности",
  nutrients: { calories: "Калории", protein: "Белки", carbs: "Углев.", fat: "Жиры" },
  feedback: {
    open: "Отзыв",
    title: "Как вам у нас?",
    rating: "Ваша оценка",
    stars: (count) => `${count} из 5`,
    comment: "Ваш комментарий",
    name: "Ваше имя (необязательно)",
    contact: "Телефон или e-mail (необязательно)",
    consent:
      "Я согласен(на) на обработку моих контактных данных, чтобы со мной могли связаться по поводу отзыва.",
    submit: "Отправить",
    thanks: "Спасибо! Ваш отзыв получен.",
    error: "Не удалось отправить. Попробуйте ещё раз чуть позже.",
    demoNote: "Это пример меню; отправленные отзывы не сохраняются.",
  },
  call: {
    open: "Официант",
    title: "Чем помочь?",
    table: (name) => `Стол: ${name}`,
    waiter: "Позвать официанта",
    waiterHint: "К вашему столу подойдут.",
    bill: "Попросить счёт",
    billHint: "Счёт принесут к вашему столу.",
    sent: "Отправлено. Скоро подойдём.",
    error: "Не удалось отправить. Пожалуйста, обратитесь к персоналу.",
  },
  nav: { home: "Главная", menu: "Меню", about: "О нас" },
  welcome: "Что бы вы хотели сегодня?",
  search: "Поиск по меню",
  seeAll: "Все",
  popular: "Популярное",
  similar: "Вам может понравиться",
  itemCount: (count) => {
    const form = new Intl.PluralRules("ru").select(count);
    const word = form === "one" ? "позиция" : form === "few" ? "позиции" : "позиций";
    return `${count} ${word}`;
  },
  noResults: "Ничего не найдено.",
  back: "Назад",
  poweredBy: "Создано в CG Menu",
  notFound: {
    title: "Меню не найдено",
    body: "По этому адресу нет опубликованного меню.",
  },
};

const strings: Record<string, MenuStrings> = { tr, en, de, ru };

/** Falls back to English for locales the interface is not translated into. */
export const getMenuStrings = (locale: string): MenuStrings =>
  strings[locale] ?? strings[locale.split("-")[0]] ?? en;
