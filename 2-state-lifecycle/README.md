# Resim

- Resimleri yönetmek için 2 yol vardır:
- - Eğer resimleri src klasörü içerisinde saklarsak resmi kullanabilmek için import etmek gerekir.
- - Eğer resimleri public klasörü içerisinde saklarsak doğrudan url üzerinden erişebiliriz

- **Ne zaman src klasörü tercih edilmeli ?**
- Sayfalarda kullanılan resimler
- Resimlerin build sırasında optimize edilmesi sağlar

- **Ne zaman public klasörü tercih edilmeli ?**
- Statik dosyalar
- Proje logo

# React Hooks

- React'ta bazı özel yetenekli fonkisyonlar vardır.
- isimleri use kelimesi başlar
- useState
- useEffect
- useRef
- useContext
- useReducer
- useMemo
- useCallback

- `topla()` | `useTopla()`

# State - Durum

- Bileşen içerisinde veri (durum) tutmak için kullanılır
- React'da _arayüzde değişime sebep olucak_ bütün veriler state'de tutulmalı
- State her güncellendiğindearayüz yeniden render olur
- Yeniden render sayesinde güncelleme arayüze yansır

# Bileşen Türleri

- React'da 2 farklı bileşen tanımlama yöntemi mevcuttur:

1. Function Component:

- Modern react projeleinde kullanılan bileşen türüdür
- Basit fonksiyon yapısındadır
- useState,useEffect gibi react hookları kullanılabilir
- Daha az kod yazılır, anlaşılması daha kolaydır

```jsx
function FunctionComponent() {
  <div>
    <h1>Fonksiyonel Bileşen</h1>
  </div>;
}
```

2. Class Components (Sınıf Tabanlı Bileşen):

- Bu react'ın eski sürümlerinde kullanılan bileşendir.
- `extends React.Componment` ifadesi ile bileşeni yapısını miras alan bir sınıf tanımlanır
- `render()` methodu ile jsx döner
- `this.props` `this.state` `this.setState` yapıları kullanılır
- `lifecyle` (yaşam döngüsü) methodları vardır

```jsx
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
```

# Lifecycle (Yaşam Döngüsü) Methods

- Bir component'in oluşum, güncellenme, kaldırılma süreçlerini yönetmek için kullanılan özel methodlardır.
- Bu kavram özellikle class componentlerde vardır
- Fakat mordern react'ta bu işlemleri useEffect hooku ile fonksiyonel component'larda da yapabiliyoruz

- Bir bileşinin yaşam döngüsünün 3 aşaması vardır:

1. Mount (Oluşturulması)
2. Update (Güncellenmesi)
3. Unmount (Kaldırılması)
