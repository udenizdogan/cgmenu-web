import type { Solution } from "../types";

export const hotel: Solution = {
  id: "hotel",
  plan: "qr-menu",
  related: ["qr-menu", "restaurant-management"],
  guides: ["multilingual-menu", "allergens"],
  content: {
    tr: {
      title: "Otel QR Menü: Çok Dilli Restoran ve Bar Menüsü | CG Menu",
      description:
        "Oteller için çok dilli ve çoklu para birimli QR menü. Restoran, lobi bar ve havuz barı için ayrı menüler, alerjen bilgisi ve misafir geri bildirimi.",
      summary: "Uluslararası misafirler için çok dilli, çoklu para birimli menüler; her satış noktası için ayrı adres.",
      eyebrow: "Oteller için",
      h1: "Uluslararası misafirleriniz için otel QR menüsü",
      intro:
        "Otel misafirleri farklı ülkelerden gelir, farklı dillerde okur ve farklı para birimlerinde düşünür. CG Menu **otel QR menüsü** ile restoranınız, lobi barınız ya da havuz barınız için menüyü misafirin kendi dilinde ve para biriminde sunarsınız; alerjen bilgisi ve ürün fotoğraflarıyla misafir ne sipariş ettiğini bilir.",
      highlights: [
        { title: "Sınırsız dil", body: "İngilizce, Almanca, Rusça, Arapça ve ihtiyaç duyduğunuz her dil." },
        { title: "Çoklu para birimi", body: "Euro, dolar, sterlin; günlük kur ya da sabit otel kuru." },
        { title: "Her satış noktası için menü", body: "Restoran, bar ve havuz barı için ayrı işletme, ayrı adres ve QR kod." },
        { title: "Alerjen ve diyet bilgisi", body: "14 alerjen, vegan, vejetaryen ve glütensiz etiketleri." },
        { title: "Otel kimliğiyle tasarım", body: "Otelinizin renkleri, logosu, kapak videosu ve hikâyesi." },
        { title: "Geri bildirim", body: "Misafir yorumları, masa bilgisiyle birlikte yönetim paneline gelir." },
      ],
      sections: [
        {
          heading: "Otel menüsünde dil ve para birimi neden kritik?",
          blocks: [
            {
              type: "p",
              text: "Yalnızca Türkçe ya da yalnızca İngilizce bir menü, misafirin ürün sormak için personeli beklemesine yol açar. CG Menu'de misafir dilini menünün üstünden seçer; çevirisi girilmemiş ürünler boş kalmaz, varsayılan dilde görünür. Fiyatlar ana para biriminizde girilir; misafir isterse euro ya da dolar karşılığını görür. Kur, Avrupa Merkez Bankası'nın günlük referans kuruna göre otomatik güncellenebilir ya da otelin uyguladığı sabit kuru girebilirsiniz.",
            },
            {
              type: "p",
              text: "Çeviri ve kur konusunda pratik öneriler için [turistler için çok dilli menü](guide:multilingual-menu) rehberine bakın.",
            },
          ],
        },
        {
          heading: "Restoran, lobi bar, havuz barı: her biri ayrı menü",
          blocks: [
            {
              type: "p",
              text: "Aynı hesapla birden fazla işletme açabilirsiniz. Her satış noktası kendi menüsüne, görünümüne, adresine (ör. otel-restoran.cgmenu.tr, otel-havuzbar.cgmenu.tr) ve QR kodlarına sahip olur. İşletmeler arasında yönetim panelinden tek tıkla geçilir. Her satış noktası ayrı bir işletme olarak paketlenir ve ücretlendirilir.",
            },
          ],
        },
        {
          heading: "Misafir deneyimi ve itibar",
          blocks: [
            {
              type: "list",
              items: [
                "Ürün fotoğrafları ve açıklamalar, misafirin bilmediği yerel yemekleri tanımasını sağlar.",
                "Alerjen bilgisi, gıda alerjisi olan misafirin güvenle seçim yapmasına yardımcı olur. Bkz. [menüde alerjen bilgisi](guide:allergens).",
                "Geri bildirim formu, sorunları misafir çevrim içi yorum yazmadan önce öğrenmenizi sağlar.",
                "Kapak videosu ve “Hikâyemiz” bölümü otelinizin atmosferini menüye taşır.",
              ],
            },
          ],
        },
        {
          heading: "Otel restoranında sipariş ve kasa",
          blocks: [
            {
              type: "p",
              text: "À la carte restoranınızda masa siparişi, mutfak ekranı ve kasa için [Restoran Yönetim Sistemi](solution:restaurant-management)'ni kullanabilirsiniz.",
            },
            {
              type: "note",
              text: "CG Menu bir otel yönetim sistemi (PMS) değildir; oda hesabına aktarım gibi PMS entegrasyonları bulunmaz.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Her dil için ayrı QR kod gerekir mi?",
          a: "Hayır. Tek QR kod yeterlidir; misafir menüyü açtıktan sonra dilini seçer.",
        },
        {
          q: "Çevirileri kim yapıyor?",
          a: "Çevirileri panelden siz girersiniz. Eksik çeviriler varsayılan dilinizde gösterilir, böylece menüde boş alan kalmaz.",
        },
        {
          q: "Oda servisi menüsü için de kullanabilir miyim?",
          a: "Evet, oda servisi menüsünü ayrı bir işletme olarak açıp QR kodunu odalara yerleştirebilirsiniz. Sipariş alma ve oda hesabına aktarma özelliği yoktur.",
        },
      ],
    },
    en: {
      title: "Hotel QR Menu: Multilingual Restaurant & Bar Menus | CG Menu",
      description:
        "Multilingual, multi-currency QR menus for hotels. Separate menus for the restaurant, lobby bar and pool bar, allergen information and guest feedback.",
      summary: "Multilingual, multi-currency menus for international guests, with a separate address per outlet.",
      eyebrow: "For hotels",
      h1: "A hotel QR menu for your international guests",
      intro:
        "Hotel guests come from many countries, read different languages and think in different currencies. With the CG Menu **hotel QR menu**, your restaurant, lobby bar or pool bar menu appears in the guest's language and currency, with allergen information and photos so guests know what they are ordering.",
      highlights: [
        { title: "Unlimited languages", body: "English, German, Russian, Arabic and any language you need." },
        { title: "Multiple currencies", body: "Euro, dollar, pound; daily rate or a fixed hotel rate." },
        { title: "A menu per outlet", body: "Separate business, address and QR code for the restaurant, bar and pool bar." },
        { title: "Allergen and diet info", body: "14 allergens plus vegan, vegetarian and gluten-free tags." },
        { title: "Your hotel's identity", body: "Your colours, logo, cover video and story." },
        { title: "Feedback", body: "Guest comments reach the dashboard with the table they came from." },
      ],
      sections: [
        {
          heading: "Why language and currency matter on a hotel menu",
          blocks: [
            {
              type: "p",
              text: "A menu in only one language leaves guests waiting for staff to explain dishes. In CG Menu guests choose their language at the top; untranslated items are never blank but fall back to your default language. Prices are entered in your main currency and guests can see euro or dollar equivalents. Rates can follow the European Central Bank's daily reference rate or a fixed rate set by the hotel.",
            },
            { type: "p", text: "Practical tips on translation and rates: [multilingual menus for tourists](guide:multilingual-menu)." },
          ],
        },
        {
          heading: "Restaurant, lobby bar, pool bar: a menu each",
          blocks: [
            {
              type: "p",
              text: "One account can hold several businesses. Each outlet gets its own menu, look, address (for example hotel-restaurant.cgmenu.tr, hotel-poolbar.cgmenu.tr) and QR codes, and you switch between them in the dashboard with one click. Each outlet is a separate business with its own plan.",
            },
          ],
        },
        {
          heading: "Guest experience and reputation",
          blocks: [
            {
              type: "list",
              items: [
                "Photos and descriptions help guests discover local dishes they do not know.",
                "Allergen information helps guests with food allergies choose safely. See [allergen information on menus](guide:allergens).",
                "The feedback form lets you hear about problems before guests write an online review.",
                "A cover video and an “Our story” section bring your hotel's atmosphere to the menu.",
              ],
            },
          ],
        },
        {
          heading: "Orders and payments in the hotel restaurant",
          blocks: [
            {
              type: "p",
              text: "For table orders, a kitchen display and the till in your à la carte restaurant, use the [Restaurant Management System](solution:restaurant-management).",
            },
            {
              type: "note",
              text: "CG Menu is not a hotel property management system (PMS); there is no PMS integration such as charging to the room.",
            },
          ],
        },
      ],
      faq: [
        { q: "Do I need a QR code per language?", a: "No. One QR code is enough; guests pick their language once the menu opens." },
        {
          q: "Who does the translations?",
          a: "You enter translations in the dashboard. Missing translations fall back to your default language, so nothing is left blank.",
        },
        {
          q: "Can I use it for the room service menu?",
          a: "Yes. Open the room service menu as a separate business and place its QR code in the rooms. Ordering and charging to the room are not available.",
        },
      ],
    },
  },
};
