import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as services from '~/apiServices/services';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks';
import AccountItems from '~/components/AccountItems';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        const handle = async () => {
            setLoading(true);

            const result = await services.fetchApi(debounced);
            setSearchResult(result);

            setLoading(false);
        };

        handle();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounced]);

    const handleFocus = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
        setSearchResult([]);
    };
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(arr) => (
                <div className={cx('search-list')} tabIndex="-1" {...arr}>
                    <PopperWrapper>
                        <div className={cx('search-title')}>Accounts</div>
                        {searchResult.map((item) => (
                            <AccountItems data={item} key={item.id} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search-input')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear-input')} onClick={handleFocus}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
