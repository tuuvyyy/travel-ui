import classNames from 'classnames/bind'
import Image from '~/components/Image'
import styles from './Home.module.scss'
import { MENU_ITEMS } from '~/layouts/components/Menu'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu')}>
                {MENU_ITEMS[2].children.data.map((item, index) => (
                    <div key={index} className={cx('menu-item')}>
                        <Image className={cx('item-icon')} src={item.iconUrl} alt="" />
                        <p className={cx('title')}>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
