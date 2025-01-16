import React from 'react';
import Modal from 'react-modal';

// Modal.setAppElement('#__next'); 

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CustomModal({ isOpen, onClose, htmlCode, cssCode }) {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Export Code"
    className="modal"
    overlayClassName="overlay"
  >
    <h2>Exported Code</h2>
    <div>
      <h3>HTML</h3>
      <textarea
        readOnly
        value={htmlCode}
        style={{ width: '100%', height: '150px', marginBottom: '1rem' }}
      />
      <h3>CSS111</h3>
      <textarea
        readOnly
        value={cssCode}
        style={{ width: '100%', height: '150px', marginBottom: '1rem' }}
      />
    </div>
    <button onClick={onClose}>Close</button>
  </Modal>
  )
}
