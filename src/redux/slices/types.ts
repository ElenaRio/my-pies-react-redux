// Определим тип для элемента корзины
export type CartItemProps = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    types: string;
    sizes: number;
    count: number;
  };
  
  // Тип для состояния корзины
export type CartStateProps = {
    totalPrice: number;
    items: CartItemProps[];
  };
  
  export type Sort ={
    name: string;
    sortProperty: 'rating' |'name' | 'price'| '-rating' |'-name' | '-price';
  }
  export type FilterSliceProps ={
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sortType: Sort;
  }

   export type PieBlokProps = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
  };