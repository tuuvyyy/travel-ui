import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './SuggestedAccounts.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountPreview from './AccountPreview'

const cx = classNames.bind(styles)

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/b4e6e0c8758c9391538d15cbfacda4c2~c5_100x100.jpeg?x-expires=1697090400&x-signature=3RCb38Tqfq%2FzIKSHdK7CmDTEGnE%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>tuuvyyy</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Linh Le</p>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

AccountItem.propTypes = {}

export default AccountItem
