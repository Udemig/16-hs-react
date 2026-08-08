# React Hooks

- **useState**: bileşende veri tutmak

- **useEffect**: bileşenin yaşım döngüsünü takip eder

- **useRef**: jsx elementine erişmek için kullanılır

- **useContext**: bileşenler arasında prop göndermeden veri paylaşmayı sağlar

- **useMemo**: yoğun hesaplama yapan fonksiyonların ürettikleri sonuçları cache'de saklar

- **useCallback**: her render sırasında fonksiyonun yeniden oluşurulup farklı bir referansa sahip olmasını engellemek istersek useCallback kullanırız

- **useReducer**: action-dispatch-reducer aracılığıyla state yönetimi yapmamızı sağlar

# Temel Kavramlar

## State

- Component'ın verisini tutmak için kullanılır
- Her değiştiğinde bileşen yeniden render olur

## Prop

- Veriyi bir bileşenden diğerine aktarma yöntemidir

## Prop Drilling

- İç içe bir çok bileşen olduğu durumda en üstteki bileşenden alt bileşenine prop gönderme.
- Yani prop gönderme işleminin ard arda bir kaç kez gerçekleşmesi

## Context

- Bileşenlerden bağımsız noktalarda state depolamımızı sağlar
- Context'te tutulan veriler bütün bileşenler tarafından direkt erişebilir ve prop drillinge gerek kalmaz

---

### Neden Context Yerine Redux

- Context yapısı çok iyi bir state yönetim tercihi olsada büyük çaptaki projelerde çok fazla kod tekrarı olduğundan okunabilirlik ve performans anlamında reduxa göre geride kalır

## Redux Artıları

- Kod tekrarını önler
- Daha performanslı
- Bileşenlerdeki karşılıklığı engeller
- Hata ayıklama daha gelişmiştir

## Redux Anatomisi

1. Store: Uygulamadaki tüm reducer'ları bir arada tutarak veriyi tek bir merkezde tutmamızı sağlar

2. Reducer: Dispatch edilen action'a göre state'in nasıl değişeceğine karar veren fonksiyon

3. Dispatch: Action'u reducer'a ileten fonksiyon

4. Action: State'in nasıl değişeceğini ifade eden nesne

- - type: action'un görevini tanımlayan string
- - payload: reducer'ın işlemi gerçekleştirebilmesi için gönderdiğimiz veri

5. Subscribe: Component içerisinden store'daki verilere erişme yöntemi

6. Provider: Store'de tutulan state'lerin bileşenlere aktarılmasını sağlar

# Kurulum

1. paket indirme
   `npm i redux react-redux`

2. reducer'ları oluştur

3. store'u oluştur

4. provider ile store'u projeye tanıt
