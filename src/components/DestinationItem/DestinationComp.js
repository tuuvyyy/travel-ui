import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './DestinationItem.module.scss'

const cx = classNames.bind(styles)

function DestinationComp({ title, children }) {
    return (
        <div className={cx('inner')}>
            <h2 className={cx('title')}>{title}</h2>
            <div className={cx('content')}>{children}</div>
        </div>
    )
}

DestinationComp.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default DestinationComp
