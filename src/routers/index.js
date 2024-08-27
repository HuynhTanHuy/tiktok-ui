import { HeaderOnly } from '~/components/Layout';

import routesConfig from '~/config/routes';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

export const publicRouter = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, Layout: HeaderOnly },
];

export const privateRouter = [];
