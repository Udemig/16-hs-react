# Memoization

- Bileşenlerin gereksiz yere render edilmesini veya fonksiyonların gereksiz hesaplamalar yapmasını önlemek için kullandığımız performans optimizasyonlara denir

## Temel Mantık

- Eğer bir bileşenin veya fonksiyonun girdileri değişmiyorsa (prop,parametreler) sonuç değişmez -- o zaman react'ın aynı işlemi yeniden yapmasına gerek olmamalı

## Yöntemler

1. useMemo()
2. React.memo()
3. useCallback()

## Cache (Önbellekle)

- Verilerin daha hızlı erişlebilen bir yerde geçici olarak saklanmasıdır

- **Neden Gerekli**
- Bir veriyi her seferinde:
- - veritabanından çekmek, api'a tekrar istek atmak terine
- - aynı hesaplamayı tekrar yapmak yerine
- - bir kez işlemi yapıp sonucu cahe'de saklarsak sonraki yapıcağımız aynı işlemde baştan hesaplamaka yerine cache'de saklanan cevabı kullanırız
- - İlk sefer: 10sn ------ sonraki sefer: 0.1s

- **Benzetme**
- İnsanın geçici hafızasına benzetebiliriz
- Birine 25\*20 işleminin sonucunu sorarasınaız ortalama 5 saniye içerisinde size cevap verir
- Kısa süre içerisinde aynı kişiye aynı soruyu sorarasınız hafızasında zaten sonuç olduğu için tekrar hesaplama yapmadan soruyu duyduğu gibi cevap verir
- - Bu seneryodaki insan geçici hafızasının yazılımdaki karşılığı cache'dir

## useMemo() - Hesaplanmış Değerleri Hatırl

- useMemo, yoğun hesaplama yapan fonksiyonların ürettikleri sonuçları cache'de saklar.
- Ve aynı hespalama kısa süre içerisinde tekrar yapılacağında, baştan hespalamak yerine ilk hespalamanın cache'de tutulan sonucunu kullanır
- Bu seneryo hesaplamadaki girdilerin değişmediği durum için geçerlidir, girdi değişirse hesaplama baştan yapılmalır

# Javacript Veri Türleri

1. **Primitive Types**

- Primitive (ilkel) tipler, değerin kendisini tutar
- Hafızada sabit bir alan kaplar
- Bir değişkene atandığında kopyası oluşturulur
- string, number, boolean, null, undefined, symbol, bigint

2. **Refferance Types**

- Referans üzerinde saklanır ve değerleri değiştirilebilir
- Bellekte değişkenin referansı saklanır
- Bir değişkene atandığından aynı referansı paylaşırlar
- object, array, function, class

# 1 Cümlede Fark

- Primitive değerler (number,string,boolean) doğrudan değerin kendisini kopyalar, referans tipler (object,array,function) ise değerin kendisini değil bellekteki adresini (referansını) alır
