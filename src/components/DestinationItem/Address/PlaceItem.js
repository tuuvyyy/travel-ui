import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Address.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)

function PlaceItem({ name, type, icon, distance }) {
    return (
        <div className={cx('places-item')}>
            <div className={cx('icon')}>
                <FontAwesomeIcon icon={icon} />{' '}
            </div>
            <div className={cx('main')}>
                <h5 className={cx('name')}>{name}</h5>
                <span className={cx('type')}> {type} </span>
            </div>
            <div className={cx('distance')}>{distance}</div>
        </div>
    )
}

PlaceItem.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    distance: PropTypes.string,
}

export default PlaceItem
