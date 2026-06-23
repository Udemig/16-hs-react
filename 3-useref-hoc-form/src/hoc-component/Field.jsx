const Field = (props) => {
  return (
    <div>
      <label className="form-label">{props.label}</label>

      {props.children}

      <span className="form-text">uyarı mesajı</span>
    </div>
  );
};

export default Field;
