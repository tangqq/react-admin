let __config = {
    baseUrl: '',
    credentials: 'include'
};
let hasCanceled_ = false;
let requestPipe = (params) => {
    return params
};
const parseJSON = response => {
    const res = response.text();
    return res.then(function (data) {
        try {
            return JSON.parse(data)
        } catch (e) {
            return {type: 'PARSE_ERROR', code: 500, msg: '解析JSON错误，可能后端返回值有误', data: data}
        }
    });
};

function objExtend(item, extendObj) {
    if (typeof item === 'object') {
        const obj = {}
        for (let i in item) {
            obj[i] = objExtend(item[i])
        }
        if (typeof extendObj === 'object') {
            for (let a in extendObj) {
                if (typeof extendObj[a] === 'object') {
                    if (!obj[a]) {
                        obj[a] = {}
                    }
                    obj[a] = objExtend(obj[a], extendObj[a])
                } else {
                    obj[a] = extendObj[a]
                }
            }
        }
        return obj
    } else {
        return item
    }
}

export default (type, url, data, _option) => {
    const option = objExtend(__config, _option);
    const {baseUrl, ...config} = option;
    config.method = type;
    let _params = [];
    if (type === 'GET') {
        if (data) {
            for (const i in data) {
                _params.push(`${i}=${data[i]}`);
            }
            if (_params.length > 0) {
                _params = '?' + _params.join('&')
            } else {
                _params = ''
            }
        } else {
            config.body = data;
            for (let i in config.body) {
                if (config.body[i] === undefined) {
                    delete config.body[i]
                }
            }
        }

    }
    return new Promise((resolve, reject) => {
        const _promise = fetch(option.baseUrl + url + _params, requestPipe(config));
        _promise.then(parseJSON).then((data) => {
            if (+data.code === 0) {
                !hasCanceled_ && resolve(data)
            } else if (data.status === 500) {
                !hasCanceled_ && reject({code: data.status + '', msg: data.message, data: data})
            } else {
                !hasCanceled_ && reject(data)
            }
        });
        _promise.catch((error) => {
                !hasCanceled_ && reject(error)
            }
        );
    })
}
export const cancel = () => {
    hasCanceled_ = true
};
export const setRequestPipe = (func) => {
    requestPipe = func
};
export const option = (setObj) => {
    if (setObj && typeof setObj === 'object') {
        __config = objExtend(__config, setObj)
    }
};