import classNames from 'classnames/bind'
import DestinationItem from '~/components/DestinationItem'
import styles from './DestinationInfo.module.scss'

const cx = classNames.bind(styles)

function DestinationInfo() {
    return (
        <div className={cx('wrapper')}>
            <DestinationItem />
        </div>
    )
}

export default DestinationInfo
