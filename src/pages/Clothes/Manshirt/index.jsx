import { use, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Modal from 'react-modal';
import './index.css';
import ImageModal from './modal';

const Shirt = () => {
    const [manshirt, setManshirt] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Modal
    const [showModal, setShowModal] = useState(false);
    const [selectedInfo, setSelectedInfo] = useState('');
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageSrc, describe, price, size, status) => {
        setSelectedImage(imageSrc);
        setSelectedInfo({ describe, price, size, status });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
        setSelectedInfo('');
    };
    //modal



    useEffect(() => {
        axios.get("http://localhost:3004/manshirt")
            .then((res) => setManshirt(res.data))
            .catch((error) => {
                if (error.code === 'ERR_NETWORK') {
                    setError("Không có kết nối Interner");
                }
            });
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            await axios.delete(`http://localhost:3004/manshirt/${id}`);
            alert('User delete successfully');

            // tải lại trang home khi xóa xong
            setManshirt((preState) => preState.filter((item) => item.id !== id));
        };
    }

    if (error) return <h1>{error}</h1>;

    return (
        < div className="container py-3">

            {manshirt.length === 0 ? (
                <p>Không có dữ liệu</p>
            ) : (
                <div className="product-list">
                    {manshirt.map((item, index) => (
                        <div key={index} className="product-card">
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={item.picture}
                                        style={{ width: '200px', height: '300px', cursor: 'pointer' }}
                                        onClick={() => openModal(item.picture, item.describe, item.price, "M, L, XL", "Còn hàng")}
                                        alt="Product"
                                    />


                                    <ImageModal
                                        show={showModal}
                                        imageSrc={selectedImage}
                                        onClose={closeModal}
                                        describe={selectedInfo.describe}
                                        price={selectedInfo.price}
                                        size="M, L, XL"
                                        status="Còn hàng"
                                    />
                                </div>

                                <div>
                                    <p>{item.describe}</p>
                                    <p>Số lượng: {item.quantity}</p>
                                    <p>Giá: {item.price}₫</p>
                                    <p>Thể loại: {item.category}</p>
                                </div>
                                <div className="d-flex gap-2 justify-content-center">
                                    <button
                                        className="btn"
                                        onClick={() => navigate(`/accessory/edit/${item.id}`)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-delete"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Shirt;