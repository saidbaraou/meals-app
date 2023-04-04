import { useGlobalContext } from '../context';

const Modal = () => {
  return (
    <aside className="modal-overlay">
      <div className="modal-container"></div>
      <h1>Modal Container</h1>
    </aside>
  );
};

export default Modal;
