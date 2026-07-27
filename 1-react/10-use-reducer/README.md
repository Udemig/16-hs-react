# useReducer

- State yönetimi için kullanılan bir react hook'udur.
- Karmaşık veya fazla değeri olan state yönetimini tek bir reducer fonksiyonuna toplayıp, state ile alakalı kodu bileşenlerden dışarıya taşımaya olanak sağlar
- useState ile state yönetiminin karmaşıklaştığı noktada useReducer tercih edebiliriz

# useReducer için bilinmesi gerekenler

1. Action - Eylem

- State'in nasıl değişceğini ifade eden nesnelerdir
- type ve payload değerlerine sahiptir
- type: eylemi açıklayan string ifade
- - EKLE, SİL, GÜNCELLE, YÜKLE, TEMA_DEĞİŞ
- payload (opsiyonel): eylemin gerçekleşmesi için gerekli detaylar
- - {type:"SİL", payload:8347}

2. Dispatch - Sevk Etmek

- Action'u reducer fonksiyonuna göndermeye yarayan fonksiyondur
- - `dispatch({type:"SİL", payload:8347})`

3. Reducer Fonksiyonu

- State'in nasıl değişeceğine karar veren fonksiyondur
- Action'lar dispatch edildiği zaman reducer fonksiyonu bunu görür ve dispatch edilen aksiyonun type'ına göre state'in nasıl değişeceğine karar verir
