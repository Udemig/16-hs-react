# API (Application Programming Interface) Nedir?

- API, bir uygulamanın başka bir uygulamayla konuşmasını sağlayan arayüzdür.
- İki farklı yazılımın birbirleriyle veri alışverişi yapmasını sağlar
- Frontend projelerinde ekrana basıcağımız dinamik veriyi elde etmek için api'a istek atarız bu durumda api veritabanından ilgili verileri alıp cevap gönderen katmandır

# JSON-SERVER

- Hızlıca bir REST API oluşturmak için kullanılan javascript kütüphanesidir.
- Mock (sahte) bir api oluşturmak için isteyen geliştiricinin işine yarar
- Gerçek bir veritabanı kullanmak yerine `db.json` dosyası üzerinden çalışan sahte bir API oluşturur

## JSON-SERVER Kurulum

1. projeye `json-server@0.17.4` kütüphanesi indir
2. projenin en dış klasörüne veritabanı olarak kullanıcağımız `db.json` dosyası oluştur
3. api'ı ayağa kaldırmak için terminale `npx json-server --watch db.json --port 4000` komutunu yazarız
4. komutu her seferinde baştan yazmak yerine `package.json` dosyasında `server` isminde bir script tanımlarız
5. artık json server ile oluşturulan api'ı ayağa kaldırmak istediğimizde terminale `npm run server` yazarız
6. devamında frontendi ayağa kaldırmak için yeni bir terminalde `npm run dev` yazarız

# AXIOS

- Tarayıcıda ve backend oratmında HTTP istekleri atmamozo sağlayan fetch muadili XMLHTTPREQUEST tabanlı bir kütüphane

## Neden Axios?

- fetch yöntemine göre daha pratik
- istek verilerini otomatik olarak json ve js formatlarına çevirir
- isteklerde göndeirlmesi gereken bazı header'ları otomatik olarak ekler
- intercept özelliği ile yapılan her istek veya gelen her yanttıa fonksiyon çağırabiliyoruz
- timeout, baseUrl, header, params gibi default ayarları yapılabilir

- **GET**

```jsx
// fetch
fetch("http://localhost:4000/todos", { method: "GET" })
  .then((res) => res.json())
  .then((data) => setTodos(data))
  .catch((err) => setError(err.message));

// axios
api
  .get("/todos")
  .then((res) => setTodos(res.data))
  .catch((err) => setError(err.message));
```

- **POST**

```jsx
// fetch
fetch("http://localhost:4000/todos", { method: "POST", body: JSON.stringify(newTodo), headers: { "Content-Type": "application/json" } })
  .then((res) => res.json())
  .then((data) => addTodo(data));

// axios
api.post("/todos", newTodo).then((res) => addTodo(res.data));
```

- **DELETE**

```jsx
// fetch
fetch(`http://localhost:4000/todos/${todo.id}`, { method: "DELETE" })
  .then(() => deleteTodo(todo.id))
  .catch(() => alert("silme işlemi başarısız"));

// axios
api
  .delete(`/todos/${todo.id}`)
  .then(() => deleteTodo(todo.id))
  .catch(() => alert("silme işlemi başarısız"));
```
