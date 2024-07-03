import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  cartCounter: localStorage.getItem("cartCounter")
    ? localStorage.getItem("cartCounter")
    : 0,
});

export { setGlobalState, useGlobalState };
