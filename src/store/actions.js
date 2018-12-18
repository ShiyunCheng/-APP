
//往历史点击数组，增加一条数据

//action:往historyHousesList内增加一条数据
export function addHistoryHouseItem(item){
    return {
        type:'ADD_HISTORY_HOUSE_ITEM',
        item
    }
}