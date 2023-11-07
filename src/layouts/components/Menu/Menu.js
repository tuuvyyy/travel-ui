import classNames from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Menu.module.scss'
import { MENU_ITEMS } from '~/layouts/components/Menu'

const cx = classNames.bind(styles)

function Menu() {
    const renderMenuChildren = (props, index) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper className={cx('children')}>
                    {MENU_ITEMS[index].children.data.map((item, dataIndex) => (
                        <Link key={dataIndex} className={cx('children-item')} to={item.to}>
                            <span className={cx('children-title')}>{item.title}</span>
                        </Link>
                    ))}
                </PopperWrapper>
            </div>
        )
    }

    const renderMenu = () => {
        return MENU_ITEMS.map((item, index) => {
            const isParent = !!item.children

            return (
                <div key={index}>
                    {!isParent ? (
                        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={item.to}>
                            <span className={cx('item-title')}>{item.title}</span>
                        </NavLink>
                    ) : (
                        <Tippy
                            interactive
                            offset={[0, 2]}
                            placement="bottom-start"
                            render={(props) => renderMenuChildren(props, index)}
                        >
                            <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={item.to}>
                                <span className={cx('item-title')}>{item.title}</span>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </NavLink>
                        </Tippy>
                    )}
                </div>
            )
        })
    }

    return <div className={cx('wrapper')}>{renderMenu()}</div>
}

export default Menu
