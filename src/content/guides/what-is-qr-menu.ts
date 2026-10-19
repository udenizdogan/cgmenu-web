import type { Guide } from "../types";

export const whatIsQrMenu: Guide = {
  id: "what-is-qr-menu",
  published: "2026-10-19",
  updated: "2026-10-19",
  solutions: ["qr-menu", "cafe", "hotel"],
  content: {
    tr: {
      title: "QR Menü Nedir? Restoranlar İçin Kapsamlı Rehber | CG Menu",
      description:
        "QR menü nedir, nasıl çalışır, basılı menüye göre avantajları ve dikkat edilmesi gerekenler. Restoran ve kafe sahipleri için QR kod menü rehberi.",
      h1: "QR menü nedir ve nasıl çalışır?",
      lead:
        "**QR menü**, misafirin masadaki QR kodu telefon kamerasıyla okutarak açtığı dijital menüdür. Menü bir web sayfası olarak tarayıcıda açılır; uygulama indirmek gerekmez. İşletme menüyü bir yönetim panelinden günceller ve değişiklik, QR kod yeniden basılmadan tüm masalarda anında geçerli olur.",
      sections: [
        {
          heading: "QR menü nasıl çalışır?",
          blocks: [
            {
              type: "p",
              text: "QR kod (Quick Response code), içinde bir web adresi saklayan iki boyutlu bir barkoddur. Günümüz akıllı telefonlarının kamera uygulaması QR kodu doğrudan tanır ve içindeki adresi açmayı önerir. QR menüde bu adres, işletmenin dijital menüsünün bulunduğu sayfadır.",
            },
            {
              type: "steps",
              items: [
                { title: "Misafir kodu okutur", body: "Kamera uygulaması açılır, telefon QR koda tutulur ve çıkan bağlantıya dokunulur." },
                { title: "Menü tarayıcıda açılır", body: "Menü, telefona uygun bir web sayfası olarak görüntülenir." },
                { title: "Misafir menüyü inceler", body: "Kategoriler arasında gezinir, ürün fotoğraflarını, açıklamaları ve fiyatları görür; varsa dilini ve para birimini seçer." },
                { title: "İşletme menüyü günceller", body: "Fiyat, ürün ya da stok değişikliği panelden yapılır; QR kod aynı kalır." },
              ],
            },
          ],
        },
        {
          heading: "QR menü ile basılı menü karşılaştırması",
          blocks: [
            {
              type: "table",
              head: ["", "Basılı menü", "QR menü"],
              rows: [
                ["Fiyat güncelleme", "Yeniden tasarım ve baskı", "Panelden, saniyeler içinde"],
                ["Biten ürün", "Garson sözlü bildirir", "“Tükendi” olarak işaretlenir"],
                ["Yabancı dil", "Ayrı baskı ya da hiç yok", "Misafir dilini kendisi seçer"],
                ["Ürün fotoğrafı", "Baskı maliyetini artırır", "Her ürüne eklenebilir"],
                ["Alerjen bilgisi", "Yer kısıtlı", "Ürün başına ayrıntılı"],
                ["Hijyen ve yıpranma", "Elden ele dolaşır, yıpranır", "Misafirin kendi telefonunda"],
              ],
            },
            {
              type: "p",
              text: "Basılı menüyü tamamen kaldırmak zorunda değilsiniz. Telefonu olmayan ya da kullanmak istemeyen misafirler için az sayıda basılı menü bulundurmak iyi bir uygulamadır.",
            },
          ],
        },
        {
          heading: "İyi bir QR menüde neler olmalı?",
          blocks: [
            {
              type: "list",
              items: [
                "**Hızlı açılış:** Menü mobil bağlantıda bile birkaç saniyede açılmalı; büyük görseller otomatik olarak küçültülmeli.",
                "**Okunaklı tasarım:** Küçük ekranda rahat okunan yazı boyutu, yeterli kontrast ve kolay kategori geçişi.",
                "**Marka uyumu:** İşletmenin renkleri, logosu ve yazı tipleri; menü, işletmenin bir parçası gibi görünmeli.",
                "**Çok dil ve para birimi:** Turist ağırlayan işletmeler için olmazsa olmaz. Bkz. [turistler için çok dilli menü](guide:multilingual-menu).",
                "**Alerjen ve diyet bilgisi:** Vegan, glütensiz gibi etiketler ve alerjen listesi. Bkz. [menüde alerjen bilgisi](guide:allergens).",
                "**Kolay yönetim:** Toplu fiyat güncelleme, tükendi işareti, ürün gizleme gibi günlük işlemler birkaç dokunuşla yapılmalı.",
                "**Kendi adresi:** Menü, işletmeye ait kalıcı bir adreste yayınlanmalı; QR kod bu adrese bağlı olmalı.",
              ],
            },
          ],
        },
        {
          heading: "QR menü kimler için uygun?",
          blocks: [
            {
              type: "p",
              text: "Restoranlar, [kafeler](solution:cafe), barlar, pastaneler, [oteller](solution:hotel) ve plaj işletmeleri QR menüden en çok fayda sağlayan işletmelerdir. Özellikle menüsü sık değişen, turist ağırlayan ya da çok sayıda ürünü olan işletmelerde baskı maliyeti ve güncelleme zahmeti belirgin biçimde azalır.",
            },
          ],
        },
        {
          heading: "QR menü yeterli mi, yoksa restoran yönetim sistemi mi gerekir?",
          blocks: [
            {
              type: "p",
              text: "QR menü menünüzü dijitalleştirir, ancak siparişleri ve ödemeleri yönetmez. Garsonların sipariş alması, siparişlerin mutfağa ekranla iletilmesi ve kasada adisyon tutulması için bir [restoran yönetim sistemine](solution:restaurant-management) ihtiyaç duyarsınız. CG Menu'de iki paket aynı panelde çalışır; QR menüyle başlayıp ihtiyaç duyduğunuzda geçiş yapabilirsiniz.",
            },
          ],
        },
        {
          heading: "Kendi QR menünüzü oluşturun",
          blocks: [
            {
              type: "p",
              text: "Adım adım kurulum ve QR kod baskı önerileri için [QR menü nasıl yapılır](guide:create-qr-menu) rehberimizi okuyun ya da [CG Menu QR menü](solution:qr-menu) sayfasından özellikleri inceleyin.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "QR menü için internet gerekir mi?",
          a: "Evet. Menü bir web sayfası olduğundan misafirin telefonunda mobil veri ya da işletmenin Wi-Fi bağlantısı olmalıdır.",
        },
        {
          q: "QR kodun bir son kullanma tarihi var mı?",
          a: "QR kodun kendisi bir adres taşır ve süresi dolmaz. Kodun çalışması, bağlı olduğu menü adresinin yayında kalmasına bağlıdır.",
        },
        {
          q: "QR menü ile sipariş verilebilir mi?",
          a: "Bu, kullanılan sisteme bağlıdır. CG Menu'de siparişleri garson girer; misafir menüden garson çağırabilir ve hesap isteyebilir.",
        },
      ],
    },
    en: {
      title: "What Is a QR Menu? A Guide for Restaurants | CG Menu",
      description:
        "What a QR code menu is, how it works, its advantages over a printed menu and what to look out for. A guide for restaurant and café owners.",
      h1: "What is a QR menu and how does it work?",
      lead:
        "A **QR menu** is a digital menu that guests open by scanning the QR code on the table with their phone camera. It opens in the browser as a web page, with no app to install. The business updates the menu from a dashboard, and changes apply to every table instantly without reprinting the QR code.",
      sections: [
        {
          heading: "How does a QR menu work?",
          blocks: [
            {
              type: "p",
              text: "A QR (Quick Response) code is a two-dimensional barcode that stores a web address. Modern phone cameras recognise QR codes and offer to open the address inside. For a QR menu, that address is the page holding the business's digital menu.",
            },
            {
              type: "steps",
              items: [
                { title: "The guest scans the code", body: "They open the camera, point it at the QR code and tap the link that appears." },
                { title: "The menu opens in the browser", body: "The menu is shown as a mobile-friendly web page." },
                { title: "The guest browses", body: "They move between categories, see photos, descriptions and prices, and pick their language and currency if offered." },
                { title: "The business updates the menu", body: "Prices, items and availability change in the dashboard; the QR code stays the same." },
              ],
            },
          ],
        },
        {
          heading: "QR menu vs printed menu",
          blocks: [
            {
              type: "table",
              head: ["", "Printed menu", "QR menu"],
              rows: [
                ["Price updates", "Redesign and reprint", "In the dashboard, in seconds"],
                ["Sold-out items", "Waiter tells guests", "Marked as sold out"],
                ["Foreign languages", "Separate print or none", "Guests choose their language"],
                ["Item photos", "Raise printing costs", "Can be added to every item"],
                ["Allergen info", "Limited space", "Detailed per item"],
                ["Hygiene and wear", "Passed hand to hand, wears out", "On the guest's own phone"],
              ],
            },
            {
              type: "p",
              text: "You do not have to drop printed menus altogether. Keeping a few printed copies for guests without a phone, or who prefer not to use one, is good practice.",
            },
          ],
        },
        {
          heading: "What makes a good QR menu?",
          blocks: [
            {
              type: "list",
              items: [
                "**Fast loading:** the menu should open in seconds even on mobile data, with large images resized automatically.",
                "**Readable design:** comfortable text size on small screens, enough contrast and easy category navigation.",
                "**On-brand:** the business's colours, logo and typefaces, so the menu feels part of the place.",
                "**Languages and currencies:** essential for businesses that host tourists. See [multilingual menus for tourists](guide:multilingual-menu).",
                "**Allergen and diet info:** tags such as vegan or gluten-free and an allergen list. See [allergen information on menus](guide:allergens).",
                "**Easy management:** bulk price changes, sold-out marks and hiding items should take a few taps.",
                "**Its own address:** the menu should live at a permanent address that belongs to the business, with the QR code pointing to it.",
              ],
            },
          ],
        },
        {
          heading: "Who is a QR menu for?",
          blocks: [
            {
              type: "p",
              text: "Restaurants, [cafés](solution:cafe), bars, patisseries, [hotels](solution:hotel) and beach businesses benefit most. Businesses whose menus change often, that host tourists or that have many items save the most on printing and updates.",
            },
          ],
        },
        {
          heading: "Is a QR menu enough, or do I need a restaurant management system?",
          blocks: [
            {
              type: "p",
              text: "A QR menu digitises your menu but does not manage orders or payments. For waiters taking orders, orders reaching the kitchen on a screen and checks kept at the till you need a [restaurant management system](solution:restaurant-management). In CG Menu both plans share one dashboard; start with the QR menu and move up when you need to.",
            },
          ],
        },
        {
          heading: "Create your own QR menu",
          blocks: [
            {
              type: "p",
              text: "For a step-by-step setup and QR printing tips, read [how to create a QR menu](guide:create-qr-menu) or see the features of the [CG Menu QR menu](solution:qr-menu).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Does a QR menu need internet?",
          a: "Yes. The menu is a web page, so the guest's phone needs mobile data or the venue's Wi-Fi.",
        },
        {
          q: "Do QR codes expire?",
          a: "The QR code itself only holds an address and does not expire. It keeps working as long as the menu address it points to stays online.",
        },
        {
          q: "Can guests order through a QR menu?",
          a: "That depends on the system. In CG Menu orders are entered by waiters; guests can call a waiter and ask for the bill from the menu.",
        },
      ],
    },
  },
};
