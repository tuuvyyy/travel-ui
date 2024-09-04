import classNames from 'classnames/bind'

import Search from '~/layouts/components/Search'
import styles from './Header.module.scss'
import Menu from '~/layouts/components/Menu'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header')}>
                <p>
                    <span className={cx('header-item')}>Chào mừng bạn đến với du lịch Lương Sơn</span>
                    <span className={cx('header-item')}>Đăng nhập</span>
                    <span className={cx('header-item')}>Đăng ký</span>
                </p>
                <Search />
            </div>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Image
                        className={cx('logo-img')}
                        src="https://thumbs.dreamstime.com/z/travel-logo-vector-illustration-black-airplane-travel-logo-vector-illustration-black-airplane-isolated-white-115729196.jpg?w=768"
                        alt="Travel"
                    />
                </div>

                <Menu />
            </div>
        </header>
    )
}

export default Header
