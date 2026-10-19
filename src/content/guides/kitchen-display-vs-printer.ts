import type { Guide } from "../types";

export const kitchenDisplayVsPrinter: Guide = {
  id: "kitchen-display-vs-printer",
  published: "2026-10-19",
  updated: "2026-10-19",
  solutions: ["kitchen-display", "restaurant-management"],
  content: {
    tr: {
      title: "Mutfak Ekranı mı, Mutfak Yazıcısı mı? | CG Menu",
      description:
        "Mutfak ekranı (KDS) ile mutfak yazıcısı karşılaştırması: maliyet, hız, sipariş takibi, hata ve bakım. Hangi restoran için hangisi daha uygun?",
      h1: "Mutfak ekranı mı, mutfak yazıcısı mı?",
      lead:
        "Mutfak yazıcısı siparişi kâğıda basar ve orada biter; mutfak ekranı (KDS) ise siparişi canlı tutar: hangi ürünün hazırlandığını, hangisinin hazır olduğunu salon ve kasa da görür. Az ürünlü, sabit menülü küçük mutfaklarda yazıcı yeterli olabilir; birden fazla istasyonu, yoğun servisi ya da salonla sık iletişim ihtiyacı olan mutfaklarda ekran daha az hata ve daha hızlı servis sağlar.",
      sections: [
        {
          heading: "İki yaklaşım nasıl çalışır?",
          blocks: [
            {
              type: "p",
              text: "**Mutfak yazıcısı:** Garson siparişi girer, mutfaktaki termal yazıcı bir fiş basar. Aşçı fişi tezgâha diker, iş bitince fişi kaldırır. Siparişin durumu yalnızca mutfakta, fiş üzerinde bilinir.",
            },
            {
              type: "p",
              text: "**Mutfak ekranı (KDS):** Sipariş, mutfaktaki tablet ya da ekranda belirir. Aşçı ürünleri “hazırlanıyor” ve “hazır” olarak işaretler; bu bilgi anında kasaya ve garsona ulaşır.",
            },
          ],
        },
        {
          heading: "Karşılaştırma tablosu",
          blocks: [
            {
              type: "table",
              head: ["", "Mutfak yazıcısı", "Mutfak ekranı"],
              rows: [
                ["İlk maliyet", "Termal yazıcı ve kurulum", "Tablet ya da ekran"],
                ["Sürekli maliyet", "Termal kâğıt rulosu, bakım", "Yok denecek kadar az"],
                ["Siparişin durumu", "Yalnızca mutfakta, fişte", "Salon ve kasa da görür"],
                ["Kaybolan / ıslanan fiş", "Mümkün", "Yok"],
                ["Sipariş sırası", "Fişlerin dizilişine bağlı", "En eski üstte, süre görünür"],
                ["Değişiklik ve iptal", "Yeni fiş basılır, karışabilir", "Ekranda anında güncellenir"],
                ["Elektrik/İnternet kesintisi", "Yerel ağda çalışmaya devam edebilir", "Bağlantı gerekir"],
                ["Mutfak ortamına dayanıklılık", "Isı ve neme dayanıklı modeller var", "Kılıf ve uygun konum gerekir"],
              ],
            },
          ],
        },
        {
          heading: "Hangi restoran için hangisi?",
          blocks: [
            {
              type: "list",
              items: [
                "**Yazıcı yeterli olabilir:** Az masalı, tek aşçılı, sabit ve kısa menülü işletmeler; internet bağlantısı güvenilir olmayan mekânlar.",
                "**Ekran öne çıkar:** Yoğun öğle ve akşam servisi olan restoranlar; garsonun “hazır mı?” diye sık sık mutfağa gittiği işletmeler; aynı masaya birden fazla tur sipariş girilen meyhane ve kafeler; kâğıt ve yazıcı arızasından yorulan mutfaklar.",
                "**Karma kullanım:** Bazı işletmeler bar için ekran, sıcak mutfak için yazıcı kullanır. Seçtiğiniz sistemin hangi yöntemi desteklediğini kontrol edin.",
              ],
            },
          ],
        },
        {
          heading: "Mutfak ekranına geçerken dikkat edilecekler",
          blocks: [
            {
              type: "steps",
              items: [
                { title: "Konum", body: "Ekranı ısı kaynağından uzak, aşçının çalışırken görebileceği yüksekliğe yerleştirin." },
                { title: "Cihaz", body: "Kılıflı bir tablet ya da duvara monte edilmiş bir ekran; dokunmatik olması işaretlemeyi kolaylaştırır." },
                { title: "Bağlantı", body: "Mutfakta Wi-Fi sinyalinin güçlü olduğundan emin olun; gerekirse erişim noktası ekleyin." },
                { title: "Ses", body: "Yeni sipariş uyarısının mutfak gürültüsünde duyulduğunu test edin." },
                { title: "Eğitim", body: "İlk hafta “başla”, “hazır” ve “servis” dokunuşlarını alışkanlık haline getirin; raporlar bu verilerle anlam kazanır." },
              ],
            },
          ],
        },
        {
          heading: "CG Menu'nün yaklaşımı",
          blocks: [
            {
              type: "p",
              text: "CG Menu siparişleri yazıcı yerine [mutfak ekranında](solution:kitchen-display) gösterir: Yeni, Hazırlanıyor ve Hazır sütunları, sesli bildirim, tam ekran modu ve toplu işaretleme. Ekran, [Restoran Yönetim Sistemi](solution:restaurant-management)'nin kasa ve garson ekranlarıyla canlı olarak eşleşir. Mutfak yazıcısına çıktı gönderme özelliği bulunmaz.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Mutfak ekranı için özel KDS donanımı gerekir mi?",
          a: "Web tabanlı sistemlerde gerekmez. Tarayıcısı olan bir tablet ya da bilgisayar yeterlidir.",
        },
        {
          q: "İnternet kesilirse mutfak ekranı ne olur?",
          a: "Web tabanlı ekranlar yeni siparişleri almak için bağlantıya ihtiyaç duyar. Kesinti riski yüksekse yedek bir mobil bağlantı (ör. telefondan paylaşım) bulundurmak iyi bir önlemdir.",
        },
      ],
    },
    en: {
      title: "Kitchen Display vs Kitchen Printer | CG Menu",
      description:
        "Kitchen display system (KDS) vs kitchen printer: cost, speed, order tracking, errors and maintenance. Which suits which restaurant?",
      h1: "Kitchen display or kitchen printer?",
      lead:
        "A kitchen printer prints the order on paper and that is where it ends; a kitchen display (KDS) keeps the order live, so front of house and the till can see what is being prepared and what is ready. A printer may be enough for a small kitchen with a short, fixed menu; a screen means fewer mistakes and faster service in kitchens with several stations, busy services or frequent back-and-forth with the floor.",
      sections: [
        {
          heading: "How do the two approaches work?",
          blocks: [
            {
              type: "p",
              text: "**Kitchen printer:** the waiter enters the order and a thermal printer in the kitchen prints a ticket. The cook pins it on the pass and removes it when done. The order's status is only known in the kitchen, on paper.",
            },
            {
              type: "p",
              text: "**Kitchen display (KDS):** the order appears on a tablet or screen in the kitchen. Cooks mark items as preparing and ready, and that reaches the till and waiters instantly.",
            },
          ],
        },
        {
          heading: "Comparison table",
          blocks: [
            {
              type: "table",
              head: ["", "Kitchen printer", "Kitchen display"],
              rows: [
                ["Upfront cost", "Thermal printer and setup", "Tablet or screen"],
                ["Running cost", "Thermal paper rolls, maintenance", "Next to none"],
                ["Order status", "Only in the kitchen, on paper", "Visible to floor and till"],
                ["Lost / wet tickets", "Possible", "None"],
                ["Order sequence", "Depends on how tickets are lined up", "Oldest on top, time visible"],
                ["Changes and cancellations", "A new ticket, easy to mix up", "Updated on screen instantly"],
                ["Power/internet outage", "May keep working on the local network", "Needs a connection"],
                ["Kitchen conditions", "Heat and moisture resistant models exist", "Needs a case and a good spot"],
              ],
            },
          ],
        },
        {
          heading: "Which suits which restaurant?",
          blocks: [
            {
              type: "list",
              items: [
                "**A printer may be enough:** few tables, one cook, a short fixed menu; venues with unreliable internet.",
                "**A screen stands out:** busy lunch and dinner services; places where waiters keep going to the kitchen to ask if food is ready; taverns and cafés where tables order in several rounds; kitchens tired of paper and printer jams.",
                "**Mixed setups:** some venues use a screen for the bar and a printer for the hot kitchen. Check which methods your system supports.",
              ],
            },
          ],
        },
        {
          heading: "Moving to a kitchen display",
          blocks: [
            {
              type: "steps",
              items: [
                { title: "Placement", body: "Away from heat, at a height cooks can see while working." },
                { title: "Device", body: "A tablet in a case or a wall-mounted screen; touch makes marking items easy." },
                { title: "Connection", body: "Make sure Wi-Fi is strong in the kitchen; add an access point if needed." },
                { title: "Sound", body: "Test that the new-order alert is audible over kitchen noise." },
                { title: "Training", body: "Make the start, ready and served taps a habit in the first week; reports become meaningful with this data." },
              ],
            },
          ],
        },
        {
          heading: "The CG Menu approach",
          blocks: [
            {
              type: "p",
              text: "CG Menu shows orders on a [kitchen display](solution:kitchen-display) instead of a printer: New, Preparing and Ready columns, sound alerts, full-screen mode and bulk marking. The screen stays in sync with the till and waiter screens of the [Restaurant Management System](solution:restaurant-management). It does not send output to kitchen printers.",
            },
          ],
        },
      ],
      faq: [
        { q: "Do I need special KDS hardware?", a: "Not with web-based systems. A tablet or computer with a browser is enough." },
        {
          q: "What happens to the kitchen display if the internet goes down?",
          a: "Web-based screens need a connection to receive new orders. If outages are likely, keep a backup mobile connection such as a phone hotspot.",
        },
      ],
    },
  },
};
