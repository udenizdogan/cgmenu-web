import type { Solution } from "../types";

export const restaurantManagement: Solution = {
  id: "restaurant-management",
  plan: "qr-menu-pos",
  related: ["pos", "kitchen-display", "waiter-ordering"],
  guides: ["choose-pos", "kitchen-display-vs-printer"],
  content: {
    tr: {
      title: "Restoran Yönetim Sistemi: Sipariş, Mutfak, Kasa | CG Menu",
      description:
        "CG Menu Restoran Yönetim Sistemi ile garson siparişi, mutfak ekranı, adisyon ve kasa ödemelerini tek web tabanlı yazılımda yönetin. Kurulum yok, QR menü dahil.",
      summary:
        "Masa planı, garson siparişi, mutfak ekranı, bölünmüş ödeme ve günlük ciro raporu; QR menünüzle aynı panelde.",
      eyebrow: "Restoran Yönetim Sistemi",
      h1: "Restoranınızı siparişten ödemeye tek sistemden yönetin",
      intro:
        "CG Menu **Restoran Yönetim Sistemi**, QR menünüzün üzerine kurulan web tabanlı bir restoran yazılımıdır. Garsonlarınız masada telefon ya da tabletten sipariş girer, siparişler anında mutfak ekranına düşer, kasada hesap tek tıkla ya da kişi başı bölünerek kapatılır. Gün sonunda ciro, satılan ürünler ve personel bazında tahsilat tek raporda önünüzdedir.",
      highlights: [
        { title: "Canlı masa planı", body: "Salon, bahçe, teras gibi bölümler; hangi masa dolu, kim garson çağırıyor, kim hesap istiyor tek bakışta." },
        { title: "Garson siparişi", body: "Menüden ürün, porsiyon ve not seçilerek sipariş girilir; ayrı cihaz ya da kurulum gerekmez." },
        { title: "Mutfak ekranı", body: "Siparişler Yeni → Hazırlanıyor → Hazır akışında; en eski sipariş en üstte." },
        { title: "Adisyon ve kasa", body: "Nakit, kart ya da diğer; tutara ya da ürüne göre bölünmüş ödeme ve indirim." },
        { title: "Günlük özet", body: "Ciro, önceki güne göre değişim, saatlik tahsilat, en çok satanlar ve iptaller." },
        { title: "Rol bazlı yetki", body: "Sahip, personel ve garson rolleri; garson yalnızca kasa ve mutfak ekranlarını görür." },
      ],
      sections: [
        {
          heading: "Restoran yönetim sistemi ne işe yarar?",
          blocks: [
            {
              type: "p",
              text: "Yoğun bir serviste kâğıt adisyon, bağırarak iletilen siparişler ve gün sonunda tutmayan kasa sık görülen sorunlardır. Bir restoran yönetim sistemi bu akışı tek bir yazılımda toplar: sipariş masada kaydedilir, mutfak aynı anda görür, ödeme adisyona işlenir ve tüm hareketler raporlanır.",
            },
            {
              type: "p",
              text: "CG Menu bu akışı **QR menünüzle aynı panelde** sunar. Menüde yaptığınız fiyat ya da “tükendi” değişikliği hem misafirin gördüğü QR menüye hem de garsonun sipariş ekranına aynı anda yansır.",
            },
          ],
        },
        {
          heading: "Servis akışı: masadan mutfağa, mutfaktan kasaya",
          blocks: [
            {
              type: "steps",
              items: [
                {
                  title: "Masa açılır",
                  body: "Garson boş masayı seçip adisyonu açar; isterse misafir sayısını ve notu ekler.",
                },
                {
                  title: "Sipariş girilir",
                  body: "Kategorilerden ürün, porsiyon seçeneği ve “acısız”, “az pişmiş” gibi notlar seçilir; sipariş tek dokunuşla mutfağa gönderilir. Ek siparişler aynı adisyona yeni tur olarak eklenir. Ayrıntılar: [garson sipariş sistemi](solution:waiter-ordering).",
                },
                {
                  title: "Mutfak hazırlar",
                  body: "Sipariş [mutfak ekranında](solution:kitchen-display) belirir; aşçı ürünleri “hazırlanıyor” ve “hazır” olarak işaretler, kasa ve garson hazır olanları görür.",
                },
                {
                  title: "Hesap kapanır",
                  body: "Kasada hesabın tamamı ya da kişi başı ürün seçilerek bölünmüş ödeme alınır; nakitte para üstü hesaplanır. Ödeme tamamlanınca masa kapatılır. Ayrıntılar: [adisyon programı](solution:pos).",
                },
              ],
            },
          ],
        },
        {
          heading: "Kasada tam kontrol",
          blocks: [
            {
              type: "list",
              items: [
                "Ödemeleri **nakit, kart ya da diğer** olarak kaydedin; bir adisyona birden fazla ödeme alın.",
                "**Herkes kendi ürününü** ödesin: ödeyecek kişinin ürünlerini seçin, sistem tutarı indirim dahil hesaplasın.",
                "Adisyona **indirim** uygulayın, yanlış alınan ödemeyi geri alın, masayı başka masaya taşıyın.",
                "Kapanan adisyonların geçmişini ve ödeme yöntemlerini görüntüleyin.",
                "Bu düzeltme işlemleri yalnızca sahip ve personel rolüne açıktır; garsonlar yapamaz.",
              ],
            },
          ],
        },
        {
          heading: "Gün sonu raporu",
          blocks: [
            {
              type: "p",
              text: "**Günlük özet** ekranı seçtiğiniz günün cirosunu, önceki güne göre değişimi, ödeme yöntemlerine göre dağılımı ve saatlik tahsilatı gösterir. Kapanan adisyon sayısı, ortalama adisyon tutarı, misafir sayısı ve verilen indirimler; ürün bazında satış adetleri ve tutarları; iptal edilen ürünler, geri alınan ödemeler ve hâlâ açık adisyonlar aynı sayfadadır. Personel bazında tahsilat da raporlanır. Rapor yazdırılabilir.",
            },
          ],
        },
        {
          heading: "Neden web tabanlı?",
          blocks: [
            {
              type: "list",
              items: [
                "**Kurulum yok:** Telefon, tablet ya da bilgisayarın tarayıcısından giriş yapılır.",
                "**Donanım şartı yok:** Elinizdeki cihazlarla başlarsınız; mutfak için bir tablet ya da ekran yeterlidir.",
                "**Canlı güncelleme:** Kasa ve mutfak ekranları siparişleri ve garson çağrılarını sayfa yenilemeden, sesli bildirimle gösterir.",
                "**Her yerden erişim:** İşletme sahibi raporları dışarıdayken de görebilir.",
              ],
            },
            {
              type: "note",
              text: "CG Menu bir adisyon ve servis yönetim yazılımıdır; yazar kasa (ÖKC), e-fatura ya da e-arşiv yerine geçmez. Mali belge yükümlülükleriniz için mali müşavirinize danışın.",
            },
          ],
        },
        {
          heading: "Hangi işletmeler için uygun?",
          blocks: [
            {
              type: "p",
              text: "Masaya servis yapan restoranlar, [kafeler](solution:cafe), meyhaneler, barlar ve [otel restoranları](solution:hotel) için tasarlandı. Bir adisyon programı seçerken nelere bakmanız gerektiğini [adisyon programı nasıl seçilir](guide:choose-pos) rehberinde anlattık.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Restoran Yönetim Sistemi için ayrı bir cihaz almam gerekir mi?",
          a: "Hayır. Sistem tarayıcıda çalışır; garsonlar kendi telefonlarını ya da işletmenin tabletini kullanabilir. Mutfakta siparişleri görmek için bir tablet ya da ekranlı bilgisayar yeterlidir.",
        },
        {
          q: "QR menü bu pakete dahil mi?",
          a: "Evet. QR Menü + Restoran Yönetim Sistemi paketi QR menünün tüm özelliklerini içerir.",
        },
        {
          q: "Garsonlar raporları ve ciroyu görebilir mi?",
          a: "Hayır. Garson rolü yalnızca masaları, siparişleri ve mutfak ekranını görür. Günlük özet yalnızca işletme sahibine açıktır.",
        },
        {
          q: "Mutfak yazıcısıyla çalışıyor mu?",
          a: "CG Menu siparişleri yazıcı yerine mutfak ekranında gösterir. İki yaklaşımın farkları için [mutfak ekranı mı, yazıcı mı](guide:kitchen-display-vs-printer) rehberine bakın.",
        },
        {
          q: "Misafirler QR menüden kendileri sipariş verebiliyor mu?",
          a: "Şu anda siparişleri garson ya da personel girer. Misafir masadan garson çağırabilir ve hesap isteyebilir.",
        },
      ],
    },
    en: {
      title: "Restaurant Management System: Orders to Till | CG Menu",
      description:
        "Run waiter orders, a kitchen display, checks and payments in one web-based restaurant management system. No installation, QR menu included.",
      summary:
        "Floor plan, waiter ordering, kitchen display, split payments and a daily revenue report, in the same dashboard as your QR menu.",
      eyebrow: "Restaurant Management System",
      h1: "Run your restaurant from order to payment in one system",
      intro:
        "The CG Menu **Restaurant Management System** is web-based restaurant software built on top of your QR menu. Waiters enter orders at the table on a phone or tablet, orders appear on the kitchen screen instantly, and the bill is settled at the till in one go or split per guest. At the end of the day, revenue, items sold and takings per staff member are in one report.",
      highlights: [
        { title: "Live floor plan", body: "Sections such as hall, garden or terrace; see which tables are busy, calling a waiter or asking for the bill." },
        { title: "Waiter ordering", body: "Pick items, portions and notes from the menu; no special device or installation." },
        { title: "Kitchen display", body: "Orders flow New → Preparing → Ready, oldest first." },
        { title: "Checks and till", body: "Cash, card or other; split by amount or by item, with discounts." },
        { title: "Daily summary", body: "Revenue, change on the previous day, hourly takings, best sellers and cancellations." },
        { title: "Role-based access", body: "Owner, staff and waiter roles; waiters only see the till and kitchen screens." },
      ],
      sections: [
        {
          heading: "What does a restaurant management system do?",
          blocks: [
            {
              type: "p",
              text: "Paper order pads, orders shouted across the room and a till that doesn't balance at closing are familiar problems in a busy service. A restaurant management system brings that flow into one piece of software: the order is recorded at the table, the kitchen sees it at once, payment is applied to the check and every step is reported.",
            },
            {
              type: "p",
              text: "CG Menu offers this flow **in the same dashboard as your QR menu**. A price change or a sold-out mark appears on the guest's QR menu and on the waiter's order screen at the same time.",
            },
          ],
        },
        {
          heading: "Service flow: table to kitchen, kitchen to till",
          blocks: [
            {
              type: "steps",
              items: [
                { title: "Open the table", body: "The waiter picks a free table and opens a check, optionally with guest count and a note." },
                {
                  title: "Enter the order",
                  body: "Choose items, portion options and notes such as “not spicy”; send the order to the kitchen with one tap. Later rounds are added to the same check. More: [waiter ordering system](solution:waiter-ordering).",
                },
                {
                  title: "The kitchen prepares",
                  body: "The order appears on the [kitchen display](solution:kitchen-display); cooks mark items as preparing and ready, and the till and waiters see what is ready.",
                },
                {
                  title: "Close the bill",
                  body: "Take the full amount or split it by picking each guest's items; change is calculated for cash. Once paid, the table is closed. More: [restaurant POS software](solution:pos).",
                },
              ],
            },
          ],
        },
        {
          heading: "Full control at the till",
          blocks: [
            {
              type: "list",
              items: [
                "Record payments as **cash, card or other**; take several payments on one check.",
                "**Everyone pays for their own items:** select a guest's items and the amount is calculated, discount included.",
                "Apply a **discount**, reverse a mistaken payment, move a check to another table.",
                "Browse closed checks with their payment methods.",
                "These corrections are open to the owner and staff roles only, not to waiters.",
              ],
            },
          ],
        },
        {
          heading: "End-of-day report",
          blocks: [
            {
              type: "p",
              text: "The **daily summary** shows the day's revenue, the change on the previous day, the split by payment method and takings per hour. Closed checks, the average check, guest count and discounts given; quantities and amounts per item; cancelled items, reversed payments and checks still open are on the same page, along with takings per staff member. The report can be printed.",
            },
          ],
        },
        {
          heading: "Why web-based?",
          blocks: [
            {
              type: "list",
              items: [
                "**No installation:** sign in from the browser of a phone, tablet or computer.",
                "**No hardware requirement:** start with the devices you have; a tablet or screen is enough for the kitchen.",
                "**Live updates:** the till and kitchen screens show orders and waiter calls without reloading, with sound alerts.",
                "**Access from anywhere:** owners can check reports while away.",
              ],
            },
            {
              type: "note",
              text: "CG Menu is order and service management software; it does not replace a fiscal cash register or e-invoicing. Check your fiscal obligations with your accountant.",
            },
          ],
        },
        {
          heading: "Who is it for?",
          blocks: [
            {
              type: "p",
              text: "It is designed for table-service restaurants, [cafés](solution:cafe), taverns, bars and [hotel restaurants](solution:hotel). What to look for when choosing: [how to choose restaurant POS software](guide:choose-pos).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Do I need to buy special devices?",
          a: "No. The system runs in the browser; waiters can use their own phones or the restaurant's tablet. A tablet or a computer with a screen is enough for the kitchen.",
        },
        { q: "Is the QR menu included?", a: "Yes. The QR Menu + Restaurant Management System plan includes every QR menu feature." },
        {
          q: "Can waiters see reports and revenue?",
          a: "No. The waiter role only sees tables, orders and the kitchen screen. The daily summary is for the owner only.",
        },
        {
          q: "Does it work with a kitchen printer?",
          a: "CG Menu shows orders on a kitchen screen instead of printing them. For the differences see [kitchen display vs kitchen printer](guide:kitchen-display-vs-printer).",
        },
        {
          q: "Can guests order from the QR menu themselves?",
          a: "Currently orders are entered by waiters or staff. Guests can call a waiter and ask for the bill from the table.",
        },
      ],
    },
  },
};
