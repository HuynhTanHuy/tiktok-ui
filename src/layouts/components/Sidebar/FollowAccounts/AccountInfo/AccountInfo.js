import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountInfo.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function AccountInfo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('Image')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/052ce4578d66b040c06043c1de536baa.jpeg?lk3s=a5d48078&nonce=89365&refresh_token=96b7dacf5ae98c2ab803ff575cf0d13b&x-expires=1726239600&x-signature=otJqtmKnnhSyngb39Qa0aTdfX30%3D&shp=a5d48078&shcp=81f88b70"
                    alt="Image Account"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('Info')}>
                <span className={cx('nickname')}>scarletdo63</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                <p className={cx('name')}>ha do</p>
            </div>
            <p className={cx('analyst')}>
                <strong className={cx('quantity')}>6.7M</strong>
                <span className={cx('label')}>Follower</span>
                <strong className={cx('quantity')}>429.9M</strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountInfo;
