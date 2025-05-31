import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPayrolls = createAsyncThunk('payroll/fetch', async () => {
  const response = await axios.get('/api/finance/payroll');
  return response.data;
});

export const processPayroll = createAsyncThunk('payroll/process', async () => {
  const response = await axios.post('/api/finance/payroll/process');
  return response.data;
});

const payrollSlice = createSlice({
  name: 'payroll',
  initialState: { payrolls: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayrolls.fulfilled, (state, action) => {
        state.payrolls = action.payload;
      });
  }
});

export default payrollSlice.reducer;
