import Field from "./Field";

const Form = () => {
  return (
    <div>
      <h1>Örnek-5: Form Kullanımı</h1>
      <p>
        <b>HOC</b> - Higher Order Components
      </p>

      <form>
        <h3>HOC kullanmadan</h3>

        <div>
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
          <span className="form-text">uyarı mesajı</span>
        </div>

        <div>
          <label className="form-label">Kategori</label>
          <select className="form-control">
            <option>seçenek-1</option>
            <option>seçenek-2</option>
          </select>
          <span className="form-text">uyarı mesajı</span>
        </div>

        <div>
          <label className="form-label">Açıklama</label>
          <textarea className="form-control" />
          <span className="form-text">uyarı mesajı</span>
        </div>
      </form>

      <form>
        <h3>HOC Kullanarak</h3>

        <Field label="Email">
          <input type="email" className="form-control" />
        </Field>

        <Field label="Kategori">
          <select className="form-control">
            <option>seçenek-1</option>
            <option>seçenek-2</option>
          </select>
        </Field>

        <Field label="Açıklama">
          <textarea className="form-control" />
        </Field>
      </form>
    </div>
  );
};

export default Form;
