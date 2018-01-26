import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
export function getSingers () {
  const url = `https://c.y.qq.com/v8/fcg-bin/v8.fcg`
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    pagesize: 100,
    pagenum: 1,
    platform: 'yqq',
    key: 'all_all_all',
    loginUin: 0,
    hostUin: 0,
    format: 'jsonp'
  })
  return jsonp(url, data, {
    param: 'jsonpCallback',
    name: 'GetSingerListCallback'
  })
}
