# Kütüphaneler

- @reduxjs/toolkit
- react-redux
- axios
- react-select
- lucide-react
- tailwindcss

# Kaynaklar

- API: https://rapidapi.com/gatzuma/api/deep-translate1

# Debounce

**Debounce**, bir işlemin çok sık tetiklenmesini engeller.

Bizim örneğimizde:

```js
dispatch(translateText());
```

kullanıcı **her harfe bastığında** çalışıyordu:

```text
H → API
He → API
Hel → API
Hell → API
Hello → API
```

Debounce ile:

```text
H
He
Hel
Hell
Hello
    ↓
500ms bekle
    ↓
API
```

Yani **kullanıcı işlemi bitirdikten belirli bir süre sonra sadece son işlemi çalıştırır.**

👉 Özellikle **arama, API istekleri, input değişiklikleri** gibi durumlarda gereksiz işlem ve istekleri azaltmak için kullanılır.
