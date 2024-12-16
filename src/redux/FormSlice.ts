import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState:{
    values: {} as Record<string, string>,//เก็บค่าที่รับมา
    status: {} as Record<string, number>,//ไม่มีค่า,0,1
  },
  reducers: {
    Field: (state, action: PayloadAction<{ field: string; value: string }>) => {
      const { field, value } = action.payload;
      state.status[field] = 
        field === "email"
          ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim()) ? 1 : 0//ถ้าใส่ email ตรวจสอบ email ว่าถูกไหม
          : value.trim() === "" ? 0 : 1;//ถ้าไม่ใส่ email ตรวจสอบว่าใส่ข้อมูลไหม
    }
  },
});

export const { Field } = formSlice.actions;
export default formSlice.reducer;
