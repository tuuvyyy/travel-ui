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
                <div className={cx('menu')}>
                    {MENU_ITEMS[2].children.data.map((item, index) => (
                        <Link key={index} className={cx('menu-item')} to={item.to}>
                            <Image className={cx('item-icon')} src={item.iconUrl} alt="" />
                            <p className={cx('title')}>{item.title}</p>
                        </Link>
                    ))}
                </div>
            </div>

            <div
                id="introduce"
                style={{ height: '930px', padding: '20px', background: '#f0f2f5', paddingTop: '150px' }}
            >
                <h1>introduce</h1>
                <p>Nội dung cho phần 1.</p>
            </div>

            <div id="contact" style={{ height: '930px', padding: '20px', background: '#fff0f6', paddingTop: '150px' }}>
                <h1>contact</h1>
                <p>Nội dung cho phần 3.</p>
            </div>
        </div>
    )
}

export default Home
