import routes from './routes.config';
const _routes = JSON.parse(JSON.stringify(routes));

routesInit(_routes);
export const routesConfig = _routes;

function routesInit (routes){
    if (routes && routes.constructor === Array) {
        const baseUrl = '';
        routes.forEach(item => {
            if (item.component && !item.Component) {
                let url = '';
                if (item.component.substr(0, 2) === './') {
                    url = baseUrl + item.component.substring(2)
                } else if (item.component.substr(0, 1) === '/') {
                    url = baseUrl + item.component.substring(1)
                } else {
                    url = baseUrl + item.component
                }
                try{
                item.component =  import(`../PageView/${url}`)
                }catch (e) {
                    console.error(e)
                    throw `PageView里查找不到 ${url} 组件`

                }
            }
            if (item.routes) {
                routesInit(item.routes)
            }
        });
    }
};