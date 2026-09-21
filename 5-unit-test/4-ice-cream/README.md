# Selector Anatomisi

- Seçici methodları 3 ana parçadan oluşur.

## Yöntem

1. get: elementi arar, bulamazsa hata fırlatır. test fail olur.

- - ekranda olduğunu kontrol etmek istediğimiz elementleri almak için kullanılır

2. query: elementi arar, bulamazsa null döndürür. test devam eder.

- - ekranda olmadığını kontrol etmek istediğimiz elementleri almak için kullanılır

3. find: elementin ekrana gelmesini bekler.

- - api isteği sonrası ekrana basılan elementleri almak için kullanılır
- - waitFor kullanmaya gerek kalmaz
- - await ile kullanılır

## All İfadesi

- Eğer birden fazla element seçilicekse selector'un hemen önüne `All` ifadesi eklenir
- Her zaman dizi döner

## Selector

- ByRole
- ByText
- ByAltText
- ByPlaceholderText
- ByTestId

## Örnekler

- getAllByRole()
- await findByAltText()
- queryByTestId()
