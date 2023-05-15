import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  walletAddress: localStorage.getItem('address') || '',
}

const WalletInfoSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    getNftAddress: (state, action) => {
      state.walletAddress = action.payload
    },
  },
})
export const { getNftAddress } = WalletInfoSlice.actions
export default WalletInfoSlice.reducer
