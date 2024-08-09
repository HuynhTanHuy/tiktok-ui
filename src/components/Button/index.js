import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    type = false,
    disabled = false,
    leftIcon = false,
    rounded = false,
    className,
    onClick,
    ...rest
}) {
    let Cpn = 'button';
    const props = {
        onClick,
        ...rest,
    };

    if (disabled) {
        Object.keys(props).forEach((keys) => {
            if (keys.startsWith('on') & (typeof props[keys] === 'function')) {
                delete props[keys];
            }
        });
    }

    if (to) {
        props.to = to;
        Cpn = Link;
    } else if (href) {
        props.href = href;
        Cpn = 'a';
    }
    const myClass = cx('wrapper', {
        primary,
        outline,
        [type]: type,
        disabled,
        rounded,
        [className]: className,
    });
    return (
        <Cpn className={myClass} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Cpn>
    );
}

export default Button;
