import type { Solution } from "../types";

export const cafe: Solution = {
  id: "cafe",
  plan: "qr-menu-pos",
  related: ["qr-menu", "pos", "restaurant-management"],
  guides: ["create-qr-menu", "choose-pos"],
  content: {
    tr: {
      title: "Kafe QR Menü ve Kafe Adisyon Programı | CG Menu",
      description:
        "Kafeler için QR menü ve adisyon programı: sık değişen fiyatlar için toplu güncelleme, porsiyon ve boy seçenekleri, masadan garson çağırma, mutfak ve bar ekranı.",
      summary: "Sık değişen fiyatlar, boy seçenekleri ve yoğun saatler için kafe QR menüsü ve adisyon programı.",
      eyebrow: "Kafeler için",
      h1: "Kafeniz için QR menü ve adisyon programı",
      intro:
        "Kafelerde menü sık değişir: yeni bir kahve çekirdeği, mevsimlik içecek, zamlanan süt fiyatı. CG Menu ile **kafe QR menünüzü** dakikalar içinde güncellersiniz; isterseniz **kafe adisyon programı** ile siparişleri masadan bara ve mutfağa iletip ödemeleri kasada kaydedersiniz.",
      highlights: [
        { title: "Boy ve porsiyon seçenekleri", body: "Küçük/orta/büyük, tek/duble, sütlü/sütsüz; her seçeneğin kendi fiyatı." },
        { title: "Toplu fiyat güncelleme", body: "Seçili ürünlerin fiyatını yüzde olarak artırın; porsiyon fiyatları da değişsin." },
        { title: "Fotoğraflı vitrin", body: "Tatlı ve içecek fotoğraflarıyla menünüz satış yapsın." },
        { title: "Etiketler", body: "Vegan, glütensiz, yeni ve popüler ürünleri öne çıkarın." },
        { title: "Bar ve mutfak ekranı", body: "Siparişler tabletteki ekrana düşer, hazır olanlar işaretlenir." },
        { title: "Kişi başı ödeme", body: "Arkadaş grupları kendi ürünlerini ayrı ayrı ödesin." },
      ],
      sections: [
        {
          heading: "Kafeler neden QR menüye geçiyor?",
          blocks: [
            {
              type: "list",
              items: [
                "**Fiyat değişiklikleri hızlı:** Hammadde fiyatı arttığında [toplu fiyat güncelleme](solution:qr-menu) ile seçtiğiniz ürünlere tek seferde yüzde artış uygulayıp sonucu en yakın tutara yuvarlayabilirsiniz.",
                "**Çeşit fazla:** Kahve, çay, soğuk içecek ve tatlılar için kategori ve boy seçenekleri menüyü düzenli tutar.",
                "**Mevsimlik ürünler:** Yeni ürünü “yeni” etiketiyle ekleyin, sezon bitince gizleyin; silmeniz gerekmez.",
                "**Görsellik:** Kafe müşterisi gözüyle seçer; ürün fotoğrafları siparişi kolaylaştırır.",
              ],
            },
          ],
        },
        {
          heading: "Masaya servis yapan kafeler için adisyon",
          blocks: [
            {
              type: "p",
              text: "Masaya servis yapıyorsanız [adisyon programı](solution:pos) ile her masanın hesabını dijital tutun. Garson siparişi telefondan girer, sipariş bardaki ya da mutfaktaki [ekrana](solution:kitchen-display) düşer. Kalabalık arkadaş gruplarında “herkes kendi ürününü” ödeme seçeneği hesabı saniyeler içinde böler.",
            },
            {
              type: "p",
              text: "Misafir masadan garson çağırabilir ya da hesap isteyebilir; çağrı kasadaki ekrana sesli bildirimle düşer.",
            },
          ],
        },
        {
          heading: "Kafe QR menünüzü kurmak",
          blocks: [
            {
              type: "steps",
              items: [
                { title: "Kategorileri oluşturun", body: "Sıcak içecekler, soğuk içecekler, tatlılar, kahvaltı gibi." },
                { title: "Ürünleri boy seçenekleriyle ekleyin", body: "Her boy için ayrı fiyat girin; misafir seçenekleri menüde görür." },
                { title: "Markanızı uygulayın", body: "Kafe renkleriniz, logonuz ve kapak fotoğrafınızla." },
                { title: "QR kodları masalara yerleştirin", body: "Masa numaralı kodlar geri bildirim ve çağrıların doğru masaya gelmesini sağlar." },
              ],
            },
            { type: "p", text: "Baskı ve yerleştirme önerileri: [QR menü nasıl yapılır](guide:create-qr-menu)." },
          ],
        },
      ],
      faq: [
        {
          q: "Sadece QR menü kullanıp adisyonu kâğıtla tutabilir miyim?",
          a: "Evet. QR Menü paketi yalnızca dijital menüyü içerir; sipariş ve kasa özelliklerine ihtiyaç duyduğunuzda Restoran Yönetim Sistemi'ne geçebilirsiniz.",
        },
        {
          q: "Tezgâhtan servis yapan bir kafeyim, uygun mu?",
          a: "QR menü her kafe için uygundur. Adisyon tarafı masa bazlı çalıştığı için tezgâh servisinde “Tezgâh” gibi bir masa tanımlayarak kullanabilirsiniz.",
        },
      ],
    },
    en: {
      title: "Café QR Menu and Café POS Software | CG Menu",
      description:
        "QR menu and POS for cafés: bulk price updates for frequent changes, size and portion options, waiter calls from the table, bar and kitchen screen.",
      summary: "A café QR menu and POS built for frequent price changes, size options and busy hours.",
      eyebrow: "For cafés",
      h1: "QR menu and POS software for your café",
      intro:
        "Café menus change often: a new coffee bean, a seasonal drink, a rise in the price of milk. With CG Menu you update your **café QR menu** in minutes and, if you wish, use the **café POS** to send orders from the table to the bar and kitchen and record payments at the till.",
      highlights: [
        { title: "Sizes and portions", body: "Small/medium/large, single/double; each option with its own price." },
        { title: "Bulk price updates", body: "Raise selected prices by a percentage; portion prices follow." },
        { title: "A visual showcase", body: "Photos of desserts and drinks help the menu sell." },
        { title: "Tags", body: "Highlight vegan, gluten-free, new and popular items." },
        { title: "Bar and kitchen screen", body: "Orders appear on a tablet screen and are marked when ready." },
        { title: "Pay per person", body: "Groups of friends pay for their own items separately." },
      ],
      sections: [
        {
          heading: "Why cafés move to a QR menu",
          blocks: [
            {
              type: "list",
              items: [
                "**Fast price changes:** when costs rise, apply a percentage increase to selected items in one go with [bulk price updates](solution:qr-menu) and round to the nearest amount.",
                "**Many variations:** categories and size options keep coffee, tea, cold drinks and desserts tidy.",
                "**Seasonal items:** add a new item with the “new” tag and hide it at the end of the season instead of deleting it.",
                "**Visual choice:** café guests choose with their eyes; photos make ordering easier.",
              ],
            },
          ],
        },
        {
          heading: "Checks for table-service cafés",
          blocks: [
            {
              type: "p",
              text: "If you serve at the table, keep every table's check digitally with the [POS](solution:pos). Waiters enter orders on a phone and they appear on the bar or kitchen [screen](solution:kitchen-display). For large groups, “everyone pays for their own items” splits the bill in seconds.",
            },
            { type: "p", text: "Guests can call a waiter or ask for the bill from the table; the call reaches the till screen with a sound alert." },
          ],
        },
        {
          heading: "Setting up your café QR menu",
          blocks: [
            {
              type: "steps",
              items: [
                { title: "Create categories", body: "Hot drinks, cold drinks, desserts, breakfast and so on." },
                { title: "Add items with sizes", body: "Enter a price per size; guests see the options on the menu." },
                { title: "Apply your brand", body: "With your café's colours, logo and cover photo." },
                { title: "Place QR codes on tables", body: "Numbered table codes route feedback and calls to the right table." },
              ],
            },
            { type: "p", text: "Printing and placement tips: [how to create a QR menu](guide:create-qr-menu)." },
          ],
        },
      ],
      faq: [
        {
          q: "Can I use only the QR menu and keep paper checks?",
          a: "Yes. The QR Menu plan covers the digital menu only; move to the Restaurant Management System when you need orders and the till.",
        },
        {
          q: "I run a counter-service café. Does it fit?",
          a: "The QR menu fits any café. The POS works per table, so for counter service you can define a table such as “Counter”.",
        },
      ],
    },
  },
};
