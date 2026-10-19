import type { Solution } from "../types";

export const qrMenu: Solution = {
  id: "qr-menu",
  plan: "qr-menu",
  related: ["restaurant-management", "cafe", "hotel"],
  guides: ["what-is-qr-menu", "create-qr-menu", "multilingual-menu", "allergens"],
  content: {
    tr: {
      title: "QR Menü: Restoran ve Kafeler İçin Dijital Menü | CG Menu",
      description:
        "Markanıza uygun QR menüyü dakikalar içinde oluşturun. Çok dilli, çoklu para birimli, alerjen bilgili dijital menü; fiyat değişince yeniden baskı yok.",
      summary:
        "Markanıza göre tasarlanan, çok dilli ve çoklu para birimli dijital menü. Fiyatı panelden değiştirin, menü anında güncellensin.",
      eyebrow: "QR Menü",
      h1: "Markanızı taşıyan QR menü, dakikalar içinde yayında",
      intro:
        "CG Menu, restoran, kafe, bar ve oteller için geliştirilmiş bir **QR menü** sistemidir. Menünüzü panelden oluşturursunuz; misafiriniz masadaki QR kodu telefon kamerasıyla okutur ve menünüz uygulama indirmeden tarayıcıda açılır. Fiyat, ürün ya da stok durumu değiştiğinde menü anında güncellenir; QR kodu yeniden bastırmanız gerekmez.",
      highlights: [
        {
          title: "Kendi adresiniz",
          body: "Menünüz isletmeniz.cgmenu.tr adresinde, güvenli bağlantıyla yayınlanır.",
        },
        {
          title: "Markanıza göre tasarım",
          body: "Renk, logo, kapak görseli ya da videosu ve yazı tipleriyle menünüz sizin gibi görünür.",
        },
        {
          title: "Her misafire kendi dilinde",
          body: "Sınırsız dil; misafir dilini ve para birimini menünün üstünden seçer.",
        },
        {
          title: "Alerjen ve besin değeri",
          body: "14 alerjen, vegan/vejetaryen/glütensiz etiketleri ve porsiyon başına besin değerleri.",
        },
        {
          title: "Masa QR kodları",
          body: "Her masaya ayrı kod basın; geri bildirim ve garson çağrısı doğru masaya düşsün.",
        },
        {
          title: "Toplu fiyat güncelleme",
          body: "Seçtiğiniz ürünlerin fiyatını tek seferde yüzde olarak artırın ya da indirin.",
        },
      ],
      sections: [
        {
          heading: "QR menü nedir, işletmenize ne kazandırır?",
          blocks: [
            {
              type: "p",
              text: "QR menü, basılı menünün yerini alan ve bir QR kod aracılığıyla misafirin telefonunda açılan dijital menüdür. Basılı menüde her fiyat değişikliği yeni bir baskı demektir; dijital menüde ise değişikliği panelden yaparsınız ve saniyeler içinde tüm masalarda geçerli olur. Kavramı daha ayrıntılı anlatan [QR menü nedir rehberimize](guide:what-is-qr-menu) göz atabilirsiniz.",
            },
            {
              type: "list",
              items: [
                "**Baskı maliyeti ve bekleme yok:** Zam, yeni ürün ya da sezon menüsü için matbaaya gitmezsiniz.",
                "**Biten ürün menüde görünmez sorun yaratmaz:** Ürünü “tükendi” olarak işaretlersiniz, misafir sipariş vermeden önce görür.",
                "**Turist misafire kendi dili:** Menü, misafirin seçtiği dilde ve para biriminde gösterilir.",
                "**Görselle satış:** Ürün fotoğrafları ve açıklamalar, misafirin karar vermesini kolaylaştırır.",
              ],
            },
          ],
        },
        {
          heading: "Menünüzü nasıl oluşturursunuz?",
          blocks: [
            {
              type: "steps",
              items: [
                {
                  title: "Hesabınızı açın ve adresinizi seçin",
                  body: "İşletme adınızı, türünüzü ve menü adresinizi (isletmeniz.cgmenu.tr) belirleyin.",
                },
                {
                  title: "Kategorileri ve ürünleri ekleyin",
                  body: "Ürün adı, açıklama, görsel, porsiyon seçenekleri ve fiyatları girin; sürükleyip bırakarak sıralayın.",
                },
                {
                  title: "Görünümü markanıza uydurun",
                  body: "Renklerinizi, logonuzu, kapak görselinizi ya da videonuzu ve yazı tiplerinizi seçin; değişiklikleri canlı önizlemede görün.",
                },
                {
                  title: "QR kodunuzu indirip masalara yerleştirin",
                  body: "Genel menü kodunu ya da masa bazlı kodları PNG/SVG olarak indirin veya tüm masalar için yazdırmaya hazır sayfa oluşturun.",
                },
              ],
            },
            {
              type: "p",
              text: "Adım adım ekran ve baskı önerileri için [QR menü nasıl yapılır](guide:create-qr-menu) rehberine bakın.",
            },
          ],
        },
        {
          heading: "Menü içeriği: misafirin sorduğu her şeyin cevabı",
          blocks: [
            {
              type: "p",
              text: "Her ürüne açıklama, görsel ve birden çok porsiyon ya da boyut seçeneği (ör. küçük/büyük, tek/duble) ekleyebilirsiniz. Ürünleri **vejetaryen, vegan, acılı, glütensiz, popüler, yeni** ve **şefin önerisi** gibi etiketlerle işaretleyebilirsiniz.",
            },
            {
              type: "p",
              text: "Gıda alerjisi olan misafirler için ürün başına **14 alerjeni** (gluten, süt, yumurta, fıstık, susam vb.) ve isterseniz kalori, protein, karbonhidrat ve yağ değerlerini gösterebilirsiniz. Neden önemli olduğunu [menüde alerjen bilgisi](guide:allergens) rehberinde anlattık.",
            },
          ],
        },
        {
          heading: "Çok dilli ve çoklu para birimli menü",
          blocks: [
            {
              type: "p",
              text: "Menünüze istediğiniz kadar dil ekleyip her ürün ve kategori için çeviri girebilirsiniz. Çevirisi eksik bir ürün, misafire boş görünmez; varsayılan dilinizde gösterilir. Fiyatları ana para biriminizde girersiniz; euro, dolar, sterlin gibi ek para birimleri günlük referans kurla otomatik ya da sizin belirlediğiniz sabit kurla hesaplanır.",
            },
            {
              type: "p",
              text: "Turist ağırlayan işletmeler için ayrıntılı öneriler: [turistler için çok dilli menü](guide:multilingual-menu).",
            },
          ],
        },
        {
          heading: "Misafir geri bildirimi ve garson çağırma",
          blocks: [
            {
              type: "p",
              text: "Menünün altındaki form ile misafirleriniz 1–5 yıldız puan ve yorum bırakır; masa QR kodundan gelindiyse bildirim hangi masadan geldiğiyle birlikte panelinize düşer. Böylece bir sorunu misafir işletmeden ayrılmadan öğrenirsiniz.",
            },
            {
              type: "p",
              text: "İsterseniz misafirin masadan **garson çağırma** ve **hesap isteme** düğmelerini de açabilirsiniz. Çağrılar panelde sesli bildirimle görünür.",
            },
          ],
        },
        {
          heading: "Siparişleri de yönetmek isterseniz",
          blocks: [
            {
              type: "p",
              text: "QR menü tek başına menünüzü dijitalleştirir. Garsonların sipariş alması, siparişlerin mutfak ekranına düşmesi ve kasada ödeme kaydı için [Restoran Yönetim Sistemi](solution:restaurant-management) paketine geçebilirsiniz; menünüz ve QR kodlarınız aynı kalır.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Misafirlerin uygulama indirmesi gerekir mi?",
          a: "Hayır. QR kodu telefonun kamerasıyla okutmak yeterlidir; menü tarayıcıda açılır.",
        },
        {
          q: "Fiyat değişince QR kodu yeniden bastırmam gerekir mi?",
          a: "Hayır. QR kod menünüzün adresine bağlıdır. İçeriği dilediğiniz kadar değiştirebilirsiniz; kod aynı kalır.",
        },
        {
          q: "Menüde fiyat göstermek zorunda mıyım?",
          a: "Hayır. Ayarlardan fiyatları gizleyebilir, menüyü yalnızca ürün tanıtımı için kullanabilirsiniz.",
        },
        {
          q: "Birden fazla şubem ya da işletmem var, ne yapmalıyım?",
          a: "Aynı hesapla birden fazla işletme açabilirsiniz; her işletmenin kendi adresi, menüsü ve QR kodları olur.",
        },
        {
          q: "QR menü ne kadar?",
          a: "Güncel yıllık fiyatı [Fiyatlar](page:pricing) sayfasında bulabilirsiniz.",
        },
      ],
    },
    en: {
      title: "QR Menu: Digital Menus for Restaurants & Cafés | CG Menu",
      description:
        "Create a branded QR code menu in minutes with CG Menu. Multilingual, multi-currency digital menu with allergen info; no reprinting when prices change.",
      summary:
        "A digital menu in your brand's look, in any language and currency. Change a price in the dashboard and the menu updates instantly.",
      eyebrow: "QR Menu",
      h1: "A QR menu that carries your brand, live in minutes",
      intro:
        "CG Menu is a **QR code menu** for restaurants, cafés, bars and hotels. You build your menu in the dashboard; guests scan the QR code on the table with their phone camera and the menu opens in the browser, with no app to install. When a price, product or availability changes, the menu updates instantly and the QR code stays the same.",
      highlights: [
        { title: "Your own address", body: "Your menu is published at yourbusiness.cgmenu.tr over a secure connection." },
        { title: "Designed around your brand", body: "Colours, logo, cover image or video and typefaces make the menu look like you." },
        { title: "Every guest in their language", body: "Unlimited languages; guests pick their language and currency at the top." },
        { title: "Allergens and nutrition", body: "14 allergens, vegan/vegetarian/gluten-free tags and nutrition per portion." },
        { title: "Table QR codes", body: "Print a code per table so feedback and waiter calls reach the right table." },
        { title: "Bulk price updates", body: "Raise or lower the prices of selected items by a percentage in one go." },
      ],
      sections: [
        {
          heading: "What is a QR menu and what does it do for you?",
          blocks: [
            {
              type: "p",
              text: "A QR menu replaces the printed menu with a digital one that opens on the guest's phone through a QR code. With print, every price change means a reprint; with a digital menu you change it in the dashboard and it applies to every table within seconds. Read more in our guide [what is a QR menu](guide:what-is-qr-menu).",
            },
            {
              type: "list",
              items: [
                "**No printing costs or delays:** price rises, new dishes and seasonal menus need no print shop.",
                "**No disappointment over sold-out dishes:** mark an item as sold out and guests see it before ordering.",
                "**Tourists read it in their own language:** the menu follows the language and currency the guest picks.",
                "**Photos that sell:** item photos and descriptions make choosing easier.",
              ],
            },
          ],
        },
        {
          heading: "How to create your menu",
          blocks: [
            {
              type: "steps",
              items: [
                { title: "Open an account and pick your address", body: "Choose your business name, type and menu address (yourbusiness.cgmenu.tr)." },
                { title: "Add categories and items", body: "Enter names, descriptions, photos, portion options and prices; drag and drop to sort." },
                { title: "Match your brand", body: "Pick colours, logo, cover image or video and typefaces, with a live preview." },
                {
                  title: "Download the QR code and place it on tables",
                  body: "Download the general code or per-table codes as PNG/SVG, or generate a print-ready sheet for every table.",
                },
              ],
            },
            { type: "p", text: "For screens and printing tips, see [how to create a QR menu](guide:create-qr-menu)." },
          ],
        },
        {
          heading: "Menu content that answers guests' questions",
          blocks: [
            {
              type: "p",
              text: "Each item can have a description, a photo and several portion or size options. Tag items as **vegetarian, vegan, spicy, gluten-free, popular, new** or **chef's pick**.",
            },
            {
              type: "p",
              text: "For guests with food allergies you can show the **14 major allergens** per item, plus calories, protein, carbohydrates and fat if you wish. Why it matters: [allergen information on menus](guide:allergens).",
            },
          ],
        },
        {
          heading: "Multilingual, multi-currency menu",
          blocks: [
            {
              type: "p",
              text: "Add as many languages as you like and enter translations per item and category. An item without a translation is never shown blank; it falls back to your default language. You enter prices in your main currency; euro, dollar, pound and other currencies are calculated from the daily reference rate or a fixed rate you set.",
            },
            { type: "p", text: "Tips for businesses that host tourists: [multilingual menus for tourists](guide:multilingual-menu)." },
          ],
        },
        {
          heading: "Guest feedback and waiter calls",
          blocks: [
            {
              type: "p",
              text: "With the form at the bottom of the menu, guests leave a 1–5 star rating and a comment. If they came from a table QR code, the feedback arrives in your dashboard with the table it came from, so you hear about a problem before the guest leaves.",
            },
            {
              type: "p",
              text: "You can also switch on **call waiter** and **request the bill** buttons. Calls appear in the dashboard with a sound alert.",
            },
          ],
        },
        {
          heading: "When you want to manage orders too",
          blocks: [
            {
              type: "p",
              text: "The QR menu digitises your menu on its own. For waiters taking orders, orders reaching a kitchen screen and payments recorded at the till, move up to the [Restaurant Management System](solution:restaurant-management); your menu and QR codes stay the same.",
            },
          ],
        },
      ],
      faq: [
        { q: "Do guests need to install an app?", a: "No. Scanning the QR code with the phone camera is enough; the menu opens in the browser." },
        {
          q: "Do I need to reprint the QR code when prices change?",
          a: "No. The QR code points to your menu's address. Change the content as often as you like; the code stays the same.",
        },
        { q: "Do I have to show prices?", a: "No. You can hide prices in the settings and use the menu as a showcase only." },
        {
          q: "I have several branches or businesses. What should I do?",
          a: "You can open several businesses under one account; each gets its own address, menu and QR codes.",
        },
        { q: "How much does the QR menu cost?", a: "See the current yearly price on the [Pricing](page:pricing) page." },
      ],
    },
  },
};
