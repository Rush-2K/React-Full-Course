import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog 
      initial={{ opacity: 0, y: 30 }} //define initial state of element when element is added to the DOM
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }} //exit state when element is remove from the DOM
      open 
      className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
