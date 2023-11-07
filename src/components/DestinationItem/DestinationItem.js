import classNames from 'classnames/bind'
import DestinationComp from './DestinationComp'
import Image from '~/components/Image'
import Address from './Address'
import styles from './DestinationItem.module.scss'

const cx = classNames.bind(styles)

function DestinationItem() {
    return (
        <div className={cx('wrapper')}>
            <DestinationComp className={cx('header')}>
                <h1 className={cx('name')}>Núi đá vôi</h1>
                <span className={cx('type')}>Danh lam thắng cảnh</span>
            </DestinationComp>

            <DestinationComp className={cx('image')}>
                <Image
                    className={cx('img-main')}
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
                <div className={cx('img-sub')}>
                    <Image
                        className={cx('img-item')}
                        src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                    <Image
                        className={cx('img-item')}
                        src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                    <Image
                        className={cx('img-item')}
                        src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                    <Image
                        className={cx('img-item')}
                        src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                    <Image
                        className={cx('img-item')}
                        src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                    <Image
                        className={cx('img-item')}
                        src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                </div>
            </DestinationComp>

            <DestinationComp title="Thông tin" className={cx('info')}>
                <span className={cx('info-text')}>
                    Đây là đoạn thông tin giới thiệu bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla
                    bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla
                    bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla
                    ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ...
                    bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla
                    bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla
                    bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla
                    ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ...
                    bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla
                    bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla
                    bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla
                    ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ...
                    bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla
                    bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla
                    bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla
                    ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ...
                    bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla
                    bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla
                    bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla
                    ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ...
                    bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla
                    bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla
                    bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla
                    ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ... bla bla bla ...
                    bla bla bla ... bla bla bla ...
                </span>
            </DestinationComp>

            <DestinationComp title="Địa chỉ" className={cx('address')}>
                <Address />
            </DestinationComp>

            <DestinationComp title="Rating" className={cx('rating')}>
                Rating
            </DestinationComp>

            <DestinationComp title="Liên hệ" className={cx('contact')}>
                Contact
            </DestinationComp>
        </div>
    )
}

export default DestinationItem
