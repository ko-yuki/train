import {add,cut,inc,del,settlement,getCartFromLocal} from '../utils/cart';

const cart = {
    namespace:'cart',
    state:{
        cart:[],
        total:0,
        priceTotal:0,
        ins:0
    },
    reducers:{
        'update'(state,{payload}){
            state = {...state,...payload};
            return state;
        }
    },
    effects:{
        *addToCart({payload},{call,put}){
            const data = yield call(add,payload);
            yield put({type:'update',payload:data});
        },
        *cutNum({payload},{call,put}){
            const data = yield call(cut,payload);
            yield put({type:'update',payload:data});
        },
        *addNum({payload},{call,put}){
            const data = yield call(inc,payload);
            yield put({type:'update',payload:data});
        },
        *removeProduct({payload},{call,put}){
            const data = yield call(del,payload);
            yield put({type:'update',payload:data});
        },
        *checkout({payload},{call,put}){
            const data = yield call(settlement,payload);
            yield put({type:'update',payload:data});
        },
        *fromLocal({payload},{call,put}){
            const data = yield call(getCartFromLocal,payload);
            yield put({type:'update',payload:data});
        }
    }
}

export default cart;