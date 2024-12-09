import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    products:productSlice,
    carts:cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch; //แก้ปัญหา dispatch มีปัญหาด้วยการดึงประเภทจาก store
export type RootState = ReturnType<typeof store.getState>; //ดึงประเภทของ State ที่คืนค่าจาก getState มาใช้เป็น Type ของ RootState
export default store;