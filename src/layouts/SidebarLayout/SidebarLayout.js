import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Header from '~/layouts/components/Header'
import Footer from '~/layouts/components/Footer'
import Sidebar from '~/layouts/components/Sidebar'
import styles from './SidebarLayout.module.scss'

const cx = classNames.bind(styles)

function SidebarLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    )
}

SidebarLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default SidebarLayout
