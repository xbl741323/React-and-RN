/*
  该文件专门为Count组件生成action对象
*/
import store from '../store'

// 同步action，就是指action的值为Object类型的一般对象
export const createAciton = (type, data) => {
    return {
        type: String(type),
        data: Number(data)
    }
}
// 异步action，就是指action的值为函数，异步action中一般都会调用同步action，异步action不是必须要用的
export const createAsyncAciton = (type, data, time) => {
    return () => {
        setTimeout(() => {
            store.dispatch(
                createAciton(type, data)
            )
        }, time)
    }
}

export const showName = (type, data) => {
    return {
        type: String(type),
        data: data
    }
}

