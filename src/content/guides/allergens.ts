import type { Guide } from "../types";

export const allergens: Guide = {
  id: "allergens",
  published: "2026-10-19",
  updated: "2026-10-19",
  solutions: ["qr-menu", "hotel"],
  content: {
    tr: {
      title: "Menüde Alerjen Bilgisi: 14 Alerjen Rehberi | CG Menu",
      description:
        "Restoran menüsünde alerjen bilgisi nasıl gösterilir? 14 temel alerjen listesi, ürün başına işaretleme, çapraz bulaşma uyarısı ve QR menüde alerjen gösterimi.",
      h1: "Menüde alerjen bilgisi nasıl gösterilir?",
      lead:
        "Gıda alerjisi olan misafir için doğru alerjen bilgisi bir tercih değil, güvenlik meselesidir. En pratik yöntem, menüdeki her ürün için 14 temel alerjenden hangilerini içerdiğini işaretlemek, vegan ve glütensiz gibi diyet etiketlerini eklemek ve personeli soru geldiğinde mutfağa danışacak şekilde eğitmektir. Dijital menü, bu bilgiyi ürün başına yer sıkıntısı olmadan göstermeyi kolaylaştırır.",
      sections: [
        {
          heading: "14 temel alerjen",
          blocks: [
            {
              type: "p",
              text: "Avrupa Birliği'nin 1169/2011 sayılı tüketicinin gıda konusunda bilgilendirilmesi tüzüğü ve Türk Gıda Kodeksi'nin etiketleme mevzuatı, alerjiye ya da intoleransa yol açan 14 madde grubunu tanımlar:",
            },
            {
              type: "table",
              head: ["Alerjen", "Sık rastlandığı yerler"],
              rows: [
                ["Gluten içeren tahıllar", "Ekmek, makarna, börek, un bulamaçlı kızartmalar, bulgur"],
                ["Kabuklular", "Karides, yengeç, ıstakoz"],
                ["Yumurta", "Mayonez, tatlılar, hamur işleri, köfte harcı"],
                ["Balık", "Balık yemekleri, bazı soslar ve çorbalar"],
                ["Yer fıstığı", "Tatlılar, soslar, granola"],
                ["Soya", "Soya sosu, bazı ekmekler ve işlenmiş ürünler"],
                ["Süt ve laktoz", "Peynir, yoğurt, tereyağı, sütlü tatlılar, kremalı soslar"],
                ["Sert kabuklu yemişler", "Fındık, ceviz, badem, antep fıstığı; baklava, pesto"],
                ["Kereviz", "Çorbalar, salatalar, et suyu"],
                ["Hardal", "Soslar, salata sosları, marinasyonlar"],
                ["Susam", "Simit, tahin, humus, ekmek üstü"],
                ["Kükürt dioksit ve sülfitler", "Şarap, kuru meyve, bazı turşular"],
                ["Acı bakla (lupin)", "Bazı unlar ve unlu mamuller"],
                ["Yumuşakçalar", "Midye, kalamar, ahtapot"],
              ],
            },
            {
              type: "note",
              text: "Bu yazı genel bilgilendirme amaçlıdır. İşletmenizin yasal yükümlülükleri için yürürlükteki mevzuatı ve il/ilçe tarım ve orman müdürlüğünüzü esas alın.",
            },
          ],
        },
        {
          heading: "Alerjen bilgisi menüde nasıl gösterilmeli?",
          blocks: [
            {
              type: "list",
              items: [
                "**Ürün başına:** Alerjenleri menünün sonundaki genel bir dipnotta değil, ilgili ürünün yanında gösterin.",
                "**Tutarlı simge ve adlar:** Her ürün için aynı adlandırmayı kullanın; misafir bir kez öğrendiğinde tüm menüyü hızla tarar.",
                "**Diyet etiketleri ayrı:** “Vegan”, “vejetaryen” ve “glütensiz” birer diyet etiketidir; alerjen listesinin yerine geçmez, onu tamamlar.",
                "**Çapraz bulaşma uyarısı:** Aynı mutfakta hazırlanan ürünlerde eser miktarda alerjen bulunabileceğini belirten kısa bir genel not ekleyin.",
                "**Tarif değişince güncelleyin:** Tedarikçi ya da tarif değiştiğinde alerjen bilgisini de değiştirin. Dijital menüde bu tek bir düzenlemedir.",
                "**Çok dilli:** Turist misafirler alerjen bilgisini kendi dilinde okuyabilmeli; bkz. [çok dilli menü](guide:multilingual-menu).",
              ],
            },
          ],
        },
        {
          heading: "Personel ve mutfak tarafı",
          blocks: [
            {
              type: "p",
              text: "Menüdeki bilgi ne kadar doğru olursa olsun, misafir yine de soru sorabilir. Servis personeli tahmin yürütmek yerine mutfağa danışmalı; mutfak da alerjen içeren ürünler için ayrı kesme tahtası ve ekipman kullanmaya özen göstermelidir. Siparişe “fıstık alerjisi var” gibi notların mutfağa eksiksiz iletilmesi önemlidir; [mutfak ekranı](solution:kitchen-display) ürün notlarını siparişle birlikte gösterir.",
            },
          ],
        },
        {
          heading: "CG Menu'de alerjen ve besin değeri",
          blocks: [
            {
              type: "p",
              text: "[CG Menu QR menüde](solution:qr-menu) her ürün için 14 alerjenden içerdiklerini işaretleyebilir, vejetaryen, vegan, acılı ve glütensiz etiketlerini ekleyebilir, isterseniz porsiyon başına kalori, protein, karbonhidrat ve yağ değerlerini girebilirsiniz. Alerjen ve etiket adları menü Türkçe, İngilizce, Almanca ya da Rusça açıldığında o dilde, diğer dillerde İngilizce gösterilir.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "“Glütensiz” etiketi ile gluten alerjeni aynı şey mi?",
          a: "Hayır. Alerjen listesi ürünün gluten içerdiğini gösterir; “glütensiz” etiketi ise ürünün gluten içermediğini vurgulayan bir diyet etiketidir. Çapraz bulaşma riski varsa bunu ayrıca belirtin.",
        },
        {
          q: "Alerjen bilgisini sadece sorulduğunda vermek yeterli mi?",
          a: "Yükümlülükler mevzuata göre değişir. Ancak bilgiyi menüde önceden göstermek, misafirin güvenle seçim yapmasını sağlar ve personelin yükünü azaltır.",
        },
      ],
    },
    en: {
      title: "The 14 Allergens on Menus: How to Show Them | CG Menu",
      description:
        "How to show allergen information on a restaurant menu: the 14 major allergens, per-item labelling, cross-contamination notes and allergens on a QR menu.",
      h1: "How to show allergen information on your menu",
      lead:
        "For a guest with a food allergy, accurate allergen information is a matter of safety, not preference. The most practical approach is to mark which of the 14 major allergens each item contains, add diet tags such as vegan and gluten-free, and train staff to check with the kitchen when asked. A digital menu makes it easy to show this per item without running out of space.",
      sections: [
        {
          heading: "The 14 major allergens",
          blocks: [
            {
              type: "p",
              text: "EU Regulation 1169/2011 on food information to consumers, and the Turkish Food Codex labelling rules, list 14 groups of substances that cause allergies or intolerances:",
            },
            {
              type: "table",
              head: ["Allergen", "Commonly found in"],
              rows: [
                ["Cereals containing gluten", "Bread, pasta, pastry, battered fried food, bulgur"],
                ["Crustaceans", "Prawns, crab, lobster"],
                ["Eggs", "Mayonnaise, desserts, pastry, meatball mixes"],
                ["Fish", "Fish dishes, some sauces and soups"],
                ["Peanuts", "Desserts, sauces, granola"],
                ["Soybeans", "Soy sauce, some breads and processed foods"],
                ["Milk and lactose", "Cheese, yoghurt, butter, milk desserts, cream sauces"],
                ["Tree nuts", "Hazelnuts, walnuts, almonds, pistachios; baklava, pesto"],
                ["Celery", "Soups, salads, stock"],
                ["Mustard", "Sauces, dressings, marinades"],
                ["Sesame", "Simit, tahini, hummus, bread toppings"],
                ["Sulphur dioxide and sulphites", "Wine, dried fruit, some pickles"],
                ["Lupin", "Some flours and baked goods"],
                ["Molluscs", "Mussels, squid, octopus"],
              ],
            },
            {
              type: "note",
              text: "This article is general information. For your legal obligations, rely on the regulations in force where you operate and your local food authority.",
            },
          ],
        },
        {
          heading: "How should allergens be shown on the menu?",
          blocks: [
            {
              type: "list",
              items: [
                "**Per item:** show allergens next to the item, not in a general footnote at the end of the menu.",
                "**Consistent names and symbols:** use the same naming everywhere so guests can scan the whole menu quickly once they have learned it.",
                "**Diet tags are separate:** “vegan”, “vegetarian” and “gluten-free” are diet tags; they complement the allergen list rather than replace it.",
                "**Cross-contamination note:** add a short general note that items prepared in the same kitchen may contain traces of allergens.",
                "**Update when recipes change:** when a supplier or recipe changes, change the allergen info too. In a digital menu that is a single edit.",
                "**In every language:** tourists should be able to read allergen info in their own language; see [multilingual menus](guide:multilingual-menu).",
              ],
            },
          ],
        },
        {
          heading: "Staff and kitchen",
          blocks: [
            {
              type: "p",
              text: "However accurate the menu, guests may still ask. Service staff should check with the kitchen rather than guess, and the kitchen should use separate boards and equipment for allergen-free dishes. Notes such as “peanut allergy” must reach the kitchen intact; the [kitchen display](solution:kitchen-display) shows item notes together with the order.",
            },
          ],
        },
        {
          heading: "Allergens and nutrition in CG Menu",
          blocks: [
            {
              type: "p",
              text: "In the [CG Menu QR menu](solution:qr-menu) you can mark which of the 14 allergens each item contains, add vegetarian, vegan, spicy and gluten-free tags and, if you wish, enter calories, protein, carbohydrates and fat per portion. Allergen and tag names appear in Turkish, English, German or Russian to match the menu language, and in English for other languages.",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Is a “gluten-free” tag the same as the gluten allergen?",
          a: "No. The allergen list shows that an item contains gluten; the “gluten-free” tag highlights that it does not. Mention any cross-contamination risk separately.",
        },
        {
          q: "Is it enough to give allergen information only when asked?",
          a: "Obligations depend on local regulations. Showing it on the menu in advance lets guests choose with confidence and takes pressure off staff.",
        },
      ],
    },
  },
};
