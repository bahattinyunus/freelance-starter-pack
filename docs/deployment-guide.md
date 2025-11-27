# Proje Dağıtım (Deploy) Rehberi

Projelerinizi müşteriye sunmanın en hızlı ve profesyonel yolu, onları canlı bir sunucuda yayınlamaktır. İşte en popüler ve ücretsiz yöntemler:

## 1. Statik Siteler (HTML/CSS/JS) için: Netlify

Portfolyo ve Landing Page projeleri için en iyisidir.

1.  [Netlify](https://www.netlify.com/) hesabınıza giriş yapın.
2.  "Sites" sekmesine gidin.
3.  Proje klasörünüzü (içinde `index.html` olan klasörü) sürükleyip tarayıcı penceresine bırakın.
4.  **Bitti!** Siteniz saniyeler içinde yayında.
5.  "Domain Settings" kısmından kendi alan adınızı (örn: `musteri-firmasi.com`) bağlayabilirsiniz.

## 2. React / Next.js Projeleri için: Vercel

Task Manager gibi React projeleri için idealdir.

1.  Projenizi GitHub'a yükleyin.
2.  [Vercel](https://vercel.com/) hesabınıza giriş yapın.
3.  "Add New Project" butonuna tıklayın.
4.  GitHub reponuzu seçin ve "Import" deyin.
5.  "Deploy" butonuna basın.
6.  Vercel, projenizi otomatik olarak derleyip (build) yayınlayacaktır.

## 3. Backend (Node.js) Projeleri için: Render / Railway

Public API veya Task Manager Backend'i için.

1.  Projenizi GitHub'a yükleyin.
2.  [Render](https://render.com/) veya [Railway](https://railway.app/) hesabınıza girin.
3.  "New Web Service" seçeneğini seçin.
4.  GitHub reponuzu bağlayın.
5.  Build komutu olarak `npm install` ve Start komutu olarak `node index.js` (veya `npm start`) girdiğinizden emin olun.
6.  Deploy işlemi tamamlandığında size bir API URL'i verecektir.

---

## 💡 İpucu: Demo Linkleri
Müşteriye işi teslim etmeden önce mutlaka çalışan bir **Demo Linki** gönderin. Bu, profesyonelliğinizi gösterir ve müşterinin revize vermesini kolaylaştırır.
