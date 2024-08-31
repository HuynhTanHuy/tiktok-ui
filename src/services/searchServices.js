import * as httpRequest from '~/utils/httpRequest';

export const fetchApi = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('/users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
