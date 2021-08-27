import {getData,filterSize,toSort} from "../utils/products";

const products = {
    namespace:'products',
    state:{
        origin:[],
        data:[],
        loading:true
    },
    reducers:{
        'get'(state,{payload}){
            let obj = {
                origin:payload.data,
                data:payload.data,
                loading:payload.loading
            }
            state = {...obj};
            return state;
        },
        'size'(state,{payload}){
            state.data = payload;
            state = {...state};
            return state;
        }
    },
    effects:{
        *getProducts(action,{call,put}){
            const data = yield call(getData);
            yield put({type:'get',payload:{data,loading:false}});
        },
        *filterSizes({payload},{call,put}){
            const data = yield call(filterSize,payload);
            yield put({type:'size',payload:data})
        },
        *sortToHighest({payload},{call,put}){
            const data = yield call(toSort,payload);
            yield put({type:'get',payload:{data,loading:false}});
        },
        *sortToLowerest({payload},{call,put}){
            const data = yield call(toSort,payload);
            yield put({type:'get',payload:{data,loading:false}});
        }
    }
}

export default products;