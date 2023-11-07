import classNames from 'classnames/bind'
import DestinationListItem from '~/components/DestinationListItem'
import styles from './Destination.module.scss'

const cx = classNames.bind(styles)

function Destination() {
    return (
        <div className={cx('wrapper')}>
            <DestinationListItem
                imgUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                name="Núi đá vôi"
                type="Danh lam thắng cảnh"
                address="Số 4, ngõ 565, đường Trần Phú, thị trấn Lương Sơn, huyện Lương Sơn, tỉnh Hòa Bình, Việt Nam"
            />
            <DestinationListItem
                imgUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                name="Núi đá vôi"
                type="Danh lam thắng cảnh"
                address="Số 4, ngõ 565, đường Trần Phú, thị trấn Lương Sơn, huyện Lương Sơn, tỉnh Hòa Bình, Việt Nam"
            />
            <DestinationListItem
                imgUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                name="Núi đá vôi"
                type="Danh lam thắng cảnh"
                address="Số 4, ngõ 565, đường Trần Phú, thị trấn Lương Sơn, huyện Lương Sơn, tỉnh Hòa Bình, Việt Nam"
            />
            <DestinationListItem
                imgUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                name="Núi đá vôi"
                type="Danh lam thắng cảnh"
                address="Số 4, ngõ 565, đường Trần Phú, thị trấn Lương Sơn, huyện Lương Sơn, tỉnh Hòa Bình, Việt Nam"
            />
        </div>
    )
}

export default Destination
