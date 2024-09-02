import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    //Lấy phần tử cuối cùng
    const current = history[history.length - 1];
    const renderData = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItems>
            );
        });
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(arr) => (
                <div className={cx('content')} tabIndex="-1" {...arr}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => setHistory((prev) => prev.slice(0, history.length - 1))}
                            ></Header>
                        )}
                        <div className={cx('menu-body')}>{renderData()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
