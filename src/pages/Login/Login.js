// import React, { useState } from 'react'
import React, { useState } from 'react'

import classNames from 'classnames/bind'

import styles from './Login.module.scss'
import Button from '~/components/Button'
// import { MENU_ITEMS } from '~/components/Menu'

const cx = classNames.bind(styles)

function Login() {
    const [isMoved, setIsMoved] = useState(false)

    const handleButtonClick = () => {
        setIsMoved(!isMoved)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')} id="container">
                <div className={cx('form')}>
                    <div className={cx('login')}>
                        <form action="#">
                            <h1>Login</h1>
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
                            </div>
                            <span className={cx('span-text')}>or use your account</span>
                            <input className={cx('form-input')} type="email" placeholder="Email" />
                            <input className={cx('form-input')} type="password" placeholder="Password" />
                            <a href="https://www.facebook.com/">Forgot your password?</a>
                            <Button primary large className={cx('form-button')}>
                                Login
                            </Button>
                        </form>
                    </div>
                    <div className={cx('register')}>
                        <form action="#">
                            <h1>Create Account</h1>
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
                            </div>
                            <span className={cx('span-text')}>or use your email for registration</span>
                            <input className={cx('form-input')} type="text" placeholder="Name" />
                            <input className={cx('form-input')} type="email" placeholder="Email" />
                            <input className={cx('form-input')} type="password" placeholder="Password" />
                            <Button primary large className={cx('form-button')}>
                                Register
                            </Button>
                        </form>
                    </div>
                </div>
                <div className={cx('overlay-container')}>
                    <div className={cx('overlay', { 'overlay-move': isMoved })}>
                        <div className={cx('overlay-panel')}>
                            <h1 className={cx('overlay-item')}>Hello, Friend!</h1>
                            <p className={cx('overlay-item')}>Enter your personal details and start journey with us</p>
                            <Button outline className={cx('ghost')} onClick={handleButtonClick}>
                                Register
                            </Button>
                        </div>
                        <div className={cx('overlay-panel')}>
                            <h1 className={cx('overlay-item')}>Welcome Back!</h1>
                            <p className={cx('overlay-item')}>
                                To keep connected with us please login with your personal info
                            </p>
                            <Button outline className={cx('ghost')} onClick={handleButtonClick}>
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
