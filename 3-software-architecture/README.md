# Yazılım Mimarisi

- Bir yazılım iskelet planıdır.
- Bir binanın mimari planı, nasıl odaları, kolonları, elektrik-su tesisatını belirtiyorsa, yazılım mimariside yazılımın:

- - Hangi parçalardan oluşucağını
- - Bu parçaların biribirleriyle nasıl iletişim kuracağını
- - Hangi teknolojilerin kullanılacağını
- - Performans ve ölçeklenebilirliğin nasıl sağlanacağını
- - Güvenliğin nasıl sağlanacağını belirleyen tasarımdır

### Neden Gerekli?

- Daha hızlı geliştirme
- Daha kolay bakım
- Büyüdükçe çökmeyecek bir şekilde ölçeklendirme

# Yazılım Mimarisi Türleri

1. **Katmanlı Mimari (Layered Architecture)**

- Kod katmanlara bölünür
- UI | Business | Data (DB)
- Katmanlı mimarinin bazı türleri: MVC, MVVM...

- MVC (Model-View-Controller)
- - Model: Veri yapısı ve veriyi yöneten kodları içerir
- - View: Kullanıcı arayünün kodlarını içerir
- - Controller: İş mantığı ile alakalı kodları içerir

2. **Monolithic Mimari**

- Tüm ugyulama tek bir bütün olarak çalışır
- Backend, frontend, ürün işlemleri, kullanıcı işlemleri..., hepsi aynı kod tabanında yer alır.
- Örn: Bütün amazon websitesinin tek bir react projesinde yazılması

3. **Microservice Mimari**

- Uygulama birçok küçük, bağımsız servislerden oluşur.
- Her servis kendi veritabanına ve kendi kod tabanına sahiptir.
- Örn: Amazon websitesinin, Kullanıcların alışveriş yapıcağı kısım, Admin paneli, Satıcı Paneli, DesteK Paneli birer ayrı frontend projesi olarak yazılır
- Kullanıcıların Alışveriş: Next.js
- Admin Paneli: React
- Satıcı Paneli: Angular

4. **Olay Tabanlı Mimari (Event-Driven Architecture)**

- Sistem, olaylar aracılığıyla birbirine haber gönderir
- "

- Örn

```jsx
  POST /orders
       |
 Sipariş Oluştur
       |
  Ödeme İşlemi
       |
   Stok Düş
       |
   Mail Gönder
       |
   SMS Gönder
       |
   Kargo Oluştur
```

```jsx
// Sipariş oluşturma işlemi her şeyi kendisi yapmak zorunda
// Mail serbisi çökerse sipariş oluşturulamaycak mı?
async function createOrder(req, res) {
  const order = await createOrder();
  await payment(order);
  await stock(order);
  await email(order);
  await sms(order);
  await shipment(order);
}
```

```jsx
 // Event-Driven
                ┌───────────────┐
                │ Order Service │
                └───────┬───────┘
                        │
                 OrderCreated
                        │
                        ▼
                ┌───────────────┐
                │ Message Broker│ (Apache Kafka | RabbitMq)
                └───────┬───────┘
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
   Payment Service  Stock Service  Email Service
```

## Doğru mimari tercihinin faydaları

1. Performans
2. Ölçeklenebilirlik
3. Bakım
4. Ekipler arası işbirliği ve verimlilik artırır
5. Maaliyet
6. Yeniden kullanılabilirlik
7. Esneklik

# Ölçeklenebirlik (Scaling)

- Ölçeklendirme, bir uygulamanın trafik, kullanıcı, veri veya işlem yülü arttırıldığında performansınını koruyarak çalışmaya devam etmesini sağlayacak şekilde yapılandırılmasıdır
- Daha fazla kullanıcı ---> daha fazla istek ---> daha fazla veri ---> daha fazla işlem

- **Dikey Ölçekleme**: Projeyi daha üst seviye donanıma sahip bir sunucuda yönlendirme
- **Yatay Ölçekleme**: Projeyi birden fazla sunududa yayınlama
- **Load Balancer**: Gelen kullanıcı isteklerini birden fazla sunucuya dengeli bir şekilde dağıtan sistemdir

Tabii. Aynı üç ana türü bu kez **JavaScript** ile, kısa ama mantığı gösterecek örneklerle anlatayım.

## 1. Creational Pattern — Factory

Amaç: Nesneyi doğrudan `new` ile her yerde üretmek yerine, oluşturma kararını tek yerde toplamak.

```javascript
class EmailNotification {
  send() {
    console.log("Email gönderildi");
  }
}

class SmsNotification {
  send() {
    console.log("SMS gönderildi");
  }
}

class NotificationFactory {
  static create(type) {
    if (type === "email") {
      return new EmailNotification();
    }

    if (type === "sms") {
      return new SmsNotification();
    }

    throw new Error("Bilinmeyen notification tipi");
  }
}
```

Kullanım:

```javascript
const notification = NotificationFactory.create("email");

notification.send();
```

Buradaki avantaj şu:

```javascript
new EmailNotification();
```

işini uygulamanın her yerine dağıtmıyorsun.

Factory karar veriyor:

```text
NotificationFactory
       |
   +---+---+
   |       |
 Email    SMS
```

Yani Factory şunu çözer:

> "Hangi nesnenin oluşturulacağına kim karar verecek?"

---

## 2. Structural Pattern — Adapter

Amaç: Birbirine uyumsuz iki yapıyı birlikte çalıştırmak.

Diyelim bizim sistemimiz şöyle bir yapı bekliyor:

```javascript
class PaymentService {
  pay(amount) {
    console.log(`${amount} TL ödendi`);
  }
}
```

Ama dışarıdan gelen PayPal API şöyle çalışıyor:

```javascript
class PayPalAPI {
  makePayment(money) {
    console.log(`PayPal ile ${money} TL ödendi`);
  }
}
```

Problem:

```text
Bizim sistem:
pay()

PayPal:
makePayment()
```

İsimler ve interface farklı.

Adapter oluşturuyoruz:

```javascript
class PayPalAdapter {
  constructor(paypal) {
    this.paypal = paypal;
  }

  pay(amount) {
    this.paypal.makePayment(amount);
  }
}
```

Kullanım:

```javascript
const paypal = new PayPalAPI();

const payment = new PayPalAdapter(paypal);

payment.pay(500);
```

Artık uygulama:

```javascript
payment.pay(500);
```

diyor.

PayPal'ın içeride:

```javascript
makePayment();
```

kullandığını bilmek zorunda değil.

Mantık:

```text
Application
    |
   pay()
    |
    v
PayPalAdapter
    |
    v
makePayment()
    |
 PayPalAPI
```

Adapter'ı bir **çevirmen** gibi düşünebilirsin.

---

## 3. Behavioral Pattern — Strategy

Amaç: Aynı işi yapmanın farklı yöntemlerini birbirinden ayırmak.

Örneğin indirim sistemi:

```javascript
class StudentDiscount {
  calculate(price) {
    return price * 0.8;
  }
}

class PremiumDiscount {
  calculate(price) {
    return price * 0.7;
  }
}

class NoDiscount {
  calculate(price) {
    return price;
  }
}
```

Fiyat hesaplayıcı:

```javascript
class PriceCalculator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  calculate(price) {
    return this.strategy.calculate(price);
  }
}
```

Kullanım:

```javascript
const calculator = new PriceCalculator(new StudentDiscount());

console.log(calculator.calculate(1000));
```

Çıktı:

```text
800
```

Premium yapmak istersek:

```javascript
const calculator = new PriceCalculator(new PremiumDiscount());

console.log(calculator.calculate(1000));
```

Çıktı:

```text
700
```

`PriceCalculator` değişmedi.

Sadece strategy değişti:

```text
PriceCalculator
      |
      v
DiscountStrategy

   +---------+----------+
   |         |          |
Student   Premium     Normal
```

Strategy şu problemi çözer:

> "Bir davranışın farklı versiyonları varsa bunları nasıl değiştirebilirim?"

---

## 4. Structural — Decorator

Decorator da çok önemli bir Structural Pattern'dir.

Amaç:

> Mevcut nesnenin kodunu değiştirmeden ona yeni özellik eklemek.

Basit kahve:

```javascript
class Coffee {
  getPrice() {
    return 50;
  }

  getDescription() {
    return "Kahve";
  }
}
```

Süt decorator:

```javascript
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getPrice() {
    return this.coffee.getPrice() + 10;
  }

  getDescription() {
    return this.coffee.getDescription() + " + Süt";
  }
}
```

Kullanım:

```javascript
let coffee = new Coffee();

coffee = new MilkDecorator(coffee);

console.log(coffee.getDescription());
console.log(coffee.getPrice());
```

Sonuç:

```text
Kahve + Süt
60
```

Başka decorator ekleyebiliriz:

```javascript
class CaramelDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getPrice() {
    return this.coffee.getPrice() + 15;
  }

  getDescription() {
    return this.coffee.getDescription() + " + Karamel";
  }
}
```

Sonra:

```javascript
let coffee = new Coffee();

coffee = new MilkDecorator(coffee);
coffee = new CaramelDecorator(coffee);

console.log(coffee.getDescription());
console.log(coffee.getPrice());
```

Sonuç:

```text
Kahve + Süt + Karamel
75
```

Decorator mantığı:

```text
Coffee
  |
MilkDecorator
  |
CaramelDecorator
```

Yani nesneyi katman katman sarıyoruz.

---

## 5. Structural — Facade

Amaç: Karmaşık bir sistemi tek ve basit bir interface arkasına saklamak.

Örneğin bilgisayar açılıyor:

```javascript
class CPU {
  start() {
    console.log("CPU başladı");
  }
}

class Memory {
  load() {
    console.log("RAM yüklendi");
  }
}

class Disk {
  read() {
    console.log("Disk okundu");
  }
}
```

Normalde:

```javascript
const cpu = new CPU();
const memory = new Memory();
const disk = new Disk();

cpu.start();
memory.load();
disk.read();
```

Ama kullanıcı bunları bilmek zorunda olmasın.

Facade:

```javascript
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.disk = new Disk();
  }

  start() {
    this.cpu.start();
    this.memory.load();
    this.disk.read();

    console.log("Bilgisayar hazır");
  }
}
```

Kullanım:

```javascript
const computer = new ComputerFacade();

computer.start();
```

Artık dışarıdaki kod sadece:

```javascript
computer.start();
```

diyor.

Facade:

```text
User
 |
 v
ComputerFacade
 |
 +---- CPU
 +---- RAM
 +---- Disk
```

Yani:

> Karmaşıklığı gizle, basit bir kapı sun.

---

## 6. Behavioral — Observer

Amaç:

> Bir nesnede değişiklik olduğunda diğer nesneleri otomatik bilgilendirmek.

YouTube kanalı gibi düşün.

```javascript
class Channel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    this.subscribers.push(user);
  }

  uploadVideo(title) {
    console.log(`Yeni video: ${title}`);

    this.subscribers.forEach((subscriber) => {
      subscriber.notify(title);
    });
  }
}
```

Subscriber:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  notify(videoTitle) {
    console.log(`${this.name}: Yeni video yayınlandı: ${videoTitle}`);
  }
}
```

Kullanım:

```javascript
const channel = new Channel();

const ali = new User("Ali");
const ayse = new User("Ayşe");

channel.subscribe(ali);
channel.subscribe(ayse);

channel.uploadVideo("Design Patterns");
```

Çıktı:

```text
Yeni video: Design Patterns
Ali: Yeni video yayınlandı: Design Patterns
Ayşe: Yeni video yayınlandı: Design Patterns
```

Observer şu mantıkta:

```text
             Channel
                |
          Video upload
                |
        +-------+-------+
        |               |
       Ali             Ayşe
```

Frontend'de event sistemlerinde buna çok benzeyen yapılar görürsün.

---

## 7. Creational — Builder

Amaç:

> Çok fazla parametreli veya karmaşık bir nesneyi adım adım oluşturmak.

Kötü örnek:

```javascript
const user = new User("Ahmet", 25, "İstanbul", true, false, "admin", "dark");
```

Bir süre sonra:

> `true` neydi? `false` neydi?

diye düşünmeye başlarsın.

Builder ile:

```javascript
class User {
  constructor() {
    this.name = null;
    this.age = null;
    this.city = null;
    this.role = null;
  }
}
```

Builder:

```javascript
class UserBuilder {
  constructor() {
    this.user = new User();
  }

  setName(name) {
    this.user.name = name;
    return this;
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setCity(city) {
    this.user.city = city;
    return this;
  }

  setRole(role) {
    this.user.role = role;
    return this;
  }

  build() {
    return this.user;
  }
}
```

Kullanım:

```javascript
const user = new UserBuilder()
  .setName("Ahmet")
  .setAge(25)
  .setCity("İstanbul")
  .setRole("admin")
  .build();
```

Bu çok daha okunabilir:

```text
UserBuilder
   |
 setName()
   |
 setAge()
   |
 setCity()
   |
 build()
   |
   v
  User
```

---

## Kafanda şöyle tut

| Pattern       | Ana fikir                                               |
| ------------- | ------------------------------------------------------- |
| **Factory**   | Hangi nesne oluşturulacak?                              |
| **Builder**   | Karmaşık nesneyi nasıl oluşturacağım?                   |
| **Adapter**   | Uyumsuz iki sistemi nasıl bağlarım?                     |
| **Decorator** | Mevcut nesneye nasıl özellik eklerim?                   |
| **Facade**    | Karmaşık sistemi nasıl basitleştiririm?                 |
| **Strategy**  | Aynı işi farklı yöntemlerle nasıl yaparım?              |
| **Observer**  | Değişiklik olduğunda diğerlerini nasıl haberdar ederim? |

JavaScript açısından özellikle **Factory, Strategy, Observer, Adapter, Facade ve Decorator** desenlerini iyi anlaman çok değerli. React/Node.js tarafında bu fikirlerin farklı biçimlerini sürekli görürsün.

# TODO - S.O.L.I.D Prensipleri

# TODO - 12 Factor Uygulama İlkesi
