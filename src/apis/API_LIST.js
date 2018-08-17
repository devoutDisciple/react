import jsuri from 'jsuri';

const SERVER_URL = SERVER_URL;

var origin = new jsuri(SERVER_URL);

export const TEST_JSURI = () => {
    var uri = origin.clone();
    uri.setPath('/v1/test');
    uri.addQueryParam('name', 'zhangzhen');
    return uri.toString();
};
