import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceProps, Sort } from './types';


const initialState:FilterSliceProps = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sortType: {
    name: 'популярностю(с)',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      // console.log('setCategoryId', action);
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>){
      state.sortType = action.payload;
    },
    setCurrentPageCount(state, action: PayloadAction<number>){
      state.currentPage = action.payload;
    },
    setSearchValue(state,action: PayloadAction<string>){
      state.searchValue = action.payload
    }
  },
});

export const { setCategoryId , setSort, setCurrentPageCount, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;
