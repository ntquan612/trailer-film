import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/logo.png';

import './footer.scss';

function Footer() {
    return (
        <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content container">

                <div className="footer__content__logo">
                    <Link to={"/"} className="logo" >
                        <img src={logo} alt="" />
                    </Link>
                </div>

                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Trang Chủ</Link>
                        <Link to="/">Liên Hệ</Link>
                        <Link to="/">Dịch Vụ</Link>
                        <Link to="/">Về chúng tôi</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Xem trục tiếp</Link>
                        <Link to="/">Hỏi Đáp</Link>
                        <Link to="/">Cao Cấp</Link>
                        <Link to="/">Chính sách bảo mật</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Bạn Nên Xem</Link>
                        <Link to="/">Phát Hành</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;