import { getData, filterSizeAndSort } from "../utils/products";

const products = {
  namespace: 'products',
  state: {
    origin: [],
    data: [],
    loading: true
  },
  reducers: {
    save(state, { payload:{data,loading} }) {
      let obj = {
        origin: [...data],
        data: [...data],
        loading: loading
      }
      state = { ...obj };
      return state;
    },
    update(state, { payload:{data,loading} }) {
      state.data = data;
      state.loading = loading;
      state = { ...state };
      return state;
    }
  },
  effects: {
    *getProducts(action, { call, put }) {
      const data = yield call(getData);
      yield put({ type: 'save', payload: { data, loading: false } });
    },
    *filterSizesAndOrder({ payload }, { call, put }) {
      const data = yield call(filterSizeAndSort, payload);
      yield put({ type: 'update', payload: {data, loading: false} });
    }
  }
}

export default products;