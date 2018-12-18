import {combineReducers} from 'redux'

//历史点击列表，默认值设定为一个空的数组
function historyHousesList(state=[],action){
    //往数据列表新增一条房产记录
    switch(action.type){
        case 'ADD_HISTORY_HOUSE_ITEM':
             return [ action.item, ...state]
        default:return state
    }
}

//合并小的reducers并且暴露
export default combineReducers({
    // key状态名 : value 此状态对应的reducer
    historyHousesList
})