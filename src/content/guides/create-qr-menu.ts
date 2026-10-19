import type { Guide } from "../types";

export const createQrMenu: Guide = {
  id: "create-qr-menu",
  published: "2026-10-19",
  updated: "2026-10-19",
  solutions: ["qr-menu", "cafe"],
  content: {
    tr: {
      title: "QR Menü Nasıl Yapılır? Adım Adım Rehber | CG Menu",
      description:
        "QR menü nasıl yapılır? Menü içeriğini hazırlamaktan QR kodu basıp masalara yerleştirmeye kadar adım adım rehber, fotoğraf ve baskı ipuçları.",
      h1: "QR menü nasıl yapılır? Adım adım rehber",
      lead:
        "QR menü yapmak için önce menü içeriğinizi (kategoriler, ürünler, fiyatlar, görseller) hazırlar, bir QR menü sisteminde menünüzü oluşturur, görünümü markanıza uydurur ve son olarak menü adresine bağlı QR kodu basıp masalara yerleştirirsiniz. CG Menu ile bu süreç genellikle bir öğleden sonra içinde tamamlanır.",
      sections: [
        {
          heading: "1. Menü içeriğini hazırlayın",
          blocks: [
            {
              type: "p",
              text: "Panel başına oturmadan önce mevcut menünüzü bir tabloda toplayın. Bu hazırlık, girişi hızlandırır ve hataları azaltır.",
            },
            {
              type: "list",
              items: [
                "**Kategoriler:** Misafirin aradığını kolay bulacağı 5–10 kategori (ör. Kahvaltı, Başlangıçlar, Ana Yemekler, Tatlılar, Sıcak İçecekler).",
                "**Ürün adı ve kısa açıklama:** Açıklamada ana malzemeleri ve pişirme yöntemini belirtin; 1–2 cümle yeterli.",
                "**Porsiyon ya da boy seçenekleri:** Yarım/tam porsiyon, küçük/büyük boy gibi; her birinin fiyatı.",
                "**Alerjenler ve etiketler:** Gluten, süt, yumurta gibi alerjenler; vegan, acılı gibi etiketler. Bkz. [menüde alerjen bilgisi](guide:allergens).",
                "**Çeviriler:** Turist ağırlıyorsanız en az İngilizce; bkz. [çok dilli menü](guide:multilingual-menu).",
              ],
            },
          ],
        },
        {
          heading: "2. Ürün fotoğraflarını çekin",
          blocks: [
            {
              type: "list",
              items: [
                "Gün ışığında, pencere kenarında çekin; flaş kullanmayın.",
                "Tüm ürünleri aynı açıyla ve benzer arka planla çekin; menü bütünlüklü görünür.",
                "Tabağı kadrajın ortasına yerleştirin; mobilde kare ya da yataya yakın kadraj iyi görünür.",
                "Her ürüne fotoğraf şart değil; en çok satan ve en görsel ürünlerden başlayın.",
              ],
            },
            {
              type: "p",
              text: "CG Menu, yüklenen görselleri otomatik olarak web için optimize eder; menünüz mobil bağlantıda da hızlı açılır.",
            },
          ],
        },
        {
          heading: "3. Hesabınızı açın ve menüyü girin",
          blocks: [
            {
              type: "steps",
              items: [
                { title: "Paketi seçip kaydolun", body: "[Fiyatlar](page:pricing) sayfasından paketinizi seçin, hesabınızı oluşturun." },
                { title: "İşletmenizi tanımlayın", body: "İşletme adı, türü, menünüzün ana dili ve para birimi. Menü adresinizi seçin: isletmeniz.cgmenu.tr." },
                { title: "Kategorileri ve ürünleri ekleyin", body: "Hazırladığınız tablodan girin; sürükleyip bırakarak sıralayın." },
                { title: "Dilleri ve para birimlerini açın", body: "Ek diller için çevirileri girin; ek para birimleri için otomatik ya da sabit kuru seçin." },
              ],
            },
          ],
        },
        {
          heading: "4. Görünümü markanıza uydurun",
          blocks: [
            {
              type: "p",
              text: "Renklerinizi, logonuzu ve kapak görselinizi ya da videonuzu yükleyin, yazı tiplerinizi seçin. Canlı önizlemede menünün telefonda nasıl göründüğünü anında görürsünüz. Okunabilirlik için yazı rengiyle zemin arasında yeterli kontrast bırakın. İsterseniz “Hikâyemiz” bölümüne işletmenizi anlatan metin, görsel ve videolar ekleyin.",
            },
          ],
        },
        {
          heading: "5. QR kodu basın ve yerleştirin",
          blocks: [
            {
              type: "p",
              text: "QR kodu PNG ya da SVG olarak indirebilir, renk ve boyutunu ayarlayabilirsiniz. Masa bazlı kodlar, misafirin geri bildirimini ve garson çağrısını doğru masayla eşleştirir; tüm masalar için yazdırmaya hazır tek sayfa oluşturup PDF olarak da kaydedebilirsiniz.",
            },
            {
              type: "list",
              items: [
                "**Boyut:** Masa üstü için kodun kenarı en az 3 cm olmalı; uzaktan okutulacak afişlerde büyütün.",
                "**Kontrast:** Koyu kod, açık zemin. Kodun çevresinde boş bir kenar (sessiz alan) bırakın.",
                "**Kısa yönlendirme:** “Menü için okutun” gibi bir yazı ve gerekirse Wi-Fi bilgisi ekleyin.",
                "**Dayanıklılık:** Masa standı, akrilik blok ya da laminasyon; ıslanan ve çizilen kod okunmaz.",
                "**Test:** Basmadan önce farklı telefonlarla okutun, menünün açıldığından emin olun.",
              ],
            },
          ],
        },
        {
          heading: "6. Menünüzü canlı tutun",
          blocks: [
            {
              type: "list",
              items: [
                "Biten ürünleri gün içinde “tükendi” olarak işaretleyin.",
                "Zamlarda [toplu fiyat güncelleme](solution:qr-menu) ile seçili ürünlere yüzde artış uygulayın.",
                "Sezonu biten ürünleri silmek yerine gizleyin; gelecek sezon tek dokunuşla geri açın.",
                "Geri bildirimleri düzenli okuyun; sık gelen yorumlar menü açıklamalarını iyileştirmek için iyi bir kaynaktır.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "QR menü yapmak ne kadar sürer?",
          a: "İçeriğiniz hazırsa 30–50 ürünlük bir menüyü girmek ve görünümü ayarlamak genellikle birkaç saat sürer.",
        },
        {
          q: "Ücretsiz QR kod oluşturucularla QR menü yapılabilir mi?",
          a: "Bir PDF menüyü QR koda bağlayabilirsiniz, ancak PDF mobilde zor okunur, güncellemek için yeniden yükleme gerekir ve dil, alerjen ya da tükendi bilgisi sunmaz. Bazı ücretsiz kod oluşturucular kodu kendi yönlendirme adresleri üzerinden çalıştırır; hizmet kapanırsa basılı kodlar çalışmaz.",
        },
        {
          q: "Menü adresimi sonradan değiştirebilir miyim?",
          a: "Evet, ayarlardan değiştirebilirsiniz. Ancak eski adrese bağlı basılı QR kodlar çalışmayacağı için kodları yeniden basmanız gerekir.",
        },
      ],
    },
    en: {
      title: "How to Create a QR Menu, Step by Step | CG Menu",
      description:
        "How to make a QR code menu, from preparing the content to printing the QR code and placing it on tables. Step-by-step guide with photo and printing tips.",
      h1: "How to create a QR menu: a step-by-step guide",
      lead:
        "To create a QR menu, prepare your menu content (categories, items, prices, photos), build the menu in a QR menu system, match the look to your brand, and finally print the QR code that points to your menu and place it on the tables. With CG Menu this usually fits into one afternoon.",
      sections: [
        {
          heading: "1. Prepare the menu content",
          blocks: [
            { type: "p", text: "Before opening the dashboard, collect your current menu in a spreadsheet. It speeds up entry and cuts down on mistakes." },
            {
              type: "list",
              items: [
                "**Categories:** 5–10 categories where guests find things easily (e.g. Breakfast, Starters, Mains, Desserts, Hot Drinks).",
                "**Item name and short description:** mention the main ingredients and cooking method; one or two sentences are enough.",
                "**Portion or size options:** half/full portion, small/large, each with its price.",
                "**Allergens and tags:** gluten, milk, eggs and other allergens; tags such as vegan or spicy. See [allergen information on menus](guide:allergens).",
                "**Translations:** at least English if you host tourists; see [multilingual menus](guide:multilingual-menu).",
              ],
            },
          ],
        },
        {
          heading: "2. Photograph your dishes",
          blocks: [
            {
              type: "list",
              items: [
                "Shoot in daylight by a window; avoid flash.",
                "Use the same angle and a similar background for every dish so the menu feels consistent.",
                "Centre the plate; square or near-landscape frames look good on mobile.",
                "Not every item needs a photo; start with best sellers and the most visual dishes.",
              ],
            },
            { type: "p", text: "CG Menu optimises uploaded images for the web automatically, so your menu stays fast on mobile data." },
          ],
        },
        {
          heading: "3. Open an account and enter the menu",
          blocks: [
            {
              type: "steps",
              items: [
                { title: "Pick a plan and sign up", body: "Choose your plan on the [Pricing](page:pricing) page and create your account." },
                { title: "Describe your business", body: "Business name, type, the menu's main language and currency. Pick your menu address: yourbusiness.cgmenu.tr." },
                { title: "Add categories and items", body: "Enter them from your spreadsheet and drag and drop to sort." },
                { title: "Turn on languages and currencies", body: "Enter translations for extra languages; choose an automatic or fixed rate for extra currencies." },
              ],
            },
          ],
        },
        {
          heading: "4. Match the look to your brand",
          blocks: [
            {
              type: "p",
              text: "Upload your colours, logo and cover image or video, and choose your typefaces. The live preview shows how the menu looks on a phone. Keep enough contrast between text and background. If you like, add text, photos and videos about your business in the “Our story” section.",
            },
          ],
        },
        {
          heading: "5. Print and place the QR code",
          blocks: [
            {
              type: "p",
              text: "Download the QR code as PNG or SVG and adjust its colour and size. Per-table codes match guest feedback and waiter calls to the right table; you can generate one print-ready page for every table and save it as PDF.",
            },
            {
              type: "list",
              items: [
                "**Size:** at least 3 cm per side on a table; larger on posters scanned from a distance.",
                "**Contrast:** dark code on a light background, with a blank margin (quiet zone) around it.",
                "**A short prompt:** “Scan for the menu” and, if useful, the Wi-Fi details.",
                "**Durability:** a table stand, acrylic block or lamination; a wet or scratched code will not scan.",
                "**Test:** scan with several phones before printing in bulk.",
              ],
            },
          ],
        },
        {
          heading: "6. Keep your menu alive",
          blocks: [
            {
              type: "list",
              items: [
                "Mark items as sold out during the day.",
                "When prices rise, apply a percentage to selected items with [bulk price updates](solution:qr-menu).",
                "Hide seasonal items instead of deleting them and switch them back on next season.",
                "Read feedback regularly; recurring comments are a good source for better descriptions.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "How long does it take to create a QR menu?",
          a: "With the content ready, entering a 30–50 item menu and setting up the look usually takes a few hours.",
        },
        {
          q: "Can I make a QR menu with a free QR code generator?",
          a: "You can link a PDF menu to a QR code, but PDFs are hard to read on phones, need re-uploading for every change and offer no language, allergen or sold-out information. Some free generators route codes through their own redirect address; if the service closes, printed codes stop working.",
        },
        {
          q: "Can I change my menu address later?",
          a: "Yes, in the settings. Printed QR codes pointing to the old address will stop working, so you would need to reprint them.",
        },
      ],
    },
  },
};
