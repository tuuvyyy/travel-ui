import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Image from '~/components/Image'
import styles from './Home.module.scss'
import { MENU_ITEMS } from '~/layouts/components/Menu'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('home')} id="home">
                <div className={cx('home-menu')}>
                    {MENU_ITEMS[2].children.data.map((item, index) => (
                        <Link key={index} className={cx('home-menu-item')} to={item.to}>
                            <Image className={cx('home-item-icon')} src={item.iconUrl} alt="" />
                            <p className={cx('home-item-title')}>{item.title}</p>
                        </Link>
                    ))}
                </div>
            </div>

            <div className={cx('introduce')} id="introduce">
                <h1>introduce</h1>
                <p>Nội dung cho phần 1.</p>
            </div>
        </div>
    )
}

export default Home
