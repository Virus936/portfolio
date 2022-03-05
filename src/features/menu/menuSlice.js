import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  active:false,
}

export const menuSlice = createSlice({
  name:'menu',
  initialState,
  reducers:{
    toggle: (state) => {
      state.active = !state.active
    },
    close: (state) => { state.active = false
    }  },
})

export const {toggle, close} = menuSlice.actions

export default menuSlice.reducer
export const selectMenu = state => state.menu.active
