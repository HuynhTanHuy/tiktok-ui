import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/img';
import {
    faEllipsisVertical,
    faCircleQuestion,
    faEarthAsia,
    faHouseUser,
    faMoon,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { Message, Telegram } from '~/components/icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const currentUser = true;
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

const showUser = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBitcoin} />,
        title: 'Get Coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        separate: true,
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
                {/*Search*/}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages">
                                <button className={cx('action-btn')}>
                                    <Telegram />
                                    <span className={cx('quantity', 'tele-quantity')}>2</span>
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('action-btn')}>
                                    <Message />
                                    <span className={cx('quantity', 'mes-quantity')}>14</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button type="text">Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? showUser : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a430238e0780d4a4e5602166678c5ca4~c5_720x720.jpeg?lk3s=a5d48078&nonce=30100&refresh_token=227ab4a8f26638d7e369f4433e12ae8e&x-expires=1723910400&x-signature=V9wXQDGCWva87ME6J5vUPPFYZBA%3D&shp=a5d48078&shcp=81f88b70"
                                className={cx('user_avatar')}
                                alt="User Image"
                                fallback="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/61b3b510c3edf67f30683734199c608e.jpeg?lk3s=a5d48078&nonce=29827&refresh_token=5b305a05a227439aae135b351b3ec51a&x-expires=1724256000&x-signature=NYc2n7fiCZsGWboAeHiAArXqyMo%3D&shp=a5d48078&shcp=81f88b70"
                            ></Image>
                        ) : (
                            <button className={cx('more_btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
