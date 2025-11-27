# Public API Örneği

REST prensiplerini, hız sınırlamayı (rate limiting) ve CORS yapısını gösteren basit bir Node.js API projesi.

## Özellikler
- **Express.js:** Hızlı ve minimalist web çatısı.
- **Rate Limiting:** API'yi kötü niyetli kullanımlara karşı korur.
- **CORS:** Farklı domainlerden gelen isteklere izin verir.
- **Mock Veri:** Kullanıcılar ve Ürünler için örnek veriler içerir.

## Kurulum
1.  Bağımlılıkları yükleyin:
    ```bash
    npm install
    ```
2.  Sunucuyu başlatın:
    ```bash
    npm run dev
    ```
3.  Endpointleri test edin:
    - `GET http://localhost:3000/`
    - `GET http://localhost:3000/api/users`
    - `GET http://localhost:3000/api/products`
