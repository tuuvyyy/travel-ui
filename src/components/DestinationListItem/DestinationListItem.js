import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import Image from '~/components/Image'
import styles from './DestinationListItem.module.scss'
import { Link } from 'react-router-dom'
import config from '~/config'

const cx = classNames.bind(styles)

function DestinationListItem({ imgUrl, name, type, address }) {
    return (
        <Link className={cx('wrapper')} to={config.routes.destinationInfo}>
            <Image className={cx('image')} src={imgUrl} alt={name} />
            <div className={cx('inner')}>
                <h1 className={cx('name')}>{name}</h1>
                <Link className={cx('type')} to={config.routes.contact}>
                    {type}
                </Link>
                <span className={cx('address')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                    {address}
                </span>
            </div>
        </Link>
    )
}

DestinationListItem.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
}

export default DestinationListItem
