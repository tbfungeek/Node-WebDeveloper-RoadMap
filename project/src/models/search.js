import {getLists} from '@/services/search'
export default {
  namespace: 'search',
  state: {
    text: '',
    lists: [],
  },
  reducers: {
    getList(state, action) {
      return {
        ...state,
        lists: action.payload,
        text: action.payload,
      };
    },
  },
  effects: {
    *getListAsync({payload},{call,put}) {
      const res = yield call(getLists,payload)
      yield put({
        type:'getList',
        payload:res.lists
      })
    }
  },
  subscribe: {},
};
