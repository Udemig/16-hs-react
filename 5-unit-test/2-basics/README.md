# Dosyalama

- Testlerimizi .test.js / .test.jsx dosyaları içerisine yazarız.
- Projedeki testleri genelde tek bir klasör içerisinde tutarız

# Unit Test

- Yazdığımız _dinamik_ olan bütün bileşenlerin testlerini yazarız
- Unit test yazmamız sayesinde kod değişikliği yapıldığında yaptığımız değişiklikleri githuba göndermeden önce projede hata olup olmadığını kontrol etmemizi sağlar
- Projelerde her işlevi el ile kontrol etmek çok fazla zaman alıcağından ve bir şeylerin gözden kaçma ihtimali yüksek olduğundan test yazmak önemlidir.
- Bu yüzden unit test ile bileşenlerin doğru çalışıp çalışmadığını kontrol eden testler yazarız

# Selectors - Seçici Methodları

- Screen nesnesi aracılığıyla erişilen methodlardır.
- Test içerisinde renderlanan jsx elementlerine erişmemizi sağlar
- https://testing-library.com/docs/queries/byrole

# HTML Element Rolleri

- Çoğu html elementinin görevini temsil eden bir rolü vardır.
- Bazen etiket ismi ile aynı bazende farklı olabilir.
- İstersek elementlere kendimizde rol verebiliriz
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles

# Matchers - Kontrol Methodları

- Expect ile birlikte elementleri / değişkenleri kontrol etmek için kullanılır.
- Matcher methodlarıyla element / değişkenlerden beklentimizi test ederiz.
- DOM (Element): https://github.com/testing-library/jest-dom?tab=readme-ov-file
