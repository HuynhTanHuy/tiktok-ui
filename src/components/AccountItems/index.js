import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/052ce4578d66b040c06043c1de536baa~c5_300x300.webp?lk3s=a5d48078&nonce=31951&refresh_token=46e466015126448464080e5a8ae608c7&x-expires=1723129200&x-signature=eT58Q%2F60BILk0x94EEibu2fvQDo%3D&shp=a5d48078&shcp=c1333099"
                alt="Not Image"
            />
            <div className={cx('info')}>
                <div className={cx('userName')}>
                    <h4>scarletdo63</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <p className={cx('name')}>ha do</p>
            </div>
        </div>
    );
}

export default AccountItems;
