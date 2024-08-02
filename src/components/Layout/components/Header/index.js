import classNames from 'classnames/bind';
import stypes from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/img';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(stypes);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok-logo"></img>
                </div>
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
                <div className={cx('active')}></div>
            </div>
        </header>
    );
}

export default Header;
