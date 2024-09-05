import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import Search from '~/layouts/components/Search'
import Menu from '~/layouts/components/Menu'
import Image from '~/components/Image'
import styles from './Header.module.scss'

import config from '~/config'

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header')}>
                <p>
                    <span className={cx('header-item')}>Chào mừng bạn đến với du lịch Lương Sơn</span>
                    <Link className={cx('header-item')} to={config.routes.login}>
                        Đăng nhập
                    </Link>
                    {/* <Link className={cx('header-item')} to={config.routes.register}>
                        Đăng ký
                    </Link> */}
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
