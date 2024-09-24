import classNames from 'classnames/bind'

import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('about')}>
                <span className={cx('text')}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
                </span>
                <div className={cx('social-container')}>
                    <a href="https://www.facebook.com/" className={cx('social')}>
                        <i className={cx('fab fa-facebook-f')}></i>
                    </a>
                    <a href="https://www.facebook.com/" className={cx('social')}>
                        <i className={cx('fab fa-google-plus-g')}></i>
                    </a>
                    <a href="https://www.facebook.com/" className={cx('social')}>
                        <i className={cx('fab fa-linkedin-in')}></i>
                    </a>
                    <a href="https://www.facebook.com/" className={cx('social')}>
                        <i className={cx('fab fa-linkedin-in')}></i>
                    </a>
                    <a href="https://www.facebook.com/" className={cx('social')}>
                        <i className={cx('fab fa-linkedin-in')}></i>
                    </a>
                </div>
            </div>
            <div className={cx('contact')}>
                <h2>Contact Us</h2>
                <div className={cx('contact-item')}>
                    <a href="https://www.facebook.com/" className={cx('social')}>
                        <i className={cx('fab fa-linkedin-in')}></i>
                    </a>
                    <span>02183.824.135</span>
                </div>
                <div className={cx('contact-item')}>
                    <a href="https://www.facebook.com/" className={cx('social')}>
                        <i className={cx('fab fa-linkedin-in')}></i>
                    </a>
                    <span>travelluongson@gmail.com</span>
                </div>
                <div className={cx('contact-item')}>
                    <a href="https://www.facebook.com/" className={cx('social')}>
                        <i className={cx('fab fa-linkedin-in')}></i>
                    </a>
                    <span>Thị trấn Lương Sơn, huyện Lương Sơn, Tỉnh Hòa Bình</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
