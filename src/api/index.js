import AV from 'leancloud-storage';
import { Query } from '@/api/av';
import config from '@/api/config'

const { ARTICLE } = config.table;

export const listAll = () => {
    let query = new Query(ARTICLE);
    query.include('user');
    query.descending("createdAt");
    query.notEqualTo('public', false);
    return query.find().then(results => {
        let tmpResults = results.map(item => {
            let user = item.get('user');
            let data = item._serverData;
            data.user = user._serverData;
            data.id = item.id;
            data.createdAt = item.createdAt;
            data.updatedAt = item.updatedAt;
            data.userId = user.id;
            return item._serverData
        })
        return Promise.resolve(tmpResults)
    }, error => Promise.reject(error))
}

export const findByUserId = (userid) => {

    let query = new Query(ARTICLE);
    let withUser = AV.Object.createWithoutData('_User', userid);
    query.equalTo('user', withUser);
    query.descending("updatedAt");
    query.include('user');
    query.notEqualTo('public', false);
    return query.find().then(results => {
        let tmpResults = results.map(item => {
            let user = item.get('user');
            let data = item._serverData;
            data.user = user._serverData;
            data.id = item.id;
            data.createdAt = item.createdAt;
            data.updatedAt = item.updatedAt;
            data.userId = user.id;
            return item._serverData
        })
        return Promise.resolve(tmpResults)
    }, error => Promise.reject(error))
}