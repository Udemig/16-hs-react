# useRef

- useRef, javascriptteki document.getElementById() | querySelector() gibi methodların react'taki versiyonudur.
- useRef react'ta şu durumlarda kullanılabilir:

1. DOM Elementlerine erişim sağlamak
2. Değer saklamak (useState'den farklı olarak değer değişirse bileşen render olmaz)

# Higher Order Components (HOC)

- Üst Düzey Bileşen

- Normal bileşenlerden farklı olarak `self-closing` değildir ve kendi kapanış etiketleri vardır

- Açılış / kapanış etiketleri arasında yer alan içerik `children` propu ile erişilebilir

- HOC yapısı projede kod tekrarını azaltmak için bileşenlerin dinamik içeriklerini sonradan belirlemek için kullanılır
