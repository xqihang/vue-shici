import AV from 'leancloud-storage';
import config from '@/api/config';

export const { Query } = AV;

export const initAV = () => {
    AV.init({
        appId: config.appId,
        appKey: config.appKey,
        serverURL: config.serverURL
    });
};

export default AV
