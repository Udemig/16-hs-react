# Typescript ile React Yazımı

## Config Dosyaları

- Typescript ile alakalı ayarları yapmamızı sağlayan 3 adet tsconfig.json dosyası var

## Dosya Uzantısı

- `js` yerine `ts` kullanıcaz
- `jsx` yerine `tsx` kullanıcaz

## Kütüphaneler

- Bazı kütüphanelerde hatasız kullanabilmek için kütüphanin kendisinin yanı sıra ts kodlarınıda indirmeliyiz
- uuid
- @types/uuid

## Önemli

- Tipi tanımlanabilen her değişkenin / fonksiyonun / parametrenin / component'In mutlaka tipi tanımlanmalı
- Otomatik tip algılama özelliği mümkünse hiç kullanılmalı

## Hooks

- React hooklarını kullanırken bir veri tutuyorsak mutlaka tutulan verinin tipi tanımlanmalı (useRef,useState,useReducer,useContect,useSelector)

## Element Tip

- Her jsx elementin kendine has bir tipi vardır.
- Element tiplerini tanımlarken hep aynı syntaxı kullanırız
- `HTML[ETİKET_ROLÜ | ETİKET_İSMİ]Element`

- button: `HTMLButtonElement`
- input: `HTMLInputElement`
- form: `HTMLFormElement`
- div: `HTMLDivElement`
- h1,h2,h3: `HTMLHeadingElement`

## Component Tipi

- React'da en sık kullandığımzı yapılar olan component'lar biere fonksiyondan meydana gelir.
- Fonksiyon tipi tanımlarken iki şeyin tipini mutlaka tanımlarız:
- - parametre: component'ın aldığı prop tipi tanımlanır
- - return: compoent'ın her zaman return ettiği veri jsx elementi olduğundan bunun tipi tanımlanır

## Tiplerde Import Export

- Değişkenlerde olduğu gibi tipleride farklı bir dosyada kullanmak istediğimizde export edebiliyoruz
- Değişkenlerden tek farkı import ederken önüne `type` ifadesi eklenmeli

- `export interface IForm {id:string}`
- `import type {IForm} from "./components/form`

## Event Tipi

- onClick / onChange / onSubmit gibi olaylarda çalıştırdığımız fonksiyonlara olay verisi içeren event parametresi gelir.
- event parametresinin değerlerine erişmek için tipinin tanımlanması gerekir.

- her olayın kendine özel bir tipi vardır:
- - onClick: `MouseEvent`
- - onChange: `ChangeEvent`
- - onSubmit: `SubmitEvent`

- event tipleri olayın hangi elementte gerçekleştiğini generic olarak alır
- - `MouseEvent<HTMLButtonElement>`
- - `ChangeEvent<HTMLInputElement>`
- - `SubmitEvent<HTMLFormElement>`
