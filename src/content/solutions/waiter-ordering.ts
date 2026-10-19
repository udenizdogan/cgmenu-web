import type { Solution } from "../types";

export const waiterOrdering: Solution = {
  id: "waiter-ordering",
  plan: "qr-menu-pos",
  related: ["restaurant-management", "kitchen-display", "pos"],
  guides: ["choose-pos"],
  content: {
    tr: {
      title: "Garson Sipariş Sistemi: Telefondan Sipariş | CG Menu",
      description:
        "Garsonlarınız telefon ya da tabletten masada sipariş alsın, sipariş anında mutfak ekranına düşsün. El terminali gerektirmeyen garson sipariş sistemi.",
      summary: "Garson masada telefon ya da tabletten sipariş girer; masa çağrıları ve hazır siparişler aynı ekranda.",
      eyebrow: "Garson Sipariş Sistemi",
      h1: "Garsonunuzun telefonu, en hızlı el terminali",
      intro:
        "CG Menu **garson sipariş sistemi** ile garsonlarınız masada, ayrı bir el terminaline ihtiyaç duymadan telefon ya da tabletten sipariş alır. Sipariş tek dokunuşla [mutfak ekranına](solution:kitchen-display) gider, [adisyona](solution:pos) işlenir. Misafirin QR menüden yaptığı garson çağrısı ve hesap isteği de garsonun ekranında sesli bildirimle görünür.",
      highlights: [
        { title: "Kurulum yok", body: "Garson kendi hesabıyla tarayıcıdan giriş yapar; uygulama indirmez." },
        { title: "Hızlı ürün seçimi", body: "Kategoriler, porsiyon seçenekleri, adet ve ürün notu." },
        { title: "Tükenen ürün uyarısı", body: "“Tükendi” işaretli ürünler sipariş ekranında belirgindir." },
        { title: "Masa çağrıları", body: "Garson çağıran ve hesap isteyen masalar sesli bildirimle görünür." },
        { title: "Hazır siparişler", body: "Mutfağın hazır işaretlediği ürünler masa kartında sayılır." },
        { title: "Sınırlı yetki", body: "Garson rolü ciroyu, raporları ve menü ayarlarını göremez." },
      ],
      sections: [
        {
          heading: "Garson sipariş sistemi ne sağlar?",
          blocks: [
            {
              type: "p",
              text: "Kâğıda yazılan sipariş mutfağa taşınırken zaman kaybettirir, el yazısı yanlış okunur, fiyat sonradan elle hesaplanır. Garson sipariş sistemiyle sipariş masada dijital olarak girilir; mutfak aynı anda görür, fiyat menüden otomatik gelir ve adisyon kendiliğinden oluşur.",
            },
          ],
        },
        {
          heading: "Garsonun bir servis turu",
          blocks: [
            {
              type: "steps",
              items: [
                { title: "Masa planından masayı seçer", body: "Boş, dolu, garson çağıran ve hesap isteyen masalar renk ve etiketle ayrılır." },
                { title: "Ürünleri ekler", body: "Kategoriye dokunur, ürünü ve porsiyonu seçer, adedi artırır, gerekirse not ekler." },
                { title: "Siparişi gönderir", body: "“Siparişi gönder” ile tur mutfağa gider; ek siparişler aynı adisyona yeni tur olarak eklenir." },
                { title: "Hazır olanı servis eder", body: "Masa kartında hazır ürün sayısını görür, servis ettiğinde işaretler." },
              ],
            },
          ],
        },
        {
          heading: "QR menü ile birlikte daha az bekleme",
          blocks: [
            {
              type: "p",
              text: "Misafir menüyü [QR menüden](solution:qr-menu) kendi dilinde inceler; karar verdiğinde ya da hesap istediğinde masadan çağrı gönderir. Çağrı garsonun ekranına düşer, garson “Tamam” diyerek üstlenir. Böylece misafir el kaldırıp garson aramaz, garson da gereksiz tur atmaz.",
            },
          ],
        },
        {
          heading: "Ekip ve yetkiler",
          blocks: [
            {
              type: "p",
              text: "İşletme sahibi ekip üyelerini e-posta adresleriyle ekler ve rol verir. **Garson** rolü yalnızca masa, sipariş, mutfak ve çağrı ekranlarını kullanır; indirim, ödeme geri alma ve masa taşıma gibi düzeltmeler **personel** ve **sahip** rollerine açıktır. Günlük ciro ve rapor yalnızca sahibe görünür.",
            },
            {
              type: "p",
              text: "Garson siparişi, [Restoran Yönetim Sistemi](solution:restaurant-management)'nin bir parçasıdır.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "El terminali almam gerekir mi?",
          a: "Hayır. Garsonlar kendi akıllı telefonlarını ya da işletmenin tabletini kullanabilir; sistem tarayıcıda çalışır.",
        },
        {
          q: "Her garson için ayrı hesap gerekir mi?",
          a: "Evet, önerilir. Her garson kendi hesabıyla giriş yapar; böylece hangi ödemenin kim tarafından alındığı raporda görünür.",
        },
        {
          q: "Garson yanlış ürünü gönderirse ne olur?",
          a: "Mutfak henüz hazırlamaya başlamadıysa garson ürünü iptal edebilir. Hazırlanmaya başlamış ürünü personel ya da sahip iptal eder.",
        },
      ],
    },
    en: {
      title: "Waiter Ordering System on Any Phone | CG Menu",
      description:
        "Waiters take orders at the table on their own phone or tablet, and orders reach the kitchen screen instantly. Web-based, no handheld terminals required.",
      summary: "Waiters enter orders on a phone or tablet at the table; table calls and ready items on the same screen.",
      eyebrow: "Waiter Ordering",
      h1: "Your waiter's phone is the fastest handheld terminal",
      intro:
        "With the CG Menu **waiter ordering system**, waiters take orders at the table on a phone or tablet, with no dedicated handheld. One tap sends the order to the [kitchen display](solution:kitchen-display) and adds it to the [check](solution:pos). Waiter calls and bill requests from the guest's QR menu also appear on the waiter's screen with a sound alert.",
      highlights: [
        { title: "No installation", body: "Waiters sign in with their own account in the browser; no app to download." },
        { title: "Fast item picking", body: "Categories, portion options, quantity and item notes." },
        { title: "Sold-out warnings", body: "Items marked sold out stand out on the order screen." },
        { title: "Table calls", body: "Tables calling a waiter or asking for the bill appear with a sound alert." },
        { title: "Ready orders", body: "Items the kitchen has marked ready are counted on the table card." },
        { title: "Limited access", body: "The waiter role cannot see revenue, reports or menu settings." },
      ],
      sections: [
        {
          heading: "What does a waiter ordering system give you?",
          blocks: [
            {
              type: "p",
              text: "An order written on paper loses time on its way to the kitchen, handwriting gets misread and prices are added up by hand later. With a waiter ordering system the order is entered digitally at the table; the kitchen sees it at once, prices come from the menu and the check builds itself.",
            },
          ],
        },
        {
          heading: "A waiter's round",
          blocks: [
            {
              type: "steps",
              items: [
                { title: "Pick the table on the floor plan", body: "Free, busy, calling and bill-requested tables are marked with colours and labels." },
                { title: "Add items", body: "Tap a category, choose the item and portion, set the quantity and add a note if needed." },
                { title: "Send the order", body: "“Send order” sends the round to the kitchen; later orders become new rounds on the same check." },
                { title: "Serve what is ready", body: "See the number of ready items on the table card and mark them served." },
              ],
            },
          ],
        },
        {
          heading: "Less waiting with the QR menu",
          blocks: [
            {
              type: "p",
              text: "Guests browse the [QR menu](solution:qr-menu) in their own language and send a call from the table when they are ready to order or want the bill. The call lands on the waiter's screen and the waiter takes it with “OK”. Guests do not have to wave for attention and waiters make fewer wasted trips.",
            },
          ],
        },
        {
          heading: "Team and permissions",
          blocks: [
            {
              type: "p",
              text: "The owner adds team members by email and assigns a role. The **waiter** role only uses the table, order, kitchen and call screens; corrections such as discounts, payment reversal and table moves are for **staff** and **owner** roles. Daily revenue and reports are visible to the owner only.",
            },
            { type: "p", text: "Waiter ordering is part of the [Restaurant Management System](solution:restaurant-management)." },
          ],
        },
      ],
      faq: [
        { q: "Do I need handheld terminals?", a: "No. Waiters can use their own smartphones or the restaurant's tablet; the system runs in the browser." },
        {
          q: "Does each waiter need an account?",
          a: "Yes, it is recommended. Each waiter signs in with their own account so the report shows who took each payment.",
        },
        {
          q: "What if a waiter sends the wrong item?",
          a: "If the kitchen has not started on it, the waiter can cancel it. Items already in preparation are cancelled by staff or the owner.",
        },
      ],
    },
  },
};
