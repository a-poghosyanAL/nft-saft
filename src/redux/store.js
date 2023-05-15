import { configureStore } from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'
import ShoppingCartReducer from './ShoppingCartSlice/ShoppingCart'
import WalletInfoReducer from './WalletSlice/WalletInfo'

enableMapSet()

export const store = configureStore({
  reducer: {
    nfts: ShoppingCartReducer,
    walletInfo: WalletInfoReducer,
  },
})
