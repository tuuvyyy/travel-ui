import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faCircleH, faLocationDot, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

import Image from '~/components/Image'
import PlaceItem from './PlaceItem'
import styles from './Address.module.scss'

const cx = classNames.bind(styles)

function Address() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <Image
                    className={cx('gps')}
                    src="https://inuvcuon.vn/images/2018/08/voi-nhung-cong-cu-rat-huu-ich-ban-da-co-the-in-truc-tiep-ngay-tren-google-map.jpg"
                    alt=""
                />
                <div className={cx('address')}>
                    <FontAwesomeIcon className={cx('address-icon')} icon={faLocationDot} />
                    <span>
                        Số 4, ngõ 565, đường Trần Phú, thị trấn Lương Sơn, huyện Lương Sơn, tỉnh Hòa Bình, Việt Nam
                    </span>
                </div>
            </div>
            <div className={cx('item', 'nearby')}>
                <h3 className={cx('title')}>Gần đây</h3>
                <div className={cx('places')}>
                    <PlaceItem name="Bệnh viện Lương Sơn" type="Công lập" icon={faCircleH} distance="1.8 km" />
                    <PlaceItem name="Tòa án" type="Công lập" icon={faBuildingColumns} distance="1.4 km" />
                    <PlaceItem name="Agribank" type="Ngân hàng" icon={faMoneyBill} distance="2.1 km" />
                </div>
            </div>
            <div className={cx('item')}>
                <h3 className={cx('title')}>Địa điểm nổi tiếng</h3>
                <div className={cx('places')}>
                    <PlaceItem name="Agribank" type="Ngân hàng" icon={faMoneyBill} distance="2.1 km" />
                    <PlaceItem name="Tòa án" type="Công lập" icon={faBuildingColumns} distance="1.4 km" />
                </div>
            </div>
        </div>
    )
}

export default Address
