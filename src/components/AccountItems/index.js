import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AccountItems({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <Link to={`/@${data.nickname}`} className={cx('info')}>
                <div className={cx('userName')}>
                    <h4>{data.nickname}</h4>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </div>
                <p className={cx('name')}>{data.full_name}</p>
            </Link>
        </div>
    );
}

AccountItems.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItems;
