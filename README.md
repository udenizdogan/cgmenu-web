# cgmenu-web

CG Menu'nün tanıtım sitesi (`cgmenu.tr`) ve işletmelerin herkese açık menü sayfaları (`isletme.cgmenu.tr`). Next.js (App Router).

## Geliştirme

```bash
yarn install
yarn dev
```

- Tanıtım sitesi: http://localhost:3000 (Türkçe), http://localhost:3000/en
- Örnek menü: http://demo.localhost:3000
- Gerçek işletme menüleri (`isletme.localhost:3000`), geri bildirim ve iletişim formu için `cgmenu-api` http://localhost:4100 adresinde çalışıyor olmalı.

## Yapı

- `src/proxy.ts` — host'a göre yönlendirme. Alt alan adları `/tenant/[slug]/[locale]` rotasına, tanıtım sitesi yolları `/[lang]/...` rotasına yazılır. Türkçe ön eksizdir (`/ozellikler`), İngilizce `/en/features`.
- `src/i18n/` — tanıtım sitesi dilleri, yol eşlemeleri ve metinler.
- `src/app/[lang]/` — tanıtım sayfaları.
- `src/app/tenant/[slug]/[locale]/` — işletme menüsü.
- `src/lib/tenant/` — menü veri tipleri. `get-business.ts` işletmeyi `cgmenu-api`'den çeker ve önbelleğe alır; `demo` adresi siteyle birlikte gelen örnek veriyi kullanır.
- `src/app/api/revalidate/` — API bir işletme değiştiğinde burayı çağırır, o işletmenin önbelleği yenilenir.

## İçerik ve SEO

- `src/content/` — çözüm sayfaları (`/cozumler/...`) ve rehber yazıları (`/rehber/...`), TR ve EN. Metinlerde `**kalın**` ve `[bağlantı](solution:pos)`, `guide:<id>`, `page:<rota>` ya da tam adres kullanılabilir.
- Yeni sayfa: slug'ı `src/content/slugs.ts`'e, içeriği `solutions/` ya da `guides/` altına ekleyin ve `src/content/index.ts`'e kaydedin. Sitemap, `llms.txt`, alt bilgi bağlantıları ve dil değiştirici kendiliğinden güncellenir.
- Başlıklar en fazla ~60, açıklamalar ~160 karakter olmalı; içerik başlıkları `| CG Menu` ile biter.
- `/llms.txt` ve `/llms-full.txt` içerikten ve API'deki planlardan üretilir (llmstxt.org).
- Sosyal paylaşım görseli `/api/og?title=...&lang=tr` adresinde sayfa başlığıyla çizilir.
- Planlar build sırasında API'den okunur; build ortamından API'ye ulaşılamazsa plan kutuları istek anında doldurulur. Build'de `API_INTERNAL_URL` verilmesi önerilir.

## Ortam değişkenleri

`.env.example` dosyasına bakın. Geliştirmede hepsinin varsayılanı vardır.

## Yayın

```bash
docker build -t cgmenu-web .
docker run -p 3000:3000 -e ROOT_DOMAIN=cgmenu.tr cgmenu-web
```
