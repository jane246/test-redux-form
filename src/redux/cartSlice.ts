import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
    name:"carts",
    initialState,
    reducers:{
        AddCart(state, action) {
            const { id, quantity } = action.payload;
            const indexID = state.items.findIndex(item => item.id === id);
            
            if (indexID >= 0) {//ใช้ตรวจสอบว่า id ที่เพิ่มมีในตำแหน่งนั้นไหม
              const newQuantity = state.items[indexID].quantity + quantity;      
              if (newQuantity > 0) {//ถ้ามากกว่า 0 เอาค่าที่บวกใหม่ใส่ไป
                state.items[indexID].quantity = newQuantity;
              } else {//ถ้าจำนวนเป็น 0 เอาออก
                state.items.splice(indexID, 1);
              }
            } else {//กดเพิ่มแต่ไม่มีสินค้าก็เพิ่มสินค้า
              state.items.push({ id, quantity });
            }
          },
          DeleteAll(state, action) {//ลบรายการนั้นให้หมด
            const { id } = action.payload;
            const indexID = state.items.findIndex(item => item.id === id);
            state.items.splice(indexID, 1);
          },
    },
})
export const {AddCart}=cartSlice.actions;
export const {DeleteAll}=cartSlice.actions;
export default cartSlice.reducer