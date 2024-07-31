import classNames from 'classnames/bind';
import stypes from './Header.module.scss';

const cx = classNames.bind(stypes);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
