import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './FollowAccounts.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <Image
                className={cx('account-image')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/052ce4578d66b040c06043c1de536baa.jpeg?lk3s=a5d48078&nonce=89365&refresh_token=96b7dacf5ae98c2ab803ff575cf0d13b&x-expires=1726239600&x-signature=otJqtmKnnhSyngb39Qa0aTdfX30%3D&shp=a5d48078&shcp=81f88b70"
                alt="Following Account"
            />
            <div className={cx('Info')}>
                <span className={cx('nickname')}>scarletdo63</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                <p className={cx('name')}>ha do</p>
            </div>
        </div>
    );
}

export default AccountItem;
