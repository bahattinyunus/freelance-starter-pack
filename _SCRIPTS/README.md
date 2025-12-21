# 🛠️ _SCRIPTS: OTOMASYON MERKEZİ
### *Egemen Teknisyen için Güç Çarpanları*

`_SCRIPTS` dizini, Freelance Starter Pack'in makine dairesidir. Manuel emeği ortadan kaldırmak ve her operasyonda elit hassasiyeti sağlamak için tasarlanmış özel otomasyon mantığını barındırır.

## 🛰️ ARAÇ KATALOĞU

### 1. `nexus_tool.py`
- **Odak:** Proje yaşam döngüsü yönetimi için merkezi bir 'Operasyonel Merkez'.
- **Yetenekler:**
    - **Varlık Başlatma (Asset Initialization):** Standartlaştırılmış klasör yapılarının hızlı kurulumu.
    - **Mantık Denetimi (Logic Auditing):** Depo genelinde taktiksel sözdizimi ve bağlantı doğrulaması.
    - **Dağıtım Senkronizasyonu (Deployment Sync):** Proje varlıklarının otomatik olarak hazırlanması ve pushlanması.
- **Çalıştırma:** `python nexus_tool.py [komut] [argümanlar]`

---

## 🏁 OPERASYONEL TATBİKATLAR

### 'Hızlı Seferberlik' Dizisi
Yeni bir müşteri projesine başlarken, tutarlılığı sağlamak için bu tatbikatı izleyin:
1.  **Başlat:** 'Zenit' yapısını oluşturmak için `nexus_tool.py init [proje_adi]` komutunu çalıştırın.
2.  **Varlık Yükleme:** `DOMINION_TEMPLATES/` altındaki şablonları yeni proje köküne dağıtın.
3.  **Git Senkronizasyonu:** Yerel bir git örneği başlatmak ve onu bir uzak düğüme bağlamak için script'i kullanın.

---

## 🚀 KULLANIM PROTOKOLLERİ

1.  **Ortam İzolasyonu:** Tüm script operasyonları için `venv/` kullanılması önerilir.
2.  **'Kuru Çalıştırma' (Dry Run) Kuralı:** Üretim dosyalarında değişiklik yapmadan önce, varsa scriptleri her zaman `--dry-run` bayrağıyla çalıştırın.
3.  **Refaktör Kılavuzu:** Yeni scriptler eklerken, loglama ve hata yönetimi konusunda 'Obsidian' stilini koruyun.

---

## 📈 STRATEJİK DEĞER
Manuel işçilikle harcanan her saat, stratejik büyümeden çalınan bir saattir. `_SCRIPTS` bölümü, en yüksek verimlilikle çalışmanızı sağlayarak, işinizi stresinizi artırmadan ölçeklendirmenize olanak tanır.

---

[Komuta Merkezine Dön](../README.md)
