import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './FollowAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function FollowAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('account-head')}>{label}</h2>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('account-more')}>See more</p>
        </div>
    );
}

FollowAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default FollowAccounts;
