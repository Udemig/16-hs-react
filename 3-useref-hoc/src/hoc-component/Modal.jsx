const Modal = (props) => {
  // isOpen false ise modal'ı gizle
  if (!props.isOpen) return;

  return (
    <div className="modal show fade d-block bg-black bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={props.close} type="button" className="btn-close"></button>
          </div>

          <div className="modal-body">{props.children}</div>

          <div className="modal-footer">
            <button onClick={props.close} type="button" className="btn btn-secondary">
              İptal
            </button>
            <button onClick={props.close} type="button" className="btn btn-primary">
              Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
