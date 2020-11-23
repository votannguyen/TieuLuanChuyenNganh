import * as Types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('WISHLIST'));

var initialState = data ? data : [];

const wishlist = (state = initialState, action) => {
    var { product } = action;
    var index = -1;     //Không tìm thấy thì index = -1
    switch (action.type) {
        case Types.ADD_TO_WISH_LIST:
            index = state.findIndex(x => x.product.id === product.id)
            if(index!== -1){

            }
            else{
                state.push({
                    product: product,
                })
            }
            localStorage.setItem('WISHLIST', JSON.stringify(state));
            return [...state];
    }
}



export default wishlist

