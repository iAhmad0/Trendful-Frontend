import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState } = createGlobalState({
  cartCounter: localStorage.getItem('cartCounter')
    ? localStorage.getItem('cartCounter')
    : 0,
  toReg: false,
  PopInfo: false,
  Check: false,
  count: 0,
  shipping: 0,
  credit: 'hidden',
  discount: 0,
})

export { setGlobalState, useGlobalState }
