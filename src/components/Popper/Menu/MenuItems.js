import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MenuItems({ data, onClick }) {
    return (
        <Button leftIcon={data.icon} className={cx('menu_item')} onClick={onClick} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
