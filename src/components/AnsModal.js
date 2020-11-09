import React from 'react';
import styles from "../../src/assets/css/ansmodal.module.css"


const MODAL_STYLES = {
  positon: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, .7)',
}


const AnsModal = ({open, onClose}) => {
  if (!open) return null;
  return (
    <>
    <div style={OVERLAY_STYLES} onClick={onClose}></div>
    <div className="border border-primary" style={MODAL_STYLES}>
      <div className="modal-header">
        <h4>Answer</h4>
        <button className={`${styles.Right} btn-info`} onClick={onClose}>X</button>
      </div>
        <div className="modal-body">
            <h3>24,222.45</h3>
        </div>
    </div>
    </>
    
  );
}

export default AnsModal;