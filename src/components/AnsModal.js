import React from 'react';
// import styles from "../../src/assets/css/ansmodal.module.css"
const MODAL_STYLES = {
  positon: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '50px',
  zIndex: 1000,
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
}


const AnsModal = ({open, onClose, children}) => {
  if (!open) return null;
  return (
    <>
      <div style={OVERLAY_STYLES} onClick={onClose}></div>
      <div style={MODAL_STYLES}>{children}</div>
    </>
  );
}

export default AnsModal;