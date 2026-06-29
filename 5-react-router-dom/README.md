# SPA - Single Page Application

- Geleneksel websitelerinde bir linke tıklandığınızda tarayıcı sunucuya gider, yeni bir HTML sayfası indirir ve erkanı baştan aşağıya yeniden çizer.

- SPA, mimarisinde bu tamamen farklıdır:
- Tarayıcıya saddece tek bir html dosyası yüklenitr
- Siz sitede gezinirken sayfa asla baştan yenilenmez.
- Tıkladığınız linke göre, sadece değişmesi gereken içerik Javascript kullanılarak anlık olarak ekrandan silinip yerine yenisi renderlanır. (Örneğin sayfa değişiminde header ve footer kısmı sabit kalırken sadece içerik kısmı yeniden renderlanır)

# React Router DOM

- React projelerinde sayfalama yapmamıza olanak sağlayan kütüphanedir
- SPA (Single Page Application) proje oluşturmamızı sağlar
- RRD, tarayıcının adres çuğundaki URL'i dinler. URL değişitiğinde tarayıcının varsayılan olarak yaptığı sayfa yenilemesini "zorla durdurur" ve o URL'e karşılık gelen react bileşenini ekrana basar

- **Browser Router**
- Tüm uygulamayı sarmalar
- RRD işlevlerinin çalışmasını sağlar, window.

- **Routes**
- Bütün route'Ların tanımladnığı kapsayıcıdır.
- Url değiştiğinde react'a hangi bileşeni ekrana basması gerektiğini söyler

- **Route**
- Projedeki her sayfa için bir route tanımlanır
- Hangi url'de ekrana hangi bileşenin basılması gerektiğini söyler
- Örnek: url `/ürünler` olursa ekrana <Products> bileşenini bas

- **Link**
- Proje içerisinde sayfayı yenilemeden yönlendirme yapmak için kullanılır
- href değeri yerine to propu tanımlanır

- **NavLink**
- Link ile aynı görevi üstlenir
- Link'ten farklı olarak ziyaret edilen sayfanın linline active class'ı verir.

- **Dynamic Routes**
- Sayfa içeriğini url'deki parametreye göre dinamik olarak değiştiği detay sayfalarına denir
- Bu route'ların path'lerini tanımlarken urldeki parametreleri `:parametre_ismi` şeklinde tanımlarız.
- Component içerisinden url'deki parametrele parametrelere erişmek için `useParams` hook'unu kullanarız

- **Optional Chaining (?.)**
- Api' isteğinden gelen nesnedeki bir alan direkt erişiceksek api'dan yanıt gelene kadar beklememiz gerekir.
- Beklemeden erişiyorsak (data.title) bu yöntem direk title'a eriş anlamına gelir ve hata verir
- Optional chainin kullanırsak (data?.title) bu yöntem data varsa title'a eriş anlamına gelir ve hatadan kaçınmamızı sağlar

- **Nested Routes**
- İç içe yollar
- Birden fazla sayfanın ortak olarak kullanıcağı arayüz elementleri tanımlamak için veya birden fazla sayfanın ortak yetkilendirme süreçlerini yönetmek için kullanırır

- **NotFound Route**
- 404 sayfası
- diğer route'ların en sonuna tanımlanır ve path değeri \* olur

- **useNavigate**
- link elementinin fonksiyon versiyonudu yönlendirme yapmak için kullanılır

- **useSearchParams**
- url'deki (?) den sonra gelen arama parametreline erişmek ev yönetmek için kullanılır
- ?key=value

- **useParams**
- route tanımlarken `:parametre` formatında tanımlanan parametrelere erişmek için kullanılır

- **Outlet**
- Kapsayıcı route içerisinde child route'un bileşeninin yerleşeceği konumu belirler

- **createBrowserRouter**
- Sayfaları <BrowserRouter> yöntemine göre daha okunakli bir veri formatında tanımlamamızı sağlar.

- **useLocation**
- kullanıcın bulunduğu url ile alakalı bilgileri getirir
- farklı bir sayfadan yönlendirme anın `state` ile veri aktarılıysa bu veriye useLocation ile erişiriz
