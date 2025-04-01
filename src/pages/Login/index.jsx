import React from 'react';
import { FaSquareFacebook, FaGoogle } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './login.css'; // Giữ nguyên file CSS

const LoginForm = () => {
    const navigate = useNavigate();

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Tên đăng nhập và mật khẩu không được để trống');
            return;
        }

        // Xử lý logic đăng nhập ở đây
        localStorage.setItem('isLoggedIn', 'true');
        console.log('Login submitted');
        navigate('/admin');
    };

    return (
        <div className="container-login">
            <div className="title-login">
                <h2>Login</h2>
            </div>

            <div className="form-login">
                <form onSubmit={handleSubmit}>
                    <div className="input-username">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder=" Email "
                        />
                    </div>
                    <p></p>
                    <div className="input-password">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder=" Password "
                        />
                    </div>
                </form>
            </div>

            <div className="form-login-footer">
                <Link to="/forgot-password">Forgot password?</Link>
                <button className="btn-sign-in" type="submit" onClick={handleSubmit}>
                    Login
                </button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>

            <div className="separator">
                <span>Or</span>
            </div>

            <div className="btn-login-with">
                <button className="btn-face">
                    <FaSquareFacebook />
                    Login with Facebook
                </button>
                <p></p>
                <button className="btn-google">
                    <FaGoogle />
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default LoginForm;