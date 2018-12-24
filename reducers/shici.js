import { merge } from 'lodash/object'
import { union } from 'lodash/array'

// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
export default function shici() {

  function updateShici(state = {
    oneShici: '菡萏香销翠叶残，西风愁起绿波间'
  }, action) {
    switch (action.type) {
      case requestType:
        return merge({}, state, {
          isFetching: true
        })
      case successType:
        return merge({}, state, {
          oneShici: action.response.shici
        })
      case failureType:
        return merge({}, state, {
          isFetching: false
        })
      default:
        return state
    }
  }

  return function updateShiciByKey(state = {}, action) {

    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        const key = mapActionToKey(action)
        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.')
        }
        return merge({}, state, {
          [key]: updateShici(state[key], action)
        })
      default:
        return state
    }
  }
}
