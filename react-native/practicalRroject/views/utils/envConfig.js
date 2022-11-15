const appEnv = process.env.NODE_ENV
// export const SERVER_URL = appEnv == 'production' ? 'https://www.wotao.com/service' : 'https://www.wotao.com/service' // 线上环境
// export const CDN_BASE_URL = appEnv == 'production' ? 'https://static.wotao.com/' : 'https://static.wotao.com/' // 线上环境cdn
// export const SERVER_URL = appEnv == 'production' ? 'http://192.168.1.11:9999/wtapplication' : 'http://192.168.1.11:9999/wtapplication' // 测试环境
export const SERVER_URL = appEnv == 'production' ? 'http://192.168.1.122:9999/wtapplication' : 'http://192.168.1.122:9999/wtapplication' // 开发环境
export const CDN_BASE_URL = appEnv == 'production' ? 'https://static-tst.wotao.com/' : 'https://static-tst.wotao.com/' // 测试/开发环境cdn