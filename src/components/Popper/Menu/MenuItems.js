import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MenuItems({ data, onClick }) {
    const Class = cx('menu_item', {
        separate: data.separate,
    });
    return (
        <Button leftIcon={data.icon} className={Class} onClick={onClick} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
