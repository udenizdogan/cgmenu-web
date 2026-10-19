import type { Solution } from "../types";

export const pos: Solution = {
  id: "pos",
  plan: "qr-menu-pos",
  related: ["restaurant-management", "kitchen-display", "waiter-ordering"],
  guides: ["choose-pos"],
  content: {
    tr: {
      title: "Adisyon Programı: Web Tabanlı Adisyon Sistemi | CG Menu",
      description:
        "Kurulum gerektirmeyen web tabanlı adisyon programı. Masa adisyonu, mutfağa sipariş, bölünmüş ödeme, indirim ve gün sonu raporu; QR menü dahil.",
      summary:
        "Masa adisyonu açın, siparişi mutfağa gönderin, hesabı tamamen ya da kişi başı bölerek kapatın.",
      eyebrow: "Adisyon Programı",
      h1: "Kâğıt adisyona son: masadan kasaya dijital adisyon",
      intro:
        "CG Menu **adisyon programı**, her masanın hesabını dijital olarak tutar. Garsonun girdiği her sipariş adisyona işlenir ve mutfağa iletilir; hesap kasada tek seferde ya da kişi başı bölünerek kapatılır. Program tarayıcıda çalışır, kurulum ya da özel donanım gerektirmez ve [QR menünüzle](solution:qr-menu) aynı ürün listesini kullanır.",
      highlights: [
        { title: "Masa başına adisyon", body: "Her masada tek açık adisyon; misafir sayısı ve not." },
        { title: "Turlar halinde sipariş", body: "Ek siparişler aynı adisyona yeni tur olarak eklenir, mutfağa ayrı gider." },
        { title: "Bölünmüş ödeme", body: "Hesabın tamamı, farklı tutar ya da herkes kendi ürününü öder." },
        { title: "İndirim ve düzeltme", body: "İndirim, ödeme geri alma, ürün iptali ve masa taşıma." },
        { title: "Para üstü hesabı", body: "Alınan nakdi girin, para üstü otomatik hesaplansın." },
        { title: "Adisyon geçmişi", body: "Kapanan adisyonlar, tutarları ve ödeme yöntemleriyle." },
      ],
      sections: [
        {
          heading: "Adisyon programı nedir?",
          blocks: [
            {
              type: "p",
              text: "Adisyon, bir masanın açılışından kapanışına kadar verilen siparişlerin ve ödemelerin kaydıdır. Adisyon programı bu kaydı kâğıt yerine dijital tutar; siparişi mutfağa iletir, ödenen ve kalan tutarı her an gösterir ve gün sonunda hesabı raporlar. Program seçerken nelere bakılacağını [adisyon programı nasıl seçilir](guide:choose-pos) rehberinde ayrıntılı anlattık.",
            },
          ],
        },
        {
          heading: "Kâğıt adisyon ile CG Menu karşılaştırması",
          blocks: [
            {
              type: "table",
              head: ["", "Kâğıt adisyon", "CG Menu adisyon programı"],
              rows: [
                ["Siparişin mutfağa ulaşması", "Garson fişi elle taşır", "Anında [mutfak ekranına](solution:kitchen-display) düşer"],
                ["Fiyat değişikliği", "Garson eski fiyatı yazabilir", "Menüdeki güncel fiyat otomatik kullanılır"],
                ["Kişi başı hesap", "Elle toplama, hata riski", "Ürün seçilerek otomatik bölünür"],
                ["Biten ürün", "Sipariş sonrası fark edilir", "“Tükendi” ürün sipariş ekranında görünür"],
                ["Gün sonu", "Fişler tek tek toplanır", "Ciro, ürün satışları ve iptaller raporda"],
              ],
            },
          ],
        },
        {
          heading: "Ödeme alma esnekliği",
          blocks: [
            {
              type: "p",
              text: "Kalabalık masalarda en çok vakit alan iş hesabı bölmektir. CG Menu'de üç yol vardır: **hesabın tamamını** almak, **farklı bir tutar** girmek ya da **herkesin kendi ürününü** seçerek ödemesi. Ürüne göre bölmede indirim, ürünlerin payına göre dağıtılır; aynı üründen birden fazla varsa adet adet seçilebilir. Her ödeme nakit, kart ya da diğer olarak kaydedilir ve ödenen ürünler adisyonda işaretlenir.",
            },
          ],
        },
        {
          heading: "Hata ve suiistimale karşı kayıt",
          blocks: [
            {
              type: "list",
              items: [
                "Garson yalnızca mutfağın henüz başlamadığı ürünü iptal edebilir; hazırlanmaya başlamış ürünü sahip ya da personel iptal eder. Ödemesi alınmış ürün, ödeme geri alınmadan iptal edilemez.",
                "İptal edilen ürünler, isteğe bağlı gerekçeleriyle birlikte raporda ayrıca listelenir.",
                "Geri alınan ödemeler silinmez; raporda ayrıca listelenir.",
                "İndirim, ödeme geri alma ve masa taşıma yalnızca sahip ve personel rolüne açıktır.",
                "Her tahsilat, ödemeyi alan kişiyle birlikte kaydedilir; günlük özette personel bazında görünür.",
              ],
            },
          ],
        },
        {
          heading: "Adisyon programı ile restoran yönetimi",
          blocks: [
            {
              type: "p",
              text: "Adisyon, [Restoran Yönetim Sistemi](solution:restaurant-management)'nin merkezidir: masa planı, [garson siparişi](solution:waiter-ordering), mutfak ekranı ve günlük özet aynı adisyon verisini kullanır.",
            },
            {
              type: "note",
              text: "Adisyon programı mali belge düzenlemez; yazar kasa (ÖKC) fişi ve e-belge yükümlülükleri ayrıca yerine getirilmelidir.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Adisyon programını hangi cihazlarda kullanabilirim?",
          a: "Tarayıcısı olan her cihazda: telefon, tablet, dizüstü ya da masaüstü bilgisayar. Kurulum gerekmez.",
        },
        {
          q: "Aynı masada birden fazla adisyon açılabilir mi?",
          a: "Her masada aynı anda tek açık adisyon bulunur; bu sayede siparişler karışmaz. Kişi başı hesap için ürüne göre bölünmüş ödeme kullanılır.",
        },
        {
          q: "Masayı başka masaya taşıyabilir miyim?",
          a: "Evet. Sahip ve personel rolündeki kullanıcılar açık adisyonu boş bir masaya taşıyabilir.",
        },
        {
          q: "İnternet kesilirse ne olur?",
          a: "CG Menu çevrim içi çalışır; sipariş ve ödeme girmek için internet bağlantısı gerekir. Bağlantı geri geldiğinde ekranlar kendiliğinden güncellenir.",
        },
      ],
    },
    en: {
      title: "Restaurant POS Software, Web-Based | CG Menu",
      description:
        "Web-based restaurant POS with no installation: table checks, orders to the kitchen, split payments, discounts and an end-of-day report. QR menu included.",
      summary: "Open a check per table, send orders to the kitchen and settle the bill in full or split per guest.",
      eyebrow: "Restaurant POS",
      h1: "Goodbye paper pads: digital checks from table to till",
      intro:
        "CG Menu's **restaurant POS** keeps every table's check digitally. Each order a waiter enters is added to the check and passed to the kitchen; the bill is settled at the till in one payment or split per guest. It runs in the browser with no installation or special hardware and uses the same item list as your [QR menu](solution:qr-menu).",
      highlights: [
        { title: "One check per table", body: "A single open check per table, with guest count and a note." },
        { title: "Orders in rounds", body: "Extra orders are added to the same check as a new round and go to the kitchen separately." },
        { title: "Split payments", body: "The full bill, a custom amount, or everyone pays for their own items." },
        { title: "Discounts and corrections", body: "Discounts, payment reversal, item cancellation and table moves." },
        { title: "Change calculation", body: "Enter the cash received and the change is worked out." },
        { title: "Check history", body: "Closed checks with totals and payment methods." },
      ],
      sections: [
        {
          heading: "What is restaurant POS software?",
          blocks: [
            {
              type: "p",
              text: "A check is the record of everything ordered and paid at a table, from opening to closing. POS software keeps that record digitally instead of on paper: it passes orders to the kitchen, always shows what is paid and what is due, and reports the day's takings. What to look for: [how to choose restaurant POS software](guide:choose-pos).",
            },
          ],
        },
        {
          heading: "Paper pads vs CG Menu",
          blocks: [
            {
              type: "table",
              head: ["", "Paper pad", "CG Menu POS"],
              rows: [
                ["Order to the kitchen", "The waiter carries a slip", "Appears instantly on the [kitchen display](solution:kitchen-display)"],
                ["Price changes", "Old prices may be written", "The current menu price is used"],
                ["Split bill", "Manual sums, risk of mistakes", "Split automatically by picking items"],
                ["Sold-out items", "Noticed after ordering", "Sold-out items show on the order screen"],
                ["End of day", "Slips added up by hand", "Revenue, item sales and cancellations in a report"],
              ],
            },
          ],
        },
        {
          heading: "Flexible payments",
          blocks: [
            {
              type: "p",
              text: "Splitting the bill is what takes longest at a busy table. CG Menu offers three ways: take **the full bill**, enter **a custom amount**, or let **everyone pay for their own items**. When splitting by item, any discount is shared out across items; several units of the same item can be picked one by one. Each payment is recorded as cash, card or other, and paid items are marked on the check.",
            },
          ],
        },
        {
          heading: "A record against mistakes and misuse",
          blocks: [
            {
              type: "list",
              items: [
                "Waiters can only cancel items the kitchen has not started; items already in preparation are cancelled by the owner or staff. A paid item cannot be cancelled until its payment is reversed.",
                "Cancelled items are listed separately in the report, with an optional reason.",
                "Reversed payments are not deleted; they are listed separately in the report.",
                "Discounts, payment reversal and table moves are open to the owner and staff roles only.",
                "Every payment is recorded with the person who took it and appears per staff member in the daily summary.",
              ],
            },
          ],
        },
        {
          heading: "POS as part of restaurant management",
          blocks: [
            {
              type: "p",
              text: "The check is the core of the [Restaurant Management System](solution:restaurant-management): the floor plan, [waiter ordering](solution:waiter-ordering), the kitchen display and the daily summary all work from the same data.",
            },
            {
              type: "note",
              text: "The POS does not issue fiscal receipts; fiscal cash register and e-invoicing obligations must be met separately.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Which devices can I use?",
          a: "Any device with a browser: phone, tablet, laptop or desktop. No installation is needed.",
        },
        {
          q: "Can a table have more than one check?",
          a: "Each table has one open check at a time so orders never get mixed up. For separate bills, use split payment by item.",
        },
        { q: "Can I move a check to another table?", a: "Yes. Owner and staff users can move an open check to a free table." },
        {
          q: "What if the internet goes down?",
          a: "CG Menu works online; entering orders and payments needs a connection. Screens catch up on their own when the connection returns.",
        },
      ],
    },
  },
};
