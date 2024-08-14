import React from 'react';
import classNames from 'classnames/bind';
import stypes from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/img';
import {
    faCircleXmark,
    faEllipsisVertical,
    faSearch,
    faSpinner,
    faCircleQuestion,
    faEarthAsia,
    faHouseUser,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';
import AccountItems from '~/components/AccountItems';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(stypes);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faHouseUser} />,
        title: 'Creator tools',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                type: 'language',
                                code: 'en',
                                title: 'Tiếng Việt 1',
                            },
                            {
                                type: 'language',
                                code: 'vi',
                                title: 'Tiếng Việt 2',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

function Header() {
    const handleMenuChange = (item) => {
        switch (item.type) {
            case 'language':
                alert('I love U');
                break;
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok-logo"></img>
                </div>
                <Tippy
                    interactive
                    render={(arr) => (
                        <div className={cx('search-list')} tabIndex="-1" {...arr}>
                            <PopperWrapper>
                                <div className={cx('search-title')}>Accounts</div>
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                                <AccountItems />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search-input')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear-input')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('active')}>
                    <Button type="text">Upload</Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more_btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
