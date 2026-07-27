# Kütüphaneler

- tailwindcss
- lucide-react
- axios
- react-router-dom
- chart.js
- react-chartjs-2

# API

- https://www.coingecko.com/en/api

# Proje Yayınlama Adımları

1. Projenizi hazırlayın (build'i alınabilmeli)
2. Projeyi Githuba Yükle
3. Hosting Platformu Seç ve Deploy Edin (173.255.234.67)
4. Domain (Alan Adı) kirala ve DNS ayarlarını yap (www.udemig-tracker.com)
5. SEO İyileştimesi yap

# Build (Derleme)

- Projenin dağıtıma hazır hale getirilme işlemi
- `npm run build` ile optimize eidlmiş JS ve CSS dosyaları oluşur

# Hosting Seçenekleri

1. Modern Çözümler

- Projeyi github reposu üzerinden tek tıkla yayınlyabiliyorsunuz
- Otomatik SSL sertifikası
- Otomatik CDN
- Otomatik CI/CD (Sürekli Geliştirme ve Sürekli Dağıtım)

- Vercel
- Netlify
- AWS
- Azure
- Google Cloud
- Firebase
- Github Pages
- Hostinger

2. Klasik Çözümler

- Kendi sunucumuzu kiralayıp, her işlemi linux komutlaryı ile kendimiz yönetiriz
- VPS (Virtual Private Server)

- IBM
- Digital Ocean
- Contabo

# Deploy (Yayınlama)

- Projenin geliştirme ortamından sunucuya aktarılması işlemine denir
- Dist klasörünün sunucuya yüklenmesi

# Domain (Alan Adı)

- www.udemig-tracker.com
- Sunucular normalde IP adresleri üzerinden erişebilir ama ip adresi akılda kalıcı olmadığından biz alan adlarını tercih ederiz
- 277.451.456.33 ------------> udemig-tracker.com

- Godaddy
- Namecheap
- isimtescil

# DNS Kayıtları

- DNS Kayıtları, alan adının internette neye karşılık geldiğini söyleyen verilerdir.
- **A Kaydı**: Domaine girildiğinde hangi ip adresine yönlendirileceğimizi belirler. "furkanevin.online" --------> 16.198.79.1 "
- **CName**: Domaine girildiğinde hangi alan adına yönlendireceğini belirlerler.
- **NS Kaydı**: Domain'in hangi DNS sunucuları tarafından yönetildiğini belirtir.

# Index

- Indexlenmek, bir web sayfasının arama motorları tarafından bulunup arama motorunun veritabanına kadedilmesi demektir.
- Indexleme gerçekleştikten sonra kullanıcılar arama sonuçlarında sitenizi göremeye başlayabiliriz.
- Yeyni yaynlanan bir sitenin indexlenmesi 3-7 gün arası sürer.

# SEO

- SEO (Search Engine Optimization), Türkçesiyle "Arama Motoru Optimizasyonu", web sitesinin Google gibi arama motorlarında daha üst sıralarda çıkması için yapılan tüm teknik ve içerik çalışmalarının genel adıdır.
- SEO iyileştirmesi için yapabileceklerimizi temelde 3'e ayırabiliriz.

1. Teknik SEO

- Sitenin alt yapısı ile ilgili güncellemeler
- - Site hızı
- - Mobil uyumluluk
- - Url yapısı (`/coins/123` yerine `/coins/bitcoin` kullanılmalı)
- - SSL (`https`)
- - 404 Hataları

2. İçerik

- Sayfanın içeriğiyle alakalıdır
- - Başlıklar
- - Anahtar kelimeler
- - Meta etiketleri
- - Görsel'lerde alt etiketleri
- - Input'ların label'lara bağlı olması
- - Button'ların name değerlerinin olması
- - Semantik etiket kullanımı
- - Site içe linkler

3. Off Page SEO

- Başka sitelerin sana verdiği değer:
- - Backlink (başa sitelerden link almak)
- Sosyal Medya Paylaşımları
- Marka Bilinilirliği
