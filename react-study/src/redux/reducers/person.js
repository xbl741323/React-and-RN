import { FOUR } from '../constant'

const initPerson = {} // 初始化状态
function person(preState = initPerson, action) {
  console.log(preState, action, "输出username中的preState,action")
  const { type, data } = action

  switch (type) {
    case FOUR: // 加
      return data
    default:
      return preState
  }
}

export default person
