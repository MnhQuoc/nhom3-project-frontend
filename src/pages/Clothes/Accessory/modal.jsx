import React from 'react';

const ImageModal = ({ show, imageSrc, onClose, describe, price, size, status }) => {
    if (!show) return null;

    return (
        <div style={modalStyle}>
            <span style={closeStyle} onClick={onClose}>&times;</span>
            <img src={imageSrc} alt="Zoomed" style={imageStyle} />
            <div style={infoStyle}>
                <h3>Thông tin sản phẩm</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
                    <p><strong></strong> {describe}</p>
                    <p><strong>Giá:</strong> {price}₫</p>
                    <p><strong>Kích thước:</strong> {size}</p>
                    <p><strong>Tình trạng:</strong> {status}</p>
                </div>
            </div>
        </div>
    );
};

const modalStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '60%',
    height: '70%',
    overflow: 'auto',
    borderRadius: '50px',
    backgroundColor: 'white',
    transform: 'translate(50%, 27%)',
    boxSizing: 'border-box',
    boxShadow: '0 0 5px rgba(162, 162, 162, 0.5)',
};

const imageStyle = {
    width: 'auto',
    top: '10.5%',
    left: '15%',
    position: 'fixed',
    maxHeight: '80%',
    maxWidth: '90%',
};

const infoStyle = {
    position: 'fixed',
    top: '6%',
    left: '65%',
    transform: 'translateX(-50%)',
    padding: '20px',

};

const closeStyle = {
    position: 'absolute',
    top: '10px',
    right: '35px',
    color: 'black',
    fontSize: '40px',
    fontWeight: 'bold',
    cursor: 'pointer',
};;



export default ImageModal;