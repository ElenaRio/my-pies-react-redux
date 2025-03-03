import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

 export type FetchPiesArg = {
  sortBy: string;
   order: string;
    category: string;
     search: string;
      currentPage: number;
 }
export const fetchPies = createAsyncThunk<PieBlokProps[], FetchPiesArg>(
  'pies/fetchPiesStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<PieBlokProps[]>(
      `https://67b7a06d2bddacfb270f8961.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);
export type PieBlokProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

type PiesSliceProps={
  items: PieBlokProps[];
  loading: 'loading'| 'success' |'error';
}
const initialState: PiesSliceProps = {
  items: [],
  loading: 'loading',
};

export const piesSlice = createSlice({
  name: 'pies',
  initialState,
  reducers: {
    setPies(state, action:PayloadAction<PieBlokProps[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPies.pending, (state) => {
        state.loading = 'loading'; // Начало загрузки
      })
      .addCase(fetchPies.fulfilled, (state, action) => {
        state.items = action.payload; // Данные получены
        state.loading = 'success'; // Конец загрузки
      })
      .addCase(fetchPies.rejected, (state) => {
        console.log('Ошибка при загрузке пирогов');
        state.loading = 'error'; // Конец загрузки при ошибке
      });
  },
});

export const { setPies } = piesSlice.actions;

export default piesSlice.reducer;
