/**
 * Weixin(WeChat) Miniprogram Share (Mixin)
 * @author Prk
 */

import {
    APP_NAME
} from '@/env';

export default {
    onLoad: function() {
        wx.showShareMenu({
            withShareTicket: true,
            menus: [
                'shareAppMessage',
                'shareTimeline'
            ]
        });
    },
    onShareAppMessage(res) {
        // res: {from: 'menu', target: undefined}
        let that = this,
            route = `/${that.$scope.route}`,
            opt = that.$scope.options,
            optStr = that.objToQuery(opt);
        return {
            title: APP_NAME,
            path: `${route}${'' !== optStr ? `?${optStr}` : ''}`,
            imageUrl: ''
        }
    },
    onShareTimeline() {
        let that = this,
            route = `/${that.$scope.route}`,
            opt = that.$scope.options,
            optStr = that.objToQuery(opt);
        return {
            title: APP_NAME,
            path: `${route}${'' !== optStr ? `?${optStr}` : ''}`,
            imageUrl: ''
        }
    },
    methods: {
        objToQuery(obj) {
            if (0 === Object.keys(obj).length) return '';
            let result = [],
                value = '';
            for (var key in obj) {
                value = obj[key];
                if (Array == value.constructor) value.forEach(e => {
                    result.push(`${key}=${value}`);
                });
                else result.push(`${key}=${value}`);
            }
            return result.join('&');
        }
    }
}