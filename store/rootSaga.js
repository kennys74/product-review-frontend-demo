import { all } from 'redux-saga/effects';
import App from './app/saga';

export default function* rootSaga() {
    yield all([App()]);
}
