# Komutlar

## Proje Oluşturma

- `npx create vite@latest .` komutuyla terminalin bulunduğu dizinde bir react projesi oluşturabiliyoruz

## Projeyi Ayağa Kaldırma

- `npm run dev` komutuyla varolan bir react projesini ayağa kaldırabilirsiniz.

## Kütüphane İndirme ve Kaldırma

- indirme: `npm install/i kütüphane-ismi`
- belirli sürümü indirme: `npm install kütüphane-ismi@5.3.2`
- kaldırma: `npm uninstall kütüphane-ismi`

# React Klasör Yapısı

- **node_modules**
- projede kullanılan tüm npm paketlerinin kodlarını içerir
- react ve diğer kütüphanelerin kodları burada yer alır
- örn: react | bootstrap | scss | leaflet

- **package.json**
- projede kullanılan kütüphanelerin sürümlerini ve scriptlerin tutulduğu dosyadı
- örn: react | bootstrap | scss | leaflet

- **package-lock.json**
- projede kullanılan kütüphanelerin sürümlerinin detaylı bir şekilde (versiyon bilgisi ve kütüphanelerin birbiriyle aralarında ilişki) tutan dosyadır

- **vite.config.js || eslint.config.js**
- kütüphane ayar dosyaları

- **index.html**
- react projesinin tek html dosyasıdır
- projede yazılan sayflar bu dosyadaki `root` id'li div'in içerisinde render edilir

- **.gitignore**
- githuba göndermek istemediğimiz dosya ve klasör isimlerinin yer alır.
- büyük boyutlu / gizli / önemsiz dosyaları .gitignore'a yazarız

- **public**
- projedeki statik ve herke açık paylaşılan dosyaların bulunduğu yerdir.
- projede kullanıcağımız sabit logo/resimleri buraya koyarız

- **src**
- src yani source (kaynak) dosyası proje geliştirme anında yazılacak bütün kodların yer aldığı klasördür.
- - app/assets: prjede kullanıcağımız resim,video,mp3,font gibi içeriklerin yer aldığı klasör
- - app/index.css: stillendirme
- - app.jsx: Bir react bileşenidir. Projenin anasayfasıdır.
- - main.jsx: App bileşenini alır ve html'deki id'si root olan div'in içerisine aktarır. Bu sayede sayfa ekrana gelir.

# Bileşen - Component

- React'ın temel yapı taşlarıdır.
- Projedeki sayflarımız yazığımız component'ların birleştirilmesiyle olulur.
- Herhangi bir projeyi yapboz olarak düşünücek olursak yapbozun herbir parçası projemiz bir bileşene denk gelir.

# JSX

- JSX (Javascript XML), react'a özel syntaxdır. Javascript kodu içerisinde html benzeri kod yazmamıza olanak sağlar.

## JSX vs HTML - Farklar

1. Bazı attribute isismleri farklı:

- - class -> className
- - `<div className="card">`
- - for -> htmlFor
- - `<label htmlFor="email">Email</label>`

2. `<Header />` ifadesiyle JSX içerisinde Component çağırabiliriz

3. İçeriği olmayan etiketler self-closing olabilir

- - `<div /> <h1 /> <p /> <button />`

4. HTML içerisinde javascript kodu yazma şansımız yok. JSX içerisinde javascript kodu yazabiliriz.

- - JSX kodu `{}` açarak istediğimiz yerde js kodu yazabiliriz.
- - Bunun sayesinde addEventListener'a gerek kalmadan olay izleyebiliriz.
- - Dinamik değişkenleri daha pratik şekilde ekrana basabiliriz

5. JSX içerisinde boş etiket (fragment) kullanabiliyoruz

- - Dom'da boşuna alan kaplamasını istemediğimiz yerlerde kullanırız
- - Tek parante element kuralarına uyum sağlar

# Çoklu Renderlama

- Ekrana basmamız gereken eleman sayısı fazla olduğunda hepsini tek tek yazmak kod tekrarına sabep olucağından map methodu aracılığıyla çoklu renderlama yaparız
- Map kullanarak ekrana bastığımız elemanlara benzersiz bir key propu göndermeliyiz.
- - Eğer key yoksa react hangi elementin değiştiğini anlamakta zorlanır ve gereksiz render yapabilir.
- - Kısacası key, react'ın listedeki elemanları benzersiz şekilde tanıyıp hangi elemanın eklendiğini , silindiğini, veya güncellendiğini anlmasını sağlar. Bu sayede daha doğru ve performanslı render yapılır
- - not: map methodu kullanırken fonksiyonun aldığı ilk parametre diziki eleman ikinci parametre ise dizideki elemanın sırası yani (index) tir.

# Props

- Bir bileşene veri aktarma yöntemidir
- Prop olmadığı seneryoda bileşenler dinamik olmaycağından dolayı yeniden kullanılabilir olmaz ve bir beileşen olmasının neredeyse hiçbir anlamı kalmaz
- Prop yapısı sayesinde bileşenin içeriğini dinamik olarak belirleyip, bileşeni yeniden kullanılabilir yaparız

# Koşullu Renderlama

- Render: Ekrana bir içeriğin basılması
- Koşullu renderlama: Renderlama işlemnin koşula bağlı olması
- jsx içerisinde: if else / switch case kullanılamaz
- Koşullu renderlama iki farklı şekilde yapılabilir

1. Terneray Opertatör (?:)

- Koşulun gerçekleştiği ve gerçekleşmedeği durumda ekrana basılacak içeriği belirliyoruz
- `?` koşulun gerçekleştiği durumu ifade eder
- `:` koşulun gerçekleşmediği durumu ifade eder

2. Ve Operatörü (&&)

- Sadece koşulun gerçekleştiği seneryoada ekrana baılcak içeriği belirleriz
- Koşulun gerçekleşmediği seneryoada ekrana hiç bir şey basılmaz

# React Virual DOM

- **DOM**: Document Object Model, tarayıcının HTML sayfasını ağaç yapısı şeklinde nesne formatında temsil eden model

- **Virtual DOM**, React'ın kullanıcı arayüzünü daha hızlı güncellemesini sağlayan bir tekniktir. React gerçek tarayıcı DOM'una doğrudan işlem yapmak yerine önce sanal bir DOM (Virtual Dom) üzerinde değişikleri hespalayarak sadece değişen kısımları renderlar

## Nasıl Çalışır

- Arayüz değişimine sebep olan bir sepete ekle butonu düşünelim

1. Butona tıklanır
2. React yeni bir Virual DOM oluşturur
3. Butonda gerçekleşen değişimi Virtual DOM'da geçekleştirir
4. Eski Virtual DOM ile güncellleme sonrası Virtual DOM'u karşılaştırır
5. Karşılaştırma sonucunda hangi arayüz elemanın değiştiğini tespit eder
6. Gerçek DOM içierisinde sadece değişen elemanı günceller

## Neden VDOM kullanılır?

- Gerçek DOM üzerinde yapılan işlemler yavaştır. Sayfadeki en küçük bir değişklik bile ağaç yapısının yeniden render olmasına neden olabilir. Virtual DOM bütün ağaç yapısının render olması yerine sadece değişen kısmın render olmasını sağlayarak, arayüz güncelleme sürecinin hızlandırır

# Console.log | Console.dir

- İkiside konsola çıktı vermek için kullanılır ancak nesneleri gösterme şekilleri farklıdır.
- console.log(): genellikle değeri ekrana yazdırır
- console.dir(): bir nesnenin özelliklerini ağaç yapısında incelemek için kullanılır.

- yani bir değeri konsola yazarken `log` kullanırız bir elementi konsola yazarken `dir` kullanırız
