import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';
const cx = classNames.bind(styles);
function Menu({ children, items }) {
    const renderData = () => {
        return items.map((item, index) => <MenuItems data={item} key={index}></MenuItems>);
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(arr) => (
                <div className={cx('content')} tabIndex="-1" {...arr}>
                    <PopperWrapper className={cx('menu-wrapper')}>{renderData()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
