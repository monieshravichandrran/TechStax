export default (state = {item1:0,item2:0,item3:0,item4:0,item5:0,rate1:0,rate2:0,rate3:0,rate4:0,rate5:0,subtotal:0}, action) => {
    switch (action.type) {
        case "ITEM":
            return action.payload
        default:
            return state
    }
}