import type { Guide } from "../types";

export const choosePos: Guide = {
  id: "choose-pos",
  published: "2026-10-19",
  updated: "2026-10-19",
  solutions: ["pos", "restaurant-management", "waiter-ordering"],
  content: {
    tr: {
      title: "Adisyon Programı Nasıl Seçilir? 10 Kriter | CG Menu",
      description:
        "Adisyon programı seçerken nelere dikkat edilmeli? Kurulum, donanım, mutfak ekranı, bölünmüş ödeme, yetkiler, raporlar ve maliyet için kontrol listesi.",
      h1: "Adisyon programı nasıl seçilir?",
      lead:
        "Doğru adisyon programı; garsonun siparişi hızlı girmesini, mutfağın siparişi anında görmesini, kasanın hesabı hatasız kapatmasını ve işletme sahibinin günü tek raporda görmesini sağlar. Seçerken kurulum ve donanım ihtiyacına, sipariş–mutfak–kasa akışına, ödeme bölme seçeneklerine, kullanıcı yetkilerine, raporlara ve toplam maliyete bakın.",
      sections: [
        {
          heading: "Adisyon programı ne yapar?",
          blocks: [
            {
              type: "p",
              text: "Adisyon programı, her masanın açılışından kapanışına kadar verilen siparişleri ve alınan ödemeleri kaydeder. Modern sistemler bunu bir [restoran yönetim sistemi](solution:restaurant-management) içinde sunar: masa planı, garson siparişi, mutfak ekranı, kasa ve raporlar aynı veriyi kullanır.",
            },
          ],
        },
        {
          heading: "Seçim için 10 kriter",
          blocks: [
            {
              type: "steps",
              items: [
                {
                  title: "Kurulum ve güncelleme",
                  body: "Bilgisayara kurulan programlar bakım ve güncelleme ister; web tabanlı sistemler tarayıcıdan açılır ve kendiliğinden güncellenir. Yerinde kurulum için teknik servis beklemek istemiyorsanız web tabanlı çözümleri tercih edin.",
                },
                {
                  title: "Donanım ihtiyacı",
                  body: "Özel el terminali ve POS donanımı ilk maliyeti yükseltir. Personelin telefonunda ya da standart bir tablette çalışan bir sistem, başlangıç maliyetini düşürür ve arızalı cihazı değiştirmeyi kolaylaştırır.",
                },
                {
                  title: "Sipariş girişinin hızı",
                  body: "Yoğun saatte bir siparişi girmek kaç dokunuş sürüyor? Kategoriler, porsiyon seçenekleri, adet ve not tek ekranda olmalı. Deneme sürümünde gerçek menünüzle bir servis turunu canlandırın.",
                },
                {
                  title: "Mutfak iletişimi",
                  body: "Sipariş mutfağa yazıcıyla mı, ekranla mı gidiyor? İki yaklaşımın artı ve eksilerini [mutfak ekranı mı, yazıcı mı](guide:kitchen-display-vs-printer) yazımızda karşılaştırdık.",
                },
                {
                  title: "Ödeme bölme",
                  body: "Arkadaş gruplarında “herkes kendi ürününü” ödemek ister. Ürün seçerek bölme, farklı tutar girme ve indirimin bölünmüş ödemeye doğru yansıması kontrol edilmeli.",
                },
                {
                  title: "Rol ve yetkiler",
                  body: "Garson indirim yapabilmeli mi? Ödeme iptalini kim yapabilir? Ciroyu kim görür? Rol bazlı yetki, hem hatayı hem suiistimali azaltır.",
                },
                {
                  title: "İz bırakan düzeltmeler",
                  body: "İptal edilen ürünler ve geri alınan ödemeler silinmemeli, raporda görünmeli. Gün sonunda “neden tutmuyor?” sorusunun cevabı burada.",
                },
                {
                  title: "Raporlar",
                  body: "Günlük ciro, ödeme yöntemine göre dağılım, saatlik yoğunluk, ürün satışları ve personel bazında tahsilat en temel raporlardır.",
                },
                {
                  title: "Menü ve QR menü entegrasyonu",
                  body: "Adisyon programındaki ürün listesi ile misafirin gördüğü menü ayrı sistemlerdeyse fiyatlar iki yerde güncellenir. Aynı menüyü kullanan bir [QR menü](solution:qr-menu) ile bu çift iş ortadan kalkar.",
                },
                {
                  title: "Toplam maliyet",
                  body: "Lisans, donanım, kurulum, bakım ve kullanıcı başı ücretleri birlikte hesaplayın. Yıllık sabit fiyatlı paketler bütçeyi öngörülebilir kılar.",
                },
              ],
            },
          ],
        },
        {
          heading: "Mali belge yükümlülüklerini unutmayın",
          blocks: [
            {
              type: "p",
              text: "Adisyon programı, işletme içi sipariş ve ödeme takibi içindir. Türkiye'de satışlar için düzenlenmesi gereken mali belgeler (ör. yazar kasa fişi, e-arşiv fatura) ayrı yükümlülüklerdir. Seçtiğiniz programın bu belgeleri düzenleyip düzenlemediğini sorun; düzenlemiyorsa mevcut yazar kasanızla birlikte nasıl çalışacağınızı mali müşavirinizle planlayın.",
            },
          ],
        },
        {
          heading: "Deneme sürecinde kontrol listesi",
          blocks: [
            {
              type: "list",
              items: [
                "Menünüzden 20 ürünü girip bir servis turunu baştan sona canlandırın: masa aç, sipariş gir, mutfakta hazırla, hesabı böl, kapat.",
                "Garson rolüyle giriş yapıp neleri göremediğini kontrol edin.",
                "Bir ürünü iptal edip bir ödemeyi geri alın; raporda nasıl göründüğüne bakın.",
                "Mutfak ekranını mutfaktaki gerçek mesafeden okuyun.",
                "Telefonunuzun mobil verisiyle (Wi-Fi olmadan) hızını deneyin.",
              ],
            },
          ],
        },
        {
          heading: "CG Menu bu kriterleri nasıl karşılar?",
          blocks: [
            {
              type: "table",
              head: ["Kriter", "CG Menu"],
              rows: [
                ["Kurulum", "Web tabanlı; telefon, tablet ve bilgisayar tarayıcısı"],
                ["Donanım", "Özel cihaz gerekmez; mutfak için tablet ya da ekran"],
                ["Mutfak", "[Mutfak ekranı](solution:kitchen-display), sesli bildirim; yazıcı desteği yok"],
                ["Ödeme bölme", "Hesabın tamamı, farklı tutar, ürüne göre; nakit, kart, diğer"],
                ["Yetkiler", "Sahip, personel, garson rolleri"],
                ["Raporlar", "Günlük özet: ciro, saatlik, ürün, iptal, personel"],
                ["QR menü", "Aynı menü, aynı panel"],
                ["Mali belge", "Düzenlemez; yazar kasa ile birlikte kullanılır"],
              ],
            },
            {
              type: "p",
              text: "Ayrıntılar için [adisyon programı](solution:pos) ve [garson sipariş sistemi](solution:waiter-ordering) sayfalarına bakın.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Web tabanlı adisyon programı güvenli mi?",
          a: "Bağlantının şifreli (HTTPS) olduğuna, her kullanıcının kendi hesabıyla girdiğine ve yetkilerin rol bazlı ayrıldığına bakın. CG Menu'de tüm bağlantılar şifrelidir ve her ekip üyesi kendi hesabıyla giriş yapar.",
        },
        {
          q: "Küçük bir kafe için adisyon programı gerekli mi?",
          a: "Az masalı ve tezgâh servisli bir işletmede yalnızca QR menü yeterli olabilir. Masaya servis yapıyor ve hesabı kişi başı bölmekle vakit kaybediyorsanız adisyon programı hızlıca kendini amorti eder.",
        },
      ],
    },
    en: {
      title: "How to Choose Restaurant POS Software | CG Menu",
      description:
        "What to look for in restaurant POS software: installation, hardware, kitchen display, split payments, permissions, reports and cost. A checklist.",
      h1: "How to choose restaurant POS software",
      lead:
        "The right POS lets waiters enter orders quickly, the kitchen see them instantly, the till close bills without mistakes and the owner see the day in one report. When choosing, look at installation and hardware, the order–kitchen–till flow, bill splitting, user permissions, reports and total cost.",
      sections: [
        {
          heading: "What does restaurant POS software do?",
          blocks: [
            {
              type: "p",
              text: "POS software records every order and payment at a table, from opening to closing. Modern systems offer it as part of a [restaurant management system](solution:restaurant-management): floor plan, waiter ordering, kitchen display, till and reports share the same data.",
            },
          ],
        },
        {
          heading: "10 criteria for choosing",
          blocks: [
            {
              type: "steps",
              items: [
                {
                  title: "Installation and updates",
                  body: "Installed software needs maintenance and updates; web-based systems open in the browser and update themselves. If you do not want to wait for an engineer, prefer web-based solutions.",
                },
                {
                  title: "Hardware",
                  body: "Dedicated handhelds and POS terminals raise the upfront cost. A system that runs on staff phones or a standard tablet lowers it and makes replacing a broken device easy.",
                },
                {
                  title: "Speed of order entry",
                  body: "How many taps does an order take at peak time? Categories, portion options, quantity and notes should be on one screen. Simulate a service with your real menu during the trial.",
                },
                {
                  title: "Kitchen communication",
                  body: "Do orders reach the kitchen on a printer or a screen? We compare both in [kitchen display vs kitchen printer](guide:kitchen-display-vs-printer).",
                },
                {
                  title: "Bill splitting",
                  body: "Groups want to pay for their own items. Check splitting by item, entering a custom amount and how discounts are applied to split payments.",
                },
                {
                  title: "Roles and permissions",
                  body: "Should waiters give discounts? Who may reverse a payment? Who sees revenue? Role-based permissions reduce both mistakes and misuse.",
                },
                {
                  title: "Corrections that leave a trace",
                  body: "Cancelled items and reversed payments should not be deleted but shown in the report. That is where “why doesn't the till balance?” gets answered.",
                },
                {
                  title: "Reports",
                  body: "Daily revenue, split by payment method, hourly activity, item sales and takings per staff member are the essentials.",
                },
                {
                  title: "Menu and QR menu integration",
                  body: "If the POS item list and the guest menu live in separate systems, prices are updated twice. A [QR menu](solution:qr-menu) that uses the same menu removes the double work.",
                },
                {
                  title: "Total cost",
                  body: "Add up licence, hardware, installation, maintenance and per-user fees. Fixed yearly plans keep the budget predictable.",
                },
              ],
            },
          ],
        },
        {
          heading: "Remember fiscal obligations",
          blocks: [
            {
              type: "p",
              text: "POS software tracks orders and payments inside the business. Fiscal documents required for sales, such as receipts from a registered cash register or e-invoices, are separate obligations in many countries. Ask whether the software issues them; if not, plan with your accountant how it will work alongside your existing register.",
            },
          ],
        },
        {
          heading: "Trial checklist",
          blocks: [
            {
              type: "list",
              items: [
                "Enter 20 items from your menu and simulate a full service: open a table, order, prepare in the kitchen, split the bill, close.",
                "Sign in with a waiter role and check what it cannot see.",
                "Cancel an item and reverse a payment; see how they appear in the report.",
                "Read the kitchen screen from the actual distance in your kitchen.",
                "Test the speed on mobile data, without Wi-Fi.",
              ],
            },
          ],
        },
        {
          heading: "How CG Menu meets these criteria",
          blocks: [
            {
              type: "table",
              head: ["Criterion", "CG Menu"],
              rows: [
                ["Installation", "Web-based; phone, tablet and computer browsers"],
                ["Hardware", "No special devices; a tablet or screen for the kitchen"],
                ["Kitchen", "[Kitchen display](solution:kitchen-display) with sound alerts; no printer support"],
                ["Bill splitting", "Full bill, custom amount, by item; cash, card, other"],
                ["Permissions", "Owner, staff and waiter roles"],
                ["Reports", "Daily summary: revenue, hourly, items, cancellations, staff"],
                ["QR menu", "Same menu, same dashboard"],
                ["Fiscal documents", "Not issued; used alongside your cash register"],
              ],
            },
            {
              type: "p",
              text: "For details see [restaurant POS software](solution:pos) and the [waiter ordering system](solution:waiter-ordering).",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Is web-based POS software secure?",
          a: "Check that the connection is encrypted (HTTPS), that every user signs in with their own account and that permissions are split by role. In CG Menu every connection is encrypted and each team member has their own login.",
        },
        {
          q: "Does a small café need POS software?",
          a: "A small counter-service café may only need a QR menu. If you serve at the table and lose time splitting bills, POS software pays for itself quickly.",
        },
      ],
    },
  },
};
