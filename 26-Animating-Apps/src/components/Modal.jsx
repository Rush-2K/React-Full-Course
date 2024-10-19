import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  // const hiddenAnimationState = { opacity: 0, y: 30 };
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog 
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }} //for defining and reusing animations
        initial="hidden" //define initial state of element when element is added to the DOM
        animate="visible"
        // exit="hidden" //exit state when element is remove from the DOM 
        //*had to comment exit prop bcs causing some bug, cannot close modal properly
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
