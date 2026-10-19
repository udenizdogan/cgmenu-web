import type { Guide } from "../types";

export const multilingualMenu: Guide = {
  id: "multilingual-menu",
  published: "2026-10-19",
  updated: "2026-10-19",
  solutions: ["qr-menu", "hotel"],
  content: {
    tr: {
      title: "Turistler İçin Çok Dilli Menü Rehberi | CG Menu",
      description:
        "Turist ağırlayan işletmeler için çok dilli menü: hangi diller seçilmeli, yemek adları nasıl çevrilmeli, fiyatlar hangi para biriminde gösterilmeli?",
      h1: "Turistler için çok dilli menü nasıl hazırlanır?",
      lead:
        "Çok dilli menü hazırlarken önce misafirlerinizin en çok konuştuğu 2–4 dili seçin, yöresel yemek adlarını çevirmek yerine koruyup kısa bir açıklama ekleyin, alerjen bilgisini her dilde verin ve fiyatı ana para biriminizin yanında misafirin tanıdığı para biriminde de gösterin. Dijital menüde misafir dilini kendisi seçer; tek QR kod yeterlidir.",
      sections: [
        {
          heading: "Hangi dilleri eklemelisiniz?",
          blocks: [
            {
              type: "p",
              text: "Tüm dilleri eklemek yerine misafir profilinize bakın. Rezervasyon kayıtları, kredi kartı ülkeleri ya da otelin konaklama istatistikleri iyi bir başlangıçtır. Türkiye'deki turistik bölgelerde İngilizce, Almanca ve Rusça sık tercih edilir; bölgeye göre Arapça, Farsça, Fransızca ya da Ukraynaca da gerekebilir. Az sayıda ama eksiksiz çevrilmiş dil, çok sayıda yarım çeviriden iyidir.",
            },
          ],
        },
        {
          heading: "Yemek adlarını nasıl çevirmeli?",
          blocks: [
            {
              type: "list",
              items: [
                "**Yöresel adı koruyun:** “İskender”, “Mantı”, “Künefe” gibi adlar bir kimliktir. Adı olduğu gibi bırakıp altına kısa açıklama ekleyin: “Mantı – yoğurt ve tereyağlı sos ile küçük etli hamur bohçaları”.",
                "**Açıklamada içeriği anlatın:** Ana malzeme, pişirme yöntemi ve acı derecesi turist için yemeğin adından daha önemlidir.",
                "**Makine çevirisini kontrol ettirin:** Otomatik çeviri iyi bir taslaktır, ancak yemek terimlerinde sık hata yapar. Mümkünse ana dili o dil olan birine okutun.",
                "**Kısa tutun:** Mobil ekranda uzun açıklamalar okunmaz; 1–2 cümle yeterlidir.",
                "**Alerjenleri unutmayın:** Alerjen bilgisi her dilde anlaşılır olmalı; bkz. [menüde alerjen bilgisi](guide:allergens).",
              ],
            },
          ],
        },
        {
          heading: "Fiyatları hangi para biriminde göstermeli?",
          blocks: [
            {
              type: "p",
              text: "Fiyatlarınızı ana para biriminizde (ör. TL) girip misafire euro, dolar ya da sterlin karşılığını göstermek, misafirin fiyatı hızlıca kavramasını sağlar. Kuru iki şekilde yönetebilirsiniz:",
            },
            {
              type: "table",
              head: ["Yöntem", "Ne zaman uygun?"],
              rows: [
                ["Otomatik günlük kur", "Gösterilen karşılık güncel piyasaya yakın olsun istiyorsanız"],
                ["Sabit (elle girilen) kur", "Kasada döviz kabul ediyor ve kendi kurunuzu uyguluyorsanız; menü ile kasa aynı rakamı göstersin"],
              ],
            },
            {
              type: "p",
              text: "Döviz karşılıklarının bilgi amaçlı olduğunu, ödemenin hangi para biriminde alındığını menüde ya da kasada belirtmek yanlış anlamaları önler.",
            },
          ],
        },
        {
          heading: "Tasarım ve kullanım",
          blocks: [
            {
              type: "list",
              items: [
                "Dil seçimi menünün en üstünde, bayrak yerine dil adıyla (English, Deutsch, Русский) gösterilmeli; bayraklar bir dili değil bir ülkeyi temsil eder.",
                "Çevirisi eksik bir ürün boş görünmemeli; varsayılan dilde gösterilmeli.",
                "Tek QR kod tüm diller için yeterli olmalı; ayrı dil için ayrı kod masaları kalabalıklaştırır.",
                "Menü, misafirin seçtiği dili sonraki ziyaretlerde hatırlamalı.",
              ],
            },
          ],
        },
        {
          heading: "CG Menu ile çok dilli menü",
          blocks: [
            {
              type: "p",
              text: "[CG Menu QR menüde](solution:qr-menu) sınırsız dil ekleyebilir, her ürün ve kategori için çeviri girebilirsiniz; çevirisi eksik ürünler varsayılan dilinizde gösterilir. Menü arayüzü (düğmeler, etiket ve alerjen adları) Türkçe, İngilizce, Almanca ve Rusça hazırdır; diğer dillerde arayüz İngilizce görünür, ürün içerikleri sizin çevirinizle gösterilir. Ek para birimleri Avrupa Merkez Bankası'nın günlük referans kuruyla otomatik ya da sizin belirlediğiniz sabit kurla hesaplanır. Oteller için ayrıca [otel QR menü](solution:hotel) sayfasına bakın.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Çevirileri otomatik yapan bir araç kullanabilir miyim?",
          a: "Taslak için kullanabilirsiniz, ancak yemek adları ve içerikleri için mutlaka bir insan kontrolü önerilir. CG Menu'de çevirileri panelden siz girersiniz.",
        },
        {
          q: "Her dil için ayrı fiyat girmem gerekir mi?",
          a: "Hayır. Fiyat ana para biriminizde bir kez girilir; dil seçimi fiyatı değiştirmez, para birimi seçimi ise karşılığını gösterir.",
        },
      ],
    },
    en: {
      title: "Multilingual Menus for Tourists: A Guide | CG Menu",
      description:
        "A multilingual menu guide for restaurants, cafés and hotels that host tourists: which languages to add, how to translate dish names and which currency to show.",
      h1: "How to create a multilingual menu for tourists",
      lead:
        "When building a multilingual menu, start with the 2–4 languages your guests speak most, keep local dish names and add a short description instead of translating them, give allergen information in every language and show prices in a currency guests recognise next to your main currency. In a digital menu guests pick their own language, and one QR code is enough.",
      sections: [
        {
          heading: "Which languages should you add?",
          blocks: [
            {
              type: "p",
              text: "Rather than adding every language, look at your guest profile. Booking records, card-issuing countries or the hotel's occupancy statistics are a good start. In Turkey's tourist regions English, German and Russian are common; depending on the area, Arabic, Persian, French or Ukrainian may be needed. A few complete translations beat many half-finished ones.",
            },
          ],
        },
        {
          heading: "How to translate dish names",
          blocks: [
            {
              type: "list",
              items: [
                "**Keep the local name:** names such as “İskender”, “Mantı” or “Künefe” are part of the identity. Keep the name and add a short description: “Mantı – small meat dumplings with yoghurt and butter sauce”.",
                "**Describe the contents:** main ingredients, cooking method and spiciness matter more to tourists than the name.",
                "**Have machine translations checked:** automatic translation is a good draft but often gets food terms wrong. Ask a native speaker to read it if you can.",
                "**Keep it short:** long descriptions go unread on a phone; one or two sentences are enough.",
                "**Remember allergens:** allergen information must be clear in every language; see [allergen information on menus](guide:allergens).",
              ],
            },
          ],
        },
        {
          heading: "Which currency should prices be in?",
          blocks: [
            {
              type: "p",
              text: "Entering prices in your main currency and showing guests the euro, dollar or pound equivalent helps them grasp prices quickly. You can manage the rate in two ways:",
            },
            {
              type: "table",
              head: ["Method", "When it fits"],
              rows: [
                ["Automatic daily rate", "You want the equivalents close to the market"],
                ["Fixed (manual) rate", "You accept foreign currency at the till at your own rate and want the menu to match"],
              ],
            },
            {
              type: "p",
              text: "State on the menu or at the till that currency equivalents are for information and which currency payment is taken in, to avoid misunderstandings.",
            },
          ],
        },
        {
          heading: "Design and usability",
          blocks: [
            {
              type: "list",
              items: [
                "Put the language choice at the top, with language names (English, Deutsch, Русский) rather than flags; flags stand for countries, not languages.",
                "An untranslated item should never be blank; show it in the default language.",
                "One QR code should serve every language; separate codes per language clutter the table.",
                "The menu should remember the guest's language on later visits.",
              ],
            },
          ],
        },
        {
          heading: "Multilingual menus with CG Menu",
          blocks: [
            {
              type: "p",
              text: "In the [CG Menu QR menu](solution:qr-menu) you can add unlimited languages and enter translations per item and category; untranslated items fall back to your default language. The menu interface (buttons, tag and allergen names) is ready in Turkish, English, German and Russian; for other languages the interface appears in English while item content uses your translations. Extra currencies are calculated from the European Central Bank's daily reference rate or a fixed rate you set. Hotels should also see the [hotel QR menu](solution:hotel).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Can I use an automatic translation tool?",
          a: "For a draft, yes, but dish names and descriptions should be checked by a person. In CG Menu you enter translations yourself in the dashboard.",
        },
        {
          q: "Do I need separate prices per language?",
          a: "No. The price is entered once in your main currency; the language does not change it, and the currency choice shows its equivalent.",
        },
      ],
    },
  },
};
