import React from 'react'
import classNames from 'classnames/bind'

import styles from './Introduce.module.scss'
// import { MENU_ITEMS } from '~/components/Menu'

const cx = classNames.bind(styles)

function Introduce() {
    return (
        <div className={cx('wrapper')}>
            <h1>Introduce</h1>
            <p>This is the Introduce page</p>
        </div>
    )
}

export default Introduce
