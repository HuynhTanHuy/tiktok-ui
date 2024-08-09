import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MenuItems({ data }) {
    return (
        <Button leftIcon={data.icon} className={cx('menu_item')}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
