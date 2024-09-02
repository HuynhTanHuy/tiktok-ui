import { HeaderOnly } from '~/layouts';

import config from '~/config';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

export const publicRouter = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, Layout: HeaderOnly },
];

export const privateRouter = [];
