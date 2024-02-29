import { takeLatest } from "redux-saga/effects"

function* fetchExampleData(): Generator<any, any, any>{
    // try {
    //     const data =  yield call(fetchExample);
    //     yield put(fetchExampleSuccess(data));
    // } catch (error) {
    //     yield put(fetchExampleFailed(message.error))
    // }
}

export default function* exampleSaga() {
    // yield takeLatest('fetchExample', fetchExampleData);
}