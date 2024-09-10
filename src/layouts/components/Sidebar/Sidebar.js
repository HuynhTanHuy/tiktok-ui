import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import Image from '~/components/Image';
import config from '~/config';
import {
    Home,
    Explore,
    Follow,
    People,
    Live,
    Message,
    HomeActive,
    ExploreActive,
    FollowActive,
    PeopleActive,
    LiveActive,
} from '~/components/icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<Home />} iconActive={<HomeActive />} />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<Explore />}
                    iconActive={<ExploreActive />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<Follow width="2.6rem" height="2.6rem" />}
                    iconActive={<FollowActive />}
                />
                <MenuItem title="Friends" to={config.routes.friends} icon={<People />} iconActive={<PeopleActive />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<Live />} iconActive={<LiveActive />} />
                <MenuItem title="Messages" to={config.routes.message} icon={<Message />} />
                <MenuItem
                    title="Profile"
                    to={config.routes.profile}
                    icon={
                        <Image
                            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a430238e0780d4a4e5602166678c5ca4~c5_720x720.jpeg?lk3s=a5d48078&nonce=30100&refresh_token=227ab4a8f26638d7e369f4433e12ae8e&x-expires=1723910400&x-signature=V9wXQDGCWva87ME6J5vUPPFYZBA%3D&shp=a5d48078&shcp=81f88b70"
                            className={cx('user_avatar')}
                            alt="User Image"
                            fallback="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/61b3b510c3edf67f30683734199c608e.jpeg?lk3s=a5d48078&nonce=29827&refresh_token=5b305a05a227439aae135b351b3ec51a&x-expires=1724256000&x-signature=NYc2n7fiCZsGWboAeHiAArXqyMo%3D&shp=a5d48078&shcp=81f88b70"
                        ></Image>
                    }
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
