
import { configureStore, createSlice } from "@reduxjs/toolkit"


// 관리할 초기 상태값 객체
const initialCountState = {
  counter: 0,
  showCounter: true,
};

// reducer를 slice로 변경
/*
    option객체에 들어가있는 프로퍼티 설명
    1. name - 컴포넌트가 해당 리듀서를 사용할 때 부르는 이름
    2. initialState - 관리할 상태값들의 초기값
    3. reducers - 기존 리듀서에서 사용하던 내용들 (실제 액션)
 */
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCountState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementDouble(state, action) {
            state.counter *= action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

// 단 하나의 리덕스 스토어
// 스토어에는 여러 리듀서를 제공할 수 있다.
const store = configureStore({
    reducer: counterSlice.reducer // reducers가 아님!
});

// 슬라이스 안에 reducers에 정의한 함수들을 내보내기
export const counterActions = counterSlice.actions;

// 리액트의 index.js에게 store를 제공
export default store;