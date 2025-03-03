import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  setCategoryId,
  setCurrentPageCount,
} from '../redux/slices/filterSlice';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PieBlok from '../components/pieBlock/PieBlock';
import Skeleton from '../components/pieBlock/Skeleton';
import Pagination from '../components/pagination/Pagination';
import { fetchPies } from '../redux/slices/piesSlice';
import { AppDispatch, RootState } from '../redux/store';
import { PieBlokProps } from '../redux/slices/types';

function Home(): React.ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  const categoryId = useSelector(
    (state: RootState) => state.filters.categoryId
  );
  const sortType = useSelector((state: RootState) => state.filters.sortType);
  const searchValue = useSelector(
    (state: RootState) => state.filters.searchValue
  );
  const currentPage = useSelector(
    (state: RootState) => state.filters.currentPage
  );
  const pies = useSelector((state: RootState) => state.pies.items);
  const isLoading = useSelector((state: RootState) => state.pies.loading);

  const onClickCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };
  const onClickPage = (number: number) => {
    dispatch(setCurrentPageCount(number));
  };
  React.useEffect(() => {
    const getPies = async () => {
      const sortBy = sortType.sortProperty.replace('-', '');
      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const search = searchValue ? `&search=${searchValue}` : '';

      dispatch(
        fetchPies({
          sortBy,
          order,
          category,
          search,
          currentPage,
        })
      );
      window.scrollTo(0, 0);
    };
    getPies();
  }, [categoryId, sortType.sortProperty, searchValue, currentPage, dispatch]);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const items = pies.map((pie: PieBlokProps) => (
    <PieBlok key={pie.id} {...pie} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Всі пироги</h2>
      {isLoading === 'error' ? (
        <div className="content__error-info">
          <h1>
            <span>☹️</span>
            <br></br>
            Ні чого не знайдено
          </h1>
          <p>
            На жаль, не вдалося завантажити данну сторінку, спробуйте повторити
            спробу пізніше
          </p>
        </div>
      ) : (
        <div className="content__items">
          {isLoading === 'loading' ? skeletons : items}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onClickPage} />
    </div>
  );
}
export default Home;
