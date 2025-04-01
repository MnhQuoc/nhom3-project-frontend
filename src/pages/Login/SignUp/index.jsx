import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './signup.css'; 

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic đăng ký ở đây
        console.log('Signup submitted:', formData);
        alert('Signup successful!');
        navigate('../login'); 
 
    };

    return (
        <div className="container-signup">
            <div className="title-signup">
                <h2>Sign Up</h2>
            </div>

            <div className="form-signup">
                <form onSubmit={handleSubmit}>
                    <div className="input-username">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <p></p>
                    <div className="input-email">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <p></p>
                    <div className="input-password">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <p></p>
                    <button className="btn-sign-up" type="submit">
                        Sign Up
                    </button>
                </form>
            </div>

            <div className="form-signup-footer">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default SignupForm;