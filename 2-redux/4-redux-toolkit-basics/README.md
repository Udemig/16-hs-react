# Redux Toolkit

- Redux'ın karmaşık ve tekrarlı yapısını sadeleştirir, geliştirme deneyimini iyileştirir.
- Daha az kod daha çok iş.

- **Neden Ortaya Çıktı?**
- Klasik reduxta karşılaşılan durumlar:
- - Çok fazla boiler plate kod
- - Action type sabitler
- - Action creator fonksiyonlar
- - Switc-case'li reducer yapılar
- - State immutable olduğu için doğrudan state'i değiştirememe

```js
// immutable
return { ...state, isloading: true };
return { ...state, products: [...state.products, action.payload] };

// mutable
state.isloading = true;
state.products.push(action.payload);
```

# Kurulum

- **Kütüphaneler**
- react-redux
- @reduxjs/toolkit

- **Klasik reduxta oluşturulması gereken yapılar**
- store | reducer | action-types | action-creator

- **Tooltkitte oluşturulması gereken yapılar**
- store | slice

- **Slice**
- Klasik reduxta akisyon tiplerini, aksiyon oluşturan fonksiyonları, reducer'ları ayrı ayrı tanımlıyorduk
- Toolkitte sadece slice'ı tanımlarız slice bizim yerimize hepsini oluşturur
