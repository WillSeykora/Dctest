import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices/slice';
import createSageMiddleware from 'redux-saga';
import appSaga from '../sagas/appSaga';

const saga = createSageMiddleware();
const store = configureStore({
  reducer: { reducer },
  middleware: [saga],
  devTools: true,
});
saga.run(appSaga);

export default store;
