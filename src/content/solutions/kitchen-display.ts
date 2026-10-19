import type { Solution } from "../types";

export const kitchenDisplay: Solution = {
  id: "kitchen-display",
  plan: "qr-menu-pos",
  related: ["restaurant-management", "waiter-ordering", "pos"],
  guides: ["kitchen-display-vs-printer"],
  content: {
    tr: {
      title: "Mutfak Ekranı (KDS): Siparişler Anında Mutfakta | CG Menu",
      description:
        "Garsonun girdiği sipariş saniyeler içinde mutfak ekranında. Yeni, hazırlanıyor, hazır sütunları ve sesli bildirim; tablet ya da bilgisayarla çalışır.",
      summary: "Siparişler sesli bildirimle mutfak ekranına düşer; aşçı ürünleri hazırlandıkça işaretler, servis hazır olanı görür.",
      eyebrow: "Mutfak Ekranı",
      h1: "Siparişler fişle değil, ekranla mutfağa ulaşsın",
      intro:
        "CG Menu **mutfak ekranı** (KDS – Kitchen Display System), garsonun masada girdiği siparişi saniyeler içinde mutfağa iletir. Siparişler **Yeni**, **Hazırlanıyor** ve **Hazır** sütunlarında, en eskisi önce gelecek şekilde sıralanır. Yeni sipariş geldiğinde ekran sesli uyarı verir; mutfaktaki bir tablet ya da ekranlı bilgisayar yeterlidir.",
      highlights: [
        { title: "Anında iletim", body: "Sipariş gönderildiği an mutfak ekranında; sayfa yenilemek gerekmez." },
        { title: "Üç sütunlu akış", body: "Yeni → Hazırlanıyor → Hazır; tek dokunuşla bir sonraki aşama." },
        { title: "Masa ve not bilgisi", body: "Her fişte masa, bölüm, sipariş saati, adet, porsiyon ve “acısız” gibi notlar." },
        { title: "Toplu işlem", body: "Bir siparişin tüm ürünlerini tek seferde başlatın, hazır ya da servis edildi yapın." },
        { title: "Sesli bildirim ve tam ekran", body: "Yeni sipariş sesle duyurulur; ekran tam ekran moduna alınabilir." },
        { title: "Kasa ile senkron", body: "Hazır olan ürünler kasada ve garson ekranında görünür." },
      ],
      sections: [
        {
          heading: "Mutfak ekranı nasıl çalışır?",
          blocks: [
            {
              type: "steps",
              items: [
                { title: "Garson siparişi gönderir", body: "[Garson sipariş ekranında](solution:waiter-ordering) seçilen ürünler tek dokunuşla mutfağa gönderilir." },
                { title: "Mutfak ekranında belirir", body: "Sipariş, masa adı ve notlarıyla birlikte “Yeni” sütununa düşer; ekran sesli uyarı verir." },
                { title: "Aşçı hazırlar", body: "Ürüne dokunarak “Hazırlanıyor”, ardından “Hazır” yapılır. Yanlışlıkla ilerletilen ürün geri alınabilir." },
                { title: "Servis edilir", body: "Hazır ürünler kasada görünür; servis edildiğinde ekrandan düşer." },
              ],
            },
          ],
        },
        {
          heading: "Mutfak ekranının işletmeye faydaları",
          blocks: [
            {
              type: "list",
              items: [
                "**Kaybolan fiş yok:** Sipariş garsonun cebinde ya da tezgâhta unutulmaz.",
                "**Okunaklı sipariş:** El yazısı yerine ürün adı, porsiyon ve not net biçimde yazılıdır.",
                "**Doğru sıra:** En eski sipariş en üstte; bekleyen masa gözden kaçmaz.",
                "**Salon–mutfak iletişimi:** Garson mutfağa gidip “hazır mı?” diye sormaz; kasada hazır ürünleri görür.",
                "**Kâğıt ve yazıcı masrafı yok:** Termal kâğıt, yazıcı arızası ve bakım derdi ortadan kalkar.",
              ],
            },
            {
              type: "p",
              text: "Mutfak yazıcısıyla karşılaştırmalı bir değerlendirme için [mutfak ekranı mı, mutfak yazıcısı mı](guide:kitchen-display-vs-printer) rehberini okuyun.",
            },
          ],
        },
        {
          heading: "Hangi donanım gerekir?",
          blocks: [
            {
              type: "p",
              text: "Mutfak ekranı tarayıcıda çalışır. Duvara monte bir tablet, tezgâhtaki bir dizüstü bilgisayar ya da bir mini bilgisayara bağlı ekran yeterlidir. Ekranı mutfak personelinin uzaktan görebileceği bir noktaya yerleştirin ve tam ekran moduna alın. Garson rolündeki hesaplarla da açılabilir; böylece mutfak için ayrı bir yönetici hesabı paylaşmanız gerekmez.",
            },
          ],
        },
        {
          heading: "Restoran yönetim sisteminin parçası",
          blocks: [
            {
              type: "p",
              text: "Mutfak ekranı, [Restoran Yönetim Sistemi](solution:restaurant-management)'nin bir parçasıdır ve [adisyon programı](solution:pos) ile aynı veriyi kullanır: adisyondan iptal edilen ürün mutfak ekranından da düşer, hazır olan ürün kasada görünür.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Mutfak ekranı için hangi cihazı almalıyım?",
          a: "Tarayıcısı olan herhangi bir tablet ya da bilgisayar yeterlidir. Mutfak ortamı için kılıflı ve duvara monte edilebilen bir tablet pratik bir seçimdir.",
        },
        {
          q: "Birden fazla mutfak ekranı kullanabilir miyim?",
          a: "Evet. Ekranı birden fazla cihazda açabilirsiniz; hepsi aynı siparişleri canlı olarak gösterir.",
        },
        {
          q: "Sipariş fişi yazdırabilir miyim?",
          a: "CG Menu siparişleri ekranda gösterir, mutfak yazıcısına çıktı göndermez.",
        },
      ],
    },
    en: {
      title: "Kitchen Display System (KDS) for Restaurants | CG Menu",
      description:
        "Waiter orders appear on the kitchen screen within seconds. New, preparing and ready columns, sound alerts and full screen; runs on a tablet or computer.",
      summary: "Orders arrive on the kitchen screen with a sound alert; cooks mark items as they go and front of house sees what is ready.",
      eyebrow: "Kitchen Display",
      h1: "Send orders to the kitchen on a screen, not a slip",
      intro:
        "The CG Menu **kitchen display system** (KDS) passes the order a waiter enters at the table to the kitchen within seconds. Orders are sorted oldest first in **New**, **Preparing** and **Ready** columns. A new order triggers a sound alert; a tablet or a computer with a screen in the kitchen is all you need.",
      highlights: [
        { title: "Instant delivery", body: "The order is on the kitchen screen the moment it is sent; no reloading." },
        { title: "Three-column flow", body: "New → Preparing → Ready; one tap moves an item on." },
        { title: "Table and notes", body: "Each ticket shows table, section, time, quantity, portion and notes such as “not spicy”." },
        { title: "Bulk actions", body: "Start, finish or serve every item of an order at once." },
        { title: "Sound alerts and full screen", body: "New orders are announced with a sound; the screen can go full screen." },
        { title: "In sync with the till", body: "Ready items show at the till and on the waiter's screen." },
      ],
      sections: [
        {
          heading: "How does the kitchen display work?",
          blocks: [
            {
              type: "steps",
              items: [
                { title: "The waiter sends the order", body: "Items picked on the [waiter ordering screen](solution:waiter-ordering) go to the kitchen with one tap." },
                { title: "It appears on the kitchen screen", body: "The order lands in the New column with the table name and notes, with a sound alert." },
                { title: "The cook prepares it", body: "Tap an item to mark it Preparing, then Ready. An item moved on by mistake can be moved back." },
                { title: "It is served", body: "Ready items show at the till; once served they leave the screen." },
              ],
            },
          ],
        },
        {
          heading: "Benefits for your restaurant",
          blocks: [
            {
              type: "list",
              items: [
                "**No lost tickets:** orders are not forgotten in a pocket or on the pass.",
                "**Readable orders:** item name, portion and note are printed clearly instead of handwritten.",
                "**The right order:** the oldest order is on top, so no table is overlooked.",
                "**Front and back of house in sync:** waiters see ready items at the till instead of asking the kitchen.",
                "**No paper or printer costs:** no thermal rolls, jams or maintenance.",
              ],
            },
            { type: "p", text: "For a side-by-side comparison read [kitchen display vs kitchen printer](guide:kitchen-display-vs-printer)." },
          ],
        },
        {
          heading: "What hardware do I need?",
          blocks: [
            {
              type: "p",
              text: "The kitchen display runs in the browser. A wall-mounted tablet, a laptop on the counter or a screen attached to a mini PC is enough. Place it where the kitchen team can see it from a distance and switch to full screen. It can also be opened with a waiter-role account, so you do not have to share a manager login in the kitchen.",
            },
          ],
        },
        {
          heading: "Part of the restaurant management system",
          blocks: [
            {
              type: "p",
              text: "The kitchen display is part of the [Restaurant Management System](solution:restaurant-management) and shares its data with the [POS](solution:pos): an item cancelled on the check also leaves the kitchen screen, and a ready item shows at the till.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Which device should I buy for the kitchen?",
          a: "Any tablet or computer with a browser will do. A tablet in a protective case on a wall mount is a practical choice for a kitchen.",
        },
        { q: "Can I use more than one kitchen screen?", a: "Yes. Open the screen on several devices; all of them show the same orders live." },
        { q: "Can I print order tickets?", a: "CG Menu shows orders on screen; it does not send them to a kitchen printer." },
      ],
    },
  },
};
